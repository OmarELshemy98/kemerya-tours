import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { CommercialPoint } from "@/data/commercialPoints";

type CommercialConfidenceProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  points: readonly CommercialPoint[];
};

export function CommercialConfidence({ copy, points }: CommercialConfidenceProps) {
  return (
    <Section id="commercial-confidence" className="commercial-confidence">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="commercial-points">
          {points.map((point, index) => (
            <div key={point.title} className="commercial-point">
              <div
                className="commercial-point__number"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="commercial-point__content">
                <h3 className="commercial-point__title">{point.title}</h3>
                <p className="commercial-point__description">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
