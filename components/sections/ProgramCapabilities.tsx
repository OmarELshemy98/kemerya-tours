import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { ProgramCapability } from "@/data/programCapabilities";

type ProgramCapabilitiesProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  items: readonly ProgramCapability[];
};

export function ProgramCapabilities({ copy, items }: ProgramCapabilitiesProps) {
  return (
    <Section
      id="program-capabilities"
      className="program-capabilities"
    >
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="capability-matrix">
          {items.map((item, index) => (
            <div key={item.title} className="capability-row">
              <div
                className="capability-row__number"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="capability-row__content">
                <h3 className="capability-row__title">{item.title}</h3>
                <p className="capability-row__description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
