import { cn } from "@/lib/utils";

const CobraLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
        <div className="bg-primary text-primary-foreground p-2 flex items-center justify-center">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                <path d="M7 13c.88-1.32 2.2-2.5 4-3a5.27 5.27 0 0 1 2 0c1.8 1.5 3.12 2.68 4 4" />
                <path d="M10 14.5c.88.54 1.25 1.5 1 2.5" />
                <path d="M14 14.5c-.88.54-1.25 1.5-1 2.5" />
            </svg>
        </div>
      <span className="hidden text-xl font-bold tracking-wider sm:inline-block">COBRA</span>
    </div>
  );
};

export default CobraLogo;
