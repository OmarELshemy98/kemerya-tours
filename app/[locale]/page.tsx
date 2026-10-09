import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhoKemerya } from "@/components/sections/WhoKemerya";
import { WhyKemerya } from "@/components/sections/WhyKemerya";
import { LotusDivider } from "@/components/ui/egyptian-svg";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { KemeryaApproach } from "@/components/sections/KemeryaApproach";
import { CapsTeaser } from "@/components/sections/CapsTeaser";
import { ClientTypes } from "@/components/sections/ClientTypes";
import { WhoWeWorkWithEditorial } from "@/components/sections/WhoWeWorkWithEditorial";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { KemeryaAdvantage } from "@/components/sections/KemeryaAdvantage";
import { WhyPartnerTeaser } from "@/components/sections/WhyPartnerTeaser";
import { LocaleSiteShell } from "@/components/layout/LocaleSiteShell";
import { getPageCopy } from "@/lib/brand-content";
import { getCapabilities } from "@/data/capabilities";
import { getClientTypes } from "@/data/clientTypes";
import { getWhyPartner } from "@/data/whyPartner";
import { getAdvantages } from "@/data/advantages";
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

    // Premium Egyptian editorial homepage:
  // Hero -> Trust -> Brand Statement -> Kemerya Approach ->
  // Capabilities -> Who We Work With -> Why Partner teaser -> Final CTA
  // Falls back to legacy components for locales without new content yet.
  const capabilitiesItems = getCapabilities(safeLocale);
  const clientTypeItems = getClientTypes(safeLocale);
  const whyPartnerItems = getWhyPartner(safeLocale);
  const advantageItems = getAdvantages(safeLocale);

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

        <div className="section-divider" aria-hidden="true">
          <LotusDivider decorative />
        </div>

                {copy.brandStatement ? (
          <BrandStatement copy={copy.brandStatement} ui={ui} cta={copy.conversion.primary} />
        ) : (
          <WhoKemerya copy={copy.whoKemerya} ui={ui} />
        )}

        {copy.kemeryaApproach ? (
          <KemeryaApproach copy={copy.kemeryaApproach} />
        ) : (
          <WhyKemerya copy={copy.whyKemerya} />
        )}

        {copy.capTeaser ? (
          <CapsTeaser copy={copy.capTeaser} items={capabilitiesItems} />
        ) : null}

        {copy.whoWeWorkWithGroups ? (
                    <WhoWeWorkWithEditorial
            copy={copy.whoWeWorkWithGroups}
            ui={ui}
            cta={copy.conversion.primary}
          />
        ) : (
          <ClientTypes copy={copy.clientTypes} items={clientTypeItems} />
        )}

        {copy.whyPartnerTeaser ? (
          <WhyPartnerTeaser copy={copy.whyPartnerTeaser} />
        ) : (
          <>
            <WhyPartner copy={copy.whyPartner} items={whyPartnerItems} />
            <KemeryaAdvantage copy={copy.advantages} items={advantageItems} />
          </>
        )}

              </LocaleSiteShell>
    </>
  );
}
