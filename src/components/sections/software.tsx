"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Download, Gamepad2, Shield, Star, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const softwareList = [
    {
        category: "Open Source Apps",
        icon: Code,
        description: "Discover the best free and open-source software alternatives.",
        items: [
            { name: "VS Code", description: "Code editor redefined and optimized for building and debugging modern web and cloud applications.", tags: ["OSS", "Free"], rating: 4.8, hint: "code editor" },
            { name: "GIMP", description: "A cross-platform image editor available for GNU/Linux, macOS, Windows and more operating systems.", tags: ["OSS", "Free"], rating: 4.5, hint: "image editor" },
            { name: "LibreOffice", description: "Powerful office suite that's a successor to OpenOffice.org and a great alternative to Microsoft 365.", tags: ["OSS", "Free"], rating: 4.4, hint: "office suite" },
            { name: "Blender", description: "Free and open-source 3D creation suite. It supports the entirety of the 3D pipeline.", tags: ["OSS", "Free"], rating: 4.9, hint: "3d model" },
        ]
    },
    {
        category: "Free Games",
        icon: Gamepad2,
        description: "Discover the best free and open-source games and platforms.",
        items: [
            { name: "Steam Free Games", description: "Hundreds of free-to-play games are available on Steam, from team shooters to strategy.", tags: ["Free"], rating: 4.7, hint: "game store" },
            { name: "Epic Games Store", description: "Offers a free game every week, plus many more free-to-play titles to discover and enjoy.", tags: ["Free"], rating: 4.6, hint: "game platform" },
            { name: "itch.io", description: "An open marketplace for independent digital creators with a focus on independent video games.", tags: ["Indie", "Free"], rating: 4.8, hint: "indie games" },
            { name: "Game Jolt", description: "A large community for gamers and developers alike, with thousands of free indie games.", tags: ["Indie", "Free"], rating: 4.5, hint: "gaming community" },
        ]
    },
    {
        category: "Development Tools",
        icon: Wrench,
        description: "Essential open-source tools for developers and creators.",
        items: [
            { name: "Git", description: "A free and open source distributed version control system designed to handle everything from small to very large projects.", tags: ["OSS", "Free"], rating: 4.9, hint: "version control" },
            { name: "Node.js", description: "An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine.", tags: ["OSS", "Free"], rating: 4.8, hint: "javascript runtime" },
            { name: "Docker", description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.", tags: ["OSS", "Free"], rating: 4.7, hint: "containerization platform" },
            { name: "Postman", description: "An API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration.", tags: ["Freemium"], rating: 4.6, hint: "api client" },
        ]
    },
    {
        category: "Security Tools",
        icon: Shield,
        description: "Protect your privacy and security online with these tools.",
        items: [
            { name: "Tor Browser", description: "Protect your privacy. Defend yourself against tracking and surveillance. Circumvent censorship.", tags: ["OSS", "Free"], rating: 4.8, hint: "secure browser" },
            { name: "ProtonVPN", description: "High-speed Swiss VPN that safeguards your privacy. Strong no-logs policy and advanced security features.", tags: ["Freemium"], rating: 4.7, hint: "vpn service" },
            { name: "Bitwarden", description: "Open source password manager that makes it easy to generate, store, and secure unique passwords.", tags: ["OSS", "Freemium"], rating: 4.9, hint: "password manager" },
            { name: "ClamAV", description: "An open source antivirus engine for detecting trojans, viruses, malware & other malicious threats.", tags: ["OSS", "Free"], rating: 4.4, hint: "antivirus engine" },
        ]
    },
];

const SoftwareSection = () => {
    return (
        <section id="software" className="w-full py-20 md:py-28 lg:py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                {softwareList.map((section, sectionIndex) => (
                    <div key={section.category} className="mb-20">
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
