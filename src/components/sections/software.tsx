"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Box, Download, Gamepad2, KeyRound, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { softwareList } from "@/lib/software-list";

const SoftwareSection = () => {
    return (
        <section id="software" className="w-full py-20 md:py-28 lg:py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                {softwareList.map((section, sectionIndex) => (
                    <div key={section.category} id={section.category.toLowerCase().replace(/\s+/g, '-')} className="mb-20 scroll-mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className="text-center space-y-3 mb-12"
                        >
                            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                                {section.category}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                {section.description}
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        {item.tags.map(tag => (
                                            <Badge key={tag} variant="outline" className="border-primary/30 text-primary/80">{tag}</Badge>
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SoftwareSection;
