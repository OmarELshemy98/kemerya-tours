import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleSiteShell } from "@/components/layout/LocaleSiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { B2BCredibility } from "@/components/sections/B2BCredibility";
import { B2BFaq } from "@/components/sections/B2BFaq";
import { B2BContactForm } from "@/components/sections/B2BContactForm";
import { Capabilities } from "@/components/sections/Capabilities";
import { CapabilitiesPage } from "@/components/sections/CapabilitiesPage";
import { ClientTypes } from "@/components/sections/ClientTypes";
import { CommercialCategories } from "@/components/sections/CommercialCategories";
import { CommercialConfidence } from "@/components/sections/CommercialConfidence";
import { KemeryaAdvantage } from "@/components/sections/KemeryaAdvantage";
import { KemeryaDifference } from "@/components/sections/KemeryaDifference";
import { ProgramCapabilities } from "@/components/sections/ProgramCapabilities";
import { AboutUs } from "@/components/sections/AboutUs";
import { WhyKemerya } from "@/components/sections/WhyKemerya";
import { BrandPhilosophy } from "@/components/sections/BrandPhilosophy";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { WhyPartnerPage } from "@/components/sections/WhyPartnerPage";
import { WhyWeWorkWithPage } from "@/components/sections/WhyWeWorkWithPage";
import { getAdvantages } from "@/data/advantages";
import { getCapabilities } from "@/data/capabilities";
import { getClientTypes } from "@/data/clientTypes";
import { getCommercialCategories } from "@/data/commercialCategories";
import { getCommercialPoints } from "@/data/commercialPoints";
import { getFaqItems } from "@/data/b2bFaq";
import { getPartnershipSteps } from "@/data/partnershipSteps";
import { getProgramCapabilities } from "@/data/programCapabilities";
import { getWhyPartner } from "@/data/whyPartner";
import { Knowledge } from "@/components/sections/Knowledge";
import { getPageCopy } from "@/lib/brand-content";
import { business } from "@/data/business";
import { locales, uiTranslations, type Locale } from "@/lib/i18n";

const sections = [
  "capabilities",
  "categories",
  "why-partner",
  "about-us",
  "who-we-work-with",
  "commercial-confidence",
  "program-capabilities",
  "credibility",
  "faq",
  "knowledge",
  "contact",
] as const;

type Section = (typeof sections)[number];

function isSection(value: string): value is Section {
  return sections.includes(value as Section);
}

