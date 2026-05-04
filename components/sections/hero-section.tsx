"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  src: string;
  alt: { en: string; he: string };
}

export function HeroSection({ slides }: { slides: HeroSlide[] }) {
  const t = useTranslations("hero");
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shouldLoadHeroImage, setShouldLoadHeroImage] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState<Record<number, boolean>>({});
  const firstSlideLoaded = loadedSlides[0] === true;

  const nextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setShouldLoadHeroImage(true), 500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || !firstSlideLoaded) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [firstSlideLoaded, nextSlide, slides.length]);

  if (slides.length === 0) return null;

  const activeSlideIndex = currentSlide % slides.length;
  const activeSlide = slides[activeSlideIndex];
  const activeSlideLoaded = loadedSlides[activeSlideIndex] === true;

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-[#111]">
      <div className="mc-hero-backdrop absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,60,0.22),rgba(17,17,17,0.96)_65%)]" />

      {/* Background slideshow */}
      {shouldLoadHeroImage && (
        <div key={activeSlideIndex} className="absolute inset-0">
          <Image
            src={activeSlide.src}
            alt={activeSlide.alt[locale as "en" | "he"]}
            fill
            className={cn(
              "mc-hero-image object-cover",
              activeSlideLoaded && "mc-hero-image-loaded",
            )}
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            sizes="100vw"
            quality={65}
            onLoad={() =>
              setLoadedSlides((prev) =>
                prev[activeSlideIndex]
                  ? prev
                  : { ...prev, [activeSlideIndex]: true },
              )
            }
          />
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1
            className="mc-hero-title text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t("headline")}
          </h1>

          <p
            className="mc-hero-subtitle mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
          >
            {t("subheadline")}
          </p>

          <div
            className="mc-hero-actions mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base"
            >
              <Link href={`/${locale}/contact`}>{t("cta1")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 px-8 text-base  hover:bg-white/10"
            >
              <Link href={`/${locale}/portfolio`}>{t("cta2")}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 inset-s-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === activeSlideIndex
                ? "mc-hero-indicator w-8 bg-white"
                : "w-2 bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
