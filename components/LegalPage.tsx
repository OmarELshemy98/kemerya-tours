import Link from "next/link";
import { business } from "@/data/business";
import type {
  LegalPageContent,
  LegalLinkTarget,
} from "@/lib/brand-content/types";
import type { UiTranslations } from "@/lib/i18n";

export type LegalPageProps = {
  locale: string;
  content: LegalPageContent;
  ui: UiTranslations;
};

function getLegalHref(locale: string, target: LegalLinkTarget): string {
  if (target === "contact") return `/${locale}/contact`;
  return `/${locale}/${target}`;
}

export function LegalPage({ locale, content }: LegalPageProps) {
  return (
    <article className="legal-page">
      <header className="legal-header">
        <div className="legal-eyeliner">{content.eyeliner}</div>
        <h1 className="legal-title">{content.title}</h1>
        <p className="legal-intro">{content.intro}</p>
      </header>

      <div className="legal-sections">
        {content.sections.map((section, i) => (
          <section key={i} className="legal-section">
            <h2 className="legal-section__title">{section.title}</h2>
            <div className="legal-section__body">
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
            </div>
          </section>
        ))}
      </div>

      <footer className="legal-contact">
        <p className="legal-contact__address">{content.contact.intro}</p>
        <a
          href={business.partnerCtaUrl}
          className="btn btn--primary legal-contact__cta"
        >
          {content.contact.ctaLabel}
        </a>
      </footer>
    </article>
  );
}