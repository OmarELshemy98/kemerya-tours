import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type ReasonItem = {
  title: string;
  description: string;
};

type WhyPartnerTeaserProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    reasons: readonly ReasonItem[];
  };
};

export function WhyPartnerTeaser({ copy }: WhyPartnerTeaserProps) {
  return (
    <Section id="why-partner-teaser" className="why-partner-teaser">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="why-partner-teaser__reasons">
          {copy.reasons.map((reason, index) => (
            <div key={reason.title} className="why-partner-teaser__reason">
              <span
                className="why-partner-teaser__reason-number"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="why-partner-teaser__reason-title">{reason.title}</h3>
                <p className="why-partner-teaser__reason-desc">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
