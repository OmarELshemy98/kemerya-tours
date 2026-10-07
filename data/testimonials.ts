import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type TestimonialsCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
};

export function getTestimonialsCopy(locale: Locale): TestimonialsCopy {
  return brandContent[locale].credibility;
}
