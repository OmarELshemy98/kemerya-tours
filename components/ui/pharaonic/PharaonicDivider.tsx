import type { SVGProps } from "react";

/**
 * Section transition divider — a subtle, animated Pharaonic motif.
 * Renders as a horizontal ornament between major page sections.
 *
 * Variants:
 *  - "obelisk": vertical obelisk line between sections
 *  - "lotus": lotus bloom divider
 *  - "nile": flowing line divider
 *  - "papyrus": papyrus-scroll inspired geometric pattern
 */
export function PharaonicDivider({
  variant = "nile",
  ...props
}: SVGProps<SVGSVGElement> & {
  variant?: "obelisk" | "lotus" | "nile" | "papyrus";
}) {
  if (variant === "obelisk") {
    return (
      <svg
        viewBox="0 0 120 40"
        role="presentation"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        <defs>
          <linearGradient id="obeliskDivGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c88f2f" />
            <stop offset="100%" stopColor="rgba(200,143,47,0.12)" />
          </linearGradient>
        </defs>
        <line
          x1="60"
          y1="4"
          x2="60"
          y2="36"
          stroke="url(#obeliskDivGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          className="pharaonic-divider__obelisk"
        />
        <path
          d="M48 32 L60 8 L72 32 Z"
          fill="rgba(200,143,47,0.28)"
          className="pharaonic-divider__pyramidion"
        />
      </svg>
    );
  }

  if (variant === "lotus") {
    return (
      <svg
        viewBox="0 0 120 32"
        role="presentation"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        <defs>
          <linearGradient id="lotusDivGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(200,143,47,0.08)" />
            <stop offset="50%" stopColor="rgba(200,143,47,0.36)" />
            <stop offset="100%" stopColor="rgba(200,143,47,0.08)" />
          </linearGradient>
        </defs>
        {/* Lotus petals radiating from centre */}
        <ellipse
          cx="60"
          cy="16"
          rx="26"
          ry="10"
          fill="url(#lotusDivGrad)"
          className="pharaonic-divider__lotus"
        />
        <ellipse
          cx="60"
          cy="16"
          rx="12"
          ry="4"
          fill="#c88f2f"
          opacity="0.5"
          className="pharaonic-divider__lotus-centre"
        />
        {/* Stem */}
        <path
          d="M58 26 Q 62 28, 58 30"
          fill="none"
          stroke="rgba(5,72,85,0.4)"
          strokeWidth="1.5"
          className="pharaonic-divider__stem"
        />
      </svg>
    );
  }

  if (variant === "papyrus") {
    return (
      <svg
        viewBox="0 0 120 16"
        role="presentation"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        <defs>
          <pattern
            id="papyrusPattern"
            x="0"
            y="0"
            width="20"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 8 L20 8 M2 0 L2 8 M18 0 L18 8"
              stroke="rgba(200,143,47,0.24)"
              strokeWidth="0.8"
            />
            <circle cx="10" cy="4" r="1.5" fill="rgba(200,143,47,0.32)" />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="120"
          height="16"
          fill="url(#papyrusPattern)"
          className="pharaonic-divider__papyrus"
        />
      </svg>
    );
  }

  // Default: Nile wave
  return (
    <svg
      viewBox="0 0 320 24"
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        <linearGradient id="nileDivGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(5,72,85,0.06)" />
          <stop offset="50%" stopColor="rgba(200,143,47,0.12)" />
          <stop offset="100%" stopColor="rgba(5,72,85,0.06)" />
        </linearGradient>
      </defs>
      <path
        d="M0 12 Q 40 2, 80 12 T 160 12 T 240 12 T 320 12 V 24 H 0 Z"
        fill="url(#nileDivGrad)"
        className="pharaonic-divider__wave"
      />
      <path
        d="M0 6 Q 40 -6, 80 6 T 160 6 T 240 6 T 320 6"
        fill="none"
        stroke="rgba(200,143,47,0.24)"
        strokeWidth="1"
        strokeLinecap="round"
        className="pharaonic-divider__wave-line"
      />
    </svg>
  );
}

export const pharaonicDividerStyles = `
.pharaonic-divider__obelisk {
  opacity: 0;
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  animation: drawLine 0.7s ease-out 0.2s forwards;
}
.pharaonic-divider__pyramidion {
  opacity: 0;
  animation: fadeIn 0.5s ease-out 0.7s forwards;
}
.pharaonic-divider__lotus {
  opacity: 0;
  animation: lotusReveal 1s ease-out 0.3s forwards;
}
.pharaonic-divider__lotus-centre {
  opacity: 0;
  animation: fadeIn 0.6s ease-out 0.8s forwards;
}
.pharaonic-divider__stem {
  opacity: 0;
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: drawLine 0.5s ease-out 1s forwards;
}
.pharaonic-divider__papyrus {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s forwards;
  background-size: 100% 100%;
}
.pharaonic-divider__wave {
  opacity: 0;
  animation: fadeIn 0.6s ease-out 0.2s forwards;
}
.pharaonic-divider__wave-line {
  opacity: 0;
  stroke-dasharray: 180;
  stroke-dashoffset: 180;
  animation: drawLine 0.9s ease-out 0.3s forwards;
}

@keyframes lotusReveal {
  0% { opacity: 0; transform: scale(0.3) rotate(10deg); }
  70% { opacity: 0.5; transform: scale(1.1) rotate(-2deg); }
  100% { opacity: 0.5; transform: scale(1) rotate(0); }
}
`;
