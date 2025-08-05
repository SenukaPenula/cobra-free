"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CobraLogo from '@/components/cobra-logo';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/mod-apks', label: 'MOD APKS' },
    { href: '/crack-games', label: 'CRACK GAMES' },
    { href: '/crack-softwares', label: 'CRACK SOFTWARES' },
    { href: '/free-vpn-servers', label: 'FREE VPN SERVERS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Link href="/">
          <CobraLogo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium tracking-wider md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-muted-foreground transition-colors hover:text-primary",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div 
                  className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-primary"
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <Link href="/login">LOGIN</Link>
          </Button>
          <Button asChild className="font-bold transition-all hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] bg-primary/90 hover:bg-primary text-primary-foreground">
            <Link href="/signup">SIGN UP</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-8 pt-12">
                <nav className="flex flex-col gap-6 text-lg">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "font-medium text-muted-foreground transition-colors hover:text-primary",
                         pathname === link.href && "text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4">
                   <Button asChild variant="ghost" size="lg">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild size="lg" className="font-bold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
