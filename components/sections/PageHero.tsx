import Image from "next/image";
import { Container } from "@/components/ui/Container";

/**
 * Shared, full-bleed page hero with a background image + dark overlay.
 *
 * Rendered as the first section of content-heavy pages that do not ship their
 * own hero block (e.g. /en/knowledge, /en/faq, /en/categories, /en/credibility,
 * /en/contact, …). Pages that already expose a dedicated hero (Home, About,
 * Capabilities, Why-partner, Who-we-work-with) keep it, so we never end up with
 * a double hero.
 *
 * The background image defaults to the same Egypt landscape the Home hero uses
 * (`egypt-travel-packages.webp`) so every page shares one consistent hero
 * language, while still allowing an override via the `image` prop.
 */
const DEFAULT_HERO_IMAGE =
  "/images/areas-we-support-cards/egypt-travel-packages.webp";

export type PageHeroProps = {
  title: string;
  image?: { src: string };
};

export function PageHero({ title, image }: PageHeroProps) {
  const bg = image?.src ?? DEFAULT_HERO_IMAGE;

  return (
    <section className="page-hero" aria-labelledby="page-hero-heading">
      <Image
        src={bg}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={70}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div className="page-hero__overlay" aria-hidden="true" />
      <Container className="page-hero__content">
        <h1 id="page-hero-heading" className="page-hero__title">
          {title}
        </h1>
      </Container>
    </section>
  );
}
