import type { MetadataRoute } from "next";

const baseUrl = "https://mcstudio.co.il";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["he", "en"];
  const routes = [
    "",
    "/portfolio",
    "/portfolio/weddings",
    "/portfolio/portraits",
    "/portfolio/commercial",
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
