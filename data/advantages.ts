import { datasetTranslations, type Locale } from "@/lib/i18n";

export type Advantage = {
  title: string;
  description: string;
};

type AdvantageIcon = "client" | "ops" | "expertise" | "commission" | "brand";

export type AdvantageData = {
  title: string;
  description: string;
  icon: AdvantageIcon;
};

export const advantages = [
  {
    title: "CLIENT RELATIONSHIP",
    description: "Yours to own and nurture. We never contact your clients directly.",
    icon: "client" as const,
  },
  {
    title: "LOGISTICS & OPERATIONS",
    description: "Ours to execute flawlessly — permits, transport, guides, and every detail on the ground.",
    icon: "ops" as const,
  },
  {
    title: "LOCAL EXPERTISE",
    description: "Egyptologist guides, Nubian storytellers, and Bedouin hosts available for every itinerary.",
    icon: "expertise" as const,
  },
  {
    title: "COMMISSION STRUCTURE",
    description: "Transparent, competitive FAM rates. You set your own markup and client pricing.",
    icon: "commission" as const,
  },
  {
    title: "BRAND ALIGNMENT",
    description: "Your brand, your voice, our delivery. White-label operations across the board.",
    icon: "brand" as const,
  },
] as const;

export function getAdvantages(locale: Locale) {
  if (locale === "en") return advantages;
  const copy = datasetTranslations[locale].advantages;
  if (copy.length !== advantages.length) throw new Error(`Incomplete advantages translation: ${locale}`);
  return advantages.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}