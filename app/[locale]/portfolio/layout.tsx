import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.portfolio" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        [locale === "he" ? "en" : "he"]: `https://mcstudio.co.il/${locale === "he" ? "en" : "he"}/portfolio`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
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
