import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { business } from "@/data/business";
import type { UiTranslations, Locale } from "@/lib/i18n";

type WhyPartnerPageProps = {
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
      primary: string;
      secondary: string;
      image: { src: string; alt: string };
    };
    whatMatters: {
      title: string;
      intro: string;
      points: readonly {
        title: string;
        description: string;
        icon: string;
      }[];
    };
    designedFor: {
      title: string;
      intro: string;
      audiences: readonly {
        title: string;
        description: string;
        icon: string;
      }[];
      content: string;
    };
    process: {
      title: string;
      intro: string;
      steps: readonly {
        number: string;
        title: string;
        description: string;
      }[];
    };
    supportingClient: {
      title: string;
      content: string;
      description: string;
    };
    relationship: {
      title: string;
      subtitle: string;
      description: string;
      ctaTitle: string;
      content: string;
      primary: string;
      secondary: string;
    };
    relatedLinks: readonly {
      text: string;
      href: string;
    }[];
    cta: {
      eyebrow: string;
      title: readonly string[];
      description: string;
      primary: string;
      secondary: string;
    };
  };
};

export function WhyPartnerPage({ locale, copy, ui }: WhyPartnerPageProps) {
    const internalHref = (path: string) => `/${locale}/${path}`;

  return (
    <>
      {/* Hero */}
      <section className="why-partner-hero" aria-labelledby="why-partner-hero-title">
        <div className="why-partner-hero__media" aria-hidden="true">
          <Image
            src={copy.hero.image.src}
            alt={copy.hero.image.alt}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="why-partner-hero__overlay" />
        </div>
        <Container className="why-partner-hero__content">
          <div className="why-partner-hero__inner">
            <p className="eyebrow why-partner-hero__eyebrow">
              {copy.hero.eyebrow}
            </p>
            <h1 id="why-partner-hero-title" className="why-partner-hero__title">
              {copy.hero.title.map((line) => (
                <span className="line" key={line}>{line}</span>
              ))}
            </h1>
            <p className="why-partner-hero__subtitle">{copy.hero.subtitle}</p>
            <div className="why-partner-hero__actions">
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

      {/* What Matters */}
      <Section id="what-matters" className="what-matters">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.whatMatters.title}</h2>
            <p className="section-intro">{copy.whatMatters.intro}</p>
          </div>
          <div className="points-grid">
            {copy.whatMatters.points.map((point) => (
              <div key={point.title} className="point-card">
                <div className="point-card__icon">
                  <Icon name={point.icon as IconName} />
                </div>
                <h3 className="point-card__title">{point.title}</h3>
                <p className="point-card__description">{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Designed For */}
      <Section id="designed-for" className="designed-for">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.designedFor.title}</h2>
            <p className="section-intro">{copy.designedFor.intro}</p>
          </div>
          <div className="audiences-grid">
            {copy.designedFor.audiences.map((audience) => (
              <div key={audience.title} className="audience-card">
                <div className="audience-card__icon">
                  <Icon name={audience.icon as IconName} />
                </div>
                <h3 className="audience-card__title">{audience.title}</h3>
                <p className="audience-card__description">{audience.description}</p>
              </div>
            ))}
          </div>
          <p className="designed-for__content">{copy.designedFor.content}</p>
        </Container>
      </Section>

      {/* Process */}
      <Section id="process" className="inquiry-process">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.process.title}</h2>
            <p className="section-intro">{copy.process.intro}</p>
          </div>
          <div className="steps-grid">
            {copy.process.steps.map((step) => (
              <div key={step.number} className="step-card">
                <span className="step-card__number" aria-hidden="true">
                  {step.number}
                </span>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__description">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Supporting Client */}
      <Section id="supporting-client" className="supporting-client">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.supportingClient.title}</h2>
            <p className="section-intro">{copy.supportingClient.content}</p>
          </div>
          <p className="supporting-client__description">
            {copy.supportingClient.description}
          </p>
        </Container>
      </Section>

      {/* Relationship */}
      <Section
        id="relationship"
        className="relationship-section"
        aria-labelledby="relationship-title"
      >
        <Container>
          <div className="relationship__inner">
            <p className="eyebrow">{copy.relationship.title}</p>
            <h2 id="relationship-title" className="split-lines">
              {copy.relationship.subtitle}
            </h2>
            <p className="relationship__description">
              {copy.relationship.description}
            </p>
            <p className="relationship__content">
              {copy.relationship.content}
            </p>
            <div className="relationship__actions">
              <Button
                href={business.partnerCtaUrl}
                variant="gold"
                aria-label={ui.partnerWithKemeryaTours}
              >
                {copy.relationship.primary}
              </Button>
                            <Button
                href={internalHref("capabilities")}
                variant="light"
              >
                {copy.relationship.secondary}
              </Button>
            </div>
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
        id="why-partner-cta"
        className="final-contact why-partner-cta"
        aria-labelledby="why-partner-cta-title"
      >
        <Container className="final-contact__content">
          <p className="eyebrow">{copy.cta.eyebrow}</p>
          <h2 id="why-partner-cta-title">
            {copy.cta.title.map((line, index) => (
              <span
                className="line"
                key={line}
                style={{ animationDelay: String(0.2 + index * 0.3) + "s" }}
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

