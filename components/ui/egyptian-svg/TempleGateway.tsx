import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * Refined architectural outline of an Egyptian temple pylon (gateway).
 * Symmetrical, strong vertical proportions, restrained carved-stone detail.
 *
 * Suitable as a large editorial background element or subtle ornamental layer.
 */
export function TempleGateway({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg temple-gateway ${className}`}
      viewBox="0 0 320 300"
      aria-hidden={decorative ? "true" : "false"}
      focusable="false"
      width={resolveSize(size)}
      height={resolveSize(size)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      {!decorative && title && <title>{title}</title>}
      {/* Massive pylon walls (battered, sloping inward) */}
      <polygon points="0,280 320,280 260,40 60,40" />
      {/* Inner gateway opening */}
      <polygon points="50,270 270,270 230,60 90,60" />
      {/* Cornice stepping */}
      <path d="M60 40 L60 20 L260 20 L260 40" strokeWidth="1.5" />
      {/* Central threshold base */}
      <rect x="130" y="260" width="60" height="10" strokeWidth="1" />
    </svg>
  );
}
