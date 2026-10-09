"use client";

import { useEffect, useState, useRef, RefObject } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * useRevealOnScroll — adds a class when an element enters the viewport.
 * Respects prefers-reduced-motion: when motion is disabled, the
 * element is immediately marked as revealed (no animation).
 *
 * @param options.threshold  IntersectionObserver threshold (default 0.1)
 * @returns [ref, revealed] tuple
 */
export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number } = {}
): [RefObject<T | null>, boolean] {
  const reduced = useReducedMotion();
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (reduced || !ref.current) {
      setRevealed(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setRevealed(true);
        });
      },
      { threshold: options.threshold ?? 0.1 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reduced, options.threshold]);

  return [ref, revealed];
}
