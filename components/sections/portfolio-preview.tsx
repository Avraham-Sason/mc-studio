"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { PortfolioImage } from "@/lib/portfolio-data";

export function PortfolioPreview({ images }: { images: PortfolioImage[] }) {
  const t = useTranslations("portfolioPreview");
  const locale = useLocale() as "en" | "he";

  return (
    <SectionWrapper id="portfolio">
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

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <ScrollReveal
            key={img.id}
            delay={i * 0.1}
            direction={i % 3 === 0 ? "right" : i % 3 === 1 ? "up" : "left"}
          >
            <div className="mb-4 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.03]">
              <Link href={`/${locale}/portfolio`}>
                <div className="group relative">
                  <Image
                    src={img.src}
                    alt={img.alt[locale]}
                    width={img.width}
                    height={img.height}
                    className="w-full object-cover transition-all duration-300 group-hover:brightness-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    fetchPriority="low"
                    quality={70}
                  />
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="p-4 text-sm font-medium text-white">
                      {img.alt[locale]}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal direction="zoom">
        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/portfolio`}
            className="text-lg font-medium text-primary hover:underline"
          >
            {t("viewAll")}
          </Link>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
