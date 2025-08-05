import { cn } from "@/lib/utils";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("w-full border-t border-border/20 py-8 bg-background z-10", className)}>
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Cobra — All rights reserved.</p>
        <p className="max-w-md text-xs text-muted-foreground/80">
          <strong>Legal Disclaimer:</strong> Cobra does not host any files. All links redirect to external sites.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
