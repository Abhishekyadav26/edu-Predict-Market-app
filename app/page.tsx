"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CTASection } from "@/components/sections/cta-section";
import { StatsSection } from "@/components/sections/stats-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <main className="container mx-auto">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
}