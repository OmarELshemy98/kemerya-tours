import type { SVGProps } from "react";

/**
 * Animated temple doorway frame — the signature architectural element.
 * Redraws itself on load, evoking the experience of entering an ancient temple.
 *
 * The frame is inspired by the pylons and battered walls of Egyptian temples,
 * particularly the entrance to the Temple of Karnak and Luxor.
 */
export function TempleFrame({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 320"
      role="presentation"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        {/* Stone texture simulation via gradient */}
        <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#262525" />
          <stop offset="50%" stopColor="#2a2929" />
          <stop offset="100%" stopColor="#262525" />
        </linearGradient>

        {/* Gold accent for hieroglyphic bands */}
        <linearGradient id="frameGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c88f2f" />
          <stop offset="50%" stopColor="#e1d0b1" />
          <stop offset="100%" stopColor="#c88f2f" />
        </linearGradient>
      </defs>

      {/* Outer pylon walls — battered (slightly angled inward) */}
      <polygon
        points="20,280 380,280 340,40 60,40"
        fill="url(#stoneGrad)"
        stroke="rgba(200,143,47,0.24)"
        strokeWidth="1"
        className="temple-frame__pylon"
      />

      {/* Inner doorway opening */}
      <polygon
        points="50,270 350,270 310,60 90,60"
        fill="rgba(5,72,85,0.32)"
        className="temple-frame__doorway"
      />

      {/* Hieroglyphic band — top pylon */}
      <path
        d="M50 50 Q 120 30, 200 50 T 350 50"
        fill="none"
        stroke="url(#frameGold)"
        strokeWidth="3"
        strokeLinecap="round"
        className="temple-frame__band-top"
      />

      {/* Hieroglyphic band — bottom */}
      <path
        d="M50 260 Q 120 275, 200 260 T 350 260"
        fill="none"
        stroke="url(#frameGold)"
        strokeWidth="3"
        strokeLinecap="round"
        className="temple-frame__band-bottom"
      />

      {/* Cornice details — stepped (Egyptian-style) */}
      <polygon
        points="20,40 60,20 340,20 380,40"
        fill="rgba(200,143,47,0.28)"
        className="temple-frame__cornice"
      />

      {/* Obelisk silhouette inside the doorway */}
      <polygon
        points="190,80 210,80 200,60"
        fill="rgba(200,143,47,0.4)"
        className="temple-frame__obelisk"
      />
      <rect
        x="196"
        y="80"
        width="8"
        height="180"
        fill="rgba(200,143,47,0.32)"
        className="temple-frame__obelisk"
      />
      <rect
        x="184"
        y="260"
        width="32"
        height="10"
        fill="rgba(200,143,47,0.28)"
        className="temple-frame__obelisk"
      />
    </svg>
  );
}

export const templeFrameStyles = `
.temple-frame__pylon {
  opacity: 0;
  animation: drawFrame 1.4s ease-out 0.3s forwards;
}
.temple-frame__doorway {
  opacity: 0;
  animation: fadeIn 1s ease-out 0.7s forwards;
}
.temple-frame__band-top,
.temple-frame__band-bottom {
  opacity: 0;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: drawLine 1.1s ease-out forwards;
}
.temple-frame__band-top {
  animation-delay: 1s;
}
.temple-frame__band-bottom {
  animation-delay: 1.2s;
}
.temple-frame__cornice {
  opacity: 0;
  animation: fadeIn 0.6s ease-out 1.4s forwards;
}
.temple-frame__obelisk {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 1.6s forwards;
}

@keyframes drawFrame {
  0% { opacity: 0; transform: scale(0.98); clip-path: inset(0 100% 0 0); }
  60% { opacity: 0.7; }
  100% { opacity: 1; transform: scale(1); clip-path: inset(0 0 0 0); }
}
@keyframes fadeIn {
  to { opacity: 1; }
}
`;
