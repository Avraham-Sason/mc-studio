"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Check } from "lucide-react";

const serviceImages: Record<string, string> = {
  events: "/images/Events/0Y0A3014.jpeg",
  brit: "/images/Events/0Y0A3268.jpeg",
  portraits: "/images/family/0Y0A0364.jpeg",
  commercial: "/images/pregnancy/0Y0A3368.jpeg",
};

export function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState(0);

  const itemCount = 4;
  const items = Array.from({ length: itemCount }, (_, i) => i).map((i) => ({
    id: t(`items.${i}.id`),
    title: t(`items.${i}.title`),
    tagline: t(`items.${i}.tagline`),
    description: t(`items.${i}.description`),
    features: Array.from({ length: 5 }, (_, j) =>
      t(`items.${i}.features.${j}`)
    ),
    cta: t(`items.${i}.cta`),
  }));

  const activeItem = items[activeTab];

  return (
    <SectionWrapper id="services">
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

      <ScrollReveal>
        <div className="mt-12">
          {/* Tab buttons */}
          <div className="mx-auto flex w-fit rounded-lg bg-muted p-1">
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(i)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-8">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                  <Image
                    src={serviceImages[activeItem.id]}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-6 lg:p-10">
                  <p className="text-sm font-medium text-primary">
                    {activeItem.tagline}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    {activeItem.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {activeItem.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {activeItem.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-fit rounded-full">
                    <Link href={`/${locale}/contact`}>{activeItem.cta}</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
