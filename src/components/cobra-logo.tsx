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
                <path d="M13.5 8.5L10 12l3.5 3.5"></path>
                <path d="M2 10.5h11"></path>
                <path d="M21.16,7.21a2.42,2.42,0,0,1,0,3.42l-3,3a2.42,2.42,0,0,1-3.42,0l-.61-.61a2.42,2.42,0,0,1,0-3.42l3-3a2.42,2.42,0,0,1,3.42,0Z"></path>
                <path d="M6.71,15.83,3.3,12.41a2,2,0,0,1,0-2.83L6.13,6.75"></path>
            </svg>
        </div>
      <span className="hidden text-xl font-bold tracking-wider sm:inline-block">COBRA</span>
    </div>
  );
};

export default CobraLogo;
