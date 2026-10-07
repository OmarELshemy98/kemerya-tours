import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { getAdvantages } from "@/data/advantages";
import { getCapabilities } from "@/data/capabilities";
import { getClientTypes } from "@/data/clientTypes";
import { getCommercialCategories } from "@/data/commercialCategories";
import { getJourneys } from "@/data/journeys";
import { getPartnershipSteps } from "@/data/partnershipSteps";
import { getWhyPartner } from "@/data/whyPartner";
import { getTestimonials, getTestimonialsCopy } from "@/data/testimonials";
import { Capabilities } from "@/components/sections/Capabilities";
import { ClientTypes } from "@/components/sections/ClientTypes";
import { CommercialCategories } from "@/components/sections/CommercialCategories";
import { ConversionCTA } from "@/components/sections/ConversionCTA";
import { Hero } from "@/components/sections/Hero";
import { KemeryaAdvantage } from "@/components/sections/KemeryaAdvantage";
import { KemeryaDifference } from "@/components/sections/KemeryaDifference";
import { SelectedJourneys } from "@/components/sections/SelectedJourneys";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhoKemerya } from "@/components/sections/WhoKemerya";
import { WhyPartner } from "@/components/sections/WhyPartner";
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

  // Editorial homepage arc: hook → trust → brand story → advantage →
  // capabilities → audiences → journeys → partnership process →
  // social proof → conversion CTA.
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

        <KemeryaAdvantage
          copy={copy.advantages}
          items={getAdvantages(safeLocale)}
        />

        <WhyPartner copy={copy.whyPartner} items={getWhyPartner(safeLocale)} />

        <Capabilities
          copy={copy.capabilities}
          items={getCapabilities(safeLocale)}
        />

        <ClientTypes
          copy={copy.clientTypes}
          items={getClientTypes(safeLocale)}
        />

        <CommercialCategories
          copy={copy.categories}
          items={getCommercialCategories(safeLocale)}
          ui={ui}
        />

        <SelectedJourneys
          journeys={getJourneys(safeLocale).slice(0, 3)}
          copy={copy.journeys}
        />

        <Testimonials
          items={getTestimonials(safeLocale)}
          copy={getTestimonialsCopy(safeLocale)}
        />

        <ConversionCTA copy={copy.conversion} />

        <KemeryaDifference
          copy={copy.partnership}
          steps={getPartnershipSteps(safeLocale)}
        />
      </LocaleSiteShell>
    </>
  );
}
