import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ImageGalleryJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getImagesByCategory, getCategoryKeys, formatCategoryLabel } from "@/lib/get-portfolio-images";

export const dynamic = "force-dynamic";

const baseUrl = "https://mc-studio-eta.vercel.app";

export async function generateStaticParams() {
  const categories = getCategoryKeys();
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  const alternateLocale = locale === "he" ? "en" : "he";

  let title: string;
  let description: string;

  try {
    const t = await getTranslations({ locale, namespace: "seo.categories" });
    title = t(`${category}.title`);
    description = t(`${category}.description`);
  } catch {
    const label = formatCategoryLabel(category);
    const displayName = label[locale as "en" | "he"] ?? label.en;
    title = `${displayName} — MC Studio`;
    description = `${displayName} photography by MC Studio`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/portfolio/${category}`,
      languages: {
        [alternateLocale]: `${baseUrl}/${alternateLocale}/portfolio/${category}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/portfolio/${category}`,
      siteName: "MC Studio",
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "MC Studio" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CategoryGalleryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const validCategories = getCategoryKeys();

  if (!validCategories.includes(category)) {
    notFound();
  }

  const images = getImagesByCategory(category);
  const heroSrc = images[0]?.src ?? "";
  const label = formatCategoryLabel(category);
  const displayName = label[locale as "en" | "he"] ?? label.en;

  return (
    <>
      <ImageGalleryJsonLd
        images={images.map((img) => ({ src: img.src, alt: img.alt[locale as "en" | "he"] ?? img.alt.en }))}
        name={displayName}
        description={`${displayName} — MC Studio Photography`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "MC Studio", url: `${baseUrl}/${locale}` },
          { name: locale === "he" ? "גלריה" : "Portfolio", url: `${baseUrl}/${locale}/portfolio` },
          { name: displayName, url: `${baseUrl}/${locale}/portfolio/${category}` },
        ]}
      />
      <div className="relative py-20 lg:py-28 overflow-hidden">
        {heroSrc && (
          <Image
            src={heroSrc}
            alt={displayName}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {displayName}
          </h1>
        </div>
      </div>
      <SectionWrapper>
        <GalleryGrid images={images} />
      </SectionWrapper>
    </>
  );
}
