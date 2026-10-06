import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Locale, UiTranslations } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  ui: UiTranslations;
  copy: {
    blurb: string;
    navTitle: string;
    partnerTitle: string;
    contactTitle: string;
    policy: string;
    terms: string;
    developer: string;
    business: {
      headline: string;
      address: string;
    };
  };
};

export function Footer({ locale, copy, ui }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <Container>
        <div className="footer-compact">
          <div className="footer-brand">
            <Link
              href={`/${locale}`}
              className="brand brand--footer"
              aria-label={ui.kemeryaToursHome}
            >
              <Image
                src="/images/kemerya-logo.svg"
                alt="Kemerya Tours"
                width={220}
                height={72}
                className="brand-logo brand-logo--footer"
              />
            </Link>
            <p className="footer-tagline">{copy.business.headline}</p>
          </div>

          <nav className="footer-nav" aria-label={copy.navTitle}>
            <h3>{copy.navTitle}</h3>
            <ul className="footer-nav__list">
              <li>
                <Link href={`/${locale}`}>{business.name}</Link>
              </li>
              <li>
                <Link href={`/${locale}#contact`}>{copy.contactTitle}</Link>
              </li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h3>{copy.contactTitle}</h3>
            <address className="footer-contact__details">
              <span>{copy.business.address}</span>
              <a href={`tel:${business.tel}`}>{business.phone}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </address>
          </div>

          <div className="footer-social" aria-label={ui.socialMediaLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-link"
              >
                <SocialIcon name={link.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom__links" aria-label={ui.legalLinks}>
            <a href={`${business.website}/privacy`} target="_blank" rel="noreferrer noopener">
              {copy.policy}
            </a>
            <span className="footer-bottom__separator" aria-hidden="true">
              ·
            </span>
            <a href={`${business.website}/terms`} target="_blank" rel="noreferrer noopener">
              {copy.terms}
            </a>
          </div>

          <p className="footer-credit neon-text">
            © {currentYear} {business.name}. {copy.developer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
