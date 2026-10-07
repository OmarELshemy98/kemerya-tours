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
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="journey-editorials">
          {journeys.map((journey, index) => (
            <article key={journey.title} className="journey-editorial">
              <div className="journey-editorial__media">
                <Image
                  src={journey.image}
                  alt={journey.title}
                  fill
                  sizes="(max-width: 820px) 100vw, 42vw"
                  loading="lazy"
                />
                <div className="journey-editorial__badge" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="journey-editorial__content">
                <p className="eyebrow journey-editorial__label">
                  {copy.modelLabel}
                </p>
                <h3>{journey.title}</h3>
                <p className="journey-editorial__description">
                  {journey.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
