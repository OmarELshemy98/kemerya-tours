import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.kemeryatours.com/en",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...locales.map((locale) => ({
      url: `https://www.kemeryatours.com/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 1 : 0.9,
    })),
  ];
}
