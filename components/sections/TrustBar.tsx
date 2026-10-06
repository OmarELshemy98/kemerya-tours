"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
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

function parseMetric(value: string) {
  const match = value.match(/[\d.,]+/);
  const numericText = match ? match[0].replace(/,/g, "") : "0";
  const numericValue = Number(numericText || 0);

  const prefix = value.startsWith("+") ? "+" : "";
  const suffix = value.replace(match?.[0] ?? "", "").trim();

  return {
    numericValue,
    prefix,
    suffix,
    hasDecimal: numericText.includes(".") || numericValue % 1 !== 0,
  };
}

function AnimatedMetric({ value, locale }: { value: string; locale: Locale }) {
  const [displayValue, setDisplayValue] = useState(0);
  const { numericValue, prefix, suffix, hasDecimal } = parseMetric(value);

  useEffect(() => {
    let frameId = 0;
    const duration = 2200;
    const start = performance.now();

    const update = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = numericValue * eased;
      setDisplayValue(nextValue);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    frameId = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frameId);
  }, [numericValue]);

  const numberFormat = new Intl.NumberFormat(
    locale,
    hasDecimal
      ? {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }
      : undefined,
  );
  const formatted = numberFormat.format(displayValue);
  const accessibleValue = `${prefix}${numberFormat.format(numericValue)}${suffix}`;

  return (
    <span className="trust-item__value trust-item__value--counting" aria-label={accessibleValue}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function TrustBar({ locale, items, copy }: TrustBarProps) {
  return (
    <section className="trust-bar" aria-label={copy.sectionLabel}>
      <Container>
        <div className="trust-bar__wrap">
              <div className="trust-bar__statement">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h3>{copy.statement}</h3>
          </div>

          <div className="trust-bar__inner">
            {items.map((item) => (
              <div key={item.label} className="trust-item">
                <AnimatedMetric value={item.value} locale={locale} />
                <span className="trust-item__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
