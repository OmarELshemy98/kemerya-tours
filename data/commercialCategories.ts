import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type CommercialCategory = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const commercialCategories: readonly CommercialCategory[] = [
  {
    title: "Egypt Day Tours",
    description: "",
    image:
      "https://images.unsplash.com/photo-2bgirUct1MU?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/egypt-day-tours",
  },
  {
    title: "Egypt Travel Packages",
    description: "",
    image:
      "https://images.unsplash.com/photo-ycZRsz3aNyE?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/egypt-travel-packages",
  },
  {
    title: "Shore Excursions",
    description: "",
    image:
      "https://images.unsplash.com/photo-JIRsG1pmA7U?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/egypt-shore-excursions",
  },
  {
    title: "Nile Cruise",
    description: "",
    image:
      "https://images.unsplash.com/photo-sdOQl33RPLU?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/egypt-nile-cruise-tours",
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