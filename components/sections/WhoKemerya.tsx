import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

type WhoKemeryaProps = {
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    paragraphs: readonly string[];
    cta: string;
  };
};

export function WhoKemerya({ copy }: WhoKemeryaProps) {
  return (
    <section className="section" id="who-kemerya">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.subtitle}</p>
        </div>

        <div className="who-kemerya__content">
          <div className="who-kemerya__text">
            <p className="lead">{copy.intro}</p>
            {copy.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="who-kemerya__cta">
            <Button href={business.partnerCtaUrl} external variant="gold" aria-label="Partner with Kemerya Tours">
              {copy.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}