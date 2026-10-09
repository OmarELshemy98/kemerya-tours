"use client";

import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { LotusCornerOrnament } from "@/components/ui/egyptian-svg";
import { useRevealOnScroll } from "@/lib/hooks/useRevealOnScroll";
import type { Locale, UiTranslations } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  ui: UiTranslations;
  nav: {
    capabilities: string;
    categories: string;
    aboutUs: string;
    whoWeWorkWith: string;
    contact: string;
    workWithUs: string;
    faq: string;
    whyPartner: string;
  };
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
    closingCta: {
      headline: string;
      description: string;
      primary: string;
    };
    capabilities?: readonly string[];
    categories?: readonly { label: string; href: string }[];
  };
};

export function Footer({ locale, copy, ui, nav }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${business.whatsapp}`;
  const [ctaRef, ctaRevealed] = useRevealOnScroll<HTMLDivElement>();

  return (
        <footer className="site-footer" role="contentinfo">
      <div className="footer__lotus-corner" aria-hidden="true">
        <LotusCornerOrnament decorative size="sm" />
      </div>
      <Container>
        {/* Closing CTA — premium architectural centerpiece */}
                <div className={`footer-closing-cta closing-cta ${ctaRevealed ? "revealed" : ""}`} ref={ctaRef}>
          <h2 className="closing-cta__headline">{copy.closingCta.headline}</h2>
          <p className="closing-cta__description">{copy.closingCta.description}</p>
          <Link href={`/${locale}/contact`} className="button button--primary closing-cta__primary">
            {copy.closingCta.primary}
          </Link>
        </div>

        {/* Three-column grid: Brand + Explore + Contact */}
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href={`/${locale}`} className="brand brand--footer" aria-label={ui.kemeryaToursHome}>
              <Image
                src="/images/kemerya-logo.svg"
                alt="Kemerya Tours"
                width={220}
                height={72}
                className="brand-logo brand-logo--footer"
              />
            </Link>
            <p className="footer-blurb">{copy.blurb}</p>
            <p className="footer-business-headline">{copy.business.headline}</p>
          </div>

          <nav className="footer-nav" aria-label={copy.navTitle}>
            <h3>{copy.navTitle}</h3>
            <ul className="footer-nav__list">
              <li><Link href={`/${locale}`}>{ui.kemeryaToursHome}</Link></li>
              <li><Link href={`/${locale}/capabilities`}>{nav.capabilities}</Link></li>
              <li><Link href={`/${locale}/categories`}>{nav.categories}</Link></li>
              <li><Link href={`/${locale}/why-partner`}>{nav.whyPartner}</Link></li>
              <li><Link href={`/${locale}/about-us`}>{nav.aboutUs}</Link></li>
              <li><Link href={`/${locale}/who-we-work-with`}>{nav.whoWeWorkWith}</Link></li>
              <li><Link href={`/${locale}/contact`}>{nav.workWithUs}</Link></li>
              <li><Link href={`/${locale}/faq`}>{nav.faq}</Link></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h3>{copy.contactTitle}</h3>
            <address className="footer-contact__details">
              <span>{copy.business.address}</span>
              <a href={`tel:${business.tel}`}>{business.phone}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                {ui.whatsapp || "WhatsApp"}
              </a>
            </address>
          </div>
        </div>

        {/* Social + Legal */}
        <div className="footer-bottom">
          <div className="footer-social">
            <div className="footer-social__label">{ui.socialMediaLinks}</div>
            <div className="footer-social__links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="social-link">
                  <SocialIcon name={link.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-bottom__links" aria-label={ui.legalLinks}>
            <Link href={`/${locale}/privacy`} className="footer-bottom__link">{copy.policy}</Link>
            <span className="footer-bottom__separator" aria-hidden="true">·</span>
            <Link href={`/${locale}/terms`} className="footer-bottom__link">{copy.terms}</Link>
          </div>

          <p className="footer-credit">
            © {currentYear} {business.name}. {copy.developer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
