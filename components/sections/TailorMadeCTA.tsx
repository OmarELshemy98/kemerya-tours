import Image from "next/image";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { UiTranslations } from "@/lib/i18n";

type TailorMadeCTAProps = {
  ui: UiTranslations;
  copy: {
    eyebrow: string;
    title: readonly string[];
    description: string;
    primary: string;
    secondary: string;
  };
};

export function TailorMadeCTA({ copy, ui }: TailorMadeCTAProps) {
  return (
    <section className="section">
      <Container>
        <div className="cta-panel">
          <div className="cta-panel__image">
            <Image
              src="https://images.unsplash.com/photo-1505761671935-60eb70fe6ed4?auto=format&fit=crop&w=1800&q=80"
              alt={ui.nileImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          <div className="cta-panel__content">
            <p className="eyebrow hero__kicker">{copy.eyebrow}</p>
            <h2>
              {copy.title.map((line) => (
                <span className="line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p>{copy.description}</p>
            <div className="cta-panel__actions">
              <Button href={business.ctaUrl} external variant="primary" aria-label={ui.contactKemeryaTours}>
                {copy.primary}
              </Button>
              <Button href="tel:+201275050450" variant="light">
                {copy.secondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
