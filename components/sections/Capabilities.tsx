import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
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
    <Section id="capabilities">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="split-lines">{copy.title}</h1>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <FeatureGrid items={items} />
      </Container>
    </Section>
  );
}