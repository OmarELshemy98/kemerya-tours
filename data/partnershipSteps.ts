import { datasetTranslations, type Locale } from "@/lib/i18n";

export type PartnershipStep = {
  step: string;
  title: string;
  description: string;
};

export const partnershipSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We learn about your brand, client base, and the Egypt experiences you want to offer.",
  },
  {
    step: "02",
    title: "Custom Proposal",
    description:
      "We deliver a tailored partnership package — pricing, commissions, and sample itineraries.",
  },
  {
    step: "03",
    title: "Seamless Operations",
    description:
      "Your clients travel while we handle every operational detail on the ground in Egypt.",
  },
  {
    step: "04",
    title: "Active Support",
    description:
      "Dedicated B2B support desk available 24/7 during your client's journey.",
  },
  {
    step: "05",
    title: "Ongoing Partnership",
    description:
      "Continuous feedback loop, quarterly reviews, and evolving product development together.",
  },
] as const;

export function getPartnershipSteps(locale: Locale) {
  if (locale === "en") return partnershipSteps;
  const copy = datasetTranslations[locale].partnershipSteps;
  if (copy.length !== partnershipSteps.length) throw new Error(`Incomplete partnership steps translation: ${locale}`);
  return partnershipSteps.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}