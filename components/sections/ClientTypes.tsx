import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import type { ClientType } from "@/data/clientTypes";

type ClientTypesProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  items: readonly ClientType[];
};

export function ClientTypes({ copy, items }: ClientTypesProps) {
  return (
    <section className="section" id="who-we-work-with">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

                <div className="feature-grid">
          {items.map((item) => (
            <article key={item.title} className="feature-card">
              <div className="feature-card__icon">
                <Icon name={item.icon as "luxury" | "globe" | "users" | "map" | "briefcase" | "pyramid"} />
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