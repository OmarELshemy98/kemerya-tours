import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * Seamless repeatable geometric border inspired by Egyptian
 * architectural patterning. Thin, orderly, suitable for section edges.
 * Uses CSS mask for clean tiling.
 */
export function EgyptianGeometricBorder({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg egyptian-geometric-border ${className}`}
      viewBox="0 0 80 16"
      preserveAspectRatio="none"
      aria-hidden={decorative ? "true" : "false"}
      focusable="false"
      width={resolveSize(size)}
      height={resolveSize(size)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {!decorative && title && <title>{title}</title>}
      <defs>
        <pattern
          id="egyptian-border-pattern"
          x="0"
          y="0"
          width="20"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 8 L5 8 L5 3 L10 3 L10 8 L15 8 L15 3 L20 3"
            strokeWidth="0.5"
            opacity="0.6"
          />
          <rect x="2" y="6" width="3" height="3" fill="currentColor" />
          <rect x="15" y="6" width="3" height="3" fill="currentColor" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="80" height="16" fill="url(#egyptian-border-pattern)" />
      <line x1="0" y1="0" x2="80" y2="0" strokeWidth="1" />
      <line x1="0" y1="16" x2="80" y2="16" strokeWidth="1" />
    </svg>
  );
}
