import { cn } from "@/lib/utils";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("w-full border-t border-border/40 py-8", className)}>
      <div className="container flex max-w-7xl flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Cobra — All rights reserved.</p>
        <p className="max-w-md text-xs text-muted-foreground/80">
          <strong>Legal Disclaimer:</strong> This site only provides links to external content. No files are hosted on Cobra.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
