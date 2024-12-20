"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export function HeroSection() {
  return (
    <section className="py-24 px-4 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
        Predict Markets with
        <span className="text-primary"> Confidence</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Join thousands of traders making informed predictions and earning rewards in real-time.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <AnimatedButton size="lg" animation="pulse" className="text-lg">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </AnimatedButton>
        <AnimatedButton size="lg" variant="outline" animation="scale" className="text-lg">
          Learn More
        </AnimatedButton>
      </div>
    </section>
  );
}