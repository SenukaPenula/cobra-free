import { Box, Gamepad2, KeyRound, Shield } from "lucide-react";

export const softwareList = [
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
