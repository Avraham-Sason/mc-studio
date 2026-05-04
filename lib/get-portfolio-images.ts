import fs from "fs";
import path from "path";
import type { PortfolioImage } from "./portfolio-data";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const isProduction = process.env.NODE_ENV === "production";

let categoriesCache: { key: string; folder: string }[] | null = null;
const imagesByCategoryCache = new Map<string, PortfolioImage[]>();

/** Known bilingual alt text for categories. Unknown categories get a generic label. */
const CATEGORY_ALT: Record<string, { en: string; he: string }> = {
  events: { en: "Event photography", he: "צילום אירועים" },
  family: { en: "Family photography", he: "צילום משפחה" },
  gender_reveal: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" },
  marriage_proposal: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" },
  pregnancy: { en: "Pregnancy photography", he: "צילום הריון" },
  purim: { en: "Purim photography", he: "צילום פורים" },
};

/** Files/folders inside public/images that are NOT portfolio categories */
const IGNORE = new Set([
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "logo_big.png",
  "logo_small.png",
  "og-image.png",
]);

/**
 * Discover all category folders inside public/images dynamically.
 * Returns an array of { key, folder } where key is the lowercase folder name
 * and folder is the actual folder name on disk (may differ in casing).
 */
export function getCategories(): { key: string; folder: string }[] {
  if (categoriesCache) return categoriesCache;

  let entries: string[];
  try {
    entries = fs.readdirSync(IMAGES_DIR);
  } catch {
    return [];
  }

  const categories = entries
    .filter((entry) => {
      if (IGNORE.has(entry)) return false;
      try {
        return fs.statSync(path.join(IMAGES_DIR, entry)).isDirectory();
      } catch {
        return false;
      }
    })
    .map((folder) => ({ key: folder.toLowerCase(), folder }))
    .sort((a, b) => a.key.localeCompare(b.key));

  if (isProduction) {
    categoriesCache = categories;
  }

  return categories;
}

/** Get the list of category keys (lowercase). */
export function getCategoryKeys(): string[] {
  return getCategories().map((c) => c.key);
}

function getAlt(key: string): { en: string; he: string } {
  if (CATEGORY_ALT[key]) return CATEGORY_ALT[key];
  const label = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return { en: `${label} photography`, he: `צילום ${label}` };
}

/** Find the actual folder name for a category key (case-insensitive match). */
function resolveFolder(categoryKey: string): string | null {
  const cat = getCategories().find((c) => c.key === categoryKey);
  return cat?.folder ?? null;
}

export function getImagesByCategory(category: string): PortfolioImage[] {
  const categoryKey = category.toLowerCase();
  const cachedImages = imagesByCategoryCache.get(categoryKey);
  if (cachedImages) return cachedImages;

  const folder = resolveFolder(categoryKey);
  if (!folder) return [];

  const dir = path.join(IMAGES_DIR, folder);
  const alt = getAlt(categoryKey);

  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  const images = files
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort()
    .map((file, index) => ({
      id: `${categoryKey}-${index}`,
      src: `/images/${folder}/${file}`,
      alt,
      category: categoryKey,
      width: 1200,
      height: 800,
      featured: index === 0,
      priority: index === 0,
    }));

  if (isProduction) {
    imagesByCategoryCache.set(categoryKey, images);
  }

  return images;
}

export function getAllImages(): PortfolioImage[] {
  return getCategoryKeys().flatMap(getImagesByCategory);
}

export function getHeroSlides(): { src: string; alt: { en: string; he: string } }[] {
  return getCategoryKeys()
    .map((key) => {
      const first = getImagesByCategory(key)[0];
      return first ? { src: first.src, alt: getAlt(key) } : null;
    })
    .filter(Boolean) as { src: string; alt: { en: string; he: string } }[];
}

export function getFeaturedImages(): PortfolioImage[] {
  return getCategoryKeys()
    .map((key) => getImagesByCategory(key)[0])
    .filter(Boolean) as PortfolioImage[];
}

export function getCategoryImages(category: string, count: number): string[] {
  return getImagesByCategory(category)
    .slice(0, count)
    .map((img) => img.src);
}

/**
 * Format a category key into a display label.
 * Used as fallback when no translation key exists.
 */
export function formatCategoryLabel(key: string): { en: string; he: string } {
  if (CATEGORY_ALT[key]) {
    // Derive a short label from the alt text (remove " photography" / "צילום ")
    const en = CATEGORY_ALT[key].en.replace(/ photography$/i, "");
    const he = CATEGORY_ALT[key].he.replace(/^צילום /, "");
    return {
      en: en.replace(/\b\w/g, (c) => c.toUpperCase()),
      he,
    };
  }
  const label = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return { en: label, he: label };
}
