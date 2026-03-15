import type { MetadataRoute } from "next";

const baseUrl = "https://mc-studio-eta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["he", "en"];
  const routes = [
    "",
    "/portfolio",
    "/portfolio/events",
    "/portfolio/family",
    "/portfolio/pregnancy",
    "/portfolio/gender_reveal",
    "/portfolio/marriage_proposal",
    "/contact",
    "/about",
    "/privacy",
    "/terms",
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/portfolio" ? 0.9 : 0.7,
    }))
  );
}
