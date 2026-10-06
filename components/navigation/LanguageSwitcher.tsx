"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale, UiTranslations } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  ui: UiTranslations;
};

const languageOptions: ReadonlyArray<{
  code: Locale;
  label: string;
  native: string;
  href: string;
  flag: string;
}> = [
  { code: "en", label: "English", native: "English", href: "/en", flag: "gb" },
  { code: "ar", label: "العربية", native: "العربية", href: "/ar", flag: "eg" },
  { code: "fr", label: "Français", native: "Français", href: "/fr", flag: "fr" },
  { code: "it", label: "Italiano", native: "Italiano", href: "/it", flag: "it" },
  { code: "es", label: "Español", native: "Español", href: "/es", flag: "es" },
  { code: "de", label: "Deutsch", native: "Deutsch", href: "/de", flag: "de" },
  { code: "pt", label: "Português", native: "Português", href: "/pt", flag: "pt" },
  { code: "nl", label: "Nederlands", native: "Nederlands", href: "/nl", flag: "nl" },
  { code: "zh", label: "中文", native: "中文", href: "/zh", flag: "zh" },
];

function FlagSvg({ country }: { country: string }) {
  const map: Record<string, string> = {
    gb: "#012169",
    eg: "#CE1126",
    fr: "#0055A4",
    it: "#009246",
    es: "#C60B1E",
    de: "#000000",
    pt: "#006600",
    nl: "#AE1C28",
    zh: "#D12A2A",
  };

  const color = map[country] ?? "#ffffff";

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="lang-option__flag">
      <rect width="24" height="24" fill={color} />
      {country === "gb" && (
        <>
          <path d="M0 0L24 24M24 0L0 24" stroke="#fff" strokeWidth="3" />
          <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="1.5" />
          <path d="M0 12H24M12 0V24" stroke="#fff" strokeWidth="4" />
          <path d="M0 12H24M12 0V24" stroke="#C8102E" strokeWidth="2" />
        </>
      )}
      {country === "eg" && (
        <>
          <rect y="0" width="24" height="8" fill="#CE1126" />
          <rect y="8" width="24" height="8" fill="#fff" />
          <rect y="16" width="24" height="8" fill="#000" />
          <circle cx="12" cy="12" r="2.2" fill="#C09300" />
        </>
      )}
      {country === "fr" && (
        <>
          <rect width="8" height="24" fill="#0055A4" />
          <rect x="8" width="8" height="24" fill="#fff" />
          <rect x="16" width="8" height="24" fill="#EF4135" />
        </>
      )}
      {country === "it" && (
        <>
          <rect width="8" height="24" fill="#009246" />
          <rect x="8" width="8" height="24" fill="#fff" />
          <rect x="16" width="8" height="24" fill="#CE2B37" />
        </>
      )}
      {country === "es" && (
        <>
          <rect width="24" height="24" fill="#C60B1E" />
          <rect y="6" width="24" height="12" fill="#FFC400" />
          <rect y="9" width="24" height="6" fill="#C60B1E" />
        </>
      )}
      {(country === "de" || country === "pt" || country === "nl" || country === "zh") && (
        <>
          <rect width="24" height="24" fill={color} />
          {country === "de" && (
            <>
              <rect y="0" width="24" height="8" fill="#000" />
              <rect y="8" width="24" height="8" fill="#DD0000" />
              <rect y="16" width="24" height="8" fill="#FFCE00" />
            </>
          )}
          {country === "pt" && (
            <>
              <rect width="8" height="24" fill="#006600" />
              <rect x="8" width="8" height="24" fill="#FFCC00" />
              <rect x="16" width="8" height="24" fill="#006600" />
            </>
          )}
          {country === "nl" && (
            <>
              <rect y="0" width="24" height="8" fill="#AE1C28" />
              <rect y="8" width="24" height="8" fill="#fff" />
              <rect y="16" width="24" height="8" fill="#21468B" />
            </>
          )}
          {country === "zh" && (
            <>
              <rect width="24" height="24" fill="#D12A2A" />
              <circle cx="12" cy="12" r="4" fill="#FFD466" />
            </>
          )}
        </>
      )}
    </svg>
  );
}

export function LanguageSwitcher({ locale, ui }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const selected = languageOptions.find((option) => option.code === locale) ?? languageOptions[0];

  return (
    <div className="lang-switcher" ref={containerRef}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ui.selectLanguage}
        onClick={() => setOpen((current) => !current)}
      >
        <FlagSvg country={selected.flag} />
        <span className="lang-trigger__code">{selected.code.toUpperCase()}</span>
        <span aria-hidden="true" className="lang-trigger__caret">
          ▾
        </span>
      </button>

      <div className={`lang-menu ${open ? "is-open" : ""}`} role="listbox" aria-label={ui.languageSelectorMenu}>
        {languageOptions.map((option) => (
          <Link
            key={option.code}
            href={option.href}
            className={`lang-option ${option.code === locale ? "is-active" : ""}`}
            aria-current={option.code === locale ? "page" : undefined}
            onClick={(event) => {
              setOpen(false);
              const suffix = `${window.location.search}${window.location.hash}`;
              if (suffix) {
                event.preventDefault();
                router.push(`${option.href}${suffix}`);
              }
            }}
          >
            <FlagSvg country={option.flag} />
            <span className="lang-option__meta">
              <span className="lang-option__name">{option.label}</span>
              <span className="lang-option__code">{option.code.toUpperCase()}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
