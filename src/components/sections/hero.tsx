import { Button } from "@/components/ui/button";
import { Gamepad2, Laptop, Shield, Smartphone } from "lucide-react";
import Link from "next/link";
import AnimatedText from "@/components/animated-text";
import CobraLogo from "@/components/cobra-logo";

const HeroSection = () => {
  const downloadLinks = [
    { name: "Mod APKs", icon: Smartphone, href: "#", hint: "smartphone apps" },
    { name: "Crack Games", icon: Gamepad2, href: "#", hint: "video games" },
    { name: "Crack Software", icon: Laptop, href: "#", hint: "computer software" },
    { name: "Free VPN Servers", icon: Shield, href: "#", hint: "internet security" },
  ];

  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-grid-small-white/[0.05]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="container z-10 flex flex-col items-center justify-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <CobraLogo className="h-28 w-28 text-primary" />
          <h1 className="text-7xl font-bold tracking-tight text-transparent sm:text-8xl md:text-9xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
            Cobra
          </h1>
          <p className="text-xl text-primary font-mono">
            <AnimatedText text="Piracy is meant to be free." delay={0.5} />
          </p>
        </div>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {downloadLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              size="lg"
              variant="outline"
              className="group rounded-full border-primary/30 bg-background/60 py-8 text-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]"
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer" data-ai-hint={link.hint}>
                <link.icon className="mr-4 h-7 w-7 text-primary transition-transform group-hover:scale-110" />
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
