"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LotusDivider } from "@/components/ui/egyptian-svg";
import { business } from "@/data/business";
import type { BrandContent } from "@/lib/brand-content/types";
import type { UiTranslations, Locale } from "@/lib/i18n";

type AboutUsProps = {
  locale: Locale;
  ui: UiTranslations;
  copy: NonNullable<BrandContent["aboutUs"]>;
  conversion: NonNullable<BrandContent["conversion"]>;
};

export function AboutUs({ locale, ui, copy, conversion }: AboutUsProps) {
  const { eyebrow, title, subtitle, intro, paragraphs, sections, cta } = copy;
  const hasSections = sections && sections.length > 0;

  return (
    <>
      {/* ── Hero (image above, text below — no overlay) ── */}
      <section
        className="about-hero"
        aria-labelledby="about-hero-heading"
      >
        <Container>
          <div className="about-hero__figure">
            <Image
              src="/images/pages/about-us/pyramids.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              quality={75}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="about-hero__content">
            <p className="eyebrow about-hero__kicker">{eyebrow}</p>
            <h1 id="about-hero-heading" className="about-hero__title">
              {title}
            </h1>
            <p className="about-hero__subtitle">{subtitle}</p>
            <div className="about-hero__actions">
              <Button
                href={business.partnerCtaUrl}
                variant="gold"
                aria-label={ui.becomePartnerKemeryaTours}
              >
                {cta}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Intro ── */}
      <Section id="about-intro" className="about-intro">
        <Container>
          <div className="section__heading">
            <h2 className="split-lines">{title}</h2>
          </div>
          <div className="about-intro__body">
            <p className="lead">{intro}</p>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="about-intro__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

            {/* ── Sections (vertical stack: image on top, text below, with a Read more toggle) ── */}
      {hasSections && (
        <div className="about-sections">
          <LotusDivider decorative className="about-sections__divider" />
          {sections.map((section, index) => (
            <AboutChapter key={index} index={index} section={section} ui={ui} />
          ))}
        </div>
      )}

      {/* ── Final CTA ── */}
      <Section className="about-cta">
        <Container>
          <div className="about-cta__inner">
            <div className="about-cta__text">
              <p className="eyebrow">{conversion.eyebrow}</p>
              <h2 className="about-cta__title">
                {conversion.title.map((line, i) => (
                  <span className="line" key={i}>
                    {line}
                  </span>
                ))}
              </h2>
              <p className="about-cta__description">{conversion.description}</p>
            </div>
            <div className="about-cta__actions">
              <Button
                href={business.partnerCtaUrl}
                variant="gold"
                aria-label={ui.becomePartnerKemeryaTours}
              >
                {conversion.primary}
              </Button>
              <Button
                href={`/${locale}/contact`}
                variant="secondary"
                aria-label={ui.contactKemeryaTours}
              >
                {ui.contactKemeryaTours}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
        </>
  );
}

const READ_TOGGLE_CLASSES =
  "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-transparent px-[1.8rem] py-[0.95rem] text-[0.72rem] font-bold uppercase tracking-[0.14em] transition-[transform,box-shadow,background,border-color] duration-[250ms] hover:-translate-y-0.5 button button--gold";

type AboutChapterProps = {
  index: number;
  section: {
    title: string;
    content: string;
    items?: readonly string[];
    image?: { src: string; alt: string };
  };
  ui: UiTranslations;
};

function AboutChapter({ index, section, ui }: AboutChapterProps) {
  const [open, setOpen] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const hasItems = !!(section.items && section.items.length);
  const contentId = `about-chapter-${index}-content`;
  const readMoreLabel = ui.readMore ?? "Read more";
  const readLessLabel = ui.readLess ?? "Show less";

  useEffect(() => {
    const el = paragraphRef.current;
    if (!el) return;
    const checkOverflow = () => {
      const style = getComputedStyle(el);
      const lineHeight = parseFloat(style.lineHeight) || 1.5;
      const clampHeight = Math.round(lineHeight * 3);
      setHasOverflow(el.scrollHeight > clampHeight + 1);
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const isCollapsed = !open && hasOverflow;

  return (
    <article
      className="about-section"
      aria-labelledby={`about-chapter-${index}-title`}
    >
      <Container>
        <div className="about-section__grid">
          {section.image && (
            <div className="about-section__image chapter-image">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                quality={70}
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          )}
          <div className="about-section__body">
            <h3
              id={`about-chapter-${index}-title`}
              className="about-section__title"
            >
              {section.title}
            </h3>
            <div
              id={contentId}
              className={`about-section__content-wrapper ${
                isCollapsed ? "is-collapsed" : "is-expanded"
              }`}
            >
              <p
                ref={paragraphRef}
                className={`about-section__content ${
                  isCollapsed ? "is-clamped" : "is-expanded"
                }`}
              >
                {section.content}
              </p>
              {hasItems && (
                <ul className="about-section__items">
                  {(section.items ?? []).map((item, i) => (
                    <li key={i} className="about-section__item">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {hasOverflow && (
              <button
                type="button"
                className={`about-section__toggle ${READ_TOGGLE_CLASSES}`}
                aria-controls={contentId}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                {open ? readLessLabel : readMoreLabel}
              </button>
            )}
          </div>
        </div>
      </Container>
    </article>
  );
}

