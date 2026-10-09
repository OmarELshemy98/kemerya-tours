import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * Clean, proportionally balanced obelisk silhouette with minimal
 * architectural detailing.
 */
export function ObeliskSilhouette({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg obelisk-silhouette ${className}`}
      viewBox="0 0 24 140"
      aria-hidden={decorative ? "true" : "false"}
      focusable="false"
      width={resolveSize(size)}
      height={resolveSize(size)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      {!decorative && title && <title>{title}</title>}
      {/* Pyramidion (pointed top) */}
      <polygon points="12,4 6,16 18,16" />
      {/* Shaft */}
      <rect x="8" y="16" width="8" height="100" />
      {/* Inscription band */}
      <line x1="8" y1="40" x2="16" y2="40" strokeWidth="0.5" />
      <line x1="8" y1="52" x2="16" y2="52" strokeWidth="0.5" />
      <line x1="8" y1="64" x2="16" y2="64" strokeWidth="0.5" />
      {/* Base platform */}
      <rect x="4" y="116" width="16" height="20" />
      <line x1="4" y1="116" x2="20" y2="116" strokeWidth="0.5" />
    </svg>
  );
}
