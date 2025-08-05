import { Button } from "@/components/ui/button";
import { Box, Gamepad2, KeyRound, Shield } from "lucide-react";
import Link from "next/link";
import AnimatedText from "@/components/animated-text";

const HeroSection = () => {
  const categories = [
    { name: "Mod APKs", icon: Box, href: "#mod-apks", description: "Unlock premium features with modified APKs." },
    { name: "Crack Games", icon: Gamepad2, href: "#crack-games", description: "Access the latest games without any cost." },
    { name: "Crack Softwares", icon: KeyRound, href: "#crack-softwares", description: "Get full access to premium software." },
    { name: "Free VPN Servers", icon: Shield, href: "#free-vpn-servers", description: "Protect your privacy with free VPN access." },
  ];

  return (
    <section id="home" className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden bg-grid">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="container z-10 flex flex-col items-center justify-center gap-10 text-center py-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-7xl font-bold tracking-tight text-primary sm:text-8xl md:text-9xl">
            COBRA
          </h1>
          <p className="text-xl text-primary/80 font-mono">
            <AnimatedText text="Software freedom for everyone." delay={0.5} />
          </p>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 mt-8">
          {categories.map((link) => (
            <Link key={link.name} href={link.href} className="group rounded-lg border-primary/20 bg-secondary/30 p-4 text-left backdrop-blur-sm transition-all hover:scale-105 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)]">
                <link.icon className="mb-2 h-7 w-7 text-primary transition-transform group-hover:scale-110" />
                <h3 className="font-semibold text-primary/90">{link.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
