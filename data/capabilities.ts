import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type Capability = {
  title: string;
  description: string;
  icon: CapabilityIcon;
};

export type CapabilityIcon =
  | "pyramid"
  | "ship"
  | "users"
  | "map"
  | "calendar"
  | "camera"
  | "heart"
  | "briefcase"
  | "globe"
  | "sunset"
  | "luxury"
  | "puzzle";

export const capabilities = [
  {
    title: "Private and tailor-made journeys",
    description: "",
    icon: "pyramid" as const,
  },
  {
    title: "Egyptologist-guided travel",
    description: "",
    icon: "users" as const,
  },
  {
    title: "Nile cruises and stays",
    description: "",
    icon: "map" as const,
  },
  {
    title: "Shore excursions",
    description: "",
    icon: "ship" as const,
  },
  {
    title: "Desert, Red Sea and Sinai",
    description: "",
    icon: "calendar" as const,
  },
  {
    title: "Groups, families and honeymoons",
    description: "",
    icon: "sunset" as const,
  },
  {
    title: "Private air-conditioned vehicles",
    description: "",
    icon: "luxury" as const,
  },
  {
    title: "Accessible and multilingual support",
    description: "",
    icon: "heart" as const,
  },
] as const;

export function getCapabilities(locale: Locale) {
  const copy = brandContent[locale].datasets.capabilities;
  if (copy.length !== capabilities.length) throw new Error(`Incomplete capabilities translation: ${locale}`);
  return capabilities.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}