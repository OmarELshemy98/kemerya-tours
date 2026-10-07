import { ar } from "@/lib/brand-content/ar";
import { de } from "@/lib/brand-content/de";
import { en } from "@/lib/brand-content/en";
import { es } from "@/lib/brand-content/es";
import { fr } from "@/lib/brand-content/fr";
import { it } from "@/lib/brand-content/it";
import { nl } from "@/lib/brand-content/nl";
import { pt } from "@/lib/brand-content/pt";
import { zh } from "@/lib/brand-content/zh";
import type { BrandContent } from "@/lib/brand-content/types";
import { translations, type Locale } from "@/lib/i18n";

export const brandContent: Record<Locale, BrandContent> = {
  en,
  ar,
  fr,
  it,
  es,
  de,
  pt,
  nl,
  zh,
};

export function getPageCopy(locale: Locale) {
  const current = translations[locale];
  const brand = brandContent[locale];
  const metricValues = ["10+", "2,000+", "4.9", "100%", "24/7"];

  return {
    ...brand,
    nav: current.nav,
    trust: {
      eyebrow: brand.trust.eyebrow,
      statement: brand.trust.statement,
      items: brand.trust.labels.map((label, index) => ({
        value: metricValues[index],
        label,
      })),
    },
    footer: {
      ...current.footer,
      blurb: brand.footer.blurb,
      business: {
        ...current.footer.business,
        headline: brand.footer.headline,
      },
    },
  };
}