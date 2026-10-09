import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * Balanced Egyptian blue lotus motif with geometric symmetry
 * and clean negative space. Suitable for dividers, section accents,
 * and small decorative moments.
 */
export function LotusBloom({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg lotus-bloom ${className}`}
      viewBox="0 0 120 140"
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
      {/* Outer petal ring (8 petals) */}
      <path d="M60 70 C45 70, 30 55, 30 40 C30 25, 45 12, 60 12 C75 12, 90 25, 90 40 C90 55, 75 70, 60 70 Z" />
      <path d="M60 70 C38 60, 24 42, 26 22 C28 2, 52 6, 60 22 C68 6, 92 2, 94 22 C96 42, 82 60, 60 70 Z" />
      <path d="M60 70 C42 58, 26 38, 28 16 C30 0, 56 4, 60 16 C64 4, 90 0, 92 16 C94 38, 78 58, 60 70 Z" />
      {/* Inner petal layer (5 petals) */}
      <path d="M60 62 C50 58, 42 48, 42 36 C42 28, 50 22, 60 22 C70 22, 78 28, 78 36 C78 48, 70 58, 60 62 Z" />
      <path d="M60 62 L80 58 L72 44 L60 48 Z" />
      <path d="M60 62 L88 48 L76 38 L68 50 Z" />
      {/* Centre disc */}
      <circle cx="60" cy="46" r="4" fill="currentColor" />
      {/* Stem */}
      <path d="M58 70 L58 100" />
      {/* Base leaves */}
      <path d="M48 100 C46 94, 42 92, 44 86 C46 80, 54 78, 58 80" />
      <path d="M72 100 C74 94, 78 92, 76 86 C74 80, 66 78, 62 80" />
    </svg>
  );
}
