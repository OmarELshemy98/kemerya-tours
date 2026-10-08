import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EgyptianBird, SunDisk } from "@/components/ui/pharaonic";
import type { Locale, UiTranslations } from "@/lib/i18n";

type HeroProps = {
  locale: Locale;
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

export function Hero({ locale, copy, ui }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__image" aria-hidden="true" />
      <div className="hero__sun" aria-hidden="true">
        <SunDisk />
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

      <div className="hero__bird" aria-hidden="true">
        <EgyptianBird />
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
            <Button href={business.partnerCtaUrl} variant="primary" aria-label={ui.becomePartnerKemeryaTours}>
              {copy.primary}
            </Button>
            <Button href={`/${locale}/contact`} variant="secondary" aria-label={ui.contactKemeryaTours}>
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
