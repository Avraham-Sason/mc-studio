import type { MetadataRoute } from "next";
import { getCategoryKeys } from "@/lib/get-portfolio-images";

const baseUrl = "https://mc-studio-eta.vercel.app";

const priorityMap: Record<string, number> = {
  "": 1,
  "/portfolio": 0.9,
  "/contact": 0.9,
  "/about": 0.8,
  "/privacy": 0.3,
  "/terms": 0.3,
};

const frequencyMap: Record<string, "weekly" | "monthly" | "yearly"> = {
  "": "weekly",
  "/portfolio": "weekly",
  "/contact": "monthly",
  "/about": "monthly",
  "/privacy": "yearly",
  "/terms": "yearly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["he", "en"];
  const categories = getCategoryKeys();

  const staticRoutes = [
    "",
    "/portfolio",
    "/contact",
    "/about",
    "/privacy",
    "/terms",
  ];
  const categoryRoutes = categories.map((cat) => `/portfolio/${cat}`);

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: frequencyMap[route] ?? "monthly",
        priority: priorityMap[route] ?? 0.7,
      });
    }

    for (const route of categoryRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  return entries;
}
