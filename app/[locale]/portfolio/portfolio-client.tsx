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
import type { PortfolioImage } from "@/lib/portfolio-data";

type Category = PortfolioImage["category"];

const CATEGORY_IDS: Category[] = [
  "events",
  "family",
  "gender_reveal",
  "marriage_proposal",
  "pregnancy",
];

interface Props {
  images: PortfolioImage[];
  categoryCovers: Record<Category, string>;
}

export default function PortfolioClient({ images, categoryCovers }: Props) {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { value: "all", label: t("categories.all") },
    ...CATEGORY_IDS.map((id) => ({ value: id, label: t(`categories.${id}`) })),
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const categoryImageCount = (id: Category) =>
    images.filter((img) => img.category === id).length;

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
          {CATEGORY_IDS.map((id) => (
            <ScrollReveal key={id}>
              <Link href={`/${locale}/portfolio/${id}`}>
                <Card className="group overflow-hidden border-0 shadow-md transition-shadow hover:shadow-xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={categoryCovers[id]}
                      alt={t(`categories.${id}`)}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-xl font-bold text-white">
                        {t(`categories.${id}`)}
                      </h3>
                      <p className="text-sm text-white/70">
                        {t("imageCount", { count: categoryImageCount(id) })}
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
