"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TrendingUp, Brain, Trophy, Target, Clock, Shield } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Market Predictions",
    description: "Make informed predictions on various markets and earn rewards.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Insights",
    description: "Get advanced analytics and insights powered by cutting-edge AI.",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Competitive Rankings",
    description: "Compete with other predictors and climb the leaderboard.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Precision Trading",
    description: "Execute trades with precision using our advanced tools.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Real-time Updates",
    description: "Get instant updates on market movements and predictions.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Platform",
    description: "Trade with confidence on our secure and reliable platform.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Experience the most advanced prediction market platform with features designed for success.
        </p>
        <AnimatedButton animation="bounce">
          Explore Features
        </AnimatedButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border border-muted">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}