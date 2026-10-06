import { datasetTranslations, type Locale } from "@/lib/i18n";

export type WhyPartnerItem = {
  title: string;
  description: string;
};

export const whyPartnerItems = [
  {
    title: "LOCAL EXPERTISE",
    description:
      "Egyptologist-licensed guides, Nubian storytellers, and Bedouin hosts — all vetted, trained, and exclusively ours.",
  },
  {
    title: "WHITE-LABEL PARTNERSHIP",
    description:
      "We operate under your brand. Your logo, your pricing, your client relationship — we stay behind the curtain.",
  },
  {
    title: "TAILOR-MADE PROGRAMS",
    description:
      "No group dates. No fixed itineraries. Each trip is built around your client's interests, pace, and season.",
  },
  {
    title: "RELIABLE ON-GROUND OPS",
    description:
      "Licensed transport, 24/7 emergency support, multilingual guides, and contingency plans tested across 2,000+ journeys.",
  },
  {
    title: "PRIVATE & EXCLUSIVE",
    description:
      "VIP site access, after-hours tours, and exclusive experiences not available to retail travelers.",
  },
  {
    title: "DIRECT COSTS",
    description:
      "No middleman markup. You pay our direct rate and set your own commission structure.",
  },
  {
    title: "24/7 B2B SUPPORT",
    description:
      "Dedicated partnership desk — before, during, and after every journey. Always someone who speaks your language.",
  },
  {
    title: "ETHICAL TOURISM",
    description:
      "Community-first partnerships with local artisans, conservation levies, and low-impact travel practices.",
  },
  {
    title: "YOUR CLIENT, YOUR DEAL",
    description:
      "We never contact your clients directly. You own the relationship from day one.",
  },
  {
    title: "EVOLVING COLLABORATION",
    description:
      "Quarterly reviews, new product development, and feedback-driven improvements — together.",
  },
] as const;

export function getWhyPartner(locale: Locale) {
  if (locale === "en") return whyPartnerItems;
  const copy = datasetTranslations[locale].whyPartner;
  if (copy.length !== whyPartnerItems.length) throw new Error(`Incomplete partner benefits translation: ${locale}`);
  return whyPartnerItems.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}