"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Locale, UiTranslations } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  ui: UiTranslations;
  copy: {
    capabilities: string;
    categories: string;
    whyPartner: string;
    whoWeWorkWith: string;
    contact: string;
    workWithUs: string;
  };
};

export function Header({ locale, copy, ui }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    const navItems = [
    { label: copy.capabilities, href: `/${locale}#capabilities` },
    { label: copy.categories, href: `/${locale}#categories` },
    { label: copy.whyPartner, href: `/${locale}#why-partner` },
    { label: copy.whoWeWorkWith, href: `/${locale}#who-we-work-with` },
    { label: copy.workWithUs, href: `/${locale}#conversion` },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        {ui.skipToMainContent}
      </a>

      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <div className="navbar">
            <Link href={`/${locale}`} className="brand" aria-label={ui.kemeryaToursHome}>
              <Image
                src="/images/kemerya-logo.svg"
                alt="Kemerya Tours"
                width={220}
                height={72}
                priority
                className="brand-logo"
              />
            </Link>

            <nav aria-label={ui.mainNavigation} className="desktop-nav">
              <ul className="nav-links">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="nav-actions">
              <LanguageSwitcher locale={locale} ui={ui} />
              <Button href={business.partnerCtaUrl} variant="dark" external aria-label={ui.contactKemeryaTours}>
                {copy.contact}
              </Button>
              <button
                type="button"
                className="menu-toggle"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? ui.closeMainMenu : ui.openMainMenu}
                onClick={() => setMenuOpen((value) => !value)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>

          <nav
            id="mobile-menu"
            className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
            aria-label={ui.mobileNavigation}
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}
