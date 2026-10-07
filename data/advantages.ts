import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type Advantage = {
  title: string;
  description: string;
};

export type AdvantageIcon = "client" | "ops" | "expertise" | "commission" | "brand";

export type AdvantageData = {
  title: string;
  description: string;
  icon: AdvantageIcon;
};

export const advantages = [
  {
    title: "A person, not a ticket number",
    description: "",
    icon: "client" as const,
  },
  {
    title: "Judgment when the day changes",
    description: "",
    icon: "ops" as const,
  },
  {
    title: "Room to adapt, with coordination",
    description: "",
    icon: "expertise" as const,
  },
  {
    title: "Care for the relationship you own",
    description: "",
    icon: "commission" as const,
  },
  {
    title: "Responsibility beyond the booking",
    description: "",
    icon: "brand" as const,
  },
] as const;

export function getAdvantages(locale: Locale) {
  const copy = brandContent[locale].datasets.advantages;
  if (copy.length !== advantages.length) throw new Error(`Incomplete advantages translation: ${locale}`);
  return advantages.map((item, index) => ({
    ...item,
    title: copy[index][0],
    description: copy[index][1],
  }));
}