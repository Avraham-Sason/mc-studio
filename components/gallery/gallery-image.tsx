"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import type { PortfolioImage } from "@/lib/portfolio-data";

export function GalleryImage({
  image,
  locale,
  onClick,
}: {
  image: PortfolioImage;
  locale: "en" | "he";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <Image
        src={image.src}
        alt={image.alt[locale]}
        width={image.width}
        height={image.height}
        className="w-full object-cover transition-all duration-300 group-hover:brightness-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        loading="lazy"
        fetchPriority="low"
        quality={70}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
        <Expand className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </button>
  );
}
