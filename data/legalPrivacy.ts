import type { LegalPageContent } from "@/lib/brand-content/types";
import type { Locale } from "@/lib/i18n";
import { privacy as en } from "@/lib/legal-content/en";
import { privacy as fr } from "@/lib/legal-content/fr";
import { privacy as it } from "@/lib/legal-content/it";
import { privacy as es } from "@/lib/legal-content/es";
import { privacy as de } from "@/lib/legal-content/de";
import { privacy as ar } from "@/lib/legal-content/ar";
import { privacy as pt } from "@/lib/legal-content/pt";
import { privacy as nl } from "@/lib/legal-content/nl";
import { privacy as zh } from "@/lib/legal-content/zh";

const privacyPages: Record<Locale, LegalPageContent> = { en, fr, it, es, de, ar, pt, nl, zh };

export function getLegalPrivacy(locale: Locale): LegalPageContent {
  return privacyPages[locale] ?? privacyPages.en;
}
