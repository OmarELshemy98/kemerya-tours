import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhoKemerya } from "@/components/sections/WhoKemerya";
import { ConversionCTA } from "@/components/sections/ConversionCTA";
import { LocaleSiteShell } from "@/components/layout/LocaleSiteShell";
import { getPageCopy } from "@/lib/brand-content";
import {
  locales,
  uiTranslations,
  type Locale,
} from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};

  const safeLocale = locale as Locale;
  const copy = getPageCopy(safeLocale);

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: `/${safeLocale}`,
      languages: {
        en: "/en",
        ar: "/ar",
        fr: "/fr",
        it: "/it",
        es: "/es",
        de: "/de",
        pt: "/pt",
        nl: "/nl",
        zh: "/zh",
        "x-default": "/en",
      },
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const safeLocale = locale as Locale;
  const copy = getPageCopy(safeLocale);
  const ui = uiTranslations[safeLocale];

  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: business.name,
    url: business.website,
    email: business.email,
    telephone: business.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressCountry: "EG",
    },
    sameAs: socialLinks.map((link) => link.href),
    areaServed: "Egypt",
    description: copy.meta.description,
  };

  // Concise homepage arc:
  // Hero → Trust → Core Differentiator (WhoKemerya) → Final CTA
  // All other content lives on dedicated internal pages (/why-kemerya,
  // /capabilities, /who-we-work-with, /credibility, /faq, etc.)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LocaleSiteShell locale={safeLocale} copy={copy} ui={ui}>
        <Hero locale={safeLocale} copy={copy.hero} ui={ui} />

        <TrustBar
          locale={safeLocale}
          items={copy.trust.items}
          copy={{
            eyebrow: copy.trust.eyebrow,
            statement: copy.trust.statement,
            sectionLabel: ui.businessProof,
          }}
        />

        <WhoKemerya copy={copy.whoKemerya} ui={ui} />

        <ConversionCTA copy={copy.conversion} />
      </LocaleSiteShell>
    </>
  );
}
