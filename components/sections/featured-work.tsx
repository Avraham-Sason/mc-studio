"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { featuredProjectsMeta } from "@/lib/portfolio-data";

interface FeaturedProject {
  category: string;
  title: { en: string; he: string };
  eventType: { en: string; he: string };
  location: { en: string; he: string };
  description: { en: string; he: string };
  clientQuote: { en: string; he: string };
  clientName: { en: string; he: string };
  images: string[];
}

export function FeaturedWork({ projectImages }: { projectImages: Record<string, string[]> }) {
  const t = useTranslations("featuredWork");
  const locale = useLocale() as "en" | "he";

  const projects: FeaturedProject[] = featuredProjectsMeta.map((p) => ({
    ...p,
    images: projectImages[p.category] ?? [],
  }));

  return (
    <SectionWrapper id="featured-work">
      <ScrollReveal direction="down">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </ScrollReveal>

      {projects.map((project, i) => (
        <ScrollReveal key={i} direction="zoom">
          <div className="mt-12 overflow-hidden rounded-2xl bg-card shadow-lg">
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
              {project.images.map((src, j) => (
                <div key={j} className="relative aspect-4/3">
                  <Image
                    src={src}
                    alt={`${project.title[locale]} - ${j + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    fetchPriority="low"
                    quality={70}
                  />
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span>{project.eventType[locale]}</span>
                <span>&middot;</span>
                <span>{project.location[locale]}</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold">
                {project.title[locale]}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {project.description[locale]}
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl bg-muted p-4">
                <Quote className="h-6 w-6 shrink-0 text-accent opacity-40" />
                <div>
                  <p className="italic">&ldquo;{project.clientQuote[locale]}&rdquo;</p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    — {project.clientName[locale]}
                  </p>
                </div>
              </div>

              <Link
                href={`/${locale}/portfolio/${project.category}`}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                {t("viewProject")}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </SectionWrapper>
  );
}
