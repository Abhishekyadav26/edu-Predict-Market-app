"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatedButton } from "@/components/ui/animated-button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatedButton
      variant="ghost"
      size="icon"
      animation="scale"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </AnimatedButton>
  );
}