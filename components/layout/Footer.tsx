import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  copy: {
    blurb: string;
    navTitle: string;
    partnerTitle: string;
    contactTitle: string;
    policy: string;
    terms: string;
    developer: string;
  };
};

export function Footer({ locale, copy }: FooterProps) {
    const utilityLinks = [
    { label: "Home", href: `/${locale}` },
    { label: copy.navTitle, href: `/${locale}#capabilities` },
    { label: "Journeys", href: `/${locale}#journeys` },
    { label: copy.partnerTitle, href: `/${locale}#partnership` },
  ];

  const partnerLinks = [
    { label: "How It Works", href: `/${locale}#partnership` },
    { label: "Capabilities", href: `/${locale}#capabilities` },
    { label: "Categories", href: `/${locale}#categories` },
    { label: "Who We Work With", href: `/${locale}#who-we-work-with` },
  ];

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href={`/${locale}`} className="brand brand--footer" aria-label="Kemerya Tours home">
              <Image
                src="/images/kemerya-logo.svg"
                alt="Kemerya Tours"
                width={220}
                height={72}
                className="brand-logo brand-logo--footer"
              />
            </Link>
            <p style={{ marginTop: "1rem" }}>{business.name}</p>
            <p>{copy.blurb}</p>
          </div>

                    <div className="footer-box">
            <h3>{copy.navTitle}</h3>
            <ul className="footer-links">
              {utilityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-box">
            <h3>{copy.partnerTitle}</h3>
            <ul className="footer-links">
              {partnerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-box">
            <h3>{copy.contactTitle}</h3>
            <ul className="footer-links">
              <li>{business.address}</li>
              <li>
                <a href={`tel:${business.tel.replace(/\s+/g, "")}`}>{business.phone}</a>
              </li>
              <li>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
            </ul>
          </div>

          <div className="footer-box">
            <h3>Social</h3>
            <ul className="footer-links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-meta">
          <div>
            <span>{copy.policy}</span>
            <span> · </span>
            <span>{copy.terms}</span>
          </div>

          <div className="footer-meta__credit">
            © 2026 Kemerya Tours. All rights reserved.
          </div>

          <div>
            {copy.developer} — {" "}
            <a href="https://omarelshemy.vercel.app/" target="_blank" rel="noopener noreferrer">
              Omar Elshemy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