/** Returns the localized title for a given section, used for page H1 and metadata. */
function getSectionTitle(
  copy: ReturnType<typeof getPageCopy>,
  section: Section,
): string {
  switch (section) {
        case "capabilities":
      return copy.capabilitiesPage?.hero.title.join(" ") ?? copy.capabilities.title;
    case "categories":
      return copy.categories.title;
        case "why-partner":
      return copy.whyPartnerPage?.hero.title.join(" ") ?? copy.whyPartner.title;
        case "about-us":
      return copy.aboutUs?.title ?? copy.whyKemerya.title;
        case "who-we-work-with":
      return copy.whyWeWorkWithPage?.hero.title.join(" ") ?? copy.clientTypes.title;
    case "commercial-confidence":
      return copy.commercialConfidence.title;
    case "program-capabilities":
      return copy.programCapabilities.title;
    case "credibility":
      return copy.credibility.title;
    case "faq":
      return copy.faq.title;
    case "knowledge":
      return copy.knowledge.title;
    case "contact":
      return copy.contact.title;
    default:
      return "";
  }
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
  const copy = getPageCopy(safeLocale);
  const content = {
        capabilities: copy.capabilitiesPage
      ? [copy.capabilitiesPage.seo.title, copy.capabilitiesPage.seo.description]
      : [copy.capabilities.title, copy.capabilities.intro],
    categories: [copy.categories.title, copy.categories.intro],
    "why-partner": copy.whyPartnerPage
      ? [copy.whyPartnerPage.seo.title, copy.whyPartnerPage.seo.description]
      : [copy.whyPartner.title, copy.whyPartner.intro],
        "about-us": [copy.aboutUs?.title ?? copy.whyKemerya.title, copy.aboutUs?.intro ?? ""],
        "who-we-work-with": copy.whyWeWorkWithPage
      ? [copy.whyWeWorkWithPage.seo.title, copy.whyWeWorkWithPage.seo.description]
      : [copy.clientTypes.title, copy.clientTypes.intro],
    "commercial-confidence": [
      copy.commercialConfidence.title,
      copy.commercialConfidence.intro,
    ],
    "program-capabilities": [
      copy.programCapabilities.title,
      copy.programCapabilities.intro,
    ],
    credibility: [copy.credibility.title, copy.credibility.intro],
    faq: [copy.faq.title, copy.faq.intro],
    knowledge: [copy.knowledge.title, copy.knowledge.intro],
    contact: [copy.contact.title, copy.contact.subtitle],
     }[section];

    const seoKeywords =
    (section === "capabilities" && copy.capabilitiesPage?.seo) ||
    (section === "why-partner" && copy.whyPartnerPage?.seo) ||
    (section === "who-we-work-with" && copy.whyWeWorkWithPage?.seo);

  return {
            title: `${content[0]} | Kemerya Tours`,
    description: content[1],
    ...(seoKeywords
      ? { keywords: `${seoKeywords.primaryKeyword}, ${seoKeywords.supportingKeywords.join(", ")}` }
      : {}),
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
        openGraph: {
      title: `${content[0]} | Kemerya Tours`,
      description: content[1],
      url: `${business.website}/${safeLocale}/${section}`,
      siteName: business.name,
      locale: {
        en: "en_US",
        ar: "ar_EG",
        fr: "fr_FR",
        it: "it_IT",
        es: "es_ES",
                de: "de_DE",
        pt: "pt_PT",
        nl: "nl_NL",
        zh: "zh_CN",
      }[safeLocale],
      type: "website",
      images: [
        {
          url: `${business.website}/images/kemerya-logo.svg`,
          width: 1200,
          height: 630,
          alt: uiTranslations[safeLocale].heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${content[0]} | Kemerya Tours`,
      description: content[1],
      images: [`${business.website}/images/kemerya-logo.svg`],
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
  const copy = getPageCopy(safeLocale);
  const ui = uiTranslations[safeLocale];

  let content;
  switch (section) {
    case "capabilities":
            content = (
        <>
          {copy.capabilitiesPage ? (
            <CapabilitiesPage
              locale={safeLocale}
              copy={copy.capabilitiesPage}
              ui={ui}
            />
          ) : (
            <Capabilities
              copy={copy.capabilities}
              items={getCapabilities(safeLocale)}
            />
          )}
        </>
      );
      break;
    case "categories":
      content = (
        <>
          <CommercialCategories
            copy={copy.categories}
            items={getCommercialCategories(safeLocale)}
            ui={ui}
          />
                  </>
      );
      break;
        case "why-partner":
      content = (
        <>
          {copy.whyPartnerPage ? (
            <WhyPartnerPage
              locale={safeLocale}
              copy={copy.whyPartnerPage}
              ui={ui}
            />
          ) : (
            <>
              <WhyPartner copy={copy.whyPartner} items={getWhyPartner(safeLocale)} />
              <KemeryaAdvantage copy={copy.advantages} items={getAdvantages(safeLocale)} />
              <KemeryaDifference
                copy={copy.partnership}
                steps={getPartnershipSteps(safeLocale)}
              />
            </>
          )}
        </>
      );
      break;
          case "about-us":
      content = (
        <>
          {copy.aboutUs ? (
            <AboutUs
                locale={safeLocale}
                ui={ui}
                copy={copy.aboutUs}
                conversion={copy.conversion}
              />
          ) : (
            <WhyKemerya copy={copy.whyKemerya} />
          )}
          <BrandPhilosophy copy={copy.brandPhilosophy} />
                  </>
      );
      break;
        case "who-we-work-with":
      content = (
        <>
          {copy.whyWeWorkWithPage ? (
            <WhyWeWorkWithPage
              locale={safeLocale}
              copy={copy.whyWeWorkWithPage}
              ui={ui}
            />
          ) : (
            <ClientTypes copy={copy.clientTypes} items={getClientTypes(safeLocale)} />
          )}
        </>
      );
      break;
    case "contact":
      content = (
        <>
          <B2BContactForm copy={copy.contact} ui={ui} />
                  </>
      );
      break;
    case "commercial-confidence":
      content = (
        <>
          <CommercialConfidence
            copy={copy.commercialConfidence}
            points={getCommercialPoints(safeLocale)}
          />
                  </>
      );
      break;
    case "program-capabilities":
      content = (
        <>
          <ProgramCapabilities
            copy={copy.programCapabilities}
            items={getProgramCapabilities(safeLocale)}
          />
                  </>
      );
      break;
    case "credibility":
      content = (
        <>
          <B2BCredibility copy={copy.credibility} ui={ui} />
                  </>
      );
      break;
    case "faq":
      content = (
        <>
          <B2BFaq copy={copy.faq} items={getFaqItems(safeLocale)} />
                  </>
      );
      break;
    case "knowledge":
      content = (
        <>
          <Knowledge copy={copy.knowledge} />
                  </>
      );
      break;
    default:
      notFound();
  }

      const sectionTitle = getSectionTitle(copy, section);
  const hasOwnHero = Boolean(
    section === "about-us" ||
    (section === "capabilities" && copy.capabilitiesPage) ||
    (section === "why-partner" && copy.whyPartnerPage) ||
    (section === "who-we-work-with" && copy.whyWeWorkWithPage),
  );

  return (
    <LocaleSiteShell locale={safeLocale} copy={copy} ui={ui}>
      {!hasOwnHero && <PageHero title={sectionTitle} />}
      {content}
    </LocaleSiteShell>
  );
}