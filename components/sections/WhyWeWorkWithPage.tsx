import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { business } from "@/data/business";
import type { UiTranslations, Locale } from "@/lib/i18n";

type WhyWeWorkWithPageProps = {
  locale: Locale;
  ui: UiTranslations;
  copy: {
    seo: {
      title: string;
      description: string;
      primaryKeyword: string;
      supportingKeywords: readonly string[];
    };
    hero: {
      eyebrow: string;
      title: readonly string[];
      subtitle: string;
      intro: string;
      primary: string;
      secondary: string;
      image: { src: string; alt: string };
    };
    audiences: {
      title: string;
      intro: string;
      items: readonly {
        title: string;
        description: string;
        image?: { src: string; alt: string };
      }[];
    };
    differentRequirements: {
      title: string;
      content: string;
    };
    inquiry: {
      title: string;
      intro: string;
      items: readonly string[];
      closing: string;
    };
    practicalStartingPoint: {
      title: string;
      content: readonly string[];
    };
    relatedLinks: readonly { text: string; href: string }[];
    cta: {
      eyebrow: string;
      title: readonly string[];
      description: string;
      primary: string;
      secondary: string;
    };
  };
};

export function WhyWeWorkWithPage({ locale, copy, ui }: WhyWeWorkWithPageProps) {
  const internalHref = (path: string) => `/${locale}/${path}`;

  return (
    <>
      {/* Hero */}
      <section
        className="why-we-work-with-hero"
        aria-labelledby="why-we-work-with-hero-title"
      >
        <div className="why-we-work-with-hero__media" aria-hidden="true">
          <Image
            src={copy.hero.image.src}
            alt={copy.hero.image.alt}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="why-we-work-with-hero__overlay" />
        </div>
        <Container className="why-we-work-with-hero__content">
          <div className="why-we-work-with-hero__inner">
            <p className="eyebrow why-we-work-with-hero__eyebrow">
              {copy.hero.eyebrow}
            </p>
            <h1
              id="why-we-work-with-hero-title"
              className="why-we-work-with-hero__title"
            >
              {copy.hero.title.map((line) => (
                <span className="line" key={line}>
                  {line}
                </span>
              ))}
            </h1>
            {copy.hero.subtitle && (
              <p className="why-we-work-with-hero__subtitle">
                {copy.hero.subtitle}
              </p>
            )}
            {copy.hero.intro.split("\n\n").map((paragraph, index) => (
              <p key={index} className="why-we-work-with-hero__intro">
                {paragraph}
              </p>
            ))}
            <div className="why-we-work-with-hero__actions">
              <Button
                href={business.partnerCtaUrl}
                variant="gold"
                aria-label={ui.partnerWithKemeryaTours}
              >
                {copy.hero.primary}
              </Button>
              <Button
                href={internalHref("capabilities")}
                variant="light"
              >
                {copy.hero.secondary}
              </Button>
            </div>
          </div>
        </Container>
            </section>

      {/* Audiences */}
      <Section id="audiences" className="wwtw-audiences">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.audiences.title}</h2>
            <p className="section-intro">{copy.audiences.intro}</p>
          </div>
          <div className="audiences-grid">
            {copy.audiences.items.map((item) => (
              <article key={item.title} className="audience-card">
                {item.image && (
                  <div className="audience-card__media">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
                <div className="audience-card__body">
                  <h3 className="audience-card__title">{item.title}</h3>
                  {item.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="audience-card__description">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
            </Section>

      {/* Different Requirements */}
      <Section
        id="different-requirements"
        className="wwtw-different-requirements"
      >
        <Container>
          <div className="editorial-chapter__inner">
            <h2 className="editorial-chapter__title split-lines">
              {copy.differentRequirements.title}
            </h2>
            {copy.differentRequirements.content
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="editorial-chapter__description"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </Container>
      </Section>

      {/* Inquiry */}
      <Section id="inquiry" className="wwtw-inquiry">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.inquiry.title}</h2>
            <p className="section-intro">{copy.inquiry.intro}</p>
          </div>
          <ul className="caps-list">
            {copy.inquiry.items.map((item, index) => (
              <li key={index} className="caps-list__item">
                {item}
              </li>
            ))}
          </ul>
          <p className="who-can-discuss__content">
            {copy.inquiry.closing}
          </p>
        </Container>
      </Section>

      {/* Practical Starting Point */}
      <Section
        id="practical-starting-point"
        className="wwtw-practical-starting-point"
      >
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">
              {copy.practicalStartingPoint.title}
            </h2>
          </div>
          <div className="editorial-blocks">
            {copy.practicalStartingPoint.content.map((paragraph, index) => (
              <div key={index} className="editorial-block">
                <p className="editorial-block__description">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Links */}
      <Section id="related-links" className="related-links">
        <Container>
          <div className="related-links__grid">
            {copy.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={internalHref(link.href)}
                className="related-link"
              >
                {link.text}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section
        id="who-we-work-with-cta"
        className="final-contact why-we-work-with-cta"
        aria-labelledby="who-we-work-with-cta-title"
      >
        <Container className="final-contact__content">
          <p className="eyebrow">{copy.cta.eyebrow}</p>
          <h2 id="who-we-work-with-cta-title">
            {copy.cta.title.map((line, index) => (
              <span
                className="line"
                key={line}
                style={{ animationDelay: `${0.2 + index * 0.3}s` }}
              >
                {line}
              </span>
            ))}
          </h2>
          <p className="final-contact__description">
            {copy.cta.description}
          </p>
          <div className="final-contact__actions">
            <Button
              href={business.partnerCtaUrl}
              variant="gold"
              aria-label={ui.partnerWithKemeryaTours}
            >
              {copy.cta.primary}
            </Button>
            <Button
              href={internalHref("capabilities")}
              variant="light"
            >
              {copy.cta.secondary}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}


