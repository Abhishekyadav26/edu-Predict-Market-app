"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  animation?: "bounce" | "pulse" | "scale" | "slide";
  children: React.ReactNode;
}

const animations = {
  bounce: {
    initial: {},
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 400 }
    }
  },
  pulse: {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.3, repeat: Infinity }
    }
  },
  scale: {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    }
  },
  slide: {
    initial: {},
    hover: {
      x: [0, 5, 0],
      transition: { duration: 1, repeat: Infinity }
    }
  }
};

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, animation = "bounce", children, ...props }, ref) => {
    const MotionButton = motion(Button);
    const animationVariants = animations[animation];

    return (
      <MotionButton
        ref={ref}
        variant={variant}
        size={size}
        className={cn("relative", className)}
        initial="initial"
        whileHover="hover"
        variants={animationVariants}
        {...props}
      >
        {children}
      </MotionButton>
    );
  }
);