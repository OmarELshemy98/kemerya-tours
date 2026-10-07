import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { business } from "@/data/business";
import type { UiTranslations } from "@/lib/i18n";

type B2BCredibilityProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
  };
  ui: UiTranslations;
};

export function B2BCredibility({ copy, ui }: B2BCredibilityProps) {
  return (
    <Section id="credibility" className="credibility-section">
      <Container>
        <div className="credibility-section__text">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
          <p className="credibility-section__note">{copy.note}</p>

          <Button
            href={business.partnerCtaUrl}
            variant="gold"
            aria-label={ui.partnerWithKemeryaTours}
          >
            BECOME A PARTNER
          </Button>
        </div>
      </Container>
    </Section>
  );
}
