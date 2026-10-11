import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { business } from "@/data/business";
import type { UiTranslations, Locale } from "@/lib/i18n";

type CapabilitiesPageProps = {
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
    services: {
      title: string;
      intro: string;
      items: readonly {
        title: string;
        description: string;
        image?: { src: string; alt: string };
        icon: string;
        link?: string;
      }[];
    };
    groundArrangements: {
      title: string;
      intro: string;
      items: readonly string[];
    };
    approachTypes: {
      title: string;
      intro: string;
      items: readonly {
        title: string;
        description: string;
        icon: string;
      }[];
    };
    inquirySteps: {
      title: string;
      intro: string;
      steps: readonly {
        number: string;
        title: string;
        description: string;
      }[];
    };
    whoCanDiscuss: {
      title: string;
      intro: string;
      items: readonly string[];
      content: string;
      linkText: string;
      linkPath: string;
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
    };
  };
};

export function CapabilitiesPage({ locale, copy, ui }: CapabilitiesPageProps) {
  const internalHref = (path: string) => `/${locale}/${path}`;

  return (
    <>
      {/* Hero */}
      <section className="capabilities-hero" aria-labelledby="capabilities-hero-title">
        <div className="capabilities-hero__media" aria-hidden="true">
          <Image
            src={copy.hero.image.src}
            alt={copy.hero.image.alt}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="capabilities-hero__overlay" />
        </div>
        <Container className="capabilities-hero__content">
          <div className="capabilities-hero__inner">
            <p className="eyebrow capabilities-hero__eyebrow">
              {copy.hero.eyebrow}
            </p>
            <h1 id="capabilities-hero-title" className="capabilities-hero__title">
              {copy.hero.title.map((line) => (
                <span className="line" key={line}>{line}</span>
              ))}
            </h1>
            <p className="capabilities-hero__subtitle">{copy.hero.subtitle}</p>
            <div className="capabilities-hero__actions">
              <Button
                href={internalHref("contact")}
                variant="gold"
                aria-label={ui.contactKemeryaTours}
              >
                {copy.hero.primary}
              </Button>
              <Button href="#capabilities-services" variant="secondary">
                {copy.hero.secondary}
              </Button>
            </div>
          </div>
        </Container>
            </section>

      {/* Services */}
      <Section id="capabilities-services" className="capabilities-services">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.services.title}</h2>
            <p className="section-intro">{copy.services.intro}</p>
          </div>
          <div className="service-grid">
            {copy.services.items.map((item) => (
              <article key={item.title} className="service-card">
                {item.image && (
                  <div className="service-card__media">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
                <div className="service-card__body">
                  <div className="service-card__icon">
                    <Icon name={item.icon as IconName} />
                  </div>
                  <h3 className="service-card__title">{item.title}</h3>
                  <p className="service-card__description">
                    {item.description}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="service-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ui.explore}{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ground Arrangements */}
      <Section id="ground-arrangements" className="capabilities-ground">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">
              {copy.groundArrangements.title}
            </h2>
            <p className="section-intro">
              {copy.groundArrangements.intro}
            </p>
          </div>
          <ul className="caps-list">
            {copy.groundArrangements.items.map((item, index) => (
              <li key={index} className="caps-list__item">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Approach Types */}
      <Section id="approach-types" className="approach-types">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.approachTypes.title}</h2>
            <p className="section-intro">{copy.approachTypes.intro}</p>
          </div>
          <div className="approach-grid">
            {copy.approachTypes.items.map((item) => (
              <div key={item.title} className="approach-card">
                <div className="approach-card__icon">
                  <Icon name={item.icon as IconName} />
                </div>
                <h3 className="approach-card__title">{item.title}</h3>
                <p className="approach-card__description">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Inquiry Steps */}
      <Section id="inquiry-steps" className="inquiry-steps">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.inquirySteps.title}</h2>
            <p className="section-intro">{copy.inquirySteps.intro}</p>
          </div>
          <div className="steps-grid">
            {copy.inquirySteps.steps.map((step) => (
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
      
      {/* Who Can Discuss */}
      <Section id="who-can-discuss" className="who-can-discuss">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{copy.whoCanDiscuss.title}</h2>
            <p className="section-intro">{copy.whoCanDiscuss.intro}</p>
          </div>
          <ul className="caps-list">
            {copy.whoCanDiscuss.items.map((item, index) => (
              <li key={index} className="caps-list__item">
                {item}
              </li>
            ))}
          </ul>
          <p className="who-can-discuss__content">
            {copy.whoCanDiscuss.content}
          </p>
          <Link
            href={internalHref(copy.whoCanDiscuss.linkPath)}
            className="who-can-discuss__link"
          >
            {copy.whoCanDiscuss.linkText}{" "}
            <span aria-hidden="true">→</span>
          </Link>
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
                {link.text}{" "}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section
        id="capabilities-cta"
        className="final-contact capabilities-cta"
        aria-labelledby="capabilities-cta-title"
      >
        <Container className="final-contact__content">
          <p className="eyebrow">{copy.cta.eyebrow}</p>
          <h2 id="capabilities-cta-title">
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
          </div>
        </Container>
      </Section>
    </>
  );
}