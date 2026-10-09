"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
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
    aboutUs: string;
    whoWeWorkWith: string;
    contact: string;
    workWithUs: string;
    faq: string;
  };
};

export function Header({ locale, copy, ui }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

        // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeMenu();
  }, [pathname]);

  // Scroll-based header background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key + body scroll lock when menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", onKeyDown);

    const t = setTimeout(() => firstLinkRef.current?.focus(), 80);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      clearTimeout(t);
    };
  }, [menuOpen]);

  const navItems = [
    { label: copy.capabilities, href: `/${locale}/capabilities` },
    { label: copy.categories, href: `/${locale}/categories` },
    { label: copy.whyPartner, href: `/${locale}/why-partner` },
    { label: copy.aboutUs, href: `/${locale}/about-us` },
    { label: copy.whoWeWorkWith, href: `/${locale}/who-we-work-with` },
    { label: copy.workWithUs, href: `/${locale}/contact` },
    { label: copy.faq, href: `/${locale}/faq` },
    ];

  const open = menuOpen ? "is-open" : "";

    return (
    <>
      <a href="#main-content" className="skip-link">
        {ui.skipToMainContent}
      </a>

      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <div className="flex min-h-[var(--nav-height)] items-center justify-between gap-5">
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

            <nav aria-label={ui.mainNavigation} className="block max-[720px]:hidden">
              <ul className="nav-links flex list-none items-center justify-center gap-6 p-0 text-[0.7rem] uppercase tracking-[0.14em] max-[720px]:hidden">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <div className="max-[721px]:hidden">
                <LanguageSwitcher locale={locale} ui={ui} />
              </div>
              <Button
                href={business.partnerCtaUrl}
                variant="gold"
                className="max-[720px]:hidden"
                aria-label={ui.contactKemeryaTours}
              >
                {copy.contact}
              </Button>
              <button
                type="button"
                className={`menu-toggle ${open} inline-flex h-[2.9rem] w-[2.9rem] cursor-pointer flex-col items-center justify-center gap-[0.28rem] rounded-full border border-[rgba(200,143,47,0.28)] bg-[rgba(200,143,47,0.08)] min-[721px]:hidden`}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? ui.closeMainMenu : ui.openMainMenu}
                onClick={toggleMenu}
              >
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </button>
            </div>
          </div>
        </Container>

                        {/* Clickable overlay + mobile menu inside header */}
        <div
          id="mobile-menu"
          className={`mobile-menu ${open}`}
          aria-label={ui.mobileNavigation}
          aria-hidden={!menuOpen}
        >
                    {/* Clickable overlay — absolute inside menu, behind content, in front of page */}
          <div
            className={`mobile-menu-overlay ${open}`}
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Close button positioned relative to the full-screen menu */}
          <button
            type="button"
            className="mobile-menu__close"
            aria-label={ui.closeMainMenu}
            onClick={closeMenu}
          >
            <span className="close-x" />
          </button>
          {/* Content above overlay so links/buttons still receive clicks */}
          <div className="mobile-menu__content">
            <div className="mobile-menu__lang">
              <LanguageSwitcher locale={locale} ui={ui} />
            </div>

            <ul className="mobile-menu__list">
              {navItems.map((item, i) => (
                <li key={item.href} style={{ "--stagger": i } as React.CSSProperties}>
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
