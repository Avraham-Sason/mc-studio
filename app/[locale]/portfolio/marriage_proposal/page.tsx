import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { getImagesByCategory } from "@/lib/get-portfolio-images";

export const dynamic = "force-dynamic";

export default async function MarriageProposalGalleryPage() {
  const t = await getTranslations("portfolio");
  const images = getImagesByCategory("marriage_proposal");
  const heroSrc = images[0]?.src ?? "/images/marriage_proposal/0Y0A1685.jpeg";

  return (
    <>
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src={heroSrc}
          alt={t("categories.marriage_proposal")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("categories.marriage_proposal")}
          </h1>
        </div>
      </div>
      <SectionWrapper>
        <GalleryGrid images={images} />
      </SectionWrapper>
    </>
  );
}
