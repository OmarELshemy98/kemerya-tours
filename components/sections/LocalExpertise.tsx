import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { UiTranslations } from "@/lib/i18n";

type LocalExpertiseProps = {
  ui: UiTranslations;
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    bullets: readonly string[];
    cta: string;
  };
};

export function LocalExpertise({ copy, ui }: LocalExpertiseProps) {
  return (
    <Section id="about">
      <Container>
        <div className="story-layout">
                    <div className="story-photo" />

          <div className="story-content">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>{copy.title}</h2>
            <p style={{ marginTop: "1rem" }}>{copy.intro}</p>

            <ul className="story-bullets">
              {copy.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div style={{ marginTop: "2rem" }}>
              <Button href={business.ctaUrl} external variant="dark" aria-label={ui.contactKemeryaTours}>
                {copy.cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
