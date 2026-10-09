import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type CategorySubcategory = {
  label: string;
  href: string;
};

export type CommercialCategory = {
  number: string;
  title: string;
  description: string;
  href: string;
  image: string;
  b2bBlurb: string;
  subcategories: readonly CategorySubcategory[];
};

export const commercialCategories: readonly CommercialCategory[] = [
  {
    number: "01",
    title: "Egypt Day Tours",
    description: "",
    href: "https://www.kemeryatours.com/egypt-day-tours",
    image: "/images/areas-we-support-cards/egypt-day-tours.webp",
    b2bBlurb: "",
    subcategories: [
      { label: "Cairo Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#cairo" },
      { label: "Luxor Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#luxor" },
      { label: "Aswan Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#aswan" },
      { label: "Hurghada Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#hurghada" },
      { label: "Sharm El Sheikh Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#sharm" },
      { label: "Dahab Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#dahab" },
      { label: "Taba Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#taba" },
      { label: "Marsa Alam Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#marsa-alam" },
      { label: "Alexandria Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#alexandria" },
      { label: "Nuweiba Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#nuweiba" },
      { label: "Accessible Day Tours", href: "https://www.kemeryatours.com/egypt-day-tours#accessible" },
    ],
  },
  {
    number: "02",
    title: "Egypt Travel Packages",
    description: "",
    href: "https://www.kemeryatours.com/egypt-travel-packages",
    image: "/images/areas-we-support-cards/egypt-travel-packages.webp",
    b2bBlurb: "",
    subcategories: [
      { label: "Egypt Classic Tours", href: "https://www.kemeryatours.com/egypt-travel-packages#classic" },
      { label: "Egypt Luxury Tours", href: "https://www.kemeryatours.com/egypt-travel-packages#luxury" },
      { label: "Egypt Family Tours", href: "https://www.kemeryatours.com/egypt-travel-packages#family" },
      { label: "Egypt Safari Tours", href: "https://www.kemeryatours.com/egypt-travel-packages#safari" },
      { label: "Egypt Honeymoon Tours", href: "https://www.kemeryatours.com/egypt-travel-packages#honeymoon" },
      { label: "Egypt Short Break Tours", href: "https://www.kemeryatours.com/egypt-travel-packages#short-break" },
      { label: "Accessible Trips", href: "https://www.kemeryatours.com/egypt-travel-packages#accessible" },
      { label: "Egypt Budget Tours", href: "https://www.kemeryatours.com/egypt-travel-packages#budget" },
      { label: "Egypt Christmas Tours", href: "https://www.kemeryatours.com/egypt-travel-packages#christmas" },
      { label: "Egypt Easter Tours", href: "https://www.kemeryatours.com/egypt-travel-packages#easter" },
      { label: "Egypt Group Tour Packages", href: "https://www.kemeryatours.com/egypt-travel-packages#group" },
      { label: "Egypt Vacations", href: "https://www.kemeryatours.com/egypt-travel-packages#vacations" },
    ],
  },
  {
    number: "03",
    title: "Egypt Shore Excursions",
    description: "",
    href: "https://www.kemeryatours.com/egypt-shore-excursions",
    image: "/images/areas-we-support-cards/shore-excursions.webp",
    b2bBlurb: "",
    subcategories: [
      { label: "Alexandria Shore Excursions", href: "https://www.kemeryatours.com/egypt-shore-excursions#alexandria" },
      { label: "Safaga Shore Excursions", href: "https://www.kemeryatours.com/egypt-shore-excursions#safaga" },
      { label: "Port Said Shore Excursions", href: "https://www.kemeryatours.com/egypt-shore-excursions#port-said" },
      { label: "Sokhna Excursions", href: "https://www.kemeryatours.com/egypt-shore-excursions#sokhna" },
    ],
  },
  {
    number: "04",
    title: "Egypt Nile Cruise Tours",
    description: "",
    href: "https://www.kemeryatours.com/egypt-nile-cruise-tours",
    image: "/images/areas-we-support-cards/nile-cruise.webp",
    b2bBlurb: "",
    subcategories: [
      { label: "Dahabiya Nile Cruise", href: "https://www.kemeryatours.com/egypt-nile-cruise-tours#dahabiya" },
      { label: "Luxor & Aswan Nile Cruise", href: "https://www.kemeryatours.com/egypt-nile-cruise-tours#luxor-aswan" },
    ],
  },
] as const;

export function getCommercialCategories(locale: Locale) {
  const copy = brandContent[locale].datasets.commercialCategories;
  const subcatLabels = brandContent[locale].datasets.commercialCategoriesSubcategories;
  if (copy.length !== commercialCategories.length) throw new Error(`Incomplete category translation: ${locale}`);
  return commercialCategories.map((item, index) => {
    const labels = subcatLabels[index] || [];
    const subcategories = item.subcategories.map((sub, i) => ({
      ...sub,
      label: labels[i] || sub.label,
    }));
    return {
      ...item,
      title: copy[index][0],
      description: copy[index][1],
      b2bBlurb: copy[index][2] || "",
      subcategories,
    };
  });
}