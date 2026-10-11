import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleSiteShell } from "@/components/layout/LocaleSiteShell";
import { AboutUs } from "@/components/sections/AboutUs";
import { getPageCopy } from "@/lib/brand-content";
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
  const copy = getPageCopy(safeLocale);

  return {
    title: `${copy.aboutUs?.title} | Kemerya Tours`,
    description: copy.aboutUs?.subtitle,
    alternates: {
      canonical: `/${safeLocale}/about`,
      languages: {
        en: "/en/about",
        ar: "/ar/about",
        fr: "/fr/about",
        it: "/it/about",
        es: "/es/about",
        de: "/de/about",
        pt: "/pt/about",
        nl: "/nl/about",
        zh: "/zh/about",
        "x-default": "/en/about",
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const safeLocale = locale as Locale;
  const copy = getPageCopy(safeLocale);
  const ui = uiTranslations[safeLocale];

  if (!copy.aboutUs) notFound();

  return (
    <LocaleSiteShell locale={safeLocale} copy={copy} ui={ui}>
      <AboutUs
        locale={safeLocale}
        ui={ui}
        copy={copy.aboutUs}
        conversion={copy.conversion}
      />
    </LocaleSiteShell>
  );
}
