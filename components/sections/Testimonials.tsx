import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Testimonial = {
  name: string;
  label: string;
  quote: string;
};

type TestimonialsProps = {
  items: readonly Testimonial[];
  copy: {
    eyebrow: string;
    title: string;
  };
};

export function Testimonials({ items, copy }: TestimonialsProps) {
  return (
    <Section>
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
        </div>

        <div className="testimonials-grid">
          {items.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p className="testimonial-card__quote">“{item.quote}”</p>
              <div className="testimonial-card__person">
                <div className="testimonial-card__avatar">{item.name.slice(0, 1)}</div>
                <div>
                  <div style={{ fontWeight: 700 }}>{item.name}</div>
                  <div className="testimonial-card__meta">{item.label}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
