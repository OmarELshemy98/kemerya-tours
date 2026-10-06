import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
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
    <section className="section" id="why-partner">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="split-lines">{copy.title}</h1>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="feature-grid">
          {items.map((item) => (
            <article key={item.title} className="feature-card">
              <div className="feature-card__icon">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}