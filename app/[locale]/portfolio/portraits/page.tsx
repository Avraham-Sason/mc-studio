"use client";

import { useTranslations } from "next-intl";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { getImagesByCategory } from "@/lib/portfolio-data";

export default function PortraitsGalleryPage() {
  const t = useTranslations("portfolio");
  const images = getImagesByCategory("portraits");

  return (
    <>
      <div
        className="relative bg-cover bg-center py-20 lg:py-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("categories.portraits")}
          </h1>
        </div>
      </div>
      <SectionWrapper>
        <GalleryGrid images={images} />
      </SectionWrapper>
    </>
  );
}
