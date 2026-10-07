import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type ProgramCapability = {
  title: string;
  description: string;
};

export const programCapabilities = [
  {
    title: "Private journeys",
    description: "",
  },
  {
    title: "Multi-day programs",
    description: "",
  },
  {
    title: "Nile experiences",
    description: "",
  },
  {
    title: "Shore excursions",
    description: "",
  },
  {
    title: "Group travel",
    description: "",
  },
  {
    title: "Luxury travel",
    description: "",
  },
  {
    title: "Desert, Red Sea and Sinai",
    description: "",
  },
  {
    title: "Accessible travel",
    description: "",
  },
] as const;

export function getProgramCapabilities(locale: Locale) {
  const copy = brandContent[locale].programCapabilities.items;
  if (copy.length !== programCapabilities.length)
    throw new Error(`Incomplete program capabilities translation: ${locale}`);
  return programCapabilities.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}
