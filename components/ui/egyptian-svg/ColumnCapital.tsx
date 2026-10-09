import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * Simplified Egyptian column capital inspired by lotus forms.
 * Clear silhouette with precise line work.
 */
export function ColumnCapital({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg column-capital ${className}`}
      viewBox="0 0 80 70"
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
      {/* Abacus (capital top) */}
      <rect x="10" y="10" width="60" height="4" />
      {/* Lotus capital petals */}
      <path d="M40 14 L50 22 L40 26 L30 22 Z" />
      <path d="M40 14 L48 24 L40 26 L32 24 Z" />
      <path d="M40 14 L52 26 L40 28 L28 26 Z" />
      {/* Capital base transition */}
      <path d="M20 26 Q40 34, 60 26 L50 26" />
      {/* Column shaft with subtle fluting */}
      <rect x="22" y="26" width="36" height="30" />
      <line x1="28" y1="26" x2="28" y2="56" strokeWidth="0.5" />
      <line x1="34" y1="26" x2="34" y2="56" strokeWidth="0.5" />
      <line x1="40" y1="26" x2="40" y2="56" strokeWidth="0.5" />
      <line x1="46" y1="26" x2="46" y2="56" strokeWidth="0.5" />
      <line x1="52" y1="26" x2="52" y2="56" strokeWidth="0.5" />
      {/* Base platform */}
      <rect x="14" y="56" width="52" height="8" />
    </svg>
  );
}
