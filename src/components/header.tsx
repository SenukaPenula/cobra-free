import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CobraLogo from '@/components/cobra-logo';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <CobraLogo className="h-10 w-10 text-primary" />
          <span className="hidden text-2xl font-bold tracking-wider sm:inline-block">COBRA</span>
        </Link>
        <nav className="hidden items-center gap-8 text-lg md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild variant="ghost" size="lg">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild size="lg" className="rounded-full font-bold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
            <Link href="/signup">Sign Up</Link>
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
                      className="font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4">
                   <Button asChild variant="ghost" size="lg">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild size="lg" className="rounded-full font-bold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
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