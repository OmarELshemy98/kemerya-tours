"use client";

import { Container } from "@/components/ui/Container";
import { TrustStatIcon } from "@/components/ui/egyptian-svg";
import type { Locale } from "@/lib/i18n";

type TrustBarProps = {
  locale: Locale;
  items: ReadonlyArray<{ value: string; label: string }>;
  copy: {
    eyebrow: string;
    statement: string;
    sectionLabel: string;
  };
};

export function TrustBar({ locale, items, copy }: TrustBarProps) {
  return (
    <section className="trust-bar" aria-label={copy.sectionLabel}>
      <Container>
        <div className="trust-bar__wrap">
          <div className="trust-bar__statement">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h3>{copy.statement}</h3>
          </div>

                   <div className="trust-bar__divider" aria-hidden="true" />



          <div className="trust-bar__inner">
            {items.map((item) => (
              <div key={item.label} className="trust-item">
                <span className="trust-item__icon" aria-hidden="true">
                  <TrustStatIcon value={item.value} />
                </span>
                <span className="trust-item__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
