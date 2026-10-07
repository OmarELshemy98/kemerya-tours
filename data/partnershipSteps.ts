import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type PartnershipStep = {
  step: string;
  title: string;
  description: string;
};

export const partnershipSteps = [
  {
    step: "01",
    title: "Send the brief",
    description: "",
  },
  {
    step: "02",
    title: "Talk through the details",
    description: "",
  },
  {
    step: "03",
    title: "Shape the program together",
    description: "",
  },
  {
    step: "04",
    title: "We coordinate Egypt on the ground",
    description: "",
  },
] as const;

export function getPartnershipSteps(locale: Locale) {
  const copy = brandContent[locale].datasets.partnershipSteps;
  if (copy.length !== partnershipSteps.length) throw new Error(`Incomplete partnership steps translation: ${locale}`);
  return partnershipSteps.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}