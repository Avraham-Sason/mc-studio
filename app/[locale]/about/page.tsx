"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function AboutPage() {
  const t = useTranslations("about");

  const bio = [0, 1, 2].map((i) => t(`bio.${i}`));
  const values = [0, 1, 2].map((i) => ({
    title: t(`values.${i}.title`),
    description: t(`values.${i}.description`),
  }));

  return (
    <>
      <div className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/family/70CFE7C-8A5B-4393-B9A7-C7A1C7E074AB~photo.jpeg"
                alt="MC Studio photographer behind the scenes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col justify-center">
              {bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 first:mt-0 text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/50">
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card className="h-full border-0 bg-card shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
