import type { Metadata } from "next";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { defaultLocale, locales, translations, type Locale } from "@/lib/i18n";

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
  const copy = translations[safeLocale];

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
        "x-default": "/en",
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: `https://www.kemeryatours.com/${safeLocale}`,
      siteName: business.name,
      locale: safeLocale === "ar" ? "ar_EG" : safeLocale === "fr" ? "fr_FR" : safeLocale === "it" ? "it_IT" : safeLocale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
          width: 1200,
          height: 630,
          alt: "Kemerya Tours Egypt private journey experience",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
      images: [
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    other: {
      "og:see_also": socialLinks.map((item) => item.href).join(","),
      "theme-color": "#171b1a",
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

  void safeLocale;

  return <>{children}</>;
}
