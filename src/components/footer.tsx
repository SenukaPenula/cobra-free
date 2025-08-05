import { cn } from "@/lib/utils";
import CobraLogo from "./cobra-logo";
import Link from "next/link";
import { Github, Twitter, Send } from "lucide-react";

const Footer = ({ className }: { className?: string }) => {
  const softwareLinks = [
    { name: "Open Source Apps", href: "#" },
    { name: "Free Games", href: "#" },
    { name: "Development Tools", href: "#" },
    { name: "Security Tools", href: "#" },
  ];

  const companyLinks = [
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Terms of Service", href: "#" },
  ];

  const communityLinks = [
    { name: "Discord", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "X (Twitter)", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Send, href: "#" },
  ];

  return (
    <footer className={cn("w-full border-t border-border/20 py-12 bg-background z-10", className)}>
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <CobraLogo />
          <p className="text-sm text-muted-foreground">
            Empowering digital freedom through open-source software and tools.
          </p>
          <div className="flex gap-2 mt-2">
            {socialLinks.map((link, i) => (
              <Link key={i} href={link.href} className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md bg-secondary/30 hover:bg-primary/10">
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primary">Software</h4>
          <div className="flex flex-col gap-2">
            {softwareLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primary">Company</h4>
          <div className="flex flex-col gap-2">
            {companyLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primary">Community</h4>
          <div className="flex flex-col gap-2">
            {communityLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-12 pt-8 border-t border-border/20">
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-center">
            <h5 className="font-bold text-destructive">LEGAL DISCLAIMER</h5>
            <p className="max-w-4xl mx-auto text-xs text-muted-foreground/80 mt-2">
                This site provides links to external software. To ensure compliance with local laws, verify software licenses before use. All trademarks are the property of their respective owners.
            </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4 mt-8">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Cobra — All rights reserved.</p>
            <p className="text-xs text-muted-foreground/80">
                <Link href="#" className="hover:text-primary">Terms & Conditions</Link> | <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
