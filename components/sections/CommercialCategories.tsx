import Image from "next/image";
import Link from "next/link";
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
    <Section id="categories" className="editorial-chapters">
      <Container>
        <div className="section__heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="split-lines">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </div>

        <div className="chapters">
          {items.map((item) => (
            <article key={item.title} className="editorial-chapter">
              <div className="editorial-chapter__media">
                <div className="chapter-number">{item.number}</div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="editorial-chapter__body">
                <h3 className="editorial-chapter__title">{item.title}</h3>
                <p className="editorial-chapter__description">{item.description}</p>
                {item.b2bBlurb && (
                  <p className="editorial-chapter__blurb">{item.b2bBlurb}</p>
                )}
                {item.subcategories.length > 0 && (
                  <div className="subcategory-tags">
                    {item.subcategories.map((sub) => (
                      <a key={sub.label} href={sub.href} className="subcategory-tag" target="_blank" rel="noopener noreferrer">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
                <Link href={item.href} className="chapter-link" target="_blank" rel="noopener noreferrer">
                  {ui.explore} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
