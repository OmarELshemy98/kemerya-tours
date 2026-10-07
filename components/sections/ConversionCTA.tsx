import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NileWave } from "@/components/ui/pharaonic";
import { business } from "@/data/business";

type ConversionCTAProps = {
  copy: {
    eyebrow: string;
    title: readonly string[];
    description: string;
    primary: string;
    secondary?: string;
  };
};

export function ConversionCTA({ copy }: ConversionCTAProps) {
  return (
    <section
      className="final-contact"
      id="conversion"
      aria-labelledby="conversion-heading"
    >
      <div className="final-contact__image" aria-hidden="true">
        <Image
                    src="https://images.unsplash.com/photo-1k7JC31SRyI?auto=format&fit=crop&w=1200&q=85"
          alt=""
          fill
        />
      </div>

      <Container className="final-contact__content">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="conversion-heading">
          {copy.title.map((line, index) => (
            <span
              className="line"
              key={index}
                            style={{ animationDelay: String(0.2 + index * 0.3) + "s" }}
            >
              {line}
            </span>
          ))}
        </h2>

        <p className="final-contact__description">{copy.description}</p>

        <div className="final-contact__actions">
          <Button
            href={business.partnerCtaUrl}
            variant="gold"
            aria-label={copy.primary}
          >
            {copy.primary}
          </Button>
          {copy.secondary ? (
            <Button
              href={business.ctaUrl}
              variant="secondary"
              aria-label={copy.secondary}
            >
              {copy.secondary}
            </Button>
          ) : null}
        </div>
      </Container>

      <div className="final-contact__nile-wave" aria-hidden="true">
        <NileWave />
      </div>
    </section>
  );
}
