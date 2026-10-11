"use client";

import { useEffect, useState } from "react";

/**
 * LegalReadingProgress
 * ─────────────────────────
 * Thin horizontal bar fixed to the top of the viewport that fills
 * proportionally as the user scrolls through the legal page content.
 * Disappears when scrolling back to the very top.
 */
export function LegalReadingProgress() {
  const [progress, setProgress] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".legal-layout__inner");
      const layout = document.querySelector(".legal-layout");
      if (!container || !layout) {
        setProgress(0);
        return;
      }

      const rect = layout.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const containerBottom = containerTop + (layout as HTMLElement).offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollRange = containerBottom - viewportHeight - containerTop;
      if (scrollRange <= 0) {
        setProgress(100);
        return;
      }

      const scrolled = Math.max(0, window.scrollY - containerTop);
      const pct = Math.min(100, (scrolled / scrollRange) * 100);
      setProgress(pct);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="legal-progress" aria-hidden="true">
      <div
        className="legal-progress__bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
