import type { SVGProps } from "react";

/**
 * Subtle animated Nile wave lines.
 * Two sine-wave paths gently drift, representing the eternal flow of the Nile.
 */
export function NileWave({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 80"
      role="presentation"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="nileGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(5,72,85,0.12)" />
          <stop offset="100%" stopColor="rgba(200,143,47,0.08)" />
        </linearGradient>
      </defs>

      {/* Background wave */}
      <path
        d="M0 50 Q 50 30, 100 50 T 200 50 T 300 50 T 400 50 V 80 H 0 Z"
        fill="url(#nileGrad)"
        className="nile-wave__bg"
      />

      {/* Foreground wave */}
      <path
        d="M0 30 Q 50 10, 100 30 T 200 30 T 300 30 T 400 30"
        fill="none"
        stroke="rgba(200,143,47,0.4)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="nile-wave__fg"
      />
    </svg>
  );
}

export const nileWaveStyles = `
.nile-wave__bg {
  animation: waveDrift 32s ease-in-out infinite;
}
.nile-wave__fg {
  animation: waveDrift-alt 24s ease-in-out infinite;
}

@keyframes waveDrift {
  0% { transform: translateX(0) scaleY(1); }
  50% { transform: translateX(-20px) scaleY(0.92); }
  100% { transform: translateX(0) scaleY(1); }
}
@keyframes waveDrift-alt {
  0% { transform: translateX(0) scaleY(1.1); }
  50% { transform: translateX(20px) scaleY(0.94); }
  100% { transform: translateX(0) scaleY(1.1); }
}
`;
