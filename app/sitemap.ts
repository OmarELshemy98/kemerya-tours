import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const sections = [
  "capabilities",
  "categories",
  "why-partner",
  "who-we-work-with",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...locales.map((locale) => ({
      url: `https://www.kemeryatours.com/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 1 : 0.9,
    })),
    ...locales.flatMap((locale) =>
      sections.map((section) => ({
        url: `https://www.kemeryatours.com/${locale}/${section}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ),
  ];
}
