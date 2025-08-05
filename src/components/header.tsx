import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CobraLogo from '@/components/cobra-logo';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <CobraLogo className="h-8 w-8 text-primary" />
          <span className="hidden text-xl font-bold tracking-wider sm:inline-block">COBRA</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/#home" className="font-medium text-muted-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/#about" className="font-medium text-muted-foreground transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/#contact" className="font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild size="sm" className="transition-all hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)]">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
