import { notFound } from "next/navigation";
import { business } from "@/data/business";
import { getJourneys } from "@/data/journeys";
import { socialLinks } from "@/data/social";
import { getTestimonials } from "@/data/testimonials";
import { getClientTypes } from "@/data/clientTypes";
import { getWhyPartner } from "@/data/whyPartner";
import { getCapabilities } from "@/data/capabilities";
import { getAdvantages } from "@/data/advantages";
import { getCommercialCategories } from "@/data/commercialCategories";
import { getPartnershipSteps } from "@/data/partnershipSteps";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { KemeryaDifference } from "@/components/sections/KemeryaDifference";
import { SelectedJourneys } from "@/components/sections/SelectedJourneys";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhoKemerya } from "@/components/sections/WhoKemerya";
import { ClientTypes } from "@/components/sections/ClientTypes";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { Capabilities } from "@/components/sections/Capabilities";
import { KemeryaAdvantage } from "@/components/sections/KemeryaAdvantage";
import { CommercialCategories } from "@/components/sections/CommercialCategories";
import { B2BContactForm } from "@/components/sections/B2BContactForm";
import { ConversionCTA } from "@/components/sections/ConversionCTA";
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
      <div className="page-shell" dir={safeLocale === "ar" ? "rtl" : "ltr"}>
        <Header locale={safeLocale} copy={copy.nav} ui={ui} />
        <main id="main-content">
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
          <WhoKemerya copy={copy.whoKemerya} ui={ui} />
          <ClientTypes copy={copy.clientTypes} items={getClientTypes(safeLocale)} />
          <WhyPartner copy={copy.whyPartner} items={getWhyPartner(safeLocale)} />
          <Capabilities copy={copy.capabilities} items={getCapabilities(safeLocale)} />
          <KemeryaAdvantage copy={copy.advantages} items={getAdvantages(safeLocale)} />
          <KemeryaDifference
            copy={copy.partnership}
            steps={getPartnershipSteps(safeLocale)}
          />
          <CommercialCategories
            copy={copy.categories}
            items={getCommercialCategories(safeLocale)}
            ui={ui}
          />
          <SelectedJourneys
            journeys={getJourneys(safeLocale)}
            copy={copy.journeys}
            ui={ui}
          />
          <Testimonials
            items={getTestimonials(safeLocale)}
            copy={copy.testimonials}
          />
          <B2BContactForm copy={copy.contact} ui={ui} />
          <ConversionCTA copy={copy.conversion} ui={ui} />
        </main>
        <Footer locale={safeLocale} copy={copy.footer} ui={ui} />
      </div>
    </>
  );
}
