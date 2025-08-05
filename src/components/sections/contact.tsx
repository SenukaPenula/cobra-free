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
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Join the Rebellion
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Connect with us on our channels. Share, discuss, and become part of the movement.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" variant="outline" className="group border-accent/20 bg-transparent text-base transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_theme(colors.accent)]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <DiscordIcon className="mr-2 h-5 w-5 text-accent" />
              Discord
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group border-accent/20 bg-transparent text-base transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_theme(colors.accent)]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TelegramIcon className="mr-2 h-5 w-5 text-accent" />
              Telegram
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group border-accent/20 bg-transparent text-base transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_theme(colors.accent)]">
            <a href="mailto:contact@cobra.dev">
              <Mail className="mr-2 h-5 w-5 text-accent" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
