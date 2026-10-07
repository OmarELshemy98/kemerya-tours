"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";

type FaqTeaserProps = {
  locale: Locale;
  items: readonly {
    question: string;
    answer: string;
  }[];
  copy: {
    eyebrow: string;
    title: string;
  };
  ui: {
    viewAllFaq: string;
  };
};

export function FaqTeaser({ locale, items, copy, ui }: FaqTeaserProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const teaserItems = items.slice(0, 3);

  return (
    <Section id="faq-teaser" className="faq-teaser">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
        </div>

        <div className="faq-teaser__list">
          {teaserItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-teaser__item">
                <button
                  type="button"
                  className="faq-teaser__question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-teaser-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-teaser__indicator" aria-hidden="true">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-teaser-answer-${index}`}
                  className={`faq-teaser__answer ${isOpen ? "is-open" : ""}`}
                  aria-hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-teaser__view-all">
          <Link href={`/${locale}/faq`} className="faq-teaser__link">
            {ui.viewAllFaq}
          </Link>
        </div>
      </Container>
    </Section>
  );
}

