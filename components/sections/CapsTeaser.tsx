import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { business } from "@/data/business";
import type { Capability } from "@/data/capabilities";

type CapsTeaserProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
  };
  items: readonly Capability[];
};

export function CapsTeaser({ copy, items }: CapsTeaserProps) {
  return (
    <Section id="capabilities-teaser" className="caps-teaser">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="caps-teaser__list">
          {items.slice(0, 5).map((item, index) => (
            <div key={item.title} className="caps-teaser__item">
              <span className="caps-teaser__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="caps-teaser__item-title">{item.title}</h3>
                                {item.description && (
                  <p className="section-intro" style={{ maxWidth: "38rem" }}>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="caps-teaser__cta">
          <Button href={business.ctaUrl} variant="gold" aria-label={copy.cta}>
            {copy.cta}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
