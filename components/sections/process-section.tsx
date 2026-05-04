"use client";

import { useTranslations } from "next-intl";
import { Phone, CalendarDays, Camera, ImageIcon } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stepIcons = [Phone, CalendarDays, Camera, ImageIcon];

export function ProcessSection() {
  const t = useTranslations("process");

  const steps = [0, 1, 2, 3].map((i) => ({
    number: t(`steps.${i}.number`),
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
    Icon: stepIcons[i],
  }));

  return (
    <SectionWrapper id="process" className="bg-secondary/50">
      <ScrollReveal direction="down">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <ScrollReveal
            key={i}
            delay={i * 0.15}
            direction={i % 2 === 0 ? "right" : "left"}
          >
            <div className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute inset-s-1/2 top-7 hidden h-0.5 w-full bg-border lg:block" />
              )}
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.Icon className="h-6 w-6" />
              </div>
              <div className="mt-1 text-xs font-bold text-primary">
                {step.number}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
