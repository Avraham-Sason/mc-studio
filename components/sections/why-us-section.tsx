"use client";

import { useTranslations } from "next-intl";
import { Shield, Infinity, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const icons = [Shield, Infinity, MapPin, Users];

export function WhyUsSection() {
  const t = useTranslations("whyUs");

  const cards = [0, 1, 2, 3].map((i) => ({
    title: t(`cards.${i}.title`),
    description: t(`cards.${i}.description`),
    stat: t(`cards.${i}.stat`),
    statLabel: t(`cards.${i}.statLabel`),
    Icon: icons[i],
  }));

  return (
    <SectionWrapper id="why-us" className="bg-secondary/50">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <Card className="h-full border-0 bg-card shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <card.Icon className="h-7 w-7 text-primary" />
                </div>
                <div className="mt-4 text-3xl font-bold text-primary">
                  {card.stat}
                </div>
                <p className="text-xs text-muted-foreground">
                  {card.statLabel}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
