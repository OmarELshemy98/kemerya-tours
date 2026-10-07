"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { FaqItem } from "@/data/b2bFaq";

type B2BFaqProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  items: readonly FaqItem[];
};

export function B2BFaq({ copy, items }: B2BFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="b2b-faq">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="faq-item">
                <button
                  type="button"
                  className="faq-item__question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="faq-item__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                  <span
                    className="faq-item__indicator"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`faq-item__answer ${isOpen ? "is-open" : ""}`}
                  aria-hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
