"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function PricingSection() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const categories = [0, 1, 2].map((i) => ({
    name: t(`categories.${i}.name`),
    startingFrom: t(`categories.${i}.startingFrom`),
    includes: Array.from({ length: 4 }, (_, j) =>
      t(`categories.${i}.includes.${j}`)
    ),
  }));

  return (
    <SectionWrapper id="pricing">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            {t("subtitle")}
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            {t("description")}
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <Card
              className={`h-full border transition-shadow hover:shadow-lg ${
                i === 0 ? "border-primary shadow-md" : ""
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{cat.name}</CardTitle>
                <p className="mt-1 text-lg font-bold text-primary">
                  {cat.startingFrom}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {cat.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">{t("note")}</p>
          <Button asChild size="lg" className="mt-4 rounded-full px-8">
            <Link href={`/${locale}/contact`}>{t("cta")}</Link>
          </Button>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
