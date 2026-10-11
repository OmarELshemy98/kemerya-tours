"use client";

import { useState, useEffect, useRef } from "react";
import type { LegalPageContent } from "@/lib/brand-content/types";
import type { UiTranslations } from "@/lib/i18n";

type TableOfContentsProps = {
  sections: LegalPageContent["sections"];
  ui: UiTranslations;
  locale: string;
};

/**
 * Right-hand (desktop) / collapsible (mobile) table of contents
 * for legal pages.
 *
 * New features:
 *  • Scroll-spy: the currently-visible section is highlighted in real time
 *  • Section numbers (01, 02, …) are shown before each entry
 *  • A "Reading Guide" header replaces the plain toggle
 */
export function TableOfContents({ sections, ui, locale }: TableOfContentsProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // ── Scroll spy ──
  useEffect(() => {
    const layoutInner = document.querySelector(".legal-layout__inner");
    if (!layoutInner) return;

    const sectionEls = Array.from(
      layoutInner.querySelectorAll(".legal-section")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = sectionEls.indexOf(entry.target as Element);
          if (entry.isIntersecting && idx !== -1) {
            setActiveIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto-open TOC on desktop
  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <aside className="legal-toc" aria-label={ui.tableOfContents} ref={containerRef}>
      <div className="legal-toc__header">
        <span className="legal-toc__label">{ui.tableOfContents}</span>
        <span className="legal-toc__count">
          {sections.length} {sections.length === 1 ? "section" : "sections"}
        </span>
      </div>

      <button
        type="button"
        className="legal-toc__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="legal-toc-list"
      >
        <span className="legal-toc__toggle-label">
          {open ? ui.collapse || "Hide" : ui.expand || "Show"}
        </span>
        <span
          className="legal-toc__toggle-icon"
          aria-hidden={true}
          data-state={open ? "open" : "closed"}
        >
          {open ? "−" : "+"}
        </span>
      </button>

      <nav
        id="legal-toc-list"
        className="legal-toc__nav"
        hidden={!open}
        aria-label={ui.tableOfContents}
      >
        <ul className="legal-toc__list">
          <li className="legal-toc__item">
            <a href="#legal-page-top" className="legal-toc__link">
              {ui.backToTop}
            </a>
          </li>
          {sections.map((section, i) => (
            <li className="legal-toc__item" key={i}>
              <a
                href={`#section-${i}`}
                className={`legal-toc__link ${
                  i === activeIndex ? "is-active" : ""
                }`}
                data-depth={section.subsections ? 0 : 0}
              >
                <span className="legal-toc__number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </a>
              {section.subsections &&
                section.subsections.length > 0 && (
                  <ul className="legal-toc__sublist">
                    {section.subsections.map((sub, j) => (
                      <li className="legal-toc__subitem" key={j}>
                        <a
                          href={`#section-${i}-${j}`}
                          className="legal-toc__sublink"
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

