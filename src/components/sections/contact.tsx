import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 4.137 2.536 7.683 6.095 9.143" />
        <path d="M8.5 12.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5" />
        <path d="M15.5 12.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5" />
        <path d="M17 16.5c-1.5 1-3.5 1.5-5.5 1.5s-4-.5-5.5-1.5" />
    </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22l-4-9-9-4 20-6z" />
    </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container grid max-w-5xl items-center justify-center gap-10 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-accent">
            Join the Rebellion
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl">
            Connect with us on our channels. Share, discuss, and become part of the movement.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="group rounded-full border-accent/30 bg-transparent px-8 py-6 text-lg transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_25px_hsl(var(--accent)/0.7)]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <DiscordIcon className="mr-3 h-6 w-6 text-accent" />
              Discord
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group rounded-full border-accent/30 bg-transparent px-8 py-6 text-lg transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_25px_hsl(var(--accent)/0.7)]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TelegramIcon className="mr-3 h-6 w-6 text-accent" />
              Telegram
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group rounded-full border-accent/30 bg-transparent px-8 py-6 text-lg transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_25px_hsl(var(--accent)/0.7)]">
            <a href="mailto:contact@cobra.dev">
              <Mail className="mr-3 h-6 w-6 text-accent" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;