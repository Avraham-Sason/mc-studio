"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTABanner() {
  const t = useTranslations("ctaBanner");
  const locale = useLocale();

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      aria-label="Call to action"
    >
      <Image
        src="/images/marriage_proposal/0Y0A1685.jpeg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        loading="lazy"
        fetchPriority="low"
        quality={70}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <ScrollReveal direction="zoom">
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
