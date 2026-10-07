"use client";

import { useEffect, useState } from "react";
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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <Section>
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
        </div>

        <div className="testimonial-editorial" aria-roledescription="carousel">
          <blockquote className="quote">
            {items[current]?.quote}
          </blockquote>
          <div className="person">
            <span className="person-name">{items[current]?.name}</span>
            <span className="person-label">{items[current]?.label}</span>
          </div>
        </div>

        <div
          className="testimonial-nav"
          role="tablist"
          aria-label={copy.title}
        >
          {items.map((_, i) => (
            <button
              type="button"
              key={i}
              className={i === current ? "active" : ""}
              aria-current={i === current ? "step" : undefined}
              aria-label={"Testimonial " + (i + 1) + " of " + items.length}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
