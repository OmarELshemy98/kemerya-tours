"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type KnowledgeProps = {
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    articles: readonly {
      title: string;
      excerpt: string;
      category: string;
      readTime: string;
      href: string;
    }[];
  };
};

export function Knowledge({ copy }: KnowledgeProps) {
  return (
    <Section id="knowledge" className="b2b-knowledge">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="knowledge-grid">
          {copy.articles.map((article) => (
            <article key={article.title} className="knowledge-card">
              <div className="knowledge-card__meta">
                <span className="knowledge-card__category">{article.category}</span>
                <span className="knowledge-card__read-time">{article.readTime}</span>
              </div>
              <h3 className="knowledge-card__title">{article.title}</h3>
              <p className="knowledge-card__excerpt">{article.excerpt}</p>
              <Link
                href={article.href}
                className="knowledge-card__link"
                aria-label={article.title}
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}