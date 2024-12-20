"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GradientBackground({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/10 to-secondary/10"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {children}
    </div>
  );
}