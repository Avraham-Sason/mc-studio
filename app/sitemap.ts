import type { MetadataRoute } from "next";
import { getCategoryKeys } from "@/lib/get-portfolio-images";

const baseUrl = "https://mc-studio-eta.vercel.app";

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
  const routes = [...staticRoutes, ...categoryRoutes];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/portfolio" ? 0.9 : 0.7,
    }))
  );
}
