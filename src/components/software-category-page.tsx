
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Search, Send } from "lucide-react";
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
import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";


interface SoftwareCategoryPageProps {
  category: string;
  currentPage?: number;
}

const ITEMS_PER_PAGE = 6;

const SoftwareCategoryPage = ({ category, currentPage = 1 }: SoftwareCategoryPageProps) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const section = softwareList.find((s) => s.category === category);

  const handleDownloadClick = (itemName: string) => {
    toast({
      title: "Download Started",
      description: `Your download of ${itemName} has begun.`,
    });
  };

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    // Reset form, etc.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="mt-24">
            <h2 className="text-3xl font-bold tracking-tight text-primary text-center mb-12">Rate & Review</h2>
            <Card className="max-w-2xl mx-auto border-primary/30 shadow-xl shadow-primary/10 rounded-2xl bg-background/80 backdrop-blur-sm z-10">
                <CardContent className="p-6">
                    {user ? (
                        <form onSubmit={handleReviewSubmit}>
                            <div className="grid gap-4">
                                <div>
                                    <Label htmlFor="rating" className="text-primary/80 mb-2 block">Your Rating</Label>
                                    <div className="flex items-center gap-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} className="w-8 h-8 text-yellow-400 cursor-pointer" />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="review" className="text-primary/80">Your Review</Label>
                                    <Textarea id="review" placeholder="Tell us what you think..." className="mt-2 bg-secondary/30 border-primary/30 focus:border-primary min-h-[100px]" />
                                </div>
                            </div>
                            <CardFooter className="p-0 pt-6">
                                <Button type="submit" className="w-full text-lg font-semibold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                                    Submit Review <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </form>
                    ) : (
                        <div className="text-center text-muted-foreground">
                            <p>You must be logged in to leave a review.</p>
                            <Button asChild variant="link" className="text-primary text-lg">
                                <Link href="/login">Login to continue</Link>
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
};

export default SoftwareCategoryPage;
