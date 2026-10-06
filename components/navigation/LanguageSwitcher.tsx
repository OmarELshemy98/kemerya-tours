"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
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
];

function FlagSvg({ country }: { country: string }) {
  const map: Record<string, string> = {
    gb: "#012169",
    eg: "#CE1126",
    fr: "#0055A4",
    it: "#009246",
    es: "#C60B1E",
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
    </svg>
  );
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
        aria-label="Select language"
        onClick={() => setOpen((current) => !current)}
      >
        <FlagSvg country={selected.flag} />
        <span className="lang-trigger__code">{selected.code.toUpperCase()}</span>
        <span aria-hidden="true" className="lang-trigger__caret">
          ▾
        </span>
      </button>

      <div className={`lang-menu ${open ? "is-open" : ""}`} role="listbox" aria-label="Language selector menu">
        {languageOptions.map((option) => (
          <Link
            key={option.code}
            href={option.href}
            className={`lang-option ${option.code === locale ? "is-active" : ""}`}
            aria-current={option.code === locale ? "page" : undefined}
            onClick={() => setOpen(false)}
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
