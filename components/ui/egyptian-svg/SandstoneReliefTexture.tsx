import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * An extremely subtle, lightweight repeating line pattern inspired by
 * carved stone or restrained Egyptian geometry. Must remain barely visible
 * behind content and must never reduce text contrast.
 *
 * Intended for use as a CSS background via a data-URI or inline <pattern>.
 * Can also be rendered inline at large scale for texture overlays.
 */
export function SandstoneReliefTexture({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg sandstone-relief ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden={decorative ? "true" : "false"}
      focusable="false"
      width={resolveSize(size)}
      height={resolveSize(size)}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="miter"
      {...props}
    >
      {!decorative && title && <title>{title}</title>}
      <defs>
        <pattern
          id="sandstone-relief-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 10 L20 10 M10 0 L10 20 M15 5 L25 15"
            strokeWidth="0.3"
            opacity="0.06"
          />
          <path
            d="M2 16 L4 14 L6 16"
            strokeWidth="0.3"
            opacity="0.04"
            fill="none"
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100" height="100" fill="url(#sandstone-relief-pattern)" />
    </svg>
  );
}

/**
 * CSS to inject as a background-image via a data-URI.
 * Usage in CSS:
 *   background-image: url("data:image/svg+xml,…");
 */
export function sandstoneReliefDataUri(): string {
  return (
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
        '<defs><pattern id="p" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">' +
        '<path d="M0 10 L20 10 M10 0 L10 20 M15 5 L25 15" stroke="currentColor" stroke-width="0.3" opacity="0.06"/>' +
        '<path d="M2 16 L4 14 L6 16" stroke="currentColor" stroke-width="0.3" opacity="0.04" fill="none"/>' +
        "</pattern></defs>" +
        '<rect x="0" y="0" width="100" height="100" fill="url(%23p)" />' +
        "</svg>"
    )
);
}
