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
      <path d="M20 12h-2a8 8 0 1 0-12 0H4" />
      <path d="M4 12a7.94 7.94 0 0 1 1-3.5c1.5-3 5.5-3.5 7-3.5s5.5.5 7 3.5A7.94 7.94 0 0 1 20 12" />
      <path d="M12 12v10" />
      <path d="M12 22c-4 0-7-1.5-7-3.5v-2" />
      <path d="M19 16.5c0 2-3 3.5-7 3.5" />
    </svg>
  );
};

export default CobraLogo;
