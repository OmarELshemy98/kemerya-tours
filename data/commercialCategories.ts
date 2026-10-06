import { datasetTranslations, type Locale } from "@/lib/i18n";

export type CommercialCategory = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const commercialCategories: readonly CommercialCategory[] = [
  {
    title: "Urban Discoveries",
    description:
      "Curated city experiences in Cairo, Alexandria, and Luxor — heritage sites, bazaars, and cultural immersion for urban travelers.",
    image:
      "https://images.unsplash.com/photo-2bgirUct1MU?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/urban",
  },
  {
    title: "Immersive Itineraries",
    description:
      "Deep cultural journeys with local communities, Egyptologist guides, and authentic experiences across Egypt's historic heartland.",
    image:
      "https://images.unsplash.com/photo-ycZRsz3aNyE?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/immersive",
  },
  {
    title: "Coastal Escapes",
    description:
      "Red Sea and Mediterranean coastlines — beach retreats, diving, and seaside relaxation with Egyptian hospitality.",
    image:
      "https://images.unsplash.com/photo-JIRsG1pmA7U?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/coastal",
  },
  {
    title: "Slow River Journeys",
    description:
      "Dahabiya sailing and Nile cruises — a gentler way to experience Egypt's river landscapes and riverside communities.",
    image:
      "https://images.unsplash.com/photo-sdOQl33RPLU?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/nile",
  },
] as const;

export function getCommercialCategories(locale: Locale) {
  if (locale === "en") return commercialCategories;
  const copy = datasetTranslations[locale].commercialCategories;
  if (copy.length !== commercialCategories.length) throw new Error(`Incomplete category translation: ${locale}`);
  return commercialCategories.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}