"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Box, Download, Gamepad2, KeyRound, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const softwareList = [
    {
        category: "Mod APKs",
        icon: Box,
        description: "Unlock premium features with our collection of modified APKs.",
        items: [
            { name: "Spotify Premium", description: "Enjoy ad-free music, offline playback, and unlimited skips with this modded version.", tags: ["Mod", "Free"], rating: 4.9, hint: "modded music app" },
            { name: "Netflix Premium", description: "Stream your favorite shows and movies in high definition without a subscription.", tags: ["Mod", "Free"], rating: 4.8, hint: "modded streaming app" },
            { name: "AdGuard Premium", description: "Block ads everywhere on your device, including in apps and browsers, with this powerful tool.", tags: ["Mod", "Free"], rating: 4.7, hint: "ad blocker" },
            { name: "Poweramp Full Version", description: "Unlock all features of the powerful Poweramp music player for free.", tags: ["Mod", "Free"], rating: 4.9, hint: "modded music player" },
        ]
    },
    {
        category: "Crack Games",
        icon: Gamepad2,
        description: "Access the latest and greatest games without any cost.",
        items: [
            { name: "Cyberpunk 2077", description: "Explore the vast open world of Night City in this acclaimed action RPG, fully unlocked.", tags: ["Crack", "AAA"], rating: 4.8, hint: "open world rpg" },
            { name: "Elden Ring", description: "Embark on an epic journey through the Lands Between. The complete experience, cracked and ready.", tags: ["Crack", "RPG"], rating: 5.0, hint: "action rpg" },
            { name: "Red Dead Redemption 2", description: "Live the outlaw life in the final days of the Wild West. Full story and content available.", tags: ["Crack", "AAA"], rating: 4.9, hint: "western adventure" },
            { name: "Hogwarts Legacy", description: "Experience the wizarding world like never before. The full game, unlocked for you.", tags: ["Crack", "RPG"], rating: 4.7, hint: "fantasy game" },
        ]
    },
    {
        category: "Crack Softwares",
        icon: KeyRound,
        description: "Get full access to premium software without the price tag.",
        items: [
            { name: "Adobe Photoshop 2024", description: "The world's best imaging and graphic design software. Full version, fully activated.", tags: ["Crack", "Design"], rating: 4.9, hint: "photo editing software" },
            { name: "Microsoft Office 365", description: "Get Word, Excel, PowerPoint, and more. A complete suite for all your productivity needs.", tags: ["Crack", "Productivity"], rating: 4.8, hint: "office suite" },
            { name: "FL Studio Producer Edition", description: "Produce professional-quality music with one of the world's most popular DAWs.", tags: ["Crack", "Music"], rating: 4.7, hint: "music production software" },
            { name: "Autodesk AutoCAD 2024", description: "Design and draft anything with this leading CAD software. Full version unlocked.", tags: ["Crack", "CAD"], rating: 4.8, hint: "3d design software" },
        ]
    },
    {
        category: "Free VPN Servers",
        icon: Shield,
        description: "Protect your privacy and bypass censorship with free VPN access.",
        items: [
            { name: "ProtonVPN", description: "High-speed Swiss VPN that safeguards your privacy. Connect to free servers worldwide.", tags: ["VPN", "Free"], rating: 4.7, hint: "secure vpn" },
            { name: "Windscribe", description: "A VPN and ad blocker in one. Generous free plan with multiple server locations.", tags: ["VPN", "Free"], rating: 4.6, hint: "vpn adblocker" },
            { name: "TunnelBear", description: "A user-friendly VPN that makes it easy to browse privately and securely.", tags: ["VPN", "Free"], rating: 4.5, hint: "easy vpn" },
            { name: "Hotspot Shield", description: "Access blocked content and keep your connection secure with their free VPN plan.", tags: ["VPN", "Free"], rating: 4.4, hint: "free vpn service" },
        ]
    },
];

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
