"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { GalleryImage } from "./gallery-image";
import { Lightbox } from "./lightbox";
import type { PortfolioImage } from "@/lib/portfolio-data";

export function GalleryGrid({ images }: { images: PortfolioImage[] }) {
  const locale = useLocale() as "en" | "he";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {images.map((img, i) => (
          <div key={img.id} className="mb-4 break-inside-avoid">
            <GalleryImage
              image={img}
              locale={locale}
              onClick={() => openLightbox(i)}
            />
          </div>
        ))}
      </div>

      <Lightbox
        images={images}
        locale={locale}
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
