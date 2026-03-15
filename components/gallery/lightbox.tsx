"use client";

import YARLightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { PortfolioImage } from "@/lib/portfolio-data";

export function Lightbox({
  images,
  locale,
  open,
  index,
  onClose,
}: {
  images: PortfolioImage[];
  locale: "en" | "he";
  open: boolean;
  index: number;
  onClose: () => void;
}) {
  const slides = images.map((img) => ({
    src: img.src.replace("w=1200", "w=2560").replace("q=85", "q=90"),
    alt: img.alt[locale],
    width: img.width,
    height: img.height,
  }));

  return (
    <YARLightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
      }}
      animation={{ fade: 300 }}
      controller={{ closeOnBackdropClick: true }}
    />
  );
}
