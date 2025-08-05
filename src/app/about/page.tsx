"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Box, Download, Gamepad2, KeyRound, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
    const teamMembers = [
        { name: "Cypher", role: "Founder & Lead Developer", avatar: "/avatar1.png" },
        { name: "Glitch", role: "UI/UX & Security", avatar: "/avatar2.png" },
        { name: "Byte", role: "Community Manager", avatar: "/avatar3.png" },
    ];

    const timelineEvents = [
        { year: "2021", event: "Project Cobra was born from a desire for digital autonomy." },
        { year: "2022", event: "Launched our first platform, focusing on open-source tools." },
        { year: "2023", event: "Expanded to include cracked software and games, growing our community." },
        { year: "2024", event: "Reached 1 million users, solidifying our place as a leader in digital freedom." },
    ];

    return (
        <section id="about" className="w-full py-20 md:py-28 lg:py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-3 mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        About Cobra
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Cobra is more than just a name. It's a movement — one that believes in unrestricted access to the digital world. We don't sell freedom. We spread it.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                        <p className="text-muted-foreground mb-4">
                            To dismantle the barriers of digital restrictions and empower users with free, unfettered access to software and information. We champion the principle that knowledge and tools should be universally available.
                        </p>
                        <h3 className="text-2xl font-bold text-primary mb-4">Our Philosophy</h3>
                        <p className="text-muted-foreground">
                            We operate on the fringes, guided by a core belief in digital anarchy and the sovereignty of the individual. Our platform is a testament to the power of community-driven knowledge sharing, challenging the status quo of digital ownership.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="p-8 bg-secondary/30 border border-border/50 rounded-lg"
                    >
                       <Image src="https://placehold.co/600x400.png" alt="About Cobra" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="abstract network" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-3 my-20"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary">The Timeline</h2>
                    <div className="relative mt-8">
                         <div className="absolute w-0.5 h-full bg-primary/30 left-1/2 -translate-x-1/2"></div>
                         {timelineEvents.map((item, index) => (
                             <div key={item.year} className={`flex items-center w-full my-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                 <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                     <p className="text-primary font-bold text-2xl">{item.year}</p>
                                     <p className="text-muted-foreground">{item.event}</p>
                                 </div>
                                  <div className="absolute w-4 h-4 rounded-full bg-primary left-1/2 -translate-x-1/2"></div>
                             </div>
                         ))}
                    </div>
                </motion.div>

                <div className="text-center my-20">
                    <h2 className="text-3xl font-bold tracking-tight text-primary mb-12">Meet the Core</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                             <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col items-center"
                            >
                                <Image src={`https://placehold.co/128x128.png`} alt={member.name} width={128} height={128} className="rounded-full mb-4 border-2 border-primary/50" data-ai-hint="hacker avatar"/>
                                <h4 className="text-xl font-semibold text-primary/90">{member.name}</h4>
                                <p className="text-muted-foreground">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Join the Movement</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Whether you're here for mods, cracks, or just to escape the system — you're in. Welcome to the other side.
                    </p>
                    <Button asChild size="lg" className="font-bold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                        <Link href="/contact">
                            Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
