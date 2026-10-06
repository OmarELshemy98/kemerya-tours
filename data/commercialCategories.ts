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
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/urban",
  },
  {
    title: "Immersive Itineraries",
    description:
      "Deep cultural journeys with local communities, Egyptologist guides, and authentic experiences across Egypt's historic heartland.",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/immersive",
  },
  {
    title: "Coastal Escapes",
    description:
      "Red Sea and Mediterranean coastlines — beach retreats, diving, and seaside relaxation with Egyptian hospitality.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3c?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/coastal",
  },
  {
    title: "Slow River Journeys",
    description:
      "Dahabiya sailing and Nile cruises — a gentler way to experience Egypt's river landscapes and riverside communities.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com/nile",
  },
] as const;