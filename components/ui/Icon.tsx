import type { ReactNode } from "react";
import type { CapabilityIcon } from "@/data/capabilities";
import type { ClientTypeIcon } from "@/data/clientTypes";
import type { AdvantageIcon } from "@/data/advantages";
import type { WhyPartnerIcon } from "@/data/whyPartner";

export type IconName =
  | CapabilityIcon
  | ClientTypeIcon
  | AdvantageIcon
  | WhyPartnerIcon;

const iconPaths: Record<IconName, ReactNode> = {
  pyramid: (
    <path d="M12 2L4 20h16L12 2zm0 3l5 9h-3.5l-.5-1h-3l-.5 1H7z" />
  ),
  ship: (
    <path d="M4 16l2-4h12l2 4v2H4zm4-8V6h8v2M8 8l2-3h4l2 3" />
  ),
  users: (
    <path d="M12 12c2.7 0 8 1.3 8 4v2H4v-2c0-2.7 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
  ),
  map: (
    <path d="M4 4l5 3v10l-5-3V4zm14 0l-5 3v10l5-3V4z" />
  ),
  calendar: (
    <path d="M7 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM5 6h14v12H5z" />
  ),
  camera: (
    <path d="M12 8a4 4 0 100 8 4 4 0 000-8zM4 8l2-3h12l2 3v10l-2 3H6l-2-3z" />
  ),
  heart: (
    <path d="M12 21C12 21 5 13.5 5 8.5 5 5 7.5 2.5 11 2.5S17 5 17 8.5C17 13.5 12 21 12 21z" />
  ),
  briefcase: (
    <path d="M16 5V2H8v3H4v14h16V5h-4zM8 2h8v3H8V2z" />
  ),
  globe: (
    <path d="M12 2C8 2 5 5 5 9c0 4 5 9 7 11 2-2 7-7 7-11 0-4-3-7-7-7z" />
  ),
  sunset: (
    <path d="M12 18V6M6 12l6-6 6 6M6 16l6 4 6-4" />
  ),
  luxury: (
    <path d="M12 6l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" />
  ),
  puzzle: (
    <path d="M12 4a4 4 0 100 8 4 4 0 000-8zm-6 6a6 6 0 0112 0v2h-12V10zm12 2a6 6 0 11-12 0v-2h12v2z" />
  ),
  client: (
    <path d="M16 11c1.38 0 2.62.46 3.54 1.22C20.54 11.81 21 13.08 21 14.5c0 1.38-.46 2.65-1.22 3.57.15.13.28.28.41.43.26-.77.81-1.52 1.57-2.1.12-.12.26-.22.4-.32A4.01 4.01 0 0016 10.5c-.46 0-.9.1-1.33.27.26-.74.33-1.52.33-2.27zM12 2C9.79 2 8 3.79 8 6c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  ),
  ops: (
    <path d="M4 7h16v2H4zm2 5h12v2H6zm-2 5h16v2H4z" />
  ),
  expertise: (
    <path d="M12 3a3 3 0 00-3 3 3 3 0 006 0 3 3 0 00-3-3zm-5 9h10a2 2 0 012 2v5H5v-5a2 2 0 012-2zm0 0v.01" />
  ),
  commission: (
    <path d="M12 5v6l-3 3 1.5 1.5L15 12l-3-6zm-8 8v6a2 2 0 002 2h12a2 2 0 002-2v-6h-4v3h-2v-3H7v-2H4zm16-8a3 3 0 11-6 0 3 3 0 016 0z" />
  ),
  brand: (
    <path d="M6 10h12v2H6zm0 4h12v6a2 2 0 01-2 2H8a2 2 0 01-2-2z" />
  ),
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}