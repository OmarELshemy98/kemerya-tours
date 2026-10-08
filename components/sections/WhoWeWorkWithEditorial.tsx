import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { business } from "@/data/business";
import type { UiTranslations } from "@/lib/i18n";

type TeamGroup = {
  label: string;
  title: string;
  description: string;
  clients: readonly string[];
  image: string;
};

type WhoWeWorkWithEditorialProps = {
  ui: UiTranslations;
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: readonly TeamGroup[];
  };
};

export function WhoWeWorkWithEditorial({ copy, ui }: WhoWeWorkWithEditorialProps) {
  return (
    <Section id="who-we-work-with" className="who-we-work-with-editorial">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="editorial-blocks">
          {copy.groups.map((group) => (
            <div key={group.label} className="editorial-block">
              <div className="editorial-block__text">
                <span className="editorial-block__label">{group.label}</span>
                <h3 className="editorial-block__title">{group.title}</h3>
                <p className="editorial-block__description">{group.description}</p>
                <div className="editorial-block__clients">
                  {group.clients.map((client) => (
                    <span key={client}>{client}</span>
                  ))}
                </div>
              </div>
              <div
                className="editorial-block--image"
                aria-hidden="true"
                style={{ backgroundImage: `url(${group.image})` }}
              />
            </div>
          ))}
        </div>

        <div className="editorial-blocks__cta" style={{ marginTop: "3rem" }}>
          <Button href={business.partnerCtaUrl} variant="gold" aria-label={ui.partnerWithKemeryaTours}>
            BECOME A PARTNER
          </Button>
        </div>
      </Container>
    </Section>
  );
}
