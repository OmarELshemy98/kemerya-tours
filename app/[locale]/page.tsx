import { notFound } from "next/navigation";
import { business } from "@/data/business";
import { journeys } from "@/data/journeys";
import { socialLinks } from "@/data/social";
import { testimonials } from "@/data/testimonials";
import { clientTypes } from "@/data/clientTypes";
import { whyPartnerItems } from "@/data/whyPartner";
import { capabilities } from "@/data/capabilities";
import { advantages } from "@/data/advantages";
import { commercialCategories } from "@/data/commercialCategories";
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
import { locales, translations, type Locale } from "@/lib/i18n";

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
    description:
      "White-label Egypt operations, private journeys, and seamless on-ground support for international travel partners.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="page-shell" dir={safeLocale === "ar" ? "rtl" : "ltr"}>
        <Header locale={safeLocale} copy={copy.nav} />
        <main id="main-content">
          <Hero copy={copy.hero} />
          <TrustBar
            items={copy.trust.items}
            copy={{
              eyebrow: copy.trust.eyebrow,
              statement: copy.trust.statement,
            }}
          />
          <WhoKemerya copy={copy.whoKemerya} />
          <ClientTypes copy={copy.clientTypes} items={clientTypes} />
          <WhyPartner copy={copy.whyPartner} items={whyPartnerItems} />
          <Capabilities copy={copy.capabilities} items={capabilities} />
          <KemeryaAdvantage copy={copy.advantages} items={advantages} />
          <KemeryaDifference copy={copy.partnership} />
          <CommercialCategories
            copy={copy.categories}
            items={commercialCategories}
          />
          <SelectedJourneys journeys={journeys} copy={copy.journeys} />
          <Testimonials items={testimonials} copy={copy.testimonials} />
          <B2BContactForm copy={copy.contact} />
          <ConversionCTA copy={copy.conversion} />
        </main>
        <Footer locale={safeLocale} copy={copy.footer} />
      </div>
    </>
  );
}
