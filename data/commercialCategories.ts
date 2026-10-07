import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type CommercialCategory = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export const commercialCategories: readonly CommercialCategory[] = [
  {
    title: "Egypt Day Tours",
    description: "",
    href: "https://www.kemeryatours.com/egypt-day-tours",
    image: "/images/areas-we-support-cards/egypt-day-tours.webp",
  },
  {
    title: "Egypt Travel Packages",
    description: "",
    href: "https://www.kemeryatours.com/egypt-travel-packages",
    image: "/images/areas-we-support-cards/egypt-travel-packages.webp",
  },
  {
    title: "Shore Excursions",
    description: "",
    href: "https://www.kemeryatours.com/egypt-shore-excursions",
    image: "/images/areas-we-support-cards/shore-excursions.webp",
  },
  {
    title: "Nile Cruise",
    description: "",
    href: "https://www.kemeryatours.com/egypt-nile-cruise-tours",
    image: "/images/areas-we-support-cards/nile-cruise.webp",
  },
] as const;

export function getCommercialCategories(locale: Locale) {
  const copy = brandContent[locale].datasets.commercialCategories;
  if (copy.length !== commercialCategories.length) throw new Error(`Incomplete category translation: ${locale}`);
  return commercialCategories.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}