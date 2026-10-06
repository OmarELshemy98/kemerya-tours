import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { UiTranslations } from "@/lib/i18n";

type Journey = {
  title: string;
  description: string;
  image: string;
  href: string;
};

type SelectedJourneysProps = {
  ui: UiTranslations;
  journeys: readonly Journey[];
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
  };
};

export function SelectedJourneys({ journeys, copy, ui }: SelectedJourneysProps) {
  return (
    <section className="section" id="journeys">
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
                  <span>{ui.private}</span>
                  <a href={journey.href} className="inline-link" target="_blank" rel="noopener noreferrer">
                    {ui.explore}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <Button href="https://www.kemeryatours.com" external variant="dark">
            {copy.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
