import type { LegalPageContent } from "@/lib/brand-content/types";
import type { Locale } from "@/lib/i18n";
import { terms as en } from "@/lib/legal-content/en";
import { terms as fr } from "@/lib/legal-content/fr";
import { terms as it } from "@/lib/legal-content/it";
import { terms as es } from "@/lib/legal-content/es";
import { terms as de } from "@/lib/legal-content/de";
import { terms as ar } from "@/lib/legal-content/ar";
import { terms as pt } from "@/lib/legal-content/pt";
import { terms as nl } from "@/lib/legal-content/nl";
import { terms as zh } from "@/lib/legal-content/zh";

const termsPages: Record<Locale, LegalPageContent> = { en, fr, it, es, de, ar, pt, nl, zh };

export function getLegalTerms(locale: Locale): LegalPageContent {
  return termsPages[locale] ?? termsPages.en;
}
