import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type WhyPartnerIcon =
  | "expertise"
  | "brand"
  | "puzzle"
  | "ops"
  | "luxury"
  | "commission"
  | "client"
  | "globe"
  | "briefcase"
  | "users";

export type WhyPartnerItem = {
  title: string;
  description: string;
  icon: WhyPartnerIcon;
};

export const whyPartnerItems = [
  {
    title: "Local judgment, before the itinerary is set",
    description: "",
    icon: "expertise" as const,
  },
  {
    title: "Your traveler stays your traveler",
    description: "",
    icon: "brand" as const,
  },
  {
    title: "A program shaped around the person",
    description: "",
    icon: "puzzle" as const,
  },
  {
    title: "A local team you can reach",
    description: "",
    icon: "ops" as const,
  },
  {
    title: "Connected details, not isolated bookings",
    description: "",
    icon: "ops" as const,
  },
  {
    title: "Support while the journey is under way",
    description: "",
    icon: "client" as const,
  },
] as const;

export function getWhyPartner(locale: Locale) {
  const copy = brandContent[locale].datasets.whyPartner;
  if (copy.length !== whyPartnerItems.length) throw new Error(`Incomplete partner benefits translation: ${locale}`);
  return whyPartnerItems.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}