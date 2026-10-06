import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PartnershipStep } from "@/data/partnershipSteps";

type KemeryaDifferenceProps = {
  steps: readonly PartnershipStep[];
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
  };
};

export function KemeryaDifference({ copy, steps }: KemeryaDifferenceProps) {
  return (
    <Section id="partnership">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.intro}</p>
        </div>

        <div className="partner-steps">
          {steps.map((step) => (
            <div key={step.step} className="partner-step">
              <div className="partner-step__number">{step.step}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}



