import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { getAdvantages } from "@/data/advantages";
import { getClientTypes } from "@/data/clientTypes";
import { getCommercialCategories } from "@/data/commercialCategories";
import { getJourneys } from "@/data/journeys";
import { getPartnershipSteps } from "@/data/partnershipSteps";
import { getWhyPartner } from "@/data/whyPartner";
import { getCommercialPoints } from "@/data/commercialPoints";
import { getProgramCapabilities } from "@/data/programCapabilities";
import { getFaqItems } from "@/data/b2bFaq";
import { B2BCredibility } from "@/components/sections/B2BCredibility";
import { B2BFaq } from "@/components/sections/B2BFaq";
import { ClientTypes } from "@/components/sections/ClientTypes";
import { CommercialCategories } from "@/components/sections/CommercialCategories";
import { CommercialConfidence } from "@/components/sections/CommercialConfidence";
import { ConversionCTA } from "@/components/sections/ConversionCTA";
import { Hero } from "@/components/sections/Hero";
import { KemeryaAdvantage } from "@/components/sections/KemeryaAdvantage";
import { KemeryaDifference } from "@/components/sections/KemeryaDifference";
import { ProgramCapabilities } from "@/components/sections/ProgramCapabilities";
import { SelectedJourneys } from "@/components/sections/SelectedJourneys";
import { PharaonicDivider } from "@/components/ui/pharaonic";
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
  // commercial confidence → program capabilities → audiences →
  // commercial categories → journeys → how-we-work → credibility →
  // pharaonic divider → conversion CTA → FAQ.
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

        <CommercialConfidence
          copy={copy.commercialConfidence}
          points={getCommercialPoints(safeLocale)}
        />

        <ProgramCapabilities
          copy={copy.programCapabilities}
          items={getProgramCapabilities(safeLocale)}
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

        <KemeryaDifference
          copy={copy.partnership}
          steps={getPartnershipSteps(safeLocale)}
        />

        <B2BCredibility copy={copy.credibility} ui={ui} />

        <div className="pharaonic-divider" aria-hidden="true">
          <PharaonicDivider variant="lotus" />
        </div>

        <ConversionCTA copy={copy.conversion} />

        <B2BFaq
          copy={copy.faq}
          items={getFaqItems(safeLocale)}
        />
      </LocaleSiteShell>
    </>
  );
}
