"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export function CTASection() {
  return (
    <section className="py-24 px-4">
      <Card className="bg-primary-foreground">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Predicting?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of traders making informed predictions every day. Start your journey now.
          </p>
          <AnimatedButton size="lg" animation="slide" className="text-lg">
            Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
          </AnimatedButton>
        </CardContent>
      </Card>
    </section>
  );
}