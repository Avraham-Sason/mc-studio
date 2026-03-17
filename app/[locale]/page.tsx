import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  getHeroSlides,
  getFeaturedImages,
  getCategoryImages,
} from "@/lib/get-portfolio-images";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsBar } from "@/components/sections/stats-bar";
import { ProcessSection } from "@/components/sections/process-section";
import { FeaturedWork } from "@/components/sections/featured-work";
import { PricingSection } from "@/components/sections/pricing-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTABanner } from "@/components/sections/cta-banner";
import {
  LocalBusinessJsonLd,
  ServicesJsonLd,
  WebSiteJsonLd,
  ReviewsJsonLd,
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
      canonical: `https://mc-studio-eta.vercel.app/${locale}`,
      languages: {
        [alternateLocale]: `https://mc-studio-eta.vercel.app/${alternateLocale}`,
      },
    },
    verification:{
      google:"CfjZbp3yup8UaN0Fvqi9QeoIuASrSjAzAFJNVXugR9Y"
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://mc-studio-eta.vercel.app/${locale}`,
      siteName: "MC Studio",
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "MC Studio — Professional Photography",
        },
      ],
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

  const heroSlides = getHeroSlides();
  const featuredImages = getFeaturedImages();
  const projectImages = { events: getCategoryImages("events", 4) };

  return (
    <>
      <LocalBusinessJsonLd locale={locale} />
      <ServicesJsonLd locale={locale} />
      <WebSiteJsonLd />
      <ReviewsJsonLd locale={locale} />
      <HeroSection slides={heroSlides} />
      <PortfolioPreview images={featuredImages} />
      <WhyUsSection />
      <ServicesSection />
      <StatsBar />
      <ProcessSection />
      <FeaturedWork projectImages={projectImages} />
      <PricingSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
