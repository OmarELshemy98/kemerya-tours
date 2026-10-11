"use client";

import { useEffect } from "react";

/**
 * Replaces the `no-js` class on `<html>` with `js` *after* hydration.
 *
 * The root layouts server-render `<html className="no-js ...">` and rely on a
 * tiny swap (`no-js` -> `js`) to enable JS-driven reveal animations — see the
 * `html:not(.js)` rules in `app/styles/premium-refinements.css`. Running that
 * swap as an inline script inside `<head>` mutates `<html>` BEFORE React
 * hydrates, which triggers a hydration mismatch on the `<html>` className.
 *
 * Doing the swap in a client component's `useEffect` guarantees it runs strictly
 * AFTER hydration, so the server- and client-rendered className are identical
 * at hydrate time. The no-JS fallback is preserved (the effect never runs when
 * JS is disabled, so `no-js` stays and `html:not(.js)` rules apply).
 */
export function NoJSSwap() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("no-js");
    root.classList.add("js");
  }, []);
  return null;
}
