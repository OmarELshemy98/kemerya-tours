import type { Metadata } from "next";
import {
  Manrope,
  Cormorant_Garamond,
  Noto_Sans_Arabic,
} from "next/font/google";
import "../globals.css";
import "../styles/legal-pages.css";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { brandContent } from "@/lib/brand-content";
import {
  defaultLocale,
  getDirection,
  locales,
  uiTranslations,
  type Locale,
} from "@/lib/i18n";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;
  const copy = brandContent[safeLocale];

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    metadataBase: new URL(business.website),
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
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: `https://www.kemeryatours.com/${safeLocale}`,
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
          url: "https://www.kemeryatours.com/images/kemerya-logo.svg",
          width: 1200,
          height: 630,
          alt: uiTranslations[safeLocale].heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
            images: [
        "https://www.kemeryatours.com/images/kemerya-logo.svg",
      ],
    },
    other: {
      "og:see_also": socialLinks.map((item) => item.href).join(","),
      "theme-color": "#171b1a",
    },
    icons: {
      icon: "/images/favicon.ico",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  return (
    <html
      lang={safeLocale}
      dir={getDirection(safeLocale)}
      className={`${display.variable} ${sans.variable} ${arabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
