import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type BrandPhilosophyProps = {
  copy: {
    title: string;
    description: string;
  };
};

export function BrandPhilosophy({ copy }: BrandPhilosophyProps) {
  return (
    <Section id="brand-philosophy">
      <Container>
        <div className="section__heading">
          <h2 className="split-lines">{copy.title}</h2>
        </div>
        <p className="section-intro">{copy.description}</p>
      </Container>
    </Section>
  );
}