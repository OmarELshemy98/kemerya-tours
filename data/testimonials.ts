import { datasetTranslations, type Locale } from "@/lib/i18n";

export const testimonials = [
  {
    name: "Sophia Mitchell",
    label: "Verified Traveler · USA",
    quote:
      "Kemerya Tours made our Egypt trip truly unforgettable. Every detail was perfectly arranged — from the private Egyptologist guide at the Pyramids to our Nile felucca at sunset.",
  },
  {
    name: "James Patterson",
    label: "Travel Enthusiast · UK",
    quote:
      "We booked a tailor-made 10-day itinerary covering Cairo, Luxor, and Aswan. The team’s knowledge and passion for Egyptian history elevated every single moment.",
  },
  {
    name: "Linda Chambers",
    label: "Solo Traveler · Australia",
    quote:
      "Outstanding service from the first email to the final farewell. Our family tour with kids was handled with patience, fun activities, and genuine warmth.",
  },
] as const;

export function getTestimonials(locale: Locale) {
  if (locale === "en") return testimonials;
  const copy = datasetTranslations[locale].testimonials;
  if (copy.length !== testimonials.length) throw new Error(`Incomplete testimonials translation: ${locale}`);
  return testimonials.map((item, index) => ({
    ...item,
    label: copy[index][0],
    quote: copy[index][1],
  }));
}
