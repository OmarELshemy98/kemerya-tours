import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleSiteShell } from "@/components/layout/LocaleSiteShell";
import { LegalPage } from "@/components/LegalPage";
import { getPageCopy } from "@/lib/brand-content";
import { getLegalTerms } from "@/data/legalTerms";
import { locales, uiTranslations, type Locale } from "@/lib/i18n";

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
  const content = getLegalTerms(safeLocale);

  return {
    title: `${content.title} | Kemerya Tours`,
    description: content.intro,
    alternates: {
      canonical: `/${safeLocale}/terms`,
      languages: {
        en: "/en/terms",
        ar: "/ar/terms",
        fr: "/fr/terms",
        it: "/it/terms",
        es: "/es/terms",
        de: "/de/terms",
        pt: "/pt/terms",
        nl: "/nl/terms",
        zh: "/zh/terms",
        "x-default": "/en/terms",
      },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const safeLocale = locale as Locale;
  const copy = getPageCopy(safeLocale);
  const ui = uiTranslations[safeLocale];
  const content = getLegalTerms(safeLocale);

  return (
    <LocaleSiteShell locale={safeLocale} copy={copy} ui={ui}>
      <LegalPage locale={safeLocale} content={content} ui={ui} />
    </LocaleSiteShell>
  );
}