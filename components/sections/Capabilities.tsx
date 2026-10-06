import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import type { Capability } from "@/data/capabilities";

type CapabilitiesProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  items: readonly Capability[];
};

export function Capabilities({ copy, items }: CapabilitiesProps) {
  return (
    <section className="section" id="capabilities">
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