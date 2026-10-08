import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { HieroglyphicBorder } from "@/components/ui/pharaonic";
import type { WhyPartnerItem } from "@/data/whyPartner";

type WhyPartnerProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  items: readonly WhyPartnerItem[];
};

export function WhyPartner({ copy, items }: WhyPartnerProps) {
  return (
    <Section id="why-partner" className="why-kemerya">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="why-partner__frame" aria-hidden="true">
          <HieroglyphicBorder variant="horizontal" />
        </div>

        <div className="why-items">
          {items.map((item, index) => (
            <div key={item.title} className="why-item">
              <div className="why-item__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="why-item__title">{item.title}</h3>
              <p className="why-item__description">{item.description}</p>
            </div>

          ))}
        </div>

        <div className="why-partner__frame" aria-hidden="true">
          <HieroglyphicBorder variant="horizontal" />
        </div>
      </Container>
    </Section>
  );
}
