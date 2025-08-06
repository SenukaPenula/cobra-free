"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CobraLogo from '@/components/cobra-logo';
import { Menu, LogOut, User as UserIcon, Bot } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/use-auth';
import { logOut } from '@/services/auth';
import { useToast } from '@/hooks/use-toast';
import UserAvatar from './user-avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      router.push("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Logout Failed",
        description: error.message,
      });
    }
  };

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
        <nav className="hidden items-center gap-2 text-sm font-medium tracking-wider md:flex bg-secondary/30 p-2 rounded-full border border-border/30">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-muted-foreground transition-colors hover:text-primary",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div 
                  className="absolute inset-0 bg-primary/10 rounded-full z-[-1]"
                  layoutId="active-nav-link"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {loading ? null : user ? (
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <UserAvatar user={user} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.displayName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                 <DropdownMenuItem onClick={() => router.push('/profile')}>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/login">LOGIN</Link>
              </Button>
              <Button asChild className="font-bold transition-all hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] bg-primary/90 hover:bg-primary text-primary-foreground">
                <Link href="/signup">SIGN UP</Link>
              </Button>
            </>
          )}
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
                  {loading ? null : user ? (
                    <>
                     <Button onClick={() => router.push('/profile')} size="lg" variant="outline">Profile</Button>
                     <Button onClick={handleLogout} size="lg">Log Out</Button>
                    </>
                  ) : (
                    <>
                      <Button asChild variant="ghost" size="lg">
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button asChild size="lg" className="font-bold transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </>
                  )}
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
