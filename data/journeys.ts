import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export const journeys = [
  {
    title: "Cairo and Giza, privately",
    description: "",
  },
  {
    title: "A journey shaped around the Nile",
    description: "",
  },
  {
    title: "The Red Sea and Sinai",
    description: "",
  },
  {
    title: "Egypt at a family pace",
    description: "",
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
