"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { CategoryFilter } from "@/components/gallery/category-filter";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  portfolioImages,
  getImagesByCategory,
} from "@/lib/portfolio-data";

const categoryCards = [
  {
    id: "weddings" as const,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
  },
  {
    id: "portraits" as const,
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=85",
  },
  {
    id: "commercial" as const,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=85",
  },
];

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { value: "all", label: t("categories.all") },
    { value: "weddings", label: t("categories.weddings") },
    { value: "portraits", label: t("categories.portraits") },
    { value: "commercial", label: t("categories.commercial") },
  ];

  const filteredImages =
    activeCategory === "all"
      ? portfolioImages
      : getImagesByCategory(
          activeCategory as "weddings" | "portraits" | "commercial"
        );

  return (
    <>
      {/* Hero */}
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

      {/* Category Cards */}
      <SectionWrapper>
        <div className="grid gap-6 sm:grid-cols-3">
          {categoryCards.map((cat) => (
            <ScrollReveal key={cat.id}>
              <Link href={`/${locale}/portfolio/${cat.id}`}>
                <Card className="group overflow-hidden border-0 shadow-md transition-shadow hover:shadow-xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={cat.image}
                      alt={t(`categories.${cat.id}`)}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-xl font-bold text-white">
                        {t(`categories.${cat.id}`)}
                      </h3>
                      <p className="text-sm text-white/70">
                        {t("imageCount", {
                          count: getImagesByCategory(cat.id).length,
                        })}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Mixed Gallery */}
      <SectionWrapper>
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <div className="mt-8">
          <GalleryGrid images={filteredImages} />
        </div>
      </SectionWrapper>
    </>
  );
}
