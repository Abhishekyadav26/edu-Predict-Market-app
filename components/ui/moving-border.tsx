"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("relative p-[1px] overflow-hidden", containerClassName)}>
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary",
          className
        )}
        style={{
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "200% 0%"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};