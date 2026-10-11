"use client";

import { useState } from "react";
import Link from "next/link";
import type { LegalSection as LegalSectionType, LegalLinkTarget } from "@/lib/brand-content/types";

type LegalSectionProps = {
  section: LegalSectionType;
  index: number;
  locale: string;
};

function getLegalHref(locale: string, target: LegalLinkTarget): string {
  if (target === "contact") return `/${locale}/contact`;
  return `/${locale}/${target}`;
}

/**
 * LegalSection — Collapsible, anchor-linked legal section card.
 * Each section can be expanded/collapsed on demand. The section number
 * badge is derived from the `index` prop.
 */
export function LegalSection({ section, index, locale }: LegalSectionProps) {
  const [open, setOpen] = useState(true);
  const sectionId = `section-${index}`;

  return (
    <section
      id={sectionId}
      className={`legal-section ${open ? "is-open" : "is-collapsed"}`}
      data-section-index={index}
    >
      <header className="legal-section__header">
        <span className="legal-section__counter">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2
          id={`${sectionId}-anchor`}
          className="legal-section__title"
        >
          {section.title}
        </h2>

        <button
          type="button"
          className="legal-section__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`${sectionId}-body`}
        >
          <span
            className="legal-section__toggle-icon"
            data-state={open ? "open" : "closed"}
            aria-hidden="true"
          >
            {open ? "−" : "+"}
          </span>
          <span className="sr-only">
            {open ? "Collapse" : "Expand"} section
          </span>
        </button>
      </header>

      <div
        id={`${sectionId}-body`}
        className="legal-section__body"
        hidden={!open}
      >
        {section.blocks.map((block, j) => {
          if (block.type === "paragraph") {
            return (
              <p key={j} className="legal-paragraph">
                {block.text}
              </p>
            );
          }
          if (block.type === "subheading") {
            return (
              <h3 key={j} className="legal-subheading">
                {block.text}
              </h3>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={j} className="legal-list">
                {block.items.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            );
                    }
          if (block.type === "link") {
            return (
              <p key={j} className="legal-link-block">
                {block.prefix}{" "}
                <Link
                  href={getLegalHref(locale, block.target)}
                  className="legal-link"
                >
                  {block.label}
                </Link>
              </p>
            );
          }
          return null;
        })}

        {section.subsections &&
          section.subsections.length > 0 &&
          section.subsections.map((sub, j) => (
            <div
              key={j}
              id={`${sectionId}-${j}`}
              className="legal-subsection"
            >
              <h3 className="legal-subsection__title">
                {sub.title}
              </h3>
              {sub.blocks.map((block, k) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={k} className="legal-paragraph">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "subheading") {
                  return (
                    <h4 key={k} className="legal-subheading legal-subheading--small">
                      {block.text}
                    </h4>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={k} className="legal-list legal-list--sub">
                      {block.items.map((item, l) => (
                        <li key={l}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          ))}
      </div>
    </section>
  );
}
