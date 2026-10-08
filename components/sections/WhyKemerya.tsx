import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LotusFlower } from "@/components/ui/pharaonic";

type WhyKemeryaItem = {
  title: string;
  description: string;
};

type WhyKemeryaProps = {
  copy: {
    title: string;
    items: readonly WhyKemeryaItem[];
  };
};

export function WhyKemerya({ copy }: WhyKemeryaProps) {
  return (
    <Section id="why-kemerya">
      <Container>
        <div className="section__heading">
          <h2 className="split-lines">{copy.title}</h2>
        </div>

        <div className="why-kemerya__grid">
          {copy.items.map((item, index) => (
            <div key={item.title} className="why-kemerya__item">
              <span className="why-kemerya__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="why-kemerya__title">{item.title}</h3>
              <p className="why-kemerya__description">{item.description}</p>
              <div className="why-kemerya__art" aria-hidden="true">
                <LotusFlower />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}