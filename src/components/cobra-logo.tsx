import { cn } from "@/lib/utils";

const CobraLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-pulse-glow", className)}
    >
      <path d="M12 11.5c-2 0-4-1-4-3.5C8 5.48 9.52 3 12 3s4 2.48 4 5.5c0 2.5-2 3.5-4 3.5z"/>
      <path d="M12 21c-3.87 0-7-2.9-7-6.5C5 9.92 8.13 7 12 7s7 2.92 7 7.5C19 18.1 15.87 21 12 21z"/>
      <path d="M10 12a1 1 0 100 2 1 1 0 000-2z" fill="currentColor"/>
      <path d="M14 12a1 1 0 100 2 1 1 0 000-2z" fill="currentColor"/>
    </svg>
  );
};

export default CobraLogo;
