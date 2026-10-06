import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
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
    <section className="section" id="categories">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="split-lines">{copy.title}</h1>
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

        <div style={{ marginTop: "2rem" }}>
                    <Button href={business.partnerCtaUrl} external variant="gold">
            {copy.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}