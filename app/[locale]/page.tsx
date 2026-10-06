import { notFound } from "next/navigation";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { LocaleSiteShell } from "@/components/layout/LocaleSiteShell";
import {
  locales,
  translations,
  uiTranslations,
  type Locale,
} from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
  const copy = translations[safeLocale];
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LocaleSiteShell locale={safeLocale} copy={copy} ui={ui}>
        <>
          <Hero copy={copy.hero} ui={ui} />
          <TrustBar
            locale={safeLocale}
            items={copy.trust.items}
            copy={{
              eyebrow: copy.trust.eyebrow,
              statement: copy.trust.statement,
              sectionLabel: ui.businessProof,
            }}
          />
        </>
      </LocaleSiteShell>
    </>
  );
}
