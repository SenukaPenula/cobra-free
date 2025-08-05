import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Gamepad2, KeyRound, Shield } from "lucide-react";
import Link from "next/link";
import AnimatedText from "@/components/animated-text";

const HeroSection = () => {
  const categories = [
    { name: "Mod APKs", icon: Box, href: "/mod-apks", description: "Unlock premium features." },
    { name: "Crack Games", icon: Gamepad2, href: "/crack-games", description: "Access latest games." },
    { name: "Crack Softwares", icon: KeyRound, href: "/crack-softwares", description: "Get premium software." },
    { name: "Free VPN Servers", icon: Shield, href: "/free-vpn-servers", description: "Protect your privacy." },
  ];

  return (
    <section id="home" className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden bg-hero">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container z-10 flex flex-col items-center justify-center gap-10 text-center py-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-7xl font-bold tracking-tight text-primary sm:text-8xl md:text-9xl animate-pulse-glow">
            COBRA
          </h1>
          <p className="text-xl text-primary/80 font-mono">
            <AnimatedText text="Software freedom for everyone." delay={0.5} />
          </p>
           <p className="max-w-2xl text-muted-foreground md:text-lg">
            Dive into our curated library of modded APKs, cracked games, essential software, and secure VPNs. We believe in unrestricted access to digital tools and knowledge.
          </p>
        </div>
         <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button asChild size="lg" className="font-bold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                <Link href="/mod-apks">
                    Explore Downloads <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                <Link href="/about">
                    Join Community
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
