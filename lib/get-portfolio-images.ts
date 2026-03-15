import fs from "fs";
import path from "path";
import type { PortfolioImage } from "./portfolio-data";

type Category = PortfolioImage["category"];

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const categoryConfig: Record<Category, { folder: string; alt: { en: string; he: string } }> = {
  events: {
    folder: "Events",
    alt: { en: "Event photography", he: "צילום אירועים" },
  },
  family: {
    folder: "family",
    alt: { en: "Family photography", he: "צילום משפחה" },
  },
  gender_reveal: {
    folder: "gender_reveal",
    alt: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" },
  },
  marriage_proposal: {
    folder: "marriage_proposal",
    alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" },
  },
  pregnancy: {
    folder: "pregnancy",
    alt: { en: "Pregnancy photography", he: "צילום הריון" },
  },
};

export function getImagesByCategory(category: Category): PortfolioImage[] {
  const { folder, alt } = categoryConfig[category];
  const dir = path.join(process.cwd(), "public", "images", folder);

  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort()
    .map((file, index) => ({
      id: `${category}-${index}`,
      src: `/images/${folder}/${file}`,
      alt,
      category,
      width: 1200,
      height: 800,
      featured: index === 0,
      priority: index === 0,
    }));
}

export function getAllImages(): PortfolioImage[] {
  return (Object.keys(categoryConfig) as Category[]).flatMap(getImagesByCategory);
}

export function getHeroSlides(): { src: string; alt: { en: string; he: string } }[] {
  const order: Category[] = ["events", "family", "marriage_proposal", "pregnancy", "gender_reveal"];
  return order
    .map((cat) => {
      const first = getImagesByCategory(cat)[0];
      return first ? { src: first.src, alt: categoryConfig[cat].alt } : null;
    })
    .filter(Boolean) as { src: string; alt: { en: string; he: string } }[];
}

export function getFeaturedImages(): PortfolioImage[] {
  return (Object.keys(categoryConfig) as Category[])
    .map((cat) => getImagesByCategory(cat)[0])
    .filter(Boolean) as PortfolioImage[];
}

export function getCategoryImages(category: Category, count: number): string[] {
  return getImagesByCategory(category)
    .slice(0, count)
    .map((img) => img.src);
}
