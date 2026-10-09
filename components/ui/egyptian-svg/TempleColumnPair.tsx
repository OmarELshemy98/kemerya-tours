import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * Paired architectural column composition suitable for the edges
 * of a large editorial composition. Two columns with lotus/papyrus
 * capitals and fluted shafts.
 */
export function TempleColumnPair({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg temple-column-pair ${className}`}
      viewBox="0 0 140 240"
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
      {/* Entablature beam */}
      <line x1="50" y1="20" x2="90" y2="20" strokeWidth="1" />

      {/* Left column */}
      <line x1="20" y1="20" x2="20" y2="200" />
      <line x1="50" y1="20" x2="50" y2="200" />
      {/* Left capital (lotus) */}
      <path d="M20 20 Q32 8, 42 20" />
      <path d="M22 20 C26 14, 30 12, 35 14 C40 16, 40 22, 36 26 C32 30, 28 30, 24 28" />
      <line x1="20" y1="16" x2="50" y2="16" strokeWidth="1" />
      {/* Left base */}
      <rect x="18" y="200" width="34" height="12" />

      {/* Right column */}
      <line x1="90" y1="20" x2="90" y2="200" />
      <line x1="120" y1="20" x2="120" y2="200" />
      {/* Right capital (papyrus) */}
      <path d="M90 20 Q102 8, 112 20" />
      <path d="M92 20 C96 14, 100 12, 105 14 C110 16, 110 22, 106 26 C102 30, 98 30, 94 28" />
      <line x1="90" y1="16" x2="120" y2="16" strokeWidth="1" />
      {/* Right base */}
      <rect x="88" y="200" width="34" height="12" />

      {/* Fluting lines */}
      <line x1="28" y1="20" x2="28" y2="200" strokeWidth="0.3" />
      <line x1="34" y1="20" x2="34" y2="200" strokeWidth="0.3" />
      <line x1="98" y1="20" x2="98" y2="200" strokeWidth="0.3" />
      <line x1="104" y1="20" x2="104" y2="200" strokeWidth="0.3" />
    </svg>
  );
}
