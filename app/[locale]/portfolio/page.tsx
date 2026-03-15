"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";
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
    id: "events" as const,
    image: "/images/Events/0Y0A3014.jpeg",
  },
  {
    id: "family" as const,
    image: "/images/family/0Y0A0364.jpeg",
  },
  {
    id: "gender_reveal" as const,
    image: "/images/gender_reveal/0Y0A0069.jpeg",
  },
  {
    id: "marriage_proposal" as const,
    image: "/images/marriage_proposal/0Y0A1685.jpeg",
  },
  {
    id: "pregnancy" as const,
    image: "/images/pregnancy/0Y0A3368.jpeg",
  },
];

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { value: "all", label: t("categories.all") },
    { value: "events", label: t("categories.events") },
    { value: "family", label: t("categories.family") },
    { value: "gender_reveal", label: t("categories.gender_reveal") },
    { value: "marriage_proposal", label: t("categories.marriage_proposal") },
    { value: "pregnancy", label: t("categories.pregnancy") },
  ];

  const filteredImages =
    activeCategory === "all"
      ? portfolioImages
      : getImagesByCategory(
          activeCategory as "events" | "family" | "gender_reveal" | "marriage_proposal" | "pregnancy"
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
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
