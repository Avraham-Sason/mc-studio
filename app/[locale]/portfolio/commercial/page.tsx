"use client";

import { useTranslations } from "next-intl";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { getImagesByCategory } from "@/lib/portfolio-data";

export default function CommercialGalleryPage() {
  const t = useTranslations("portfolio");
  const images = getImagesByCategory("commercial");

  return (
    <>
      <div
        className="relative bg-cover bg-center py-20 lg:py-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("categories.commercial")}
          </h1>
        </div>
      </div>
      <SectionWrapper>
        <GalleryGrid images={images} />
      </SectionWrapper>
    </>
  );
}
