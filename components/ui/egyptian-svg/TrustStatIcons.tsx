/**
 * Pharaonic / luxury trust-stat icons.
 *
 * These hand-crafted Egyptian motifs replace the numeric counters that were
 * previously rendered by the (now retired) TrustBar counting animation. Each
 * icon maps 1:1 to a business metric so the badge still reads as a meaningful
 * "record" while dropping the literal number, per the Light Egyptian direction:
 *
 *   "10+"   → Obelisk       (enduring stone pillar = lasting Egypt presence)
 *   "2,000+"→ Papyrus scroll (rolled scroll = traveler itineraries served)
 *   "4.9"   → Eye of Horus   (Wedjat = vision, protection, wholeness of quality)
 *   "100%"  → Ankh           (key of life = bespoke, one-of-a-life journeys)
 *   "24/7"  → Sun disk       (Ra's eternal disc = always-on ground support)
 *
 * Icons are decorative line art using `stroke="currentColor"`, so they inherit
 * the trust-bar's luxury gold accent (`color: var(--color-antique-gold)`) via the
 * wrapping `.trust-item__icon` span.
 */

import type { ReactElement } from "react";

const ICON_SIZE = 30;

function ObeliskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Pyramidion (pointed top) */}
      <polygon points="8 4 16 4 12 11" />
      {/* Shaft */}
      <rect x="10" y="11" width="4" height="8" />
      {/* Base plinth */}
      <rect x="6" y="19" width="12" height="2" />
    </svg>
  );
}

function PapyrusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Scroll top lip */}
      <path d="M6 7 C5 5.5, 7 4, 12 4 C17 4, 19 5.5, 18 7" />
      {/* Scroll bottom lip */}
      <path d="M6 17 C5 18.5, 7 20, 12 20 C17 20, 19 18.5, 18 17" />
      {/* Sewn thread */}
      <line x1="7" y1="12" x2="17" y2="12" strokeWidth={1.3} strokeDasharray="2 2" />
    </svg>
  );
}

function EyeOfHorusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Almond eye */}
      <path d="M12 5 C16 5, 20 9, 20 13 C20 17, 16 20, 12 20 C8 20, 4 17, 4 13 C4 9, 8 5, 12 5" />
      {/* Inner curve */}
      <path d="M9 12 C11 13, 13 13, 15 12" />
      {/* Iris */}
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      {/* Eyelid / brow */}
      <path d="M8 10.5 C10 8.5, 14 8.5, 16 10.5" />
    </svg>
  );
}

function AnkhIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Life oval */}
      <ellipse cx="12" cy="8" rx="4.4" ry="2.8" />
      {/* Stem */}
      <line x1="12" y1="11" x2="12" y2="18" />
      {/* Foot */}
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  );
}

function SunDiskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Solar disc */}
      <circle cx="12" cy="12" r="3.6" />
      {/* Rays */}
      <line x1="12" y1="5" x2="12" y2="3.2" strokeWidth={1.3} />
      <line x1="12" y1="19" x2="12" y2="20.8" strokeWidth={1.3} />
      <line x1="5" y1="12" x2="3.2" y2="12" strokeWidth={1.3} />
      <line x1="19" y1="12" x2="20.8" y2="12" strokeWidth={1.3} />
      {/* Uraeus (cobra hood) */}
      <path d="M8.2 8.2 C10 6.4, 14 6.4, 15.8 8.2" strokeWidth={1.4} />
    </svg>
  );
}

const trustIconMap: Record<string, ReactElement> = {
  "10+": <ObeliskIcon />,
  "2,000+": <PapyrusIcon />,
  "4.9": <EyeOfHorusIcon />,
  "100%": <AnkhIcon />,
  "24/7": <SunDiskIcon />,
};

/**
 * Renders the pharaonic / luxury icon that stands in for a trust metric value.
 * Falls back to the Ankh (key of life) for any unmapped value.
 */
export function TrustStatIcon({ value }: { value: string }): ReactElement {
  return trustIconMap[value] ?? <AnkhIcon />;
}
