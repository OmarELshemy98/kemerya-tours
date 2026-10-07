import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type CommercialPoint = {
  title: string;
  description: string;
};

export const commercialPoints = [
  {
    title: "One local team",
    description: "",
  },
  {
    title: "Built around the brief",
    description: "",
  },
  {
    title: "Coordination on the ground",
    description: "",
  },
  {
    title: "Flexibility when plans change",
    description: "",
  },
  {
    title: "Your relationship stays yours",
    description: "",
  },
] as const;

export function getCommercialPoints(locale: Locale) {
  const copy = brandContent[locale].commercialConfidence.points;
  if (copy.length !== commercialPoints.length)
    throw new Error(`Incomplete commercial confidence translation: ${locale}`);
  return commercialPoints.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}
