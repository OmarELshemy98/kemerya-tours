import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Journey = {
  title: string;
  description: string;
  image: string;
};

type SelectedJourneysProps = {
  journeys: readonly Journey[];
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    modelLabel: string;
  };
};

export function SelectedJourneys({ journeys, copy }: SelectedJourneysProps) {
  return (
    <Section id="journeys">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.intro}</p>
        </div>

        <div className="journey-grid">
          {journeys.map((journey) => (
            <article key={journey.title} className="journey-card">
              <div className="journey-card__media">
                <Image src={journey.image} alt={journey.title} fill />
              </div>
              <div className="journey-card__body">
                <h3>{journey.title}</h3>
                <p>{journey.description}</p>
                <div className="journey-card__meta">
                  <span>{copy.modelLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </Container>
    </Section>
  );
}
