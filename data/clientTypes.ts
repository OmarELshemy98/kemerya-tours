export type ClientType = {
  title: string;
  description: string;
  icon: ClientTypeIcon;
};

export type ClientTypeIcon =
  | "luxury"
  | "globe"
  | "users"
  | "map"
  | "briefcase"
  | "pyramid";

export const clientTypes = [
  {
    title: "Luxury Travel Agencies",
    description:
      "High-end retailers seeking exclusive, white-glove Egypt experiences for affluent clients.",
    icon: "luxury" as const,
  },
  {
    title: "Tour Operators",
    description:
      "Established operators adding Egypt departures to their portfolio with full operational backing.",
    icon: "globe" as const,
  },
  {
    title: "Travel Advisors",
    description:
      "Independent advisors looking for reliable, commission-friendly Egypt itineraries.",
    icon: "users" as const,
  },
  {
    title: "Destination Management Companies",
    description:
      "DMCs expanding into Egypt through a vetted local operating partner.",
    icon: "map" as const,
  },
  {
    title: "Corporate Travel Buyers",
    description:
      "MICE and incentive planners designing corporate events and reward trips to Egypt.",
    icon: "briefcase" as const,
  },
  {
    title: "Incentive & Rewards Planners",
    description:
      "Program designers creating transformative incentive journeys on the Nile and beyond.",
    icon: "pyramid" as const,
  },
] as const;