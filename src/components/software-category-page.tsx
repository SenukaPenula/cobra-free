"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star } from "lucide-react";
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

interface SoftwareCategoryPageProps {
  category: string;
}

const SoftwareCategoryPage = ({ category }: SoftwareCategoryPageProps) => {
  const section = softwareList.find((s) => s.category === category);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.items.map((item, itemIndex) => (
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
              <Button asChild variant="ghost" className="w-full mt-6 bg-primary/10 hover:bg-primary/20 text-primary group transition-all">
                <Link href="#" data-ai-hint={item.hint}>
                  Download Now <Download className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="mt-16">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCategoryPage;
