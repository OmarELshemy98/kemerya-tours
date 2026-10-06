import Image from "next/image";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { UiTranslations } from "@/lib/i18n";

type HeroProps = {
  ui: UiTranslations;
  copy: {
    eyebrow: string;
    title: readonly string[];
    subtitle: string;
    primary: string;
    secondary: string;
    note: string;
  };
};

export function Hero({ copy, ui }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__image">
        <Image
          src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1800&q=80"
          alt={ui.heroImageAlt}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero__overlay" />

      <div className="hero__sun" aria-hidden="true">
        <svg viewBox="0 0 200 200" role="presentation">
          <circle cx="100" cy="100" r="56" fill="rgba(200,143,47,0.9)" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="1.4" />
          <g stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" fill="none">
            <line x1="100" y1="20" x2="100" y2="6" />
            <line x1="100" y1="194" x2="100" y2="180" />
            <line x1="20" y1="100" x2="6" y2="100" />
            <line x1="194" y1="100" x2="180" y2="100" />
            <line x1="42" y1="42" x2="32" y2="32" />
            <line x1="158" y1="158" x2="168" y2="168" />
            <line x1="42" y1="158" x2="32" y2="168" />
            <line x1="158" y1="42" x2="168" y2="32" />
          </g>
        </svg>
      </div>

      <div className="hero__ornament hero__ornament--left" aria-hidden="true">
        <svg viewBox="0 0 180 180" role="presentation">
          <path d="M45 150V80L90 40L135 80V150" fill="none" stroke="rgba(200,143,47,0.75)" strokeWidth="2" />
          <path d="M70 150V98H110V150" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <path d="M25 138H155" fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="hero__ornament hero__ornament--right" aria-hidden="true">
        <svg viewBox="0 0 160 160" role="presentation">
          <path d="M10 110C35 90 52 88 75 98C95 106 103 104 124 86C132 79 140 75 150 74" fill="none" stroke="rgba(200,143,47,0.7)" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 130C42 115 61 115 80 125C100 135 116 133 142 118" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <Container className="hero__content">
        <div className="hero__inner">
          <p className="eyebrow hero__kicker">{copy.eyebrow}</p>
          <h1 id="hero-heading">
            {copy.title.map((line) => (
              <span className="line" key={line}>
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__lead">{copy.subtitle}</p>

                    <div className="hero__actions">
            <Button href={business.partnerCtaUrl} external variant="primary" aria-label={ui.becomePartnerKemeryaTours}>
              {copy.primary}
            </Button>
            <Button href={business.website} external variant="secondary" aria-label={ui.visitKemeryaHomepage}>
              {copy.secondary}
            </Button>
          </div>

          <p className="hero__kicker" style={{ marginTop: "1.5rem", opacity: 0.9 }}>
            {copy.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
