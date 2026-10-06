import { datasetTranslations, type Locale } from "@/lib/i18n";

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
    title: "Private Journeys",
    description:
      "Bespoke itineraries created exclusively for your client’s group, with private Egyptologist guides and first-class logistics.",
    icon: "pyramid" as const,
  },
  {
    title: "Group Programs",
    description:
      "Small-group departures (4–12 guests) designed for travel advisors who want predictable pricing and shared economies.",
    icon: "users" as const,
  },
  {
    title: "Tailor-Made Itineraries",
    description:
      "Every trip is built around your client’s interests, pace, and season — no fixed group dates.",
    icon: "map" as const,
  },
  {
    title: "Nile Cruises",
    description:
      "Five-star dahabiya and cruise experiences with expert-guided land excursions along the river.",
    icon: "ship" as const,
  },
  {
    title: "Shore Excursions",
    description:
      "Streamlined port experiences for Mediterranean and Red Sea cruise passengers — on-time, every time.",
    icon: "calendar" as const,
  },
  {
    title: "Cultural Immersion",
    description:
      "Authentic experiences — cooking classes, craft workshops, Nubian village visits, and local feasts.",
    icon: "sunset" as const,
  },
  {
    title: "Luxury Travel",
    description:
      "Five-star accommodations, private transfers, and elevated experiences for high-end clientele.",
    icon: "luxury" as const,
  },
  {
    title: "Accessible Travel",
    description:
      "Wheels-accessible itineraries and specially trained guides for travelers with mobility needs.",
    icon: "heart" as const,
  },
  {
    title: "Photography Safaris",
    description:
      "Professional photographer-led journeys timed for golden hour at Egypt’s most photogenic sites.",
    icon: "camera" as const,
  },
  {
    title: "Corporate & Incentive",
    description:
      "End-to-end incentive travel and corporate events with full project management and reporting.",
    icon: "briefcase" as const,
  },
  {
    title: "White-Label Services",
    description:
      "Full white-label partnership — your brand, your pricing, our Egypt operations under the hood.",
    icon: "globe" as const,
  },
  {
    title: "Custom Product Design",
    description:
      "Co-create unique Egypt products for your portfolio — exclusive access and private contracts.",
    icon: "puzzle" as const,
  },
] as const;

export function getCapabilities(locale: Locale) {
  if (locale === "en") return capabilities;
  const copy = datasetTranslations[locale].capabilities;
  if (copy.length !== capabilities.length) throw new Error(`Incomplete capabilities translation: ${locale}`);
  return capabilities.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}