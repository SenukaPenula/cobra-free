import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Send, Twitter, Smartphone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactPage = () => {
    const contactMethods = [
        { icon: Mail, title: "Email", value: "contact@cobra.net", href: "mailto:contact@cobra.net" },
        { icon: Smartphone, title: "Whatsapp", value: "+1-202-555-0156", href: "https://wa.me/12025550156" },
        { icon: Send, title: "Telegram", value: "@cobra_support", href: "https://t.me/cobra_support" },
        { icon: Twitter, title: "Twitter", value: "@cobra_network", href: "https://twitter.com/cobra_network" },
    ];
    return (
        <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-3 mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Contact Us</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have questions or want to join the community? Reach out through any of our channels.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
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
                                    <Card className="bg-secondary/30 border border-border/50 rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/70 hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10">
                                        <div className="flex flex-col items-center gap-4">
                                            <method.icon className="h-10 w-10 text-primary" />
                                            <div className="text-left">
                                                <h3 className="text-lg font-bold text-primary/90">{method.title}</h3>
                                                <p className="text-muted-foreground">{method.value}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                             </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className="w-full border-primary/30 shadow-xl shadow-primary/10 rounded-2xl bg-background/80 backdrop-blur-sm z-10 p-4">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold tracking-tight text-primary">Send a Secure Message</CardTitle>
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
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
