import { business } from "@/data/business";
import type { LegalPageContent } from "@/lib/brand-content/types";
import type { UiTranslations } from "@/lib/i18n";
import { LegalSection } from "@/components/LegalSection";

export type LegalPageProps = {
  locale: string;
  content: LegalPageContent;
  ui: UiTranslations;
};

/**
 * Extract the first word of the intro to use as a drop-cap letter.
 * If the intro starts with a quotation or tag, we fall back to a span.
 */
function getDropCap(intro: string): string {
  const trimmed = intro.trim();
  return trimmed.charAt(0) || "";
}

function getRestIntro(intro: string): string {
  const trimmed = intro.trim();
  return trimmed.slice(1);
}

export function LegalPage({ locale, content, ui }: LegalPageProps) {
  const updatedDate = content.lastUpdated ?? business.legalLastUpdated;
  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(updatedDate));

  const dropCapLetter = getDropCap(content.intro);
  const restIntro = getRestIntro(content.intro);
  const sectionCount = content.sections.length;
  const readingMinutes = Math.max(1, Math.ceil(sectionCount * 1.2));

  return (
    <article className="legal-page" id="legal-page-top">
      {/* ── Header ── */}
      <header className="legal-header">
        <div className="legal-eyeliner">{content.eyeliner}</div>

        <div className="legal-title-wrapper">
          <h1 className="legal-title">{content.title}</h1>
          <div className="legal-meta">
            <span className="legal-meta__item legal-meta__count">
              {sectionCount} sections · {readingMinutes} min read
            </span>
          </div>
        </div>

                                {/* Intro with drop-cap */}
        <p
          className="legal-intro legal-intro--dropcap"
          data-dropcap={dropCapLetter}
        >
          <span className="legal-intro__dropcap">{dropCapLetter}</span>
          {restIntro}
        </p>

        <p className="legal-last-updated">
          {ui.lastUpdated}: <time dateTime={updatedDate}>{formattedDate}</time>
        </p>
      </header>

      {/* ── Sections (collapsible) ── */}
      <div
        className="legal-sections"
        role="group"
        aria-label={ui.tableOfContents}
      >
        {content.sections.map((section, i) => (
          <LegalSection
            key={i}
            section={section}
            index={i}
            locale={locale}
          />
        ))}
      </div>

      {/* ── Contact / CTA footer ── */}
      <footer className="legal-contact">
        <div className="legal-contact__inner">
          <p className="legal-contact__address">{content.contact.intro}</p>
          <a
            href={business.partnerCtaUrl}
            className="btn btn--primary legal-contact__cta"
          >
            {content.contact.ctaLabel}
          </a>
        </div>
      </footer>
    </article>
  );
}
