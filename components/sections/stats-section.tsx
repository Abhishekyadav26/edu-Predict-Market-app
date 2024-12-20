"use client";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Active Users", value: "50K+" },
  { label: "Daily Trades", value: "100K+" },
  { label: "Accuracy Rate", value: "94%" },
  { label: "Total Rewards", value: "$2M+" },
];

export function StatsSection() {
  return (
    <section className="py-12 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}