import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleSiteShell } from "@/components/layout/LocaleSiteShell";
import { LegalPage } from "@/components/LegalPage";
import { getPageCopy } from "@/lib/brand-content";
import { getLegalPrivacy } from "@/data/legalPrivacy";
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
  const content = getLegalPrivacy(safeLocale);

  return {
    title: `${content.title} | Kemerya Tours`,
    description: content.intro,
    alternates: {
      canonical: `/${safeLocale}/privacy`,
      languages: {
        en: "/en/privacy",
        ar: "/ar/privacy",
        fr: "/fr/privacy",
        it: "/it/privacy",
        es: "/es/privacy",
        de: "/de/privacy",
        pt: "/pt/privacy",
        nl: "/nl/privacy",
        zh: "/zh/privacy",
        "x-default": "/en/privacy",
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const safeLocale = locale as Locale;
  const copy = getPageCopy(safeLocale);
  const ui = uiTranslations[safeLocale];
  const content = getLegalPrivacy(safeLocale);

  return (
    <LocaleSiteShell locale={safeLocale} copy={copy} ui={ui}>
      <LegalPage locale={safeLocale} content={content} ui={ui} />
    </LocaleSiteShell>
  );
}