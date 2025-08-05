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
      <path d="M13 5.366a2 2 0 0 0-2 0l-7 4.043a2 2 0 0 0-1 1.732V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.859a2 2 0 0 0-1-1.732l-7-4.043z" />
      <path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
      <path d="M8 17h8" />
    </svg>
  );
};

export default CobraLogo;
