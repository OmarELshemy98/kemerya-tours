import { brandContent } from "@/lib/brand-content";
import type { Locale } from "@/lib/i18n";

export type FaqItem = {
  question: string;
  answer: string;
};

const faqItems = [
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
] as const;

export function getFaqItems(locale: Locale): FaqItem[] {
  const copy = brandContent[locale].faq.items;
  if (copy.length !== faqItems.length)
    throw new Error(`Incomplete FAQ translation: ${locale}`);
  return copy.map((item) => ({
    question: item[0],
    answer: item[1],
  }));
}
