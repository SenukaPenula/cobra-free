"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Copy } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { softwareList } from "@/lib/software-list";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";

interface VpnCategoryPageProps {
  category: string;
  currentPage?: number;
}

const ITEMS_PER_PAGE = 9;

const VpnCategoryPage = ({ category, currentPage = 1 }: VpnCategoryPageProps) => {
  const { toast } = useToast();
  const section = softwareList.find((s) => s.category === category);

  const handleDownloadClick = (itemName: string) => {
    toast({
      title: "Download Started",
      description: `Your download of ${itemName} has begun.`,
    });
  };

  const handleCopyClick = (textToCopy: string, itemName: string) => {
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Copied to Clipboard",
      description: `Configuration for ${itemName} has been copied.`,
    });
  };

  if (!section) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-primary">Category not found</h1>
        <p className="mt-4 text-muted-foreground">
          The software category you're looking for doesn't exist.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Go back to Home</Link>
        </Button>
      </div>
    );
  }

  const totalItems = section.items.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = section.items.slice(startIndex, endIndex);

  const baseHref = `/${section.category.toLowerCase().replace(/\s+/g, '-')}`;

  const renderPaginationLinks = () => {
    const pageLinks = [];
    
    // Previous button
    pageLinks.push(
      <PaginationItem key="prev">
        <PaginationPrevious 
          href={currentPage > 1 ? (currentPage === 2 ? baseHref : `${baseHref}/${currentPage - 1}`) : '#'} 
          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
        />
      </PaginationItem>
    );

    // Page number links
    for (let i = 1; i <= totalPages; i++) {
        pageLinks.push(
            <PaginationItem key={i}>
                <PaginationLink href={i === 1 ? baseHref : `${baseHref}/${i}`} isActive={currentPage === i}>
                    {i}
                </PaginationLink>
            </PaginationItem>
        );
    }
    
    // Next button
    pageLinks.push(
      <PaginationItem key="next">
        <PaginationNext 
          href={currentPage < totalPages ? `${baseHref}/${currentPage + 1}` : '#'}
          className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
        />
      </PaginationItem>
    );

    return pageLinks;
};

  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-3 mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {section.category}
          </h1>
          <p className="text-lg text-muted-foreground">Available packages for use</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item, itemIndex) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
              className="bg-secondary/30 border border-border/50 rounded-lg p-6 flex flex-col transition-all duration-300 hover:border-primary/70 hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10"
            >
              <h3 className="text-lg font-bold text-primary/90 mb-4">{item.name}</h3>
              <div className="bg-background/50 border border-border/50 rounded-md p-3 mb-4 flex-grow">
                <p className="text-muted-foreground text-xs break-all h-32 overflow-y-auto">
                    {item.description}
                </p>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="w-full mt-2 border-primary/50 text-primary hover:bg-primary/10 hover:text-primary group transition-all"
                  onClick={() => handleCopyClick(item.description, item.name)}
                >
                    <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full mt-2 bg-primary/10 hover:bg-primary/20 text-primary group transition-all"
                  onClick={() => handleDownloadClick(item.name)}
                  data-ai-hint={item.hint}
                >
                    <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
         {totalPages > 1 && (
          <div className="mt-16">
              <Pagination>
                  <PaginationContent>
                      {renderPaginationLinks()}
                  </PaginationContent>
              </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default VpnCategoryPage;
