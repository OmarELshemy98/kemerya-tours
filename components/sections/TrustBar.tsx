"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/lib/i18n";
import { PharaonicDivider } from "@/components/ui/pharaonic";

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
  const { numericValue, prefix, suffix, hasDecimal } = parseMetric(value);

  // Seed at the target value so the very first paint renders the correct
  // number instead of flashing "0" while the tween ramps up.
  const [displayValue, setDisplayValue] = useState(numericValue);
  const previous = useRef(numericValue);

  useEffect(() => {
    const from = previous.current;
    const to = numericValue;

    // No change → the displayed value is already correct; never animate on
    // mount (this is what eliminated the first-paint 0-flash).
    if (from === to) return;

    // Respect reduced-motion users: jump straight to the target.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayValue(to);
      previous.current = to;
      return;
    }

    previous.current = to;
    const duration = 2200;
    const start = performance.now();
    let frameId = 0;

    const update = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplayValue(from + (to - from) * eased);

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

          <div className="trust-bar__divider" aria-hidden="true">
            <PharaonicDivider variant="obelisk" />
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
