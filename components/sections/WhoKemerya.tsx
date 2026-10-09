import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TempleColumnPair } from "@/components/ui/egyptian-svg";
import { business } from "@/data/business";
import type { UiTranslations } from "@/lib/i18n";

type WhoKemeryaProps = {
  ui: UiTranslations;
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    paragraphs: readonly string[];
    principles: readonly string[];
    cta: string;
  };
};

export function WhoKemerya({ copy, ui }: WhoKemeryaProps) {
  return (
    <Section id="who-kemerya" className="who-kemerya">
      <div className="editorial__column-pair" aria-hidden="true">
        <TempleColumnPair decorative size={140} />
      </div>
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.subtitle}</p>
        </div>

        <div className="who-kemerya__content">
          <div className="who-kemerya__text">
            <p className="lead">{copy.intro}</p>
            {copy.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {copy.principles && copy.principles.length > 0 && (
              <div className="kemerya-principles">
                {copy.principles.map((principle, index) => (
                  <div key={index} className="principle-item">
                    <span className="principle-item__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="principle-item__label">{principle}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {copy.cta && copy.cta.length > 0 && (
            <div className="who-kemerya__cta">
              <Button href={business.partnerCtaUrl} variant="gold" aria-label={ui.partnerWithKemeryaTours}>
                {copy.cta}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
