import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const baseUrl = "https://mc-studio-eta.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.portfolio" });
  const alternateLocale = locale === "he" ? "en" : "he";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${baseUrl}/${locale}/portfolio`,
      languages: {
        [alternateLocale]: `${baseUrl}/${alternateLocale}/portfolio`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${locale}/portfolio`,
      siteName: "MC Studio",
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "MC Studio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
