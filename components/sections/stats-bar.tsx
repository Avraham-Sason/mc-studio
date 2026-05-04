"use client";

import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function StatsBar() {
  const t = useTranslations("stats");

  const items = [0, 1, 2, 3].map((i) => ({
    value: t(`items.${i}.value`),
    suffix: t(`items.${i}.suffix`),
    label: t(`items.${i}.label`),
    icon: t.has(`items.${i}.icon`) ? t(`items.${i}.icon`) : undefined,
  }));

  return (
    <section className="bg-primary py-12 lg:py-16" aria-label="Statistics">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 lg:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <ScrollReveal
            key={i}
            delay={i * 0.08}
            direction={i % 2 === 0 ? "right" : "left"}
            className="text-center"
          >
            <div className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              {item.value ? (
                <AnimatedCounter
                  target={parseInt(item.value)}
                  suffix={item.suffix}
                />
              ) : item.icon === "map-pin" ? (
                <MapPin className="mx-auto h-10 w-10" />
              ) : (
                item.suffix
              )}
            </div>
            <p className="mt-2 text-sm text-primary-foreground/80">
              {item.label}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
