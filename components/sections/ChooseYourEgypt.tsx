import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Experience = {
  title: string;
  description: string;
  image: string;
  href: string;
};

type ChooseYourEgyptProps = {
  experiences: readonly Experience[];
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
  };
};

export function ChooseYourEgypt({ experiences, copy }: ChooseYourEgyptProps) {
  return (
    <section className="section" id="destinations">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.intro}</p>
        </div>

        <div className="destination-grid">
          {experiences.map((experience, index) => (
            <article
              key={experience.title}
              className={`destination-card ${index === 0 ? "destination-card--featured" : ""}`}
            >
              <div className="destination-card__image">
                <Image src={experience.image} alt={experience.title} fill />
              </div>
              <div className="destination-card__content">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <a
                  href={experience.href}
                  className="destination-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${experience.title} — ${copy.cta}`}
                >
                  {copy.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
