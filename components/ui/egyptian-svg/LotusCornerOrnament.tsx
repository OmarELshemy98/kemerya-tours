import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * Small corner motif combining simple lotus geometry with an
 * architectural line. Works at small sizes and remains visually quiet.
 */
export function LotusCornerOrnament({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg lotus-corner-ornament ${className}`}
      viewBox="0 0 48 48"
      aria-hidden={decorative ? "true" : "false"}
      focusable="false"
      width={resolveSize(size)}
      height={resolveSize(size)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {!decorative && title && <title>{title}</title>}
      {/* Corner lines (architectural) */}
      <line x1="2" y1="2" x2="16" y2="2" />
      <line x1="2" y1="2" x2="2" y2="16" />
      {/* Small lotus bloom at corner */}
      <circle cx="12" cy="12" r="4" fill="none" />
      {/* Lotus petals (4 directions) */}
      <path d="M12 4 L12 8" strokeWidth="1" />
      <path d="M12 16 L12 20" strokeWidth="1" />
      <path d="M4 12 L8 12" strokeWidth="1" />
      <path d="M16 12 L20 12" strokeWidth="1" />
      {/* Stem */}
      <line x1="12" y1="20" x2="12" y2="28" strokeWidth="0.8" />
      {/* Base leaf */}
      <path d="M8 28 C10 26, 14 26, 16 28" strokeWidth="0.8" />
    </svg>
  );
}
