import { cn } from "@/lib/utils";

const CobraLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("animate-pulse-glow", className)}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="hsl(var(--primary))"
        fillOpacity="0.5"
      />
      <path
        d="M12 4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M12 12.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 5.5 12 5.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
        fill="hsl(var(--background))"
      />
      <path
        d="M8.5 16.5c.5-1.5 2-2.5 3.5-2.5s3 1 3.5 2.5l-1.5.5c-.33-1-1.17-1.5-2-1.5s-1.67.5-2 1.5l-1.5-.5z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M15 11h-1v-1h-4v1H9v-1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1zm-4.5 3c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3z"
        fill="hsl(var(--primary))"
      />
    </svg>
  );
};

export default CobraLogo;
