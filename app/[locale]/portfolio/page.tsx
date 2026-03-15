import { getAllImages, getImagesByCategory } from "@/lib/get-portfolio-images";
import type { PortfolioImage } from "@/lib/portfolio-data";
import PortfolioClient from "./portfolio-client";

export const dynamic = "force-dynamic";

type Category = PortfolioImage["category"];
const CATEGORIES: Category[] = [
  "events",
  "family",
  "gender_reveal",
  "marriage_proposal",
  "pregnancy",
];

export default function PortfolioPage() {
  const images = getAllImages();

  const categoryCovers = Object.fromEntries(
    CATEGORIES.map((cat) => {
      const first = getImagesByCategory(cat)[0];
      return [cat, first?.src ?? ""];
    })
  ) as Record<Category, string>;

  return <PortfolioClient images={images} categoryCovers={categoryCovers} />;
}
