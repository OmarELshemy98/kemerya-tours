import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
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
    <Section id="why-partner">
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