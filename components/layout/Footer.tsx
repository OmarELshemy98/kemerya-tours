import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
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
    business: {
      headline: string;
      address: string;
    };
  };
};

export function Footer({ locale, copy }: FooterProps) {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-compact">
          {/* Brand */}
          <div className="footer-brand">
            <Link
              href={`/${locale}`}
              className="brand brand--footer"
              aria-label="Kemerya Tours home"
            >
              <Image
                src="/images/kemerya-logo.webP"
                alt="Kemerya Tours"
                width={220}
                height={72}
                className="brand-logo brand-logo--footer"
              />
            </Link>
            <p className="footer-tagline">{copy.business.headline}</p>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>{copy.contactTitle}</h3>
            <address>
              <span>{copy.business.address}</span>
              <a href={`tel:${business.tel}`}>{business.phone}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </address>
          </div>

          {/* Social icons */}
          <div className="footer-social">
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

        {/* Bottom meta + neon credit */}
        <div className="footer-bottom">
          <div className="footer-bottom__links">
            <a href={`${business.website}/privacy`}>{copy.policy}</a>
            <span className="footer-bottom__separator">·</span>
            <a href={`${business.website}/terms`}>{copy.terms}</a>
          </div>

          <div className="footer-credit neon-text">{copy.developer}</div>
        </div>
      </Container>
    </footer>
  );
}
