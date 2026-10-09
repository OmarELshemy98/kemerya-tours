import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * Horizontal ornamental divider with a small lotus centerpiece
 * and thin balanced lines. Works at multiple widths.
 */
export function LotusDivider({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg lotus-divider ${className}`}
      viewBox="0 0 240 28"
      preserveAspectRatio="xMidYMid meet"
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
      {/* Top rail */}
      <line x1="8" y1="6" x2="232" y2="6" />
      {/* Bottom rail */}
      <line x1="8" y1="22" x2="232" y2="22" />
      {/* Central lotus bloom */}
      <circle cx="120" cy="14" r="5" fill="currentColor" />
      {/* Lotus petals (8 around center) */}
      <path d="M120 9 L120 3" strokeWidth="1" />
      <path d="M120 21 L120 25" strokeWidth="1" />
      <path d="M115 14 L109 14" strokeWidth="1" />
      <path d="M125 14 L131 14" strokeWidth="1" />
      <path d="M116 10 L112 7" strokeWidth="1" />
      <path d="M124 18 L128 21" strokeWidth="1" />
      <path d="M116 18 L112 21" strokeWidth="1" />
      <path d="M124 10 L128 7" strokeWidth="1" />
      {/* Stem connector */}
      <path d="M118 22 L118 25 M122 22 L122 25" strokeWidth="1" />
    </svg>
  );
}
