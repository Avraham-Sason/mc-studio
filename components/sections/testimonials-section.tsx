"use client";

import { useTranslations, useLocale } from "next-intl";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const tc = useTranslations("common");
  const locale = useLocale();
  const isRtl = locale === "he";

  const items = [0, 1, 2, 3, 4].map((i) => ({
    quote: t(`items.${i}.quote`),
    name: t(`items.${i}.name`),
    eventType: t(`items.${i}.eventType`),
    location: t(`items.${i}.location`),
  }));

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    direction: isRtl ? "rtl" : "ltr",
  });

  const scrollPrev = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <SectionWrapper id="testimonials">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </ScrollReveal>

      <div className="relative mt-12">
        {/* Embla container needs dir for proper RTL sliding */}
        <div ref={emblaRef} className="overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
          <div className="flex gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_45%]"
              >
                <Card className="h-full border-0 bg-card shadow-sm">
                  <CardContent className="p-6 lg:p-8">
                    <Quote className="h-8 w-8 text-accent opacity-30" />
                    <blockquote className="mt-4 text-lg leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6 border-t border-border pt-4">
                      <cite className="not-italic">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.eventType} &middot; {item.location}
                        </p>
                      </cite>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons always in LTR order: ← prev | next → */}
        <div className="mt-6 flex justify-center gap-3" dir="ltr">
          <button
            onClick={scrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"
            aria-label={tc("previous")}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"
            aria-label={tc("next")}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
