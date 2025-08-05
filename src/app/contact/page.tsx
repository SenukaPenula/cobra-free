"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Send, Twitter, Smartphone, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactPage = () => {
    const contactMethods = [
        { icon: Users, title: "Community", value: "Join our Discord", href: "#" },
        { icon: Mail, title: "Email", value: "secure@cobra.dev", href: "mailto:secure@cobra.dev" },
        { icon: Github, title: "Source Code", value: "Contribute on GitHub", href: "#" },
        { icon: Send, title: "Telegram", value: "@cobra_ops", href: "https://t.me/cobra_ops" },
    ];
    return (
        <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-background bg-grid">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-3 mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl animate-pulse-glow">GET IN TOUCH</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Whether you're a user, a developer, or just curious, we'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className="w-full border-primary/30 shadow-xl shadow-primary/10 rounded-2xl bg-background/80 backdrop-blur-sm z-10 p-4">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold tracking-tight text-primary">Send a Secure Message</CardTitle>
                                <CardDescription>Your privacy is our priority. Messages are end-to-end encrypted.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name" className="text-primary/80">Alias</Label>
                                    <Input id="name" placeholder="Cobra Commander" required className="py-6 bg-secondary/30 border-primary/30 focus:border-primary" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-primary/80">Email (Optional)</Label>
                                    <Input id="email" type="email" placeholder="user@domain.net" className="py-6 bg-secondary/30 border-primary/30 focus:border-primary" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="message" className="text-primary/80">Message</Label>
                                    <Textarea id="message" placeholder="Your encrypted message..." required className="py-4 bg-secondary/30 border-primary/30 focus:border-primary min-h-[120px]" />
                                </div>
                                <Button className="w-full py-6 text-lg font-semibold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                                    Transmit Message
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                    
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">Contact Channels</h2>
                            <p className="text-muted-foreground">Reach out to us through any of the following channels. We're active and ready to help.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactMethods.map((method, index) => (
                                 <motion.div
                                    key={method.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                 >
                                    <Link href={method.href} target="_blank">
                                        <Card className="h-full bg-secondary/30 border border-border/50 rounded-lg p-6 text-left transition-all duration-300 hover:border-primary/70 hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10">
                                            <div className="flex items-start gap-4">
                                                <method.icon className="h-8 w-8 text-primary mt-1" />
                                                <div>
                                                    <h3 className="text-lg font-bold text-primary/90">{method.title}</h3>
                                                    <p className="text-muted-foreground">{method.value}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                 </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactPage;
