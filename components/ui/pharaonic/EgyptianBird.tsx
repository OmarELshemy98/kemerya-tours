import type { SVGProps } from "react";

/**
 * A pair of stylised birds inspired by Egyptian tomb paintings.
 * They glide subtly — wings beating very slowly, embodying the soul's journey.
 */
export function EgyptianBird({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 320 120"
      role="presentation"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="birdGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c88f2f" />
          <stop offset="100%" stopColor="#054855" />
        </linearGradient>
      </defs>

      {/* Bird 1 (left) */}
      <g className="egyptian-bird__one" style={{ animationDelay: "0s" }}>
        {/* Body */}
        <ellipse cx="70" cy="60" rx="22" ry="6" fill="#054855" opacity="0.7" />
        {/* Wing */}
        <path
          d="M52 60 C58 48, 72 44, 84 52 C92 58, 88 68, 78 70 C68 72, 56 68, 52 60 Z"
          fill="#054855"
          opacity="0.65"
        />
        {/* Neck */}
        <path
          d="M70 54 C74 42, 80 32, 88 28"
          fill="none"
          stroke="#054855"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.75"
        />
        {/* Head */}
        <circle cx="88" cy="28" r="4" fill="#054855" opacity="0.8" />
        {/* Beak */}
        <path d="M88 28 L96 26 L88 30 Z" fill="#054855" opacity="0.75" />
        {/* Tail */}
        <path
          d="M48 60 C38 56, 30 62, 28 60 C26 58, 34 54, 48 60 Z"
          fill="#054855"
          opacity="0.55"
        />
      </g>

      {/* Bird 2 (right) */}
      <g className="egyptian-bird__two" style={{ animationDelay: "2s" }}>
        <ellipse cx="250" cy="40" rx="22" ry="6" fill="#c88f2f" opacity="0.6" />
        <path
          d="M232 40 C238 28, 252 24, 264 32 C272 38, 268 48, 258 50 C248 52, 236 48, 232 40 Z"
          fill="#c88f2f"
          opacity="0.55"
        />
        <path
          d="M250 34 C254 22, 260 12, 268 8"
          fill="none"
          stroke="#c88f2f"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.65"
        />
        <circle cx="268" cy="8" r="4" fill="#c88f2f" opacity="0.7" />
        <path d="M268 8 L276 6 L268 10 Z" fill="#c88f2f" opacity="0.65" />
        <path
          d="M228 40 C218 36, 210 42, 208 40 C206 38, 214 34, 228 40 Z"
          fill="#c88f2f"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export const egyptianBirdStyles = `
.egyptian-bird__one,
.egyptian-bird__two {
  animation: birdGlide 28s ease-in-out infinite;
}
.egyptian-bird__one {
  transform-origin: 70px 60px;
}
.egyptian-bird__two {
  transform-origin: 250px 40px;
  animation-delay: 3s;
  animation-direction: alternate;
}

@keyframes birdGlide {
  0%, 100% { transform: translateX(0) rotate(0.5deg); }
  25% { transform: translateX(-4px) rotate(-0.3deg); }
  50% { transform: translateX(2px) rotate(0.4deg); }
  75% { transform: translateX(-1px) rotate(-0.2deg); }
}
`;
