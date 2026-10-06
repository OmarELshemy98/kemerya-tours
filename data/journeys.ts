import { datasetTranslations, type Locale } from "@/lib/i18n";

export const journeys = [
  {
    title: "Cairo & Giza Private Journey",
    description:
      "A rich, immersive introduction to Egypt with personal guidance through its most iconic sites.",
    image:
      "https://images.unsplash.com/photo-QAPH2rhEMtU?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com",
  },
  {
    title: "Luxury Egypt Journey",
    description:
      "Elegant stays, smooth planning, and carefully paced experiences across the country’s most memorable destinations.",
    image:
      "https://images.unsplash.com/photo-ycZRsz3aNyE?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com",
  },
  {
    title: "Nile Dahabiya Journey",
    description:
      "A slower, intimate voyage along the Nile with a calmer rhythm and a deeper sense of place.",
    image:
      "https://images.unsplash.com/photo-8LbpYRX-Nlg?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com",
  },
  {
    title: "Egypt Family Journey",
    description:
      "Thoughtful itineraries for families, with easy flow, private guidance, and experiences suited to every age.",
    image:
      "https://images.unsplash.com/photo-esxEOZJu4ug?auto=format&fit=crop&w=900&q=80",
    href: "https://www.kemeryatours.com",
  },
] as const;

export function getJourneys(locale: Locale) {
  if (locale === "en") return journeys;
  const copy = datasetTranslations[locale].journeys;
  if (copy.length !== journeys.length) throw new Error(`Incomplete journeys translation: ${locale}`);
  return journeys.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}
