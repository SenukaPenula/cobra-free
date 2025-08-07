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
                <path d="m7 11 4-4-4-4"></path>
                <path d="M11 7H3"></path>
                <path d="M21 13h-8"></path>
                <path d="M17 17a2 2 0 1 0-4 0"></path>
            </svg>
        </div>
      <span className="hidden text-xl font-bold tracking-wider sm:inline-block">COBRA</span>
    </div>
  );
};

export default CobraLogo;
