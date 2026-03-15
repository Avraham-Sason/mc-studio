"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTABanner() {
  const t = useTranslations("ctaBanner");
  const locale = useLocale();

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-20 lg:py-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80')",
      }}
      aria-label="Call to action"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("headline")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {t("subheadline")}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full px-10 text-base"
          >
            <Link href={`/${locale}/contact`}>{t("cta")}</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
