import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { business } from "@/data/business";
import type { UiTranslations } from "@/lib/i18n";

type BrandStatementProps = {
  ui: UiTranslations;
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    paragraphs: readonly string[];
    image: string;
    cta: string;
  };
  cta?: string;
};

export function BrandStatement({ copy, ui, cta }: BrandStatementProps) {
  return (
    <Section id="brand-statement" className="brand-statement">
      <Container>
        <div className="brand-statement__layout">
          <div className="brand-statement__text">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="split-lines">{copy.title}</h2>
            <p className="section-intro">{copy.subtitle}</p>

            <p className="lead">{copy.intro}</p>

            {copy.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {cta && cta.length > 0 && (
              <div className="brand-statement__cta">
                <Button href={business.partnerCtaUrl} variant="gold" aria-label={ui.partnerWithKemeryaTours}>
                  {cta}
                </Button>
              </div>
            )}
          </div>

          <div className="brand-statement__image" aria-hidden="true">
            <div className="brand-statement__image-bg" style={{ backgroundImage: `url(${copy.image})` }} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

