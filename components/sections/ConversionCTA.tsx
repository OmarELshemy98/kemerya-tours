import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

type ConversionCTAProps = {
  copy: {
    eyebrow: string;
    title: readonly string[];
    description: string;
    primary: string;
    secondary: string;
  };
};

export function ConversionCTA({ copy }: ConversionCTAProps) {
  return (
    <section className="section" id="conversion">
      <Container>
        <div className="cta-panel">
          <div className="cta-panel__content">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>
              {copy.title.map((line, index) => (
                <span
                  key={index}
                  className="line"
                  style={{ animationDelay: `${0.2 + index * 0.3}s` }}
                >
                  {line}
                </span>
              ))}
            </h2>

            <p className="cta-panel__description">{copy.description}</p>

            <div className="cta-panel__actions">
                            <Button
                href={business.partnerCtaUrl}
                external
                variant="gold"
                aria-label="Become a partner with Kemerya Tours"
              >
                {copy.primary}
              </Button>
              <Button
                href="https://calendly.com/kemerya/partnership"
                external
                variant="dark"
                aria-label="Book a partnership consultation call"
              >
                {copy.secondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
