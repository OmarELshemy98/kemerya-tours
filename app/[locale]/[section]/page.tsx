import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleSiteShell } from "@/components/layout/LocaleSiteShell";
import { B2BContactForm } from "@/components/sections/B2BContactForm";
import { Capabilities } from "@/components/sections/Capabilities";
import { ClientTypes } from "@/components/sections/ClientTypes";
import { CommercialCategories } from "@/components/sections/CommercialCategories";
import { ConversionCTA } from "@/components/sections/ConversionCTA";
import { KemeryaAdvantage } from "@/components/sections/KemeryaAdvantage";
import { KemeryaDifference } from "@/components/sections/KemeryaDifference";
import { SelectedJourneys } from "@/components/sections/SelectedJourneys";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhoKemerya } from "@/components/sections/WhoKemerya";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { getAdvantages } from "@/data/advantages";
import { getCapabilities } from "@/data/capabilities";
import { getClientTypes } from "@/data/clientTypes";
import { getCommercialCategories } from "@/data/commercialCategories";
import { getJourneys } from "@/data/journeys";
import { getPartnershipSteps } from "@/data/partnershipSteps";
import { getTestimonials } from "@/data/testimonials";
import { getWhyPartner } from "@/data/whyPartner";
import { locales, translations, uiTranslations, type Locale } from "@/lib/i18n";

const sections = [
  "capabilities",
  "categories",
  "why-partner",
  "who-we-work-with",
  "contact",
] as const;

type Section = (typeof sections)[number];

function isSection(value: string): value is Section {
  return sections.includes(value as Section);
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    sections.map((section) => ({ locale, section })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}): Promise<Metadata> {
  const { locale, section } = await params;
  if (!locales.includes(locale as Locale) || !isSection(section)) return {};

  const safeLocale = locale as Locale;
  const copy = translations[safeLocale];
  const content = {
    capabilities: [copy.capabilities.title, copy.capabilities.intro],
    categories: [copy.categories.title, copy.categories.intro],
    "why-partner": [copy.whyPartner.title, copy.whyPartner.intro],
    "who-we-work-with": [copy.clientTypes.title, copy.clientTypes.intro],
    contact: [copy.contact.title, copy.contact.subtitle],
  }[section];

  return {
    title: `${content[0]} | Kemerya Tours`,
    description: content[1],
    alternates: {
      canonical: `/${safeLocale}/${section}`,
      languages: {
        en: `/en/${section}`,
        ar: `/ar/${section}`,
        fr: `/fr/${section}`,
        it: `/it/${section}`,
        es: `/es/${section}`,
        de: `/de/${section}`,
        pt: `/pt/${section}`,
        nl: `/nl/${section}`,
        zh: `/zh/${section}`,
        "x-default": `/en/${section}`,
      },
    },
  };
}

export default async function LocaleSectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section } = await params;
  if (!locales.includes(locale as Locale) || !isSection(section)) notFound();

  const safeLocale = locale as Locale;
  const copy = translations[safeLocale];
  const ui = uiTranslations[safeLocale];

  let content;
  switch (section) {
    case "capabilities":
      content = <Capabilities copy={copy.capabilities} items={getCapabilities(safeLocale)} />;
      break;
    case "categories":
      content = (
        <>
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
        </>
      );
      break;
    case "why-partner":
      content = (
        <>
          <WhyPartner copy={copy.whyPartner} items={getWhyPartner(safeLocale)} />
          <KemeryaAdvantage copy={copy.advantages} items={getAdvantages(safeLocale)} />
          <KemeryaDifference
            copy={copy.partnership}
            steps={getPartnershipSteps(safeLocale)}
          />
        </>
      );
      break;
    case "who-we-work-with":
      content = (
        <>
          <WhoKemerya copy={copy.whoKemerya} ui={ui} />
          <ClientTypes copy={copy.clientTypes} items={getClientTypes(safeLocale)} />
          <Testimonials
            items={getTestimonials(safeLocale)}
            copy={copy.testimonials}
          />
        </>
      );
      break;
    case "contact":
      content = (
        <>
          <B2BContactForm copy={copy.contact} ui={ui} />
          <ConversionCTA copy={copy.conversion} ui={ui} />
        </>
      );
      break;
  }

  return (
    <LocaleSiteShell locale={safeLocale} copy={copy} ui={ui}>
      {content}
    </LocaleSiteShell>
  );
}