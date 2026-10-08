import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type ApproachItem = {
  title: string;
  description: string;
};

type KemeryaApproachProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly ApproachItem[];
  };
};

export function KemeryaApproach({ copy }: KemeryaApproachProps) {
  return (
    <Section id="approach" className="kemerya-approach">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="kemerya-approach__list">
          {copy.items.map((item, index) => (
            <div key={item.title} className="kemerya-approach__item">
              <span
                className="kemerya-approach__number"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="kemerya-approach__title">{item.title}</h3>
                <p className="kemerya-approach__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
