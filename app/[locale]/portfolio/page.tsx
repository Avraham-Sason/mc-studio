import { getAllImages, getImagesByCategory, getCategoryKeys, formatCategoryLabel } from "@/lib/get-portfolio-images";
import PortfolioClient from "./portfolio-client";

export const dynamic = "force-dynamic";

export default function PortfolioPage() {
  const categories = getCategoryKeys();
  const images = getAllImages();

  const categoryCovers = Object.fromEntries(
    categories.map((cat) => {
      const first = getImagesByCategory(cat)[0];
      return [cat, first?.src ?? ""];
    })
  ) as Record<string, string>;

  const categoryLabels = Object.fromEntries(
    categories.map((cat) => [cat, formatCategoryLabel(cat)])
  ) as Record<string, { en: string; he: string }>;

  return <PortfolioClient images={images} categoryCovers={categoryCovers} categories={categories} categoryLabels={categoryLabels} />;
}
