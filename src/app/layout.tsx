import type { Metadata } from 'next';
import { Share_Tech_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { AuthProvider } from '@/hooks/use-auth';
import Script from 'next/script';

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-share-tech-mono',
});

export const metadata: Metadata = {
  title: 'Cobra Download Hub',
  description: 'Piracy is meant to be free.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          id="adsterra-popunder"
          strategy="beforeInteractive"
          src="//pl27359669.profitableratecpm.com/4e/1a/14/4e1a1445dde2024cd87664dbcd15c9e4.js"
        />
      </head>
      <body className={cn('min-h-screen bg-background text-foreground antialiased', shareTechMono.variable)}>
        <AuthProvider>
          <div className="relative flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
        <Script
          id="adsterra-social-bar"
          strategy="lazyOnload"
          src="//pl27363287.profitableratecpm.com/37/e2/13/37e213e266590dc8719ae88b439cc738.js"
        />
      </body>
    </html>
  );
}
