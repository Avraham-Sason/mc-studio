import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsBar } from "@/components/sections/stats-bar";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FeaturedWork } from "@/components/sections/featured-work";
import { PricingSection } from "@/components/sections/pricing-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTABanner } from "@/components/sections/cta-banner";
import {
  LocalBusinessJsonLd,
  ServicesJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });
  const alternateLocale = locale === "he" ? "en" : "he";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://mcstudio.co.il/${locale}`,
      languages: {
        [alternateLocale]: `https://mcstudio.co.il/${alternateLocale}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://mcstudio.co.il/${locale}`,
      siteName: "MC Studio",
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <LocalBusinessJsonLd locale={locale} />
      <ServicesJsonLd />
      <WebSiteJsonLd />
      <HeroSection />
      <PortfolioPreview />
      <WhyUsSection />
      <ServicesSection />
      <StatsBar />
      <TestimonialsSection />
      <ProcessSection />
      <FeaturedWork />
      <PricingSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
