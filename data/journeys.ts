import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export const journeys = [
  {
    title: "Cairo and Giza, privately",
    description: "",
    image:
      "https://images.unsplash.com/photo-QAPH2rhEMtU?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "A journey shaped around the Nile",
    description: "",
    image:
      "https://images.unsplash.com/photo-ycZRsz3aNyE?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Red Sea and Sinai",
    description: "",
    image:
      "https://images.unsplash.com/photo-8LbpYRX-Nlg?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Egypt at a family pace",
    description: "",
    image:
      "https://images.unsplash.com/photo-esxEOZJu4ug?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export function getJourneys(locale: Locale) {
  const copy = brandContent[locale].datasets.journeys;
  if (copy.length !== journeys.length) throw new Error(`Incomplete journeys translation: ${locale}`);
  return journeys.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}
