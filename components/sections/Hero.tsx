import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TempleGateway } from "@/components/ui/egyptian-svg";
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
        <section
      className="hero"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage:
          "linear-gradient(rgba(13,17,18,0.72), rgba(13,17,18,0.72)), url('/images/areas-we-support-cards/egypt-travel-packages.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
            <div className="hero__image" aria-hidden="true" />
      <div
        className="hero__egyptian-gateway"
        aria-hidden="true"
        role="presentation"
      >
        <TempleGateway decorative size="100%" />
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
                        <Button href={business.partnerCtaUrl} variant="gold" aria-label={ui.becomePartnerKemeryaTours}>
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
