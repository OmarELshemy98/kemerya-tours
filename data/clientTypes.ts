import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type ClientType = {
  title: string;
  description: string;
  icon: ClientTypeIcon;
};

export type ClientTypeIcon =
  | "luxury"
  | "globe"
  | "users"
  | "map"
  | "briefcase"
  | "pyramid"
  | "ship";

export const clientTypes = [
  {
    title: "Travel agencies",
    description: "",
    icon: "luxury" as const,
  },
  {
    title: "Tour operators",
    description: "",
    icon: "globe" as const,
  },
  {
    title: "Travel advisors",
    description: "",
    icon: "users" as const,
  },
  {
    title: "Destination management companies",
    description: "",
    icon: "map" as const,
  },
  {
    title: "Travel wholesalers",
    description: "",
    icon: "briefcase" as const,
  },
  {
    title: "Luxury travel designers",
    description: "",
    icon: "pyramid" as const,
  },
  { title: "Group travel organizers", description: "", icon: "users" as const },
  { title: "Corporate and incentive travel", description: "", icon: "briefcase" as const },
  { title: "Cruise and shore-excursion partners", description: "", icon: "ship" as const },
] as const;

export function getClientTypes(locale: Locale) {
  const copy = brandContent[locale].datasets.clientTypes;
  if (copy.length !== clientTypes.length) throw new Error(`Incomplete client type translation: ${locale}`);
  return clientTypes.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}