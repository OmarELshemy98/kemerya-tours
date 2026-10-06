import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import type { AdvantageData } from "@/data/advantages";

type AdvantageIcon = "client" | "ops" | "expertise" | "commission" | "brand";
type KemeryaAdvantageProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  items: readonly AdvantageData[];
};

export function KemeryaAdvantage({ copy, items }: KemeryaAdvantageProps) {
  return (
    <section className="section">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="advantage-grid">
          {items.map((item) => (
            <article key={item.title} className="advantage-card">
              <div className="advantage-card__icon">
                <Icon name={item.icon as AdvantageIcon} />
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