import type { ReactNode } from "react";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import type { Locale } from "@/lib/i18n";

/** Site-wide Organization + WebSite structured data (JSON-LD) rendered in the
 *  document body. Home additionally emits a TravelAgency schema in-page. */
export function SiteSchema({ locale }: { locale: Locale }): ReactNode {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: business.name,
        url: business.website,
        email: business.email,
        telephone: business.tel,
        logo: `${business.website}/images/kemerya-logo.svg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address,
          addressRegion: "Giza",
          addressCountry: "EG",
        },
        sameAs: socialLinks.map((link) => link.href),
        areaServed: "Egypt",
        foundingDate: "2016",
      },
      {
        "@type": "WebSite",
        name: business.name,
        url: business.website,
        inLanguage: locale === "ar" ? "ar" : locale,
        publisher: { "@type": "Organization", name: business.name },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
