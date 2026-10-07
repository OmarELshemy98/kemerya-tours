import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { CommercialCategory } from "@/data/commercialCategories";
import type { UiTranslations } from "@/lib/i18n";

type CommercialCategoriesProps = {
  ui: UiTranslations;
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
  };
  items: readonly CommercialCategory[];
};

export function CommercialCategories({ copy, items, ui }: CommercialCategoriesProps) {
  return (
    <Section id="categories">
      <Container>
        <div className="section__heading">
                    <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="category-grid">
          {items.map((item) => (
            <article key={item.title} className="category-card">
              <div className="category-card__media">
                <Image src={item.image} alt={item.title} fill />
              </div>
              <div className="category-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={item.href}
                  className="category-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ui.explore} →
                </a>
              </div>
            </article>
          ))}
        </div>

      </Container>
    </Section>
  );
}