"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Users, Zap, HeartHandshake, ShieldCheck, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
    const missionItems = [
        {
            icon: <Code className="h-8 w-8 text-primary" />,
            title: "Open Source First",
            description: "We believe in transparency and community-driven development. Open source software empowers users and developers alike.",
        },
        {
            icon: <Globe className="h-8 w-8 text-primary" />,
            title: "Universal Access",
            description: "Quality software should be accessible to everyone, regardless of economic status or geographic location.",
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: "Community Driven",
            description: "The best software is built by communities, for communities. We champion collaborative development.",
        },
        {
            icon: <Zap className="h-8 w-8 text-primary" />,
            title: "Innovation Freedom",
            description: "Free software enables innovation without barriers. When code is open, creativity has no limits.",
        },
    ];

    const philosophyItems = [
        {
            icon: <HeartHandshake className="h-7 w-7 text-accent" />,
            title: "Freedom is Not Free",
            description: "Digital freedom requires vigilance, community, and the courage to choose alternatives. Every time you choose open-source, you vote for a more equitable digital future.",
        },
        {
            icon: <ShieldCheck className="h-7 w-7 text-accent" />,
            title: "Quality Without Compromise",
            description: "Free doesn't mean inferior. Many open-source projects surpass their commercial counterparts in functionality, security, and innovation. We showcase only the best.",
        },
        {
            icon: <BrainCircuit className="h-7 w-7 text-accent" />,
            title: "Knowledge is Power",
            description: "We don't just provide links - we educate. Understanding your digital tools makes you a more powerful user and a more informed citizen of the digital world.",
        },
    ]

    return (
        <section id="about" className="w-full py-20 md:py-28 bg-background bg-grid">
             <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-3 mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl animate-pulse-glow">
                        ABOUT COBRA
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Empowering digital freedom through open software
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center space-y-6 mb-20 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary">OUR MISSION</h2>
                     <p className="text-muted-foreground text-lg">
                        In a world where software monopolies control access to digital tools, COBRA stands as a beacon of freedom. We believe that software is a tool of empowerment, not oppression. 
                        Our mission is simple: democratize access to quality software by showcasing the best open-source alternatives and free tools available. We don’t just list software - we curate a revolution.
                    </p>
                    <p className="text-primary/80 italic text-xl font-mono">
                        "Software freedom for everyone" isn't just our motto - it's our promise.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                  {missionItems.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-background/50 border border-border/50 rounded-lg p-6 text-left transition-all duration-300 hover:border-primary/70 hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10 flex items-start gap-6"
                    >
                      <div className="p-3 rounded-md bg-primary/10 border border-primary/20 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary/90">{feature.title}</h3>
                        <p className="text-muted-foreground mt-2 flex-grow">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>


                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center space-y-6 my-20 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary">THE COBRA PHILOSOPHY</h2>
                     <div className="space-y-8 text-left">
                        {philosophyItems.map((item, index) => (
                            <div key={item.title} className="flex items-start gap-6">
                                <div className="p-3 rounded-full bg-accent/10 border border-accent/20 text-accent mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-accent/90">{item.title}</h3>
                                    <p className="text-muted-foreground text-lg mt-1">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center bg-secondary/30 border border-primary/20 rounded-lg p-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">JOIN THE MOVEMENT</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                        Every download of open-source software is a step toward digital freedom. Every shared link spreads the revolution. Be part of the change.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg" className="font-bold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                            <Link href="/mod-apks">
                                Explore Software <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="font-bold border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                            <Link href="/contact">
                                Get Involved
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPage;
