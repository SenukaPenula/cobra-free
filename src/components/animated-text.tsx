"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export interface IAnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ text, className, delay = 0 }: IAnimatedTextProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: text.length * 0.08,
      ease: "linear",
      delay: delay,
    });
    return controls.stop;
  }, [count, text.length, delay]);

  return (
    <span className="relative">
      <motion.span className={cn(className)}>
        {displayText}
      </motion.span>
      <motion.span 
        className={cn("absolute right-0 top-0 bottom-0 inline-block w-1 bg-primary", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
};

export default AnimatedText;
