import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, BotMessageSquare } from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22l-4-9-9-4 20-6z" />
    </svg>
);


const ContactSection = () => {
    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            subtitle: "Direct communication",
            contact: "hello@cobra-software.com",
            cta: "Connect",
            href: "mailto:hello@cobra-software.com"
        },
        {
            icon: WhatsAppIcon,
            title: "WhatsApp",
            subtitle: "Instant messaging",
            contact: "+1-234-567-890",
            cta: "Chat",
            href: "#"
        },
        {
            icon: TelegramIcon,
            title: "Telegram",
            subtitle: "Real-time chat",
            contact: "@CobraSoftware",
            cta: "Connect",
            href: "#"
        }
    ];

    return (
        <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-small z-0"></div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center space-y-4 mb-16 md:mb-24">
                    <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                        Contact Us
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Got questions? Ideas? Let's connect and build the future together.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-16 md:mb-24">
                    <h3 className="text-3xl font-bold text-accent mb-12 tracking-wide text-center">GET IN TOUCH</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {contactMethods.map((method, i) => (
                             <div key={i} className="bg-secondary/20 border border-primary/20 rounded-xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10">
                                <method.icon className="h-10 w-10 text-primary mb-2" />
                                <h4 className="text-xl font-bold text-primary/90">{method.title}</h4>
                                <p className="text-sm text-muted-foreground">{method.subtitle}</p>
                                <p className="font-mono text-primary/80 break-all">{method.contact}</p>
                                <Button asChild variant="outline" className="mt-auto rounded-full border-primary/30 hover:bg-primary/20 hover:text-primary-foreground hover:border-primary">
                                    <a href={method.href}>{method.cta}</a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold text-accent mb-12 tracking-wide text-center">SEND US A MESSAGE</h3>
                    <p className="text-center text-muted-foreground mb-10 -mt-6">Have a suggestion for new software? Found a bug? Want to collaborate? Drop us a line.</p>
                    <div className="border border-primary/30 rounded-2xl p-8 bg-secondary/20 shadow-xl shadow-primary/10">
                        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-primary/80">Your name</Label>
                                <Input id="name" type="text" placeholder="Your name" required className="py-6 bg-secondary/30 border-primary/30 focus:border-primary"/>
                            </div>
                             <div className="grid gap-2">
                                <Label htmlFor="email" className="text-primary/80">Email</Label>
                                <Input id="email" type="email" placeholder="your@email.com" required className="py-6 bg-secondary/30 border-primary/30 focus:border-primary"/>
                            </div>
                            <div className="sm:col-span-2 grid gap-2">
                                <Label htmlFor="message" className="text-primary/80">Message</Label>
                                <Textarea id="message" placeholder="Tell us what's on your mind." required rows={5} className="py-4 bg-secondary/30 border-primary/30 focus:border-primary"/>
                            </div>
                            <div className="sm:col-span-2 flex justify-center mt-4">
                               <Button size="lg" className="w-full sm:w-auto px-10 py-6 text-lg font-semibold rounded-full transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                                    <Send className="mr-3 h-5 w-5"/>
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
