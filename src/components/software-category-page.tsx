
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { softwareList } from "@/lib/software-list";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";


interface SoftwareCategoryPageProps {
  category: string;
  currentPage?: number;
}

const ITEMS_PER_PAGE = 6;

const SoftwareCategoryPage = ({ category, currentPage = 1 }: SoftwareCategoryPageProps) => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const section = softwareList.find((s) => s.category === category);

  const handleDownloadClick = (itemName: string) => {
    toast({
      title: "Download Started",
      description: `Your download of ${itemName} has begun.`,
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
  
  const filteredItems = section.items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

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
        </motion.div>

        <div className="mb-12">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    placeholder={`Search in ${section.category}...`}
                    className="w-full rounded-lg bg-secondary/30 border-primary/30 py-6 pl-12 pr-4 text-lg focus:border-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>

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
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-primary/90">{item.name}</h3>
                <div className="flex items-center gap-1 text-primary">
                  <Star className="w-4 h-4 fill-primary" />
                  <span className="font-semibold">{item.rating}</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-2 flex-grow">{item.description}</p>
              <div className="flex gap-2 mt-4">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-primary/30 text-primary/80">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button 
                variant="ghost" 
                className="w-full mt-6 bg-primary/10 hover:bg-primary/20 text-primary group transition-all"
                onClick={() => handleDownloadClick(item.name)}
                data-ai-hint={item.hint}
              >
                  Download Now <Download className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {totalItems === 0 && (
            <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No items found matching your search.</p>
            </div>
        )}

         {totalPages > 1 && totalItems > 0 && (
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

export default SoftwareCategoryPage;
