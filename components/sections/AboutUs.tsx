import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LotusDivider } from "@/components/ui/egyptian-svg";
import { business } from "@/data/business";
import type { BrandContent } from "@/lib/brand-content/types";
import type { UiTranslations, Locale } from "@/lib/i18n";

type AboutUsProps = {
  locale: Locale;
  ui: UiTranslations;
  copy: NonNullable<BrandContent["aboutUs"]>;
  conversion: NonNullable<BrandContent["conversion"]>;
};

export function AboutUs({ locale, ui, copy, conversion }: AboutUsProps) {
  const { eyebrow, title, subtitle, intro, paragraphs, sections, cta } = copy;
  const hasSections = sections && sections.length > 0;

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="about-hero"
        aria-labelledby="about-hero-heading"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,17,18,0.72), rgba(13,17,18,0.72)), url('/images/pages/about-us/pyramids.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="about-hero__overlay" aria-hidden="true" />
        <Container className="about-hero__content">
          <p className="eyebrow about-hero__kicker">{eyebrow}</p>
          <h1 id="about-hero-heading" className="about-hero__title">
            {title}
          </h1>
          <p className="about-hero__subtitle">{subtitle}</p>
                    <div className="about-hero__actions">
            <Button
              href={business.partnerCtaUrl}
              variant="gold"
              aria-label={ui.becomePartnerKemeryaTours}
            >
              {cta}
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Intro ── */}
      <Section id="about-intro" className="about-intro">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{title}</h2>
          </div>
          <div className="about-intro__body">
            <p className="lead">{intro}</p>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="about-intro__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Sections ── */}
      {hasSections && (
        <div className="about-sections">
          <LotusDivider decorative className="about-sections__divider" />
          {sections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={index}
                className={`about-section about-section--${isEven ? "image-left" : "image-right"}`}
              >
                <Container>
                  <div className="about-section__grid">
                    {section.image && (
                      <div className="about-section__image chapter-image">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 45vw"
                          style={{ objectFit: "cover" }}
                          priority={index === 0}
                        />
                      </div>
                    )}
                    <div className="about-section__body">
                      <h3 className="about-section__title">{section.title}</h3>
                      <p className="about-section__content">{section.content}</p>
                      {section.items && section.items.length > 0 && (
                        <ul className="about-section__items">
                          {section.items.map((item, i) => (
                            <li key={i} className="about-section__item">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Container>
              </article>
            );
          })}
        </div>
      )}

      {/* ── Final CTA ── */}
      <Section className="about-cta">
        <Container>
          <div className="about-cta__inner">
            <div className="about-cta__text">
              <p className="eyebrow">{conversion.eyebrow}</p>
              <h2 className="about-cta__title">
                {conversion.title.map((line, i) => (
                  <span className="line" key={i}>
                    {line}
                  </span>
                ))}
              </h2>
              <p className="about-cta__description">{conversion.description}</p>
            </div>
                                  <div className="about-cta__actions">
              <Button
                href={business.partnerCtaUrl}
                variant="gold"
                aria-label={ui.becomePartnerKemeryaTours}
              >
                {conversion.primary}
              </Button>
              <Button
                href={`/${locale}/contact`}
                variant="secondary"
                aria-label={ui.contactKemeryaTours}
              >
                {ui.contactKemeryaTours}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
