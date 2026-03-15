"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { getImagesByCategory } from "@/lib/portfolio-data";

export default function FamilyGalleryPage() {
  const t = useTranslations("portfolio");
  const images = getImagesByCategory("family");

  return (
    <>
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/family/0Y0A0364.jpeg"
          alt={t("categories.family")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("categories.family")}
          </h1>
        </div>
      </div>
      <SectionWrapper>
        <GalleryGrid images={images} />
      </SectionWrapper>
    </>
  );
}
