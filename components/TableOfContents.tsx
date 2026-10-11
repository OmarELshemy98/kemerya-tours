"use client";

import { useState } from "react";
import type { LegalPageContent } from "@/lib/brand-content/types";
import type { UiTranslations } from "@/lib/i18n";

type TableOfContentsProps = {
  sections: LegalPageContent["sections"];
  ui: UiTranslations;
  locale: string;
};

/**
 * Right-hand (desktop) / collapsible (mobile) table of contents
 * for legal pages. Lists every section plus a "Back to top" shortcut.
 */
export function TableOfContents({ sections, ui, locale }: TableOfContentsProps) {
  const [open, setOpen] = useState(false);

  return (
    <aside className="legal-toc" aria-label={ui.tableOfContents}>
      <button
        type="button"
        className="legal-toc__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="legal-toc-list"
      >
        <span className="legal-toc__toggle-label">{ui.tableOfContents}</span>
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
                className="legal-toc__link"
                data-depth={section.subsections ? 0 : 0}
              >
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
