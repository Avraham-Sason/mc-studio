"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Check } from "lucide-react";

const serviceImages: Record<string, string> = {
  weddings:
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
  portraits:
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=85",
  commercial:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=85",
};

export function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();

  const items = [0, 1, 2].map((i) => ({
    id: t(`items.${i}.id`),
    title: t(`items.${i}.title`),
    tagline: t(`items.${i}.tagline`),
    description: t(`items.${i}.description`),
    features: Array.from({ length: 5 }, (_, j) =>
      t(`items.${i}.features.${j}`)
    ),
    cta: t(`items.${i}.cta`),
  }));

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
        <Tabs defaultValue="weddings" className="mt-12">
          <TabsList className="mx-auto flex w-fit">
            {items.map((item) => (
              <TabsTrigger key={item.id} value={item.id}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {items.map((item) => (
            <TabsContent key={item.id} value={item.id} className="mt-8">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <Image
                      src={serviceImages[item.id]}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 lg:p-10">
                    <p className="text-sm font-medium text-primary">
                      {item.tagline}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-muted-foreground">
                      {item.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {item.features.map((feature, j) => (
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
                      <Link href={`/${locale}/contact`}>{item.cta}</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </ScrollReveal>
    </SectionWrapper>
  );
}
