export const locales = ["en", "ar", "fr", "it", "es", "de", "pt", "nl", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function getDirection(locale: string): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export const translations = {
  en: {
    meta: {
      title: "B2B Egypt Partnership | Kemerya Tours",
      description:
        "Trusted Egyptian B2B partner for international travel businesses. Private journeys, reliable on-ground operations, and Egypt experiences for your clients.",
    },
    nav: {
      capabilities: "Capabilities",
      categories: "Categories",
      whyPartner: "Why Partner",
      aboutUs: "About Us",
      whoWeWorkWith: "Who We Work With",
      contact: "CONTACT",
            workWithUs: "Work With Us",
      faq: "FAQ",
    },
    hero: {
      eyebrow: "YOUR EGYPT PARTNER",
      title: [
        "YOUR TRUSTED EGYPTIAN PARTNER.",
        "YOUR EGYPT EXPERTISE. OUR LOCAL OPERATIONS.",
        "PRIVATE JOURNEYS. SEAMLESS PARTNERSHIP.",
        "LET'S BUILD EGYPT PRODUCTS TOGETHER.",
      ],
      subtitle:
        "Local expertise, private journeys, and seamless on-ground operations for international travel businesses.",
      primary: "BECOME A PARTNER",
      secondary: "PARTNERSHIP INFO",
      note: "10+ Years Operating â€¢ 2,000+ Travelers â€¢ 4.9 Rating",
    },
    trust: {
      eyebrow: "PROVEN ON THE GROUND",
      statement:
        "Boutique local operator with verified results across Egypt since 2016.",
      items: [
        { value: "10+", label: "Years Operating" },
        { value: "2,000+", label: "Travelers Delivered" },
        { value: "4.9", label: "Average Rating" },
        { value: "100%", label: "Custom Itineraries" },
        { value: "24/7", label: "On-Ground Support" },
      ],
    },
    whoKemerya: {
      eyebrow: "EST. 2016 â€¢ CAIRO, EGYPT",
      title: "MORE THAN A TOUR OPERATOR.",
      subtitle: "YOUR LOCAL PARTNER IN EGYPT.",
      intro:
        "Kemerya is a boutique Egypt operator built for the partnership era.",
      paragraphs: [
        "We are not a mass-market operator. We are a curated network of Egyptologist guides, local artisans, and ground handlers who have been crafting intimate, high-end journeys since 2016. Every itinerary we create is designed to be sold by you â€” seamlessly.",
        "Based in Cairo with operations across the Nile, Red Sea, and Western Desert, we act as your backstage team. You own the client relationship and the revenue. We handle every operational detail on the ground in Egypt.",
      ],
      cta: "PARTNER WITH US",
    },
    clientTypes: {
      eyebrow: "WHO WE WORK WITH",
      title: "INTERNATIONAL TRAVEL BUSINESSES WE PARTNER WITH.",
      intro:
        "From luxury travel agencies to destination management companies, we provide the Egypt expertise you need to confidently offer premium journeys to your clients.",
    },
    whyPartner: {
      eyebrow: "WHY PARTNERS CHOOSE KEMERYA",
      title: "THE KEMERYA DIFFERENCE",
      intro:
        "These are not just our strengths â€” they are your competitive advantages in the market.",
    },
    advantages: {
      eyebrow: "THE KEMERYA ADVANTAGE",
      title: "YOU SELL. WE OPERATE.",
      intro:
        "Your role is client-facing sales. Ours is flawless execution on the ground in Egypt â€” from permits to guides to seamless transitions.",
    },
    capabilities: {
      eyebrow: "WHAT WE CAN DELIVER",
      title: "END-TO-END EGYPT OPERATIONS",
      intro:
        "From initial concept to on-ground execution, we provide the full spectrum of Egypt travel services your clients will love.",
    },
    categories: {
      eyebrow: "COMMERCIAL CATEGORIES",
      title: "FOUR WAYS TO SELL EGYPT",
      intro:
        "Each category opens a different approach to Egypt product development: urban discoveries, immersive itineraries, coastal escapes, and slow river journeys.",
      cta: "Explore",
    },
    journeys: {
      eyebrow: "SIGNATURE JOURNEY MODELS",
      title: "FOUR JOURNEY ARCHETYPES.",
      intro:
        "These models reflect what international partners most frequently request: atmosphere, privacy, and deep cultural connection.",
      cta: "VIEW ALL JOURNEYS",
    },
    partnership: {
      eyebrow: "HOW IT WORKS",
      title: "A SIMPLE 4-STEP PARTNERSHIP",
      intro: "Getting started is straightforward. Here's how we work together.",
    },
    contact: {
      eyebrow: "PARTNERSHIP INQUIRY",
      title: "READY TO PARTNER?",
      subtitle: "LET'S DISCUSS YOUR EGYPT PRODUCT.",
      fields: {
        name: "Full Name",
        email: "Business Email",
        company: "Company",
        role: "Role",
        phone: "Phone",
        message:
          "How can we help? Tell us about your ideal Egypt product and target market.",
      },
      submit: "SEND PARTNERSHIP INQUIRY",
      note: "Your inquiry goes directly to the Kemerya team.",
    },
    conversion: {
      eyebrow: "YOUR NEXT EGYPT PARTNER?",
      title: ["LET'S TALK EGYPT.", "YOUR PARTNERSHIP STARTS HERE."],
      description:
        "Ready to add Egypt to your product portfolio? We'll build a custom partnership package tailored to your brand.",
      primary: "BECOME A PARTNER",
      secondary: "BOOK A 15-MIN CALL",
    },
    footer: {
      blurb:
        "Your trusted Egyptian partner for private journeys and reliable on-ground operations.",
      navTitle: "Explore",
      partnerTitle: "Partnership",
      contactTitle: "Contact",
      policy: "Privacy Policy",
      terms: "Terms of Service",
      developer: "Designed and developed by Omar Elshemy",
      business: {
        headline: "Your trusted Egyptian partner for private journeys.",
        address: "250 Aboul Houl Street, Haram, Giza, Egypt",
      },
    },
  },
  ar: {
    meta: {
      title: "Ø´Ø±Ø§ÙƒØ© Ù…ØµØ± Ù„Ù„Ø£Ø¹Ù…Ø§Ù„ B2B | Kemerya Tours",
      description:
        "Ø´Ø±ÙŠÙƒ Ù…ØµØ±ÙŠ Ù…ÙˆØ«ÙˆÙ‚ Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø³ÙØ± Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©ØŒ ÙŠÙ‚Ø¯Ù… Ø±Ø­Ù„Ø§Øª Ø®Ø§ØµØ© ÙˆØ¹Ù…Ù„ÙŠØ§Øª Ù…ÙŠØ¯Ø§Ù†ÙŠØ© Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆØªØ¬Ø§Ø±Ø¨ ÙÙŠ Ù…ØµØ± Ø¨Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„Ø¨ÙŠØ¶Ø§Ø¡.",
    },
    nav: {
      capabilities: "Ø§Ù„Ù‚Ø¯Ø±Ø§Øª",
      categories: "Ø§Ù„ÙØ¦Ø§Øª",
      whyPartner: "Ù„Ù…Ø§Ø°Ø§ ØªØ®ØªØ§Ø±Ù†Ø§ ÙƒØ´Ø±ÙŠÙƒØŸ",
      aboutUs: "Ù…Ù† Ù†Ø­Ù†",
      whoWeWorkWith: "Ù…Ø¹ Ù…Ù† Ù†Ø¹Ù…Ù„",
      contact: "Ø§ØªØµÙ„ Ø¨Ù†Ø§",
            workWithUs: "Ø§Ø¹Ù…Ù„ Ù…Ø¹Ù†Ø§",
      faq: "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
    },
    hero: {
      eyebrow: "Ø´Ø±ÙŠÙƒÙƒ ÙÙŠ Ù…ØµØ±",
      title: [
        "Ø´Ø±ÙŠÙƒÙƒ Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚ ÙÙŠ Ù…ØµØ±.",
        "Ø®Ø¨Ø±ØªÙƒ ÙÙŠ Ù…ØµØ±. Ø¹Ù…Ù„ÙŠØ§ØªÙ†Ø§ Ø§Ù„Ù…Ø­Ù„ÙŠØ©.",
        "Ø±Ø­Ù„Ø§Øª Ø®Ø§ØµØ©. Ø´Ø±Ø§ÙƒØ© Ø³Ù„Ø³Ø©.",
        "Ù„Ù†Ø¨Ù†Ù Ù…Ø¹Ù‹Ø§ Ù…Ù†ØªØ¬Ø§Øª Ø³ÙŠØ§Ø­ÙŠØ© ÙÙŠ Ù…ØµØ±.",
      ],
      subtitle:
        "Ø®Ø¨Ø±Ø© Ù…Ø­Ù„ÙŠØ©ØŒ Ø±Ø­Ù„Ø§Øª Ø®Ø§ØµØ©ØŒ ÙˆØ¹Ù…Ù„ÙŠØ§Øª Ø£Ø±Ø¶ÙŠØ© Ø³Ù„Ø³Ø© Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø³ÙØ± Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©.",
      primary: "ÙƒÙ† Ø´Ø±ÙŠÙƒØ§",
      secondary: "Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø´Ø±Ø§ÙƒØ©",
      note: "Ø£ÙƒØ«Ø± Ù…Ù† 10 Ø³Ù†ÙˆØ§Øª â€¢ Ø£ÙƒØ«Ø± Ù…Ù† 2000 Ù…Ø³Ø§ÙØ± â€¢ ØªÙ‚ÙŠÙŠÙ… 4.9",
    },
    trust: {
      eyebrow: "Ø®Ø¨Ø±Ø© Ù…Ø«Ø¨ØªØ© Ø¹Ù„Ù‰ Ø£Ø±Ø¶ Ø§Ù„ÙˆØ§Ù‚Ø¹",
      statement: "Ø´Ø±ÙƒØ© Ø³ÙŠØ§Ø­ÙŠØ© Ù…Ø­Ù„ÙŠØ© Ù…ØªØ®ØµØµØ©ØŒ Ø­Ù‚Ù‚Øª Ù†ØªØ§Ø¦Ø¬ Ù…ÙˆØ«ÙˆÙ‚Ø© ÙÙŠ Ø£Ù†Ø­Ø§Ø¡ Ù…ØµØ± Ù…Ù†Ø° Ø¹Ø§Ù… 2016.",
      items: [
        { value: "10+", label: "Ø³Ù†ÙˆØ§Øª ØªØ´ØºÙŠÙ„" },
        { value: "2,000+", label: "Ù…Ø³Ø§ÙØ± ØªÙ…Ù‘Øª Ø®Ø¯Ù…ØªÙ‡Ù…" },
        { value: "4.9", label: "Ù…ØªÙˆØ³Ø· Ø§Ù„ØªÙ‚ÙŠÙŠÙ…" },
        { value: "100%", label: "Ø±Ø­Ù„Ø§Øª Ù…Ø®ØµØµØ©" },
        { value: "24/7", label: "Ø¯Ø¹Ù… Ø£Ø±Ø¶ÙŠ" },
      ],
    },
    whoKemerya: {
      eyebrow: "ØªØ£Ø³Ø³ Ø¹Ø§Ù… 2016 â€¢ Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©ØŒ Ù…ØµØ±",
      title: "Ø£ÙƒØ«Ø± Ù…Ù† Ù…Ø´ØºÙ„ Ø³ÙŠØ§Ø­ÙŠ.",
      subtitle: "Ø´Ø±ÙŠÙƒÙƒ Ø§Ù„Ù…Ø­Ù„ÙŠ ÙÙŠ Ù…ØµØ±.",
      intro: "Kemerya Ø´Ø±ÙƒØ© Ø³ÙŠØ§Ø­ÙŠØ© Ù…ØµØ±ÙŠØ© Ù…ØªØ®ØµØµØ©ØŒ ØªØ£Ø³Ø³Øª Ù„ØªÙˆØ§ÙƒØ¨ Ø¹ØµØ± Ø§Ù„Ø´Ø±Ø§ÙƒØ§Øª.",
      paragraphs: [
        "Ù„Ø³Ù†Ø§ Ø´Ø±ÙƒØ© Ø³ÙŠØ§Ø­ÙŠØ© Ø¬Ù…Ø§Ù‡ÙŠØ±ÙŠØ©ØŒ Ø¨Ù„ Ø´Ø¨ÙƒØ© Ù…Ù†ØªÙ‚Ø§Ø© ØªØ¶Ù… Ù…Ø±Ø´Ø¯ÙŠ Ø¹Ù„Ù… Ø§Ù„Ù…ØµØ±ÙŠØ§Øª ÙˆØ§Ù„Ø­Ø±ÙÙŠÙŠÙ† Ø§Ù„Ù…Ø­Ù„ÙŠÙŠÙ† ÙˆÙ…Ù‚Ø¯Ù…ÙŠ Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø£Ø±Ø¶ÙŠØ©. Ù†ØµÙ…Ù… Ù…Ù†Ø° Ø¹Ø§Ù… 2016 Ø±Ø­Ù„Ø§Øª Ø£ØµÙŠÙ„Ø© ÙˆÙØ§Ø®Ø±Ø©ØŒ ÙˆÙ†Ø¹Ø¯Ù‘ ÙƒÙ„ Ø¨Ø±Ù†Ø§Ù…Ø¬ Ø³ÙŠØ§Ø­ÙŠ Ø¨Ø­ÙŠØ« ÙŠØ³Ù‡Ù„ Ø¹Ù„ÙŠÙƒÙ… ØªØ³ÙˆÙŠÙ‚Ù‡ ÙˆØ¨ÙŠØ¹Ù‡.",
        "Ù†ØªØ®Ø° Ù…Ù† Ø§Ù„Ù‚Ø§Ù‡Ø±Ø© Ù…Ù‚Ø±Ù‹Ø§ Ù„Ù†Ø§ØŒ ÙˆÙ†Ù†ÙØ° Ø±Ø­Ù„Ø§Øª ÙÙŠ Ø£Ù†Ø­Ø§Ø¡ Ø§Ù„Ù†ÙŠÙ„ ÙˆØ§Ù„Ø¨Ø­Ø± Ø§Ù„Ø£Ø­Ù…Ø± ÙˆØ§Ù„ØµØ­Ø±Ø§Ø¡ Ø§Ù„ØºØ±Ø¨ÙŠØ©. Ù†Ø¹Ù…Ù„ ÙƒÙØ±ÙŠÙ‚Ùƒ Ø®Ù„Ù Ø§Ù„ÙƒÙˆØ§Ù„ÙŠØ³: ØªØ­ØªÙØ¸ Ø£Ù†Øª Ø¨Ø¹Ù„Ø§Ù‚Ø© Ø§Ù„Ø¹Ù…ÙŠÙ„ ÙˆØ¨Ø§Ù„Ø¥ÙŠØ±Ø§Ø¯Ø§ØªØŒ ÙˆÙ†ØªÙˆÙ„Ù‰ Ø¬Ù…ÙŠØ¹ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø¹Ù„Ù‰ Ø£Ø±Ø¶ Ù…ØµØ±.",
      ],
      cta: "ÙƒÙ† Ø´Ø±ÙŠÙƒØ§ Ù…Ø¹Ù†Ø§",
    },
    clientTypes: {
      eyebrow: "Ù…Ø¹ Ù…Ù† Ù†Ø¹Ù…Ù„",
      title: "Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø³ÙØ± Ø§Ù„Ø¯ÙˆÙ„ÙŠØ© Ø§Ù„ØªÙŠ Ù†ØªØ¹Ø§ÙˆÙ† Ù…Ø¹Ù‡Ø§.",
      intro:
        "Ù…Ù† ÙˆÙƒØ§Ù„Ø§Øª Ø³ÙØ± ÙØ§Ø®Ø±Ø© Ø¥Ù„Ù‰ Ø´Ø±ÙƒØ§Øª Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„ÙˆØ¬Ù‡Ø§ØªØŒ Ù†Ø­Ù† Ù†ÙˆÙØ± Ø§Ù„Ø®Ø¨Ø±Ø© ÙÙŠ Ù…ØµØ± Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬Ù‡Ø§ Ù„ØªÙ‚Ø¯ÙŠÙ… Ø±Ø­Ù„Ø§Øª Ù…ØªÙ…ÙŠØ²Ø© Ù„Ø¹Ù…Ù„Ø§Ø¦Ùƒ Ø¨Ø«Ù‚Ø©.",
    },
    whyPartner: {
      eyebrow: "Ù„Ù…Ø§Ø°Ø§ ÙŠØ®ØªØ§Ø± Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ Kemerya",
      title: "Ù…Ø§ ÙŠÙ…ÙŠØ² Kemerya",
      intro: "Ù‡Ø°Ù‡ Ù„ÙŠØ³Øª Ù…Ø¬Ø±Ø¯ Ù†Ù‚Ø§Ø· Ù‚ÙˆØ© Ù„Ø¯ÙŠÙ†Ø§ØŒ Ø¨Ù„ Ù…Ø²Ø§ÙŠØ§ ØªÙ†Ø§ÙØ³ÙŠØ© ØªÙ…Ù†Ø­Ùƒ Ø§Ù„Ø£ÙØ¶Ù„ÙŠØ© ÙÙŠ Ø§Ù„Ø³ÙˆÙ‚.",
    },
    advantages: {
      eyebrow: "Ù…Ø²Ø§ÙŠØ§ Kemerya",
      title: "Ø£Ù†Øª ØªØ¨ÙŠØ¹ØŒ ÙˆÙ†Ø­Ù† Ù†ØªÙˆÙ„Ù‰ Ø§Ù„ØªÙ†ÙÙŠØ°.",
      intro:
        "ÙŠÙ†ØµØ¨ Ø¯ÙˆØ±Ùƒ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª ÙˆØ§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ù…Ø¨Ø§Ø´Ø± Ù…Ø¹ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ØŒ Ø¨ÙŠÙ†Ù…Ø§ Ù†ØªÙˆÙ„Ù‰ Ù†Ø­Ù† Ø§Ù„ØªÙ†ÙÙŠØ° Ø§Ù„Ù…ØªÙ‚Ù† Ø¹Ù„Ù‰ Ø£Ø±Ø¶ Ù…ØµØ±ØŒ Ù…Ù† Ø§Ù„ØªØµØ§Ø±ÙŠØ­ ÙˆØ§Ù„Ù…Ø±Ø´Ø¯ÙŠÙ† Ø¥Ù„Ù‰ Ø§Ù„ØªÙ†Ù‚Ù„Ø§Øª Ø§Ù„Ø³Ù„Ø³Ø©.",
    },
    capabilities: {
      eyebrow: "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠÙ…ÙƒÙ†Ù†Ø§ ØªÙ‚Ø¯ÙŠÙ…Ù‡",
      title: "Ø¹Ù…Ù„ÙŠØ§Øª Ù…ØªÙƒØ§Ù…Ù„Ø© ÙÙŠ Ù…ØµØ± Ù…Ù† Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ù†Ù‡Ø§ÙŠØ©",
      intro:
        "Ù…Ù† Ø§Ù„ÙÙƒØ±Ø© Ø§Ù„Ø£ÙˆÙ„ÙŠØ© Ø­ØªÙ‰ Ø§Ù„ØªÙ†ÙÙŠØ° Ø¹Ù„Ù‰ Ø£Ø±Ø¶ Ø§Ù„ÙˆØ§Ù‚Ø¹ØŒ Ù†ÙˆÙØ± Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…ØªÙƒØ§Ù…Ù„Ø© Ù…Ù† Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø³ÙØ± ÙÙŠ Ù…ØµØ± Ø§Ù„ØªÙŠ Ø³ÙŠØ³ØªÙ…ØªØ¹ Ø¨Ù‡Ø§ Ø¹Ù…Ù„Ø§Ø¤Ùƒ.",
    },
    categories: {
      eyebrow: "Ø§Ù„ÙØ¦Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©",
      title: "Ø£Ø±Ø¨Ø¹ Ø·Ø±Ù‚ Ù„Ø¨ÙŠØ¹ Ù…ØµØ±",
      intro:
        "ØªØªÙŠØ­ ÙƒÙ„ ÙØ¦Ø© Ù†Ù‡Ø¬Ù‹Ø§ Ù…Ø®ØªÙ„ÙÙ‹Ø§ Ù„ØªØ·ÙˆÙŠØ± Ù…Ù†ØªØ¬Ø§Øª Ø³ÙŠØ§Ø­ÙŠØ© ÙÙŠ Ù…ØµØ±: Ø§ÙƒØªØ´Ø§Ù Ø§Ù„Ù…Ø¯Ù†ØŒ ÙˆØ¨Ø±Ø§Ù…Ø¬ ØºØ§Ù…Ø±Ø©ØŒ ÙˆØ¹Ø·Ù„Ø§Øª Ø³Ø§Ø­Ù„ÙŠØ©ØŒ ÙˆØ±Ø­Ù„Ø§Øª Ù†Ù‡Ø±ÙŠØ© Ù‡Ø§Ø¯Ø¦Ø©.",
      cta: "Ø§Ø³ØªÙƒØ´Ù",
    },
    journeys: {
      eyebrow: "Ù†Ù…Ø§Ø°Ø¬ Ø§Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
      title: "Ø£Ø±Ø¨Ø¹Ø© Ù†Ù…Ø§Ø°Ø¬ Ù„Ø±Ø­Ù„Ø§Øª Ù…Ù…ÙŠØ²Ø©.",
      intro:
        "ØªØ¹ÙƒØ³ Ù‡Ø°Ù‡ Ø§Ù„Ù†Ù…Ø§Ø°Ø¬ Ø£ÙƒØ«Ø± Ù…Ø§ ÙŠØ·Ù„Ø¨Ù‡ Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ Ø§Ù„Ø¯ÙˆÙ„ÙŠÙˆÙ†: Ø£Ø¬ÙˆØ§Ø¡ Ù…Ù…ÙŠØ²Ø©ØŒ ÙˆØ®ØµÙˆØµÙŠØ©ØŒ ÙˆØ§Ø±ØªØ¨Ø§Ø·Ù‹Ø§ Ø«Ù‚Ø§ÙÙŠÙ‹Ø§ Ø¹Ù…ÙŠÙ‚Ù‹Ø§.",
      cta: "Ø¹Ø±Ø¶ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø±Ø­Ù„Ø§Øª",
    },
    partnership: {
      eyebrow: "ÙƒÙŠÙ ÙŠØ¹Ù…Ù„ Ø°Ù„Ùƒ",
      title: "Ø´Ø±Ø§ÙƒØ© Ø¨Ø³ÙŠØ·Ø© Ù…Ù† 4 Ø®Ø·ÙˆØ§Øª",
      intro: "Ø§Ù„Ø¨Ø¯Ø¡ Ø³Ù‡Ù„. Ø¥Ù„ÙŠÙƒ ÙƒÙŠÙ Ù†Ø¹Ù…Ù„ Ù…Ø¹Ø§.",
    },
    contact: {
      eyebrow: "Ø§Ø³ØªÙØ³Ø§Ø± Ø§Ù„Ø´Ø±Ø§ÙƒØ©",
      title: "Ù‡Ù„ Ø£Ù†Øª Ù…Ø³ØªØ¹Ø¯ Ù„Ù„Ø´Ø±Ø§ÙƒØ©ØŸ",
      subtitle: "Ø¯Ø¹Ù†Ø§ Ù†Ù†Ø§Ù‚Ø´ Ù…Ù†ØªØ¬ Ù…ØµØ± Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ.",
      fields: {
        name: "Ø§Ù„Ø§Ø³Ù… Ø§Ù„ÙƒØ§Ù…Ù„",
        email: "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ù„Ù„Ø¹Ù…Ù„",
        company: "Ø§Ù„Ø´Ø±ÙƒØ©",
        role: "Ø§Ù„ÙˆØ¸ÙŠÙØ©",
        phone: "Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ",
        message:
          "ÙƒÙŠÙ ÙŠÙ…ÙƒÙ†Ù†Ø§ Ù…Ø³Ø§Ø¹Ø¯ØªÙƒØŸ Ø£Ø®Ø¨Ø±Ù†Ø§ Ø¹Ù† Ù…Ù†ØªØ¬ Ù…ØµØ± Ø§Ù„Ù…Ø«Ø§Ù„ÙŠ ÙˆØ³ÙˆÙ‚Ùƒ Ø§Ù„Ù…Ø³ØªÙ‡Ø¯Ù.",
      },
      submit: "Ø£Ø±Ø³Ù„ Ø§Ø³ØªÙØ³Ø§Ø± Ø§Ù„Ø´Ø±Ø§ÙƒØ©",
      note: "ÙŠØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ø³ØªÙØ³Ø§Ø±Ùƒ Ù…Ø¨Ø§Ø´Ø±Ø© Ø¥Ù„Ù‰ ÙØ±ÙŠÙ‚ Kemerya.",
    },
    conversion: {
      eyebrow: "Ø´Ø±ÙŠÙƒÙƒ Ø§Ù„ØªØ§Ù„ÙŠ ÙÙŠ Ù…ØµØ±ØŸ",
      title: ["Ø¯Ø¹Ù†Ø§ Ù†ØªØ­Ø¯Ø« Ø¹Ù† Ù…ØµØ±.", "Ø´Ø±Ø§ÙƒØªÙƒ ØªØ¨Ø¯Ø£ Ù‡Ù†Ø§."],
      description:
        "Ù‡Ù„ Ø£Ù†Øª Ù…Ø³ØªØ¹Ø¯ Ù„Ø¥Ø¶Ø§ÙØ© Ù…ØµØ± Ø¥Ù„Ù‰ Ù…Ø­ÙØ¸Ø© Ù…Ù†ØªØ¬Ø§ØªÙƒ Ø§Ù„Ø³ÙŠØ§Ø­ÙŠØ©ØŸ Ø³Ù†Ø¹Ø¯Ù‘ Ù„Ùƒ Ø¹Ø±Ø¶ Ø´Ø±Ø§ÙƒØ© Ù…Ø®ØµØµÙ‹Ø§ ÙŠØªÙˆØ§ÙÙ‚ Ù…Ø¹ Ø¹Ù„Ø§Ù…ØªÙƒ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©.",
      primary: "ÙƒÙ† Ø´Ø±ÙŠÙƒØ§",
      secondary: "Ø§Ø­Ø¬Ø² Ù…ÙƒØ§Ù„Ù…Ø© 15 Ø¯Ù‚ÙŠÙ‚Ø©",
    },
    footer: {
      blurb: "Ø´Ø±ÙŠÙƒÙƒ Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚ ÙÙŠ Ù…ØµØ± Ù„Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø®Ø§ØµØ© ÙˆØ§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø£Ø±Ø¶ÙŠØ© Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚Ø©.",
      navTitle: "Ø§Ø³ØªÙƒØ´Ù",
      partnerTitle: "Ø§Ù„Ø´Ø±Ø§ÙƒØ©",
      contactTitle: "Ø§ØªØµÙ„ Ø¨Ù†Ø§",
      policy: "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©",
      terms: "Ø´Ø±ÙˆØ· Ø§Ù„Ø®Ø¯Ù…Ø©",
      developer: "ØµÙ…Ù… ÙˆØ·ÙˆØ± Ø¨ÙˆØ§Ø³Ø·Ø© Ø¹Ù…Ø± Ø§Ù„Ø´ÙŠÙ…ÙŠ",
      business: {
        headline: "Ø´Ø±ÙŠÙƒÙƒ Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚ ÙÙŠ Ù…ØµØ± Ù„Ù„Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø®Ø§ØµØ©.",
        address: "Ø´Ø§Ø±Ø¹ Ø£Ø¨Ùˆ Ø§Ù„Ù‡ÙˆÙ„ 250ØŒ Ø§Ù„Ù‡Ø±Ù…ØŒ Ø§Ù„Ø¬ÙŠØ²Ø©ØŒ Ù…ØµØ±",
      },
    },
  },
  fr: {
    meta: {
      title: "Partenariat B2B Ã‰gypte | Kemerya Tours",
      description:
        "Partenaire Ã©gyptien de confiance pour les entreprises internationales du tourisme. Voyages privÃ©s, opÃ©rations fiables sur place et expÃ©riences en Ã‰gypte pour vos clients.",
    },
    nav: {
      capabilities: "CapacitÃ©s",
      categories: "CatÃ©gories",
      whyPartner: "Pourquoi Nous Choisir",
      aboutUs: "Ã€ propos",
      whoWeWorkWith: "Avec Qui Nous Travaillons",
      contact: "CONTACT",
            workWithUs: "Travaillez Avec Nous",
      faq: "FAQ",
    },
    hero: {
      eyebrow: "VOTRE PARTENAIRE EN Ã‰GYPTE",
      title: [
        "VOTRE PARTENAIRE Ã‰GYPTIEN DE CONFIANCE.",
        "VOTRE OFFRE SUR Lâ€™Ã‰GYPTE. NOS OPÃ‰RATIONS LOCALES.",
        "VOYAGES PRIVÃ‰S. UN PARTENARIAT FLUIDE.",
        "CRÃ‰ONS ENSEMBLE DES OFFRES SUR Lâ€™Ã‰GYPTE.",
      ],
      subtitle:
        "Expertise locale, voyages privÃ©s et opÃ©rations parfaitement coordonnÃ©es en Ã‰gypte pour les professionnels internationaux du voyage.",
      primary: "DEVENIR PARTENAIRE",
      secondary: "INFORMATIONS SUR LE PARTENARIAT",
      note: "10+ ans dâ€™activitÃ© â€¢ 2 000+ voyageurs â€¢ Note moyenne : 4,9",
    },
    trust: {
      eyebrow: "UNE EXPERTISE Ã‰PROUVÃ‰E SUR LE TERRAIN",
      statement:
        "OpÃ©rateur local Ã  taille humaine, aux rÃ©sultats vÃ©rifiÃ©s en Ã‰gypte depuis 2016.",
      items: [
        { value: "10+", label: "AnnÃ©es dâ€™activitÃ©" },
        { value: "2,000+", label: "Voyageurs accompagnÃ©s" },
        { value: "4.9", label: "Note moyenne" },
        { value: "100%", label: "ItinÃ©raires Sur Mesure" },
        { value: "24/7", label: "Assistance sur place 24 h/24, 7 j/7" },
      ],
    },
    whoKemerya: {
      eyebrow: "FONDÃ‰ EN 2016 â€¢ LE CAIRE, Ã‰GYPTE",
      title: "PLUS QU'UN OPÃ‰RATEUR TOURISTIQUE.",
      subtitle: "VOTRE PARTENAIRE LOCAL EN Ã‰GYPTE.",
      intro:
        "Kemerya est un voyagiste Ã©gyptien Ã  taille humaine, pensÃ© pour une nouvelle Ã¨re de partenariats.",
      paragraphs: [
        "Nous ne sommes pas un opÃ©rateur de masse. Nous sommes un rÃ©seau triÃ© sur le volet de guides spÃ©cialisÃ©s en Ã©gyptologie, dâ€™artisans locaux et de prestataires sur place. Depuis 2016, nous crÃ©ons des voyages intimistes et haut de gamme. Chaque itinÃ©raire est conÃ§u pour Ãªtre commercialisÃ© par vos soins, en toute simplicitÃ©.",
        "ImplantÃ©s au Caire et prÃ©sents le long du Nil, sur la mer Rouge et dans le dÃ©sert occidental, nous sommes votre Ã©quipe en coulisses. Vous gardez la relation client et les revenus ; nous prenons en charge tous les aspects opÃ©rationnels sur place, en Ã‰gypte.",
      ],
      cta: "DEVENEZ PARTENAIRE",
    },
    clientTypes: {
      eyebrow: "AVEC QUI NOUS TRAVAILLONS",
      title:
        "LES PROFESSIONNELS INTERNATIONAUX DU VOYAGE QUE NOUS ACCOMPAGNONS.",
      intro:
        "Des agences de voyage haut de gamme aux sociÃ©tÃ©s de gestion de destinations, nous vous apportons lâ€™expertise de lâ€™Ã‰gypte nÃ©cessaire pour proposer en toute confiance des voyages dâ€™exception Ã  vos clients.",
    },
    whyPartner: {
      eyebrow: "POURQUOI NOS PARTENAIRES CHOISISSENT KEMERYA",
      title: "CE QUI DISTINGUE KEMERYA",
      intro:
        "Ce ne sont pas seulement nos forces â€” ce sont vos avantages concurrentiels sur le marchÃ©.",
    },
    advantages: {
      eyebrow: "L'AVANTAGE KEMERYA",
      title: "VOUS VENDEZ. NOUS OPÃ‰RONS.",
      intro:
        "Votre rÃ´le : vendre et accompagner vos clients. Le nÃ´tre : assurer une exÃ©cution irrÃ©prochable sur le terrain en Ã‰gypte, des autorisations aux guides, jusquâ€™Ã  la fluiditÃ© des dÃ©placements.",
    },
    capabilities: {
      eyebrow: "CE QUE NOUS POUVONS FAIRE",
      title: "OPÃ‰RATIONS EN Ã‰GYPTE, DE BOUT EN BOUT",
      intro:
        "Du concept initial Ã  la mise en Å“uvre sur le terrain, nous proposons une gamme complÃ¨te de services de voyage en Ã‰gypte qui sÃ©duiront vos clients.",
    },
    categories: {
      eyebrow: "CATÃ‰GORIES COMMERCIALES",
      title: "QUATRE MANIÃˆRES DE VENDRE L'Ã‰GYPTE",
      intro:
        "Chaque catÃ©gorie ouvre une voie diffÃ©rente pour dÃ©velopper une offre touristique en Ã‰gypte : dÃ©couvertes urbaines, itinÃ©raires immersifs, escapades cÃ´tiÃ¨res et croisiÃ¨res fluviales au rythme tranquille.",
      cta: "Explorer",
    },
    journeys: {
      eyebrow: "MODÃˆLES DE VOYAGE EMBLÃ‰MATIQUES",
      title: "QUATRE MODÃˆLES DE VOYAGE EMBLÃ‰MATIQUES.",
      intro:
        "Ces modÃ¨les reflÃ¨tent les demandes les plus frÃ©quentes de nos partenaires internationaux : une atmosphÃ¨re marquante, des sÃ©jours privÃ©s et un lien culturel profond.",
      cta: "VOIR TOUS LES TRAJETS",
    },
    partnership: {
      eyebrow: "COMMENT Ã‡A FONCTIONNE",
      title: "UN PARTENARIAT SIMPLE EN 4 Ã‰TAPES",
      intro: "La mise en place est simple. Voici comment nous collaborons.",
    },
    contact: {
      eyebrow: "DEMANDE DE PARTENARIAT",
      title: "ENVIE DE DEVENIR PARTENAIRE ?",
      subtitle: "Ã‰CHANGEONS SUR VOTRE OFFRE POUR Lâ€™Ã‰GYPTE.",
      fields: {
        name: "Nom Complet",
        email: "Adresse e-mail professionnelle",
        company: "Entreprise",
        role: "RÃ´le",
        phone: "TÃ©lÃ©phone",
        message:
            "Comment pouvons-nous vous aider ? DÃ©crivez-nous lâ€™offre que vous souhaitez proposer en Ã‰gypte ainsi que votre marchÃ© cible.",
      },
          submit: "ENVOYER LA DEMANDE DE PARTENARIAT",
      note: "Votre demande est transmise directement Ã  lâ€™Ã©quipe Kemerya.",
    },
    conversion: {
      eyebrow: "VOTRE PROCHAIN PARTENAIRE EN Ã‰GYPTE ?",
      title: ["PARLONS DE VOTRE OFFRE EN Ã‰GYPTE.", "VOTRE PARTENARIAT COMMENCE ICI."],
      description:
        "PrÃªt Ã  intÃ©grer lâ€™Ã‰gypte Ã  votre portefeuille de produits ? Nous Ã©laborerons une offre de partenariat sur mesure, adaptÃ©e Ã  votre marque.",
      primary: "DEVENIR PARTENAIRE",
      secondary: "RÃ‰SERVER UN APPEL DE 15 MINUTES",
    },
    footer: {
      blurb:
        "Votre partenaire Ã©gyptien de confiance pour des voyages privÃ©s et des opÃ©rations fiables sur le terrain.",
      navTitle: "Explorer",
      partnerTitle: "Partenariat",
      contactTitle: "Contact",
      policy: "Politique de ConfidentialitÃ©",
      terms: "Conditions d'Utilisation",
      developer: "ConÃ§u et dÃ©veloppÃ© par Omar Elshemy",
      business: {
        headline:
          "Votre partenaire Ã©gyptien de confiance pour des voyages privÃ©s.",
        address: "250, rue Aboul Houl, Haram, Gizeh, Ã‰gypte",
      },
    },
  },
  it: {
    meta: {
      title: "Partnership B2B in Egitto | Kemerya Tours",
      description:
        "Partner egiziano affidabile per le aziende di viaggi internazionali. Tour privati, operazioni in loco affidabili, e esperienze in Egitto con marchio bianco.",
    },
    nav: {
      capabilities: "CapacitÃ ",
      categories: "Categorie",
      whyPartner: "PerchÃ© Partner",
      aboutUs: "Chi siamo",
      whoWeWorkWith: "Con Chi Lavoriamo",
      contact: "CONTATTI",
            workWithUs: "Collabora con noi",
      faq: "FAQ",
    },
    hero: {
      eyebrow: "IL TUO PARTNER IN EGITTO",
      title: [
        "IL TUO PARTNER EGIZIANO DI FIDUCIA.",
        "LA TUA COMPETENZA SULL'EGITTO. LA NOSTRA OPERATIVITÃ€ LOCALE.",
        "VIAGGI PRIVATI. UNA COLLABORAZIONE SENZA INTOPPI.",
        "CREIAMO INSIEME PRODOTTI TURISTICI PER L'EGITTO.",
      ],
      subtitle:
        "Competenza locale, viaggi privati e operativitÃ  sul territorio senza intoppi per le aziende internazionali del settore turistico.",
      primary: "DIVENTA PARTNER",
      secondary: "INFORMAZIONI PARTNERSHIP",
      note: "10+ anni di attivitÃ  â€¢ 2.000+ viaggiatori â€¢ valutazione 4,9",
    },
    trust: {
      eyebrow: "VALIDATO IN LOCO",
      statement:
        "Operatore locale boutique con risultati comprovati in tutto l'Egitto dal 2016.",
      items: [
        { value: "10+", label: "Anni di AttivitÃ " },
        { value: "2,000+", label: "Viaggiatori accompagnati" },
        { value: "4.9", label: "Valutazione media" },
        { value: "100%", label: "Itinerari Su Misura" },
        { value: "24/7", label: "Supporto in Loco" },
      ],
    },
    whoKemerya: {
      eyebrow: "FONDATA NEL 2016 â€¢ IL CAIRO, EGITTO",
      title: "PIÃ™ DI UN OPERATORE TURISTICO.",
      subtitle: "IL TUO PARTNER LOCALE IN EGITTO.",
      intro: "Kemerya Ã¨ un tour operator boutique specializzato in Egitto, pensato per una nuova era di collaborazione.",
      paragraphs: [
        "Non siamo un operatore di massa. Siamo una rete selezionata di guide esperte di egittologia, artigiani locali e operatori sul territorio che dal 2016 creano viaggi esclusivi e di alta gamma. Ogni itinerario Ã¨ pensato per essere venduto da te, senza intoppi.",
        "Con sede al Cairo e operativi lungo il Nilo, sul Mar Rosso e nel Deserto Occidentale, siamo il tuo team dietro le quinte. Tu gestisci il rapporto con il cliente e i ricavi; noi curiamo ogni dettaglio operativo in Egitto.",
      ],
      cta: "DIVENTA PARTNER",
    },
    clientTypes: {
      eyebrow: "CON CHI LAVORIAMO",
      title: "AZIENDE INTERNAZIONALI DEL SETTORE TURISTICO CON CUI COLLABORIAMO.",
      intro:
        "Dalle agenzie di viaggi di lusso alle societÃ  di gestione delle destinazioni, mettiamo a disposizione la competenza sull'Egitto necessaria per proporre con sicurezza viaggi di alta gamma ai tuoi clienti.",
    },
    whyPartner: {
      eyebrow: "PERCHÃ‰ I PARTNER SCELGONO KEMERYA",
      title: "LA DIFFERENZA KEMERYA",
      intro:
        "Non sono solo i nostri punti di forza: sono anche i tuoi vantaggi competitivi sul mercato.",
    },
    advantages: {
      eyebrow: "IL VANTAGGIO KEMERYA",
      title: "TU VENDI. NOI OPERIAMO.",
      intro:
        "Il tuo ruolo Ã¨ vendere e seguire i clienti. Il nostro Ã¨ garantire un'esecuzione impeccabile in Egitto, dai permessi alle guide, fino ai trasferimenti senza intoppi.",
    },
    capabilities: {
      eyebrow: "COSA POSSIAMO OFFRIRE",
      title: "GESTIONE COMPLETA DEI VIAGGI IN EGITTO",
      intro:
        "Dalla progettazione iniziale alla gestione sul territorio, offriamo l'intera gamma dei servizi turistici in Egitto che i tuoi clienti apprezzeranno.",
    },
    categories: {
      eyebrow: "CATEGORIE COMMERCIALI",
      title: "QUATTRO MODI PER VENDERE L'EGITTO",
      intro:
        "Ogni categoria apre un approccio diverso allo sviluppo del prodotto Egitto: scoperte urbane, itinerari immersivi, soste costiere e viaggi fluviali lenti.",
      cta: "Esplora",
    },
    journeys: {
      eyebrow: "MODELLI DI VIAGGIO DISTINTIVI",
      title: "QUATTRO ARCHETIPI DI VIAGGIO.",
      intro:
        "Questi modelli riflettono le richieste piÃ¹ frequenti dei partner internazionali: atmosfera, riservatezza e un profondo legame con la cultura locale.",
      cta: "VEDI TUTTI I VIAGGI",
    },
    partnership: {
      eyebrow: "COME FUNZIONA",
      title: "UNA PARTNERSHIP SEMPLICE IN 5 PASSI",
      intro: "Iniziare Ã¨ semplice. Ecco come lavoriamo insieme.",
    },
    contact: {
      eyebrow: "RICHIESTA DI PARTNERSHIP",
      title: "VUOI DIVENTARE PARTNER?",
      subtitle: "PARLIAMO DEL VOSTRO PRODOTTO EGITTO.",
      fields: {
        name: "Nome Completo",
        email: "Email Aziendale",
        company: "Azienda",
        role: "Ruolo",
        phone: "Telefono",
        message:
          "Come possiamo aiutarti? Parlaci del prodotto turistico che immagini per l'Egitto e del tuo mercato di riferimento.",
      },
      submit: "INVIA RICHIESTA DI PARTNERSHIP",
      note: "La tua richiesta viene inviata direttamente al team Kemerya.",
    },
    conversion: {
      eyebrow: "IL TUO PROSSIMO PARTNER IN EGITTO?",
      title: ["PARLIAMO DELL'EGITTO.", "LA TUA COLLABORAZIONE INIZIA QUI."],
      description:
        "Vuoi aggiungere l'Egitto al tuo portafoglio prodotti? Creeremo un pacchetto di collaborazione su misura per il tuo brand.",
      primary: "DIVENTA PARTNER",
      secondary: "PRENOTA UNA CHIAMATA DI 15 MINUTI",
    },
    footer: {
      blurb:
        "Il tuo partner egiziano di fiducia per viaggi privati e un'operativitÃ  affidabile sul territorio.",
      navTitle: "Esplora",
      partnerTitle: "Partnership",
      contactTitle: "Contatti",
      policy: "Politica sulla Privacy",
      terms: "Termini di Servizio",
      developer: "Progettato e sviluppato da Omar Elshemy",
      business: {
        headline: "Il tuo partner egiziano affidabile per viaggi privati.",
        address: "Via Aboul Houl 250, Haram, Giza, Egitto",
      },
    },
  },
  es: {
    meta: {
      title: "Partnership B2B en Egipto | Kemerya Tours",
      description:
        "Socio egipcio de confianza para empresas internacionales del sector turÃ­stico. Viajes privados, operaciones locales fiables y experiencias en Egipto para sus clientes.",
    },
    nav: {
      capabilities: "ServiÃ§os",
      categories: "CategorÃ­as",
      whyPartner: "Por QuÃ© Asociarse",
      aboutUs: "Acerca de",
      whoWeWorkWith: "Con QuiÃ©nes Trabajamos",
      contact: "CONTACTO",
            workWithUs: "Colabora con nosotros",
      faq: "Preguntas frecuentes",
    },
    hero: {
      eyebrow: "TU SOCIO EN EGIPTO",
      title: [
        "TU SOCIO EGIPCIO DE CONFIANZA.",
        "TU CONOCIMIENTO DE EGIPTO. NUESTRA OPERATIVA LOCAL.",
        "VIAJES PRIVADOS. COLABORACIÃ“N FLUIDA.",
        "CREEMOS JUNTOS PRODUCTOS TURÃSTICOS PARA EGIPTO.",
      ],
      subtitle:
        "Conocimiento local, viajes privados y operaciones sobre el terreno sin contratiempos para empresas internacionales del sector turÃ­stico.",
      primary: "CONVERTIRSE EN SOCIO",
      secondary: "INFORMACIÃ“N DE ASOCIACIÃ“N",
      note: "10+ aÃ±os de actividad â€¢ 2.000+ viajeros â€¢ valoraciÃ³n 4,9",
    },
    trust: {
      eyebrow: "VALIDADO EN TIERRA",
      statement:
        "Operador local boutique con resultados contrastados en todo Egipto desde 2016.",
      items: [
        { value: "10+", label: "AÃ±os Operando" },
        { value: "2,000+", label: "Viajeros Atendidos" },
        { value: "4.9", label: "CalificaciÃ³n Promedio" },
        { value: "100%", label: "Itinerarios Personalizados" },
        { value: "24/7", label: "Soporte en Tierra" },
      ],
    },
    whoKemerya: {
      eyebrow: "FUNDADO EN 2016 â€¢ EL CAIRO, EGIPTO",
      title: "MÃS QUE UN OPERADOR TURÃSTICO.",
      subtitle: "TU SOCIO LOCAL EN EGIPTO.",
      intro: "Kemerya es un operador turÃ­stico boutique especializado en Egipto, creado para una nueva era de colaboraciÃ³n.",
      paragraphs: [
        "No somos un operador masivo. Somos una red seleccionada de guÃ­as expertos en egiptologÃ­a, artesanos locales y operadores sobre el terreno que crean viajes exclusivos y de alta gama desde 2016. Cada itinerario estÃ¡ pensado para que tÃº lo vendas sin complicaciones.",
        "Con sede en El Cairo y operaciones en el Nilo, el mar Rojo y el Desierto Occidental, somos tu equipo entre bastidores. TÃº mantienes la relaciÃ³n con el cliente y los ingresos; nosotros nos ocupamos de cada detalle operativo en Egipto.",
      ],
      cta: "CONVERTIRSE EN SOCIO",
    },
    clientTypes: {
      eyebrow: "CON QUIÃ‰NES TRABAJAMOS",
      title: "EMPRESAS INTERNACIONALES DEL SECTOR TURÃSTICO CON LAS QUE COLABORAMOS.",
      intro:
        "Desde agencias de viajes de lujo hasta empresas de gestiÃ³n de destinos, ponemos a tu disposiciÃ³n el conocimiento de Egipto que necesitas para ofrecer con confianza viajes de alta gama a tus clientes.",
    },
    whyPartner: {
      eyebrow: "POR QUÃ‰ LOS SOCIOS ELIGEN KEMERYA",
      title: "LA DIFERENCIA KEMERYA",
      intro:
        "No son solo nuestros puntos fuertes: tambiÃ©n son ventajas competitivas para ti en el mercado.",
    },
    advantages: {
      eyebrow: "LA VENTAJA KEMERYA",
      title: "TÃš VENDES. NOSOTROS OPERAMOS.",
      intro:
        "Tu papel consiste en vender y atender a los clientes. El nuestro, en garantizar una ejecuciÃ³n impecable en Egipto, desde los permisos y las guÃ­as hasta los traslados sin contratiempos.",
    },
    capabilities: {
      eyebrow: "LO QUE PODEMOS OFRECER",
      title: "GESTIÃ“N INTEGRAL DE VIAJES EN EGIPTO",
      intro:
        "Desde la idea inicial hasta la ejecuciÃ³n sobre el terreno, ofrecemos toda la gama de servicios turÃ­sticos en Egipto que tus clientes apreciarÃ¡n.",
    },
    categories: {
      eyebrow: "CATEGORÃAS COMERCIALES",
      title: "CUATRO FORMAS DE VENDER EGIPTO",
      intro:
        "Cada categorÃ­a abre un enfoque diferente para el desarrollo de productos de Egipto: descubrimientos urbanos, itinerarios inmersivos, escapadas costeras y viajes fluviales lentos.",
      cta: "Explorar",
    },
    journeys: {
      eyebrow: "MODELOS DE VIAJES DESTACADOS",
      title: "CUATRO ARQUETIPOS DE VIAJE.",
      intro:
        "Estos modelos reflejan lo que los socios internacionales solicitan con mayor frecuencia: atmÃ³sfera, privacidad y conexiÃ³n cultural profunda.",
      cta: "VER TODOS LOS VIAJES",
    },
    partnership: {
      eyebrow: "CÃ“MO FUNCIONA",
      title: "UNA COLABORACIÃ“N SENCILLA EN 5 PASOS",
      intro: "Empezar es sencillo. AquÃ­ te mostramos cÃ³mo trabajamos juntos.",
    },
    contact: {
      eyebrow: "SOLICITUD DE COLABORACIÃ“N",
      title: "Â¿TE INTERESA COLABORAR?",
      subtitle: "HABLEMOS DE TU PRODUCTO TURÃSTICO PARA EGIPTO.",
      fields: {
        name: "Nombre Completo",
        email: "Correo ElectrÃ³nico Profesional",
        company: "Empresa",
        role: "Cargo",
        phone: "TelÃ©fono",
        message:
          "Â¿CÃ³mo podemos ayudarte? CuÃ©ntanos quÃ© producto turÃ­stico te gustarÃ­a ofrecer en Egipto y cuÃ¡l es tu mercado objetivo.",
      },
      submit: "ENVIAR SOLICITUD DE COLABORACIÃ“N",
      note: "Tu consulta se envÃ­a directamente al equipo de Kemerya.",
    },
    conversion: {
      eyebrow: "Â¿BUSCAS UN SOCIO EN EGIPTO?",
      title: ["HABLEMOS DE EGIPTO.", "TU COLABORACIÃ“N EMPIEZA AQUÃ."],
      description:
        "Â¿Quieres aÃ±adir Egipto a tu cartera de productos? Crearemos un paquete de colaboraciÃ³n a medida de tu marca.",
      primary: "CONVERTIRSE EN SOCIO",
      secondary: "RESERVA UNA LLAMADA DE 15 MIN",
    },
    footer: {
      blurb:
        "Tu socio egipcio confiable para tours privados y operaciones en tierra confiables.",
      navTitle: "Explorar",
      partnerTitle: "AsociaciÃ³n",
      contactTitle: "Contacto",
      policy: "PolÃ­tica de Privacidad",
      terms: "TÃ©rminos de Servicio",
      developer: "DiseÃ±ado y desarrollado por Omar Elshemy",
      business: {
        headline: "Tu socio egipcio de confianza para viajes privados.",
        address: "Calle Aboul Houl 250, Haram, Guiza, Egipto",
      },
    },
  },
  de: {
    meta: {
      title: "B2B-Partnerschaft Ã„gypten | Kemerya Tours",
      description:
        "VerlÃ¤sslicher Ã¤gyptischer B2B-Partner fÃ¼r internationale Reiseunternehmen. Private Reisen, zuverlÃ¤ssige Vor-Ort-Operationen und maÃŸgeschneiderte Ã„gyptenerlebnisse.",
    },
    nav: {
      capabilities: "Leistungen",
      categories: "Kategorien",
      whyPartner: "Warum Partner",
      aboutUs: "Ãœber uns",
      whoWeWorkWith: "Mit wem wir arbeiten",
      contact: "KONTAKT",
            workWithUs: "Mit uns arbeiten",
      faq: "FAQ",
    },
    hero: {
      eyebrow: "IHR Ã„GYPTEN-PARTNER",
      title: [
        "IHR VERLÃ„SSLICHER PARTNER FÃœR Ã„GYPTEN.",
        "IHRE Ã„GYPTEN-EXPERTISE. UNSERE UMSETZUNG VOR ORT.",
        "PRIVATE REISEN. REIBUNGSLOSE PARTNERSCHAFT.",
        "LASSEN SIE UNS GEMEINSAM Ã„GYPTEN-REISEANGEBOTE ENTWICKELN.",
      ],
      subtitle:
        "Lokale Expertise, individuelle Reisen und zuverlÃ¤ssige AblÃ¤ufe vor Ort fÃ¼r internationale Reiseunternehmen.",
      primary: "WERDEN SIE PARTNER",
      secondary: "PARTNERSCHAFTSINFO",
      note: "10+ Jahre Erfahrung â€¢ 2.000+ Reisende â€¢ 4,9 Bewertung",
    },
    trust: {
      eyebrow: "AUF DEM BODEN BEWÃ„HRT",
      statement:
        "Boutique-Local-Operator mit nachgewiesenen Ergebnissen in Ã„gypten seit 2016.",
      items: [
        { value: "10+", label: "Jahre Erfahrung" },
        { value: "2,000+", label: "Reisende begleitet" },
        { value: "4.9", label: "Durchschnittsbewertung" },
        { value: "100%", label: "MaÃŸgeschneiderte Routen" },
        { value: "24/7", label: "Vor-Ort-Support" },
      ],
    },
    whoKemerya: {
      eyebrow: "GEGRÃœNDET 2016 â€¢ KAIRO, Ã„GYPTEN",
      title: "MEHR ALS EIN REISEVERANSTALTER.",
      subtitle: "IHR LOKALER PARTNER IN Ã„GYPTEN.",
      intro: "Kemerya ist ein spezialisierter Reiseveranstalter in Ã„gypten, der auf die Zusammenarbeit mit Partnern ausgerichtet ist.",
      paragraphs: [
        "Wir sind kein Massenanbieter. Wir sind ein sorgfÃ¤ltig ausgewÃ¤hltes Netzwerk aus Ã„gyptologen, lokalen Handwerkern und Dienstleistern vor Ort, das seit 2016 persÃ¶nliche, hochwertige Reisen gestaltet. Jede Reise entwickeln wir so, dass Sie sie reibungslos verkaufen kÃ¶nnen.",
        "Mit Sitz in Kairo und AktivitÃ¤ten am Nil, am Roten Meer und in der Westlichen WÃ¼ste sind wir Ihr Team hinter den Kulissen. Sie behalten die Kundenbeziehung und den Umsatz. Wir kÃ¼mmern uns um alle operativen Details vor Ort in Ã„gypten.",
      ],
      cta: "WERDEN SIE PARTNER",
    },
    clientTypes: {
      eyebrow: "MIT WEN WIR ARBEITEN",
      title: "INTERNATIONALE REISEUNTERNEHMEN, MIT DENEN WIR ZUSAMMENARBEITEN.",
      intro:
        "Von LuxusreisebÃ¼ros bis zu Destination-Management-Unternehmen bieten wir Ihnen die Ã„gypten-Expertise, die Sie brauchen, um Ihren Kunden hochwertige Reisen Ã¼berzeugend anzubieten.",
    },
    whyPartner: {
      eyebrow: "WARUM PARTNER KEMERYA WÃ„HLEN",
      title: "DAS MACHT KEMERYA AUS",
      intro:
        "Das sind nicht nur unsere StÃ¤rken â€“ das sind Ihre Wettbewerbsvorteile auf dem Markt.",
    },
    advantages: {
      eyebrow: "DER KEMERYA-VORTEIL",
      title: "SIE VERKAUFEN. WIR OPERIEREN.",
      intro:
        "Sie kÃ¼mmern sich um Vertrieb und Kundenbeziehung. Wir sorgen fÃ¼r die reibungslose Umsetzung vor Ort in Ã„gypten â€“ von Genehmigungen Ã¼ber lokale Reiseleiter bis hin zu nahtlosen AblÃ¤ufen.",
    },
    capabilities: {
      eyebrow: "WAS WIR BIETEN",
      title: "KOMPLETTE REISEORGANISATION IN Ã„GYPTEN",
      intro:
        "Von der ersten Idee bis zur Umsetzung vor Ort bieten wir das komplette Spektrum an Ã„gypten-Reisedienstleistungen, die Ihre Kunden lieben werden.",
    },
    categories: {
      eyebrow: "ANGEBOTSKATEGORIEN",
      title: "VIER WEGE, Ã„GYPTEN ZU VERKAUFEN",
      intro:
        "Jede Kategorie erÃ¶ffnet einen anderen Ansatz fÃ¼r Ã„gypten-Reiseangebote: urbane Entdeckungen, intensive Rundreisen, Auszeiten an der KÃ¼ste und entschleunigte Flussreisen.",
      cta: "Entdecken",
    },
    journeys: {
      eyebrow: "MARKANTE REISEMODELLE",
      title: "VIER REISEARCHETYPEN.",
      intro:
        "Diese Modelle spiegeln wider, was internationale Partner am hÃ¤ufigsten verlangen: AtmosphÃ¤re, PrivatsphÃ¤re und tiefe kulturelle Verbindung.",
      cta: "ALLE REISEN ANSEHEN",
    },
    partnership: {
      eyebrow: "WIE ES FUNKTIONIERT",
      title: "EINE PARTNERSCHAFT IN 5 EINFACHEN SCHRITTEN",
      intro: "Der Start ist einfach. So arbeiten wir zusammen.",
    },
    contact: {
      eyebrow: "PARTNERSCHAFTSANFRAGE",
      title: "BEREIT FÃœR EINE PARTNERSCHAFT?",
      subtitle: "LASSEN SIE UNS ÃœBER IHR Ã„GYPTEN-PRODUKT REDEN.",
      fields: {
        name: "VollstÃ¤ndiger Name",
        email: "GeschÃ¤fts-E-Mail",
        company: "Unternehmen",
        role: "Rolle",
        phone: "Telefon",
        message:
          "Wie kÃ¶nnen wir helfen? ErzÃ¤hlen Sie uns von Ihrem idealen Reiseangebot fÃ¼r Ã„gypten und Ihrem Zielmarkt.",
      },
      submit: "PARTNERSCHAFTSANFRAGE SENDEN",
      note: "Ihre Anfrage wird direkt an das Kemerya-Team weitergeleitet.",
    },
    conversion: {
      eyebrow: "IHR NÃ„CHSTER PARTNER FÃœR Ã„GYPTEN?",
      title: ["LASSEN SIE UNS ÃœBER Ã„GYPTEN SPRECHEN.", "IHRE PARTNERSCHAFT BEGINNT HIER."],
      description:
        "Bereit, Ã„gypten zu Ihrem Produktportfolio hinzuzufÃ¼gen? Wir erstellen ein maÃŸgeschneidertes Partnerschaftspaket fÃ¼r Ihre Marke.",
      primary: "WERDEN SIE PARTNER",
      secondary: "15-MINÃœTIGES GESPRÃ„CH BUCHEN",
    },
    footer: {
      blurb:
        "Ihr verlÃ¤sslicher Ã¤gyptischer Partner fÃ¼r private Reisen und zuverlÃ¤ssige AblÃ¤ufe vor Ort.",
      navTitle: "Erkunden",
      partnerTitle: "Partnerschaft",
      contactTitle: "Kontakt",
      policy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      developer: "Entworfen und entwickelt von Omar Elshemy",
      business: {
        headline: "Ihr verlÃ¤sslicher Ã¤gyptischer Partner fÃ¼r private Reisen.",
        address: "Aboul Houl StraÃŸe 250, Haram, Gizeh, Ã„gypten",
      },
    },
  },
  pt: {
    meta: {
      title: "Parceria B2B no Egito | Kemerya Tours",
      description:
        "Parceiro egÃ­pcio confiÃ¡vel para empresas de viagens internacionais. Viagens privadas, operaÃ§Ãµes locais confiÃ¡veis e experiÃªncias no Egito para seus clientes.",
    },
    nav: {
      capabilities: "Capacidades",
      categories: "Categorias",
      whyPartner: "Por que ser parceiro",
      aboutUs: "Sobre nÃ³s",
      whoWeWorkWith: "Com quem trabalhamos",
      contact: "CONTATO",
            workWithUs: "Trabalhe conosco",
      faq: "Perguntas frequentes",
    },
    hero: {
      eyebrow: "SEU PARCEIRO NO EGITO",
      title: [
        "SEU PARCEIRO EGÃPCIO DE CONFIANÃ‡A.",
        "SUA EXPERTISE NO EGITO. NOSSAS OPERAÃ‡Ã•ES LOCAIS.",
        "VIAGENS PRIVADAS. PARCERIA SEM ATRITOS.",
        "VAMOS DESENVOLVER JUNTOS PRODUTOS TURÃSTICOS PARA O EGITO.",
      ],
      subtitle:
        "Conhecimento local, viagens privadas e operaÃ§Ãµes confiÃ¡veis no destino para empresas internacionais de viagens.",
      primary: "TORNE-SE PARCEIRO",
      secondary: "INFORMAÃ‡Ã•ES DA PARCERIA",
      note: "10+ anos â€¢ 2.000+ viajantes â€¢ avaliaÃ§Ã£o 4,9",
    },
    trust: {
      eyebrow: "EXPERIÃŠNCIA COMPROVADA NO EGITO",
      statement:
        "Operadora local especializada, com resultados comprovados em todo o Egito desde 2016.",
      items: [
        { value: "10+", label: "Anos de operaÃ§Ã£o" },
        { value: "2,000+", label: "Viajantes atendidos" },
        { value: "4.9", label: "AvaliaÃ§Ã£o mÃ©dia" },
        { value: "100%", label: "Roteiros personalizados" },
        { value: "24/7", label: "AssistÃªncia no destino" },
      ],
    },
    whoKemerya: {
      eyebrow: "FUNDADO EM 2016 â€¢ CAIRO, EGITO",
      title: "MAIS DO QUE UM OPERADOR TURÃSTICO.",
      subtitle: "SEU PARCEIRO LOCAL NO EGITO.",
      intro: "A Kemerya Ã© uma operadora de turismo especializada no Egito, criada para uma nova era de parcerias.",
      paragraphs: [
        "NÃ£o somos uma operadora de massa. Somos uma rede cuidadosamente selecionada de egiptÃ³logos, artesÃ£os locais e equipes de operaÃ§Ã£o em campo que criam viagens personalizadas e de alto padrÃ£o desde 2016. Cada roteiro Ã© pensado para que vocÃª possa vendÃª-lo sem complicaÃ§Ãµes.",
        "Com sede no Cairo e operaÃ§Ãµes no Nilo, no Mar Vermelho e no Deserto Ocidental, atuamos nos bastidores como sua equipe local. VocÃª mantÃ©m o relacionamento com o cliente e fica com a receita. NÃ³s cuidamos de todos os detalhes operacionais no Egito.",
      ],
      cta: "TORNE-SE PARCEIRO",
    },
    clientTypes: {
      eyebrow: "COM QUEM TRABALHAMOS",
      title: "EMPRESAS INTERNACIONAIS DE TURISMO COM AS QUAIS TRABALHAMOS.",
      intro:
        "De agÃªncias de viagens de luxo a empresas de gestÃ£o de destinos, oferecemos o conhecimento especializado sobre o Egito de que vocÃª precisa para apresentar viagens de alto padrÃ£o aos seus clientes com confianÃ§a.",
    },
    whyPartner: {
      eyebrow: "POR QUE OS PARCEIROS ESCOLHEM KEMERYA",
      title: "A DIFERENÃ‡A KEMERYA",
      intro:
        "Estes nÃ£o sÃ£o apenas os nossos pontos fortes: sÃ£o tambÃ©m vantagens competitivas para si no mercado.",
    },
    advantages: {
      eyebrow: "A VANTAGEM KEMERYA",
      title: "VOCÃŠ VENDE. NÃ“S OPERAMOS.",
      intro:
        "O seu papel Ã© cuidar das vendas e da relaÃ§Ã£o com o cliente. O nosso Ã© garantir uma execuÃ§Ã£o impecÃ¡vel no Egito, das autorizaÃ§Ãµes aos guias e aos deslocamentos sem contratempos.",
    },
    capabilities: {
      eyebrow: "O QUE PODEMOS ENTREGAR",
      title: "OPERAÃ‡Ã•ES NO EGITO DE PONTA A PONTA",
      intro:
        "Da conceÃ§Ã£o inicial Ã  operaÃ§Ã£o no destino, oferecemos a gama completa de serviÃ§os turÃ­sticos no Egito que os seus clientes vÃ£o apreciar.",
    },
    categories: {
      eyebrow: "CATEGORIAS COMERCIAIS",
      title: "QUATRO FORMAS DE VENDER O EGITO",
      intro:
        "Cada categoria oferece uma abordagem diferente para desenvolver produtos turÃ­sticos no Egito: experiÃªncias urbanas, itinerÃ¡rios imersivos, estadias no litoral e viagens fluviais num ritmo tranquilo.",
      cta: "Explorar",
    },
    journeys: {
      eyebrow: "MODELOS DE VIAGEM DISTINTIVOS",
      title: "QUATRO ARQUÃ‰TIPOS DE VIAGEM.",
      intro:
        "Esses modelos refletem o que os parceiros internacionais mais pedem: atmosfera, privacidade e conexÃ£o cultural profunda.",
      cta: "VER TODOS OS ROTEIROS",
    },
    partnership: {
      eyebrow: "COMO FUNCIONA",
            title: "UMA PARCERIA SIMPLES EM 4 ETAPAS",
      intro: "ComeÃ§ar Ã© simples. Veja como trabalhamos juntos.",
    },
    contact: {
      eyebrow: "CONSULTA DE PARCERIA",
      title: "PRONTO PARA UMA PARCERIA?",
      subtitle: "VAMOS FALAR SOBRE SEU PRODUTO TURÃSTICO PARA O EGITO.",
      fields: {
        name: "Nome completo",
        email: "E-mail corporativo",
        company: "Empresa",
        role: "Cargo",
        phone: "Telefone",
        message:
          "Como podemos ajudar? Conte-nos qual produto turÃ­stico pretende oferecer no Egito e qual Ã© o seu mercado-alvo.",
      },
      submit: "ENVIAR CONSULTA DE PARCERIA",
      note: "Sua consulta Ã© enviada diretamente Ã  equipe Kemerya.",
    },
    conversion: {
      eyebrow: "SEU PRÃ“XIMO PARCEIRO NO EGITO?",
      title: ["VAMOS FALAR SOBRE O EGITO.", "SUA PARCERIA COMEÃ‡A AQUI."],
      description:
        "Pronto para adicionar o Egito ao seu portfÃ³lio? Vamos criar um pacote personalizado para sua marca.",
      primary: "TORNE-SE PARCEIRO",
      secondary: "AGENDAR UMA CHAMADA DE 15 MIN",
    },
    footer: {
      blurb:
        "Seu parceiro egÃ­pcio de confianÃ§a para viagens privadas e operaÃ§Ãµes confiÃ¡veis no Egito.",
      navTitle: "Explorar",
      partnerTitle: "Parceria",
      contactTitle: "Contato",
      policy: "PolÃ­tica de Privacidade",
      terms: "Termos de ServiÃ§o",
      developer: "Desenhado e desenvolvido por Omar Elshemy",
      business: {
        headline: "Seu parceiro egÃ­pcio confiÃ¡vel para viagens privadas.",
        address: "Rua Aboul Houl 250, Haram, GizÃ©, Egito",
      },
    },
  },
  nl: {
    meta: {
      title: "B2B-partnerschap Egypte | Kemerya Tours",
      description:
        "Vertrouwde Egyptische B2B-partner voor internationale reisbedrijven. PrivÃ©reizen, betrouwbare operaties ter plaatse en premium Egyptische ervaringen.",
    },
    nav: {
      capabilities: "Mogelijkheden",
      categories: "CategorieÃ«n",
      whyPartner: "Waarom partner",
      aboutUs: "Over ons",
      whoWeWorkWith: "Met wie werken we samen",
      contact: "CONTACT",
            workWithUs: "Werk met ons",
      faq: "Veelgestelde vragen",
    },
    hero: {
      eyebrow: "UW EGYPTE-PARTNER",
      title: [
        "UW VERTROUWDE EGYPTE-PARTNER.",
        "UW EXPERTISE IN EGYPTE. ONZE LOKALE OPERATIES.",
        "PRIVÃ‰REIZEN. NAADLOZE SAMENWERKING.",
        "LATEN WE SAMEN REISPRODUCTEN VOOR EGYPTE ONTWIKKELEN.",
      ],
      subtitle:
        "Lokale expertise, privÃ©reizen en naadloze operaties voor internationale reisbedrijven.",
      primary: "WORD PARTNER",
      secondary: "PARTNERSCHAPSINFO",
      note: "10+ jaar ervaring â€¢ 2.000+ reizigers â€¢ beoordeling 4,9",
    },
    trust: {
      eyebrow: "BEWEZEN IN DE PRAKTIJK",
      statement:
        "Kleinschalige lokale touroperator met aantoonbare resultaten in Egypte sinds 2016.",
      items: [
        { value: "10+", label: "Jaar ervaring" },
        { value: "2,000+", label: "Reizigers begeleid" },
        { value: "4.9", label: "Gemiddelde beoordeling" },
        { value: "100%", label: "Op maat gemaakte routes" },
        { value: "24/7", label: "Lokale ondersteuning" },
      ],
    },
    whoKemerya: {
      eyebrow: "OPGERICHT IN 2016 â€¢ CAÃRO, EGYPTE",
      title: "MEER DAN EEN TOUROPERATOR.",
      subtitle: "UW LOKALE PARTNER IN EGYPTE.",
      intro: "Kemerya is een kleinschalige touroperator in Egypte, klaar voor een nieuw tijdperk van samenwerking.",
      paragraphs: [
        "We zijn geen touroperator voor massatoerisme. We zijn een zorgvuldig samengesteld netwerk van Egyptologen, lokale ambachtslieden en lokale uitvoerders dat sinds 2016 kleinschalige reizen in het hogere segment samenstelt. Elke reis die we maken, is zo ontworpen dat u die eenvoudig aan uw klanten kunt verkopen.",
        "Vanuit CaÃ¯ro, met activiteiten langs de Nijl, aan de Rode Zee en in de Westelijke Woestijn, zijn we uw team achter de schermen. De klantrelatie en inkomsten zijn van u. Wij verzorgen ter plaatse alle operationele details in Egypte.",
      ],
      cta: "WORD PARTNER",
    },
    clientTypes: {
      eyebrow: "MET WIE WERKEN WE SAMEN",
      title: "INTERNATIONALE REISBEDRIJVEN WAARMEE WE SAMENWERKEN.",
      intro:
        "Van luxe reisbureaus tot bedrijven voor bestemmingsmanagement bieden wij de Egyptische expertise die u nodig hebt om uw klanten met vertrouwen hoogwaardige reizen aan te bieden.",
    },
    whyPartner: {
      eyebrow: "WAAROM PARTNERS KEMERYA KIEZEN",
      title: "HET KEMERYA-VERSCHIL",
      intro:
        "Dit zijn niet alleen onze sterktes â€” het zijn uw concurrentievoordelen op de markt.",
    },
    advantages: {
      eyebrow: "HET KEMERYA-VOORDEEL",
      title: "U VERKOOPT. WIJ OPEREREN.",
      intro:
        "Uw rol ligt bij verkoop en klantcontact. Wij zorgen voor een vlekkeloze uitvoering in Egypte, van vergunningen en gidsen tot soepele overgangen.",
    },
    capabilities: {
      eyebrow: "WAT WIJ KUNNEN LEVEREN",
      title: "VOLLEDIGE REISOPERATIES IN EGYPTE",
      intro:
        "Van het eerste concept tot uitvoering ter plaatse leveren wij het volledige spectrum aan Egyptische reisdiensten dat uw klanten zullen waarderen.",
    },
    categories: {
      eyebrow: "COMMERCIÃ‹LE CATEGORIEÃ‹N",
      title: "VIER MANIEREN OM EGYPTE TE VERKOPEN",
      intro:
        "Elke categorie biedt een andere benadering van productontwikkeling voor Egypte: stedelijke ontdekkingen, meeslepende reizen, kustuitstapjes en ontspannen riviercruises.",
      cta: "Verkennen",
    },
    journeys: {
      eyebrow: "PROMINENTE REISMODELLEN",
      title: "VIER REISARCHETYPEN.",
      intro:
        "Deze modellen weerspiegelen waar internationale partners het vaakst om vragen: sfeer, privacy en een diepgaande culturele beleving.",
      cta: "ALLE REIZEN BEKIJKEN",
    },
    partnership: {
      eyebrow: "HOE HET WERKT",
      title: "EEN EENVOUDIGE 5-STAPPEN PARTNERSCHAP",
      intro: "Beginnen is eenvoudig. Zo werken we samen.",
    },
    contact: {
      eyebrow: "PARTNERSCHAPAANVRAAG",
      title: "KLAAR OM PARTNER TE WORDEN?",
      subtitle: "Laten we uw Egyptische product bespreken.",
      fields: {
        name: "Volledige naam",
        email: "Zakelijk e-mailadres",
        company: "Bedrijf",
        role: "Rol",
        phone: "Telefoon",
        message:
          "Hoe kunnen we helpen? Vertel ons over uw ideale Egyptische product en doelgroep.",
      },
      submit: "VERSTUUR UW PARTNERSCHAPAANVRAAG",
      note: "Je verzoek wordt direct naar het Kemerya-team gestuurd.",
    },
    conversion: {
      eyebrow: "UW VOLGENDE EGYPTE-PARTNER?",
      title: ["Laten we over Egypte praten.", "Uw partnerschap begint hier."],
      description:
        "Klaar om Egypte toe te voegen aan uw productportfolio? Wij maken een op maat gemaakt partnerschapspakket voor uw merk.",
      primary: "WORD PARTNER",
      secondary: "BOEK EEN 15-MINUTEN GESPREK",
    },
    footer: {
      blurb:
        "Uw vertrouwde Egyptische partner voor privÃ©reizen en betrouwbare uitvoering ter plaatse.",
      navTitle: "Verkennen",
      partnerTitle: "Partnerschap",
      contactTitle: "Contact",
      policy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      developer: "Ontworpen en ontwikkeld door Omar Elshemy",
      business: {
        headline: "Uw vertrouwde Egyptische partner voor privÃ©reizen.",
        address: "Aboul Houlstraat 250, Haram, Gizeh, Egypte",
      },
    },
  },
  zh: {
    meta: {
      title: "åŸƒåŠ B2B åˆä½œ | Kemerya Tours",
      description:
        "å›½é™…æ—…è¡Œä¼ä¸šçš„å¯é åŸƒåŠ B2B åˆä½œä¼™ä¼´ã€‚ç§äººå®šåˆ¶æ—…ç¨‹ã€ç¨³å®šçš„åœ°é¢è¿è¥åŠé«˜ç«¯åŸƒåŠä½“éªŒã€‚",
    },
    nav: {
      capabilities: "èƒ½åŠ›",
      categories: "ç±»åˆ«",
      whyPartner: "ä¸ºä½•åˆä½œ",
      aboutUs: "å…³äºŽæˆ‘ä»¬",
      whoWeWorkWith: "åˆä½œå¯¹è±¡",
      contact: "è”ç³»",
            workWithUs: "ä¸Žæˆ‘ä»¬åˆä½œ",
      faq: "å¸¸è§é—®é¢˜",
    },
    hero: {
      eyebrow: "æ‚¨çš„åŸƒåŠåˆä½œä¼™ä¼´",
      title: [
        "æ‚¨å€¼å¾—ä¿¡èµ–çš„åŸƒåŠåˆä½œä¼™ä¼´ã€‚",
        "æ‚¨çš„åŸƒåŠä¸“ä¸šçŸ¥è¯†ã€‚æˆ‘ä»¬çš„æœ¬åœ°è¿è¥èƒ½åŠ›ã€‚",
        "ç§äººæ—…è¡Œã€‚æ— ç¼åˆä½œã€‚",
        "è®©æˆ‘ä»¬å…±åŒæ‰“é€ åŸƒåŠäº§å“ã€‚",
      ],
      subtitle:
        "æœ¬åœ°ä¸“ä¸šçŸ¥è¯†ã€ç§äººæ—…è¡Œä»¥åŠå›½é™…æ—…è¡Œä¼ä¸šæ‰€éœ€çš„é«˜æ•ˆåœ°é¢è¿è¥æ”¯æŒã€‚",
      primary: "æˆä¸ºåˆä½œä¼™ä¼´",
      secondary: "åˆä½œä¿¡æ¯",
      note: "10+ å¹´è¿è¥ â€¢ 2,000+ ä½æ—…å®¢ â€¢ 4.9 è¯„åˆ†",
    },
    trust: {
      eyebrow: "å®žåœ°è¿è¥å®žåŠ›",
      statement:
        "ä»Ž 2016 å¹´èµ·ï¼Œä½œä¸ºç²¾å“æœ¬åœ°è¿è¥å•†ï¼Œæˆ‘ä»¬åœ¨åŸƒåŠå–å¾—äº†æŒç»­ä¸”å¯éªŒè¯çš„æˆæžœã€‚",
      items: [
        { value: "10+", label: "è¿è¥å¹´é™" },
        { value: "2,000+", label: "æ—…å®¢æŽ¥å¾…é‡" },
        { value: "4.9", label: "å¹³å‡è¯„åˆ†" },
        { value: "100%", label: "å®šåˆ¶è·¯çº¿" },
        { value: "24/7", label: "åœ°é¢æ”¯æŒ" },
      ],
    },
    whoKemerya: {
      eyebrow: "æˆç«‹äºŽ 2016 â€¢ å¼€ç½—ï¼ŒåŸƒåŠ",
      title: "ä¸åªæ˜¯æ—…è¡Œè¿è¥å•†ã€‚",
      subtitle: "æ‚¨åœ¨åŸƒåŠçš„æœ¬åœ°åˆä½œä¼™ä¼´ã€‚",
      intro: "Kemerya æ˜¯ä¸€å®¶ç²¾å“åŸƒåŠæ—…æ¸¸è¿è¥å•†ï¼Œè‡´åŠ›äºŽä»¥åˆä½œä¼™ä¼´æ¨¡å¼å¼€å±•ä¸šåŠ¡ã€‚",
      paragraphs: [
        "æˆ‘ä»¬ä¸æ˜¯é¢å‘å¤§ä¼—å¸‚åœºçš„æ—…æ¸¸è¿è¥å•†ï¼Œè€Œæ˜¯ç”±åŸƒåŠå­¦ä¸“å®¶å¯¼æ¸¸ã€æœ¬åœ°å·¥åŒ å’Œå½“åœ°æ‰§è¡Œå›¢é˜Ÿç»„æˆçš„ç²¾é€‰ç½‘ç»œï¼Œè‡ª 2016 å¹´èµ·ä¸ºæ—…å®¢æ‰“é€ ç§å¯†ã€é«˜å“è´¨çš„æ—…ç¨‹ã€‚æˆ‘ä»¬è®¾è®¡çš„æ¯æ¡è¡Œç¨‹ï¼Œéƒ½ä¾¿äºŽæ‚¨å‘å®¢æˆ·é”€å”®ã€‚",
        "æˆ‘ä»¬æ€»éƒ¨ä½äºŽå¼€ç½—ï¼Œä¸šåŠ¡è¦†ç›–å°¼ç½—æ²³æ²¿å²¸ã€çº¢æµ·åœ°åŒºå’Œè¥¿éƒ¨æ²™æ¼ ï¼Œæ˜¯æ‚¨å¯é çš„å¹•åŽè¿è¥å›¢é˜Ÿã€‚å®¢æˆ·å…³ç³»å’Œæ”¶ç›Šç”±æ‚¨æŽŒæ¡ï¼Œæˆ‘ä»¬è´Ÿè´£åŸƒåŠå½“åœ°çš„æ‰€æœ‰è¿è¥ç»†èŠ‚ã€‚",
      ],
      cta: "æˆä¸ºåˆä½œä¼™ä¼´",
    },
    clientTypes: {
      eyebrow: "æˆ‘ä»¬åˆä½œçš„å¯¹è±¡",
      title: "æˆ‘ä»¬åˆä½œçš„å›½é™…æ—…è¡Œä¼ä¸šã€‚",
      intro:
        "ä»Žå¥¢åŽæ—…è¡Œç¤¾åˆ°ç›®çš„åœ°ç®¡ç†å…¬å¸ï¼Œæˆ‘ä»¬ä¸ºæ‚¨æä¾›æ‰€éœ€çš„åŸƒåŠä¸“ä¸šçŸ¥è¯†ï¼ŒåŠ©æ‚¨è‡ªä¿¡åœ°å‘å®¢æˆ·æŽ¨å‡ºé«˜ç«¯æ—…ç¨‹ã€‚",
    },
    whyPartner: {
      eyebrow: "ä¸ºä»€ä¹ˆåˆä½œä¼™ä¼´é€‰æ‹© Kemerya",
      title: "Kemerya çš„ç‹¬ç‰¹ä¹‹å¤„",
      intro:
        "è¿™äº›ä¸ä»…æ˜¯æˆ‘ä»¬çš„ä¼˜åŠ¿ï¼Œä¹Ÿæ˜¯æ‚¨åœ¨å¸‚åœºä¸­çš„ç«žäº‰ä¼˜åŠ¿ã€‚",
    },
    advantages: {
      eyebrow: "Kemerya çš„ä¼˜åŠ¿",
      title: "æ‚¨é”€å”®ã€‚æˆ‘ä»¬æ‰§è¡Œã€‚",
      intro:
        "æ‚¨è´Ÿè´£é¢å‘å®¢æˆ·çš„é”€å”®ï¼Œæˆ‘ä»¬è´Ÿè´£ç¡®ä¿åŸƒåŠå½“åœ°è¿è¥é¡ºåˆ©æ— è¯¯ï¼ŒåŒ…æ‹¬è®¸å¯åŠžç†ã€å¯¼æ¸¸å®‰æŽ’å’Œå„çŽ¯èŠ‚è¡”æŽ¥ã€‚",
    },
    capabilities: {
      eyebrow: "æˆ‘ä»¬èƒ½æä¾›ä»€ä¹ˆ",
      title: "åŸƒåŠå…¨ç¨‹è¿è¥æœåŠ¡",
      intro:
        "ä»Žåˆæ­¥æž„æƒ³åˆ°å½“åœ°æ‰§è¡Œï¼Œæˆ‘ä»¬æä¾›å®¢æˆ·å–œçˆ±çš„å…¨æ–¹ä½åŸƒåŠæ—…æ¸¸æœåŠ¡ã€‚",
    },
    categories: {
      eyebrow: "å•†ä¸šç±»åˆ«",
      title: "å¼€æ‹“åŸƒåŠæ—…æ¸¸äº§å“çš„å››ç§æ–¹å¼",
      intro:
        "æ¯ä¸ªç±»åˆ«éƒ½å¸¦æ¥ä¸åŒçš„åŸƒåŠäº§å“å¼€å‘æ€è·¯ï¼šåŸŽå¸‚æŽ¢ç´¢ã€æ²‰æµ¸å¼è·¯çº¿ã€æµ·å²¸åº¦å‡å’Œæ…¢æ¸¸å°¼ç½—æ²³ã€‚",
      cta: "æŽ¢ç´¢",
    },
    journeys: {
      eyebrow: "æ ‡å¿—æ€§è·¯çº¿æ¨¡åž‹",
      title: "å››ç§ç»å…¸æ—…ç¨‹ç±»åž‹ã€‚",
      intro:
        "è¿™äº›æ—…ç¨‹ä½“çŽ°äº†å›½é™…åˆä½œä¼™ä¼´æœ€å¸¸æå‡ºçš„éœ€æ±‚ï¼šç‹¬ç‰¹æ°›å›´ã€ç§å¯†ä½“éªŒä¸Žæ·±åº¦æ–‡åŒ–äº¤æµã€‚",
      cta: "æŸ¥çœ‹å…¨éƒ¨çº¿è·¯",
    },
    partnership: {
      eyebrow: "åˆä½œæ–¹å¼",
      title: "ä¸€ä¸ªç®€å•çš„ 5 æ­¥åˆä½œæµç¨‹",
      intro: "åˆä½œæµç¨‹å¾ˆç®€å•ï¼Œä»¥ä¸‹æ˜¯æˆ‘ä»¬çš„åˆä½œæ–¹å¼ã€‚",
    },
    contact: {
      eyebrow: "åˆä½œå’¨è¯¢",
      title: "å‡†å¤‡å¥½åˆä½œäº†å—ï¼Ÿ",
      subtitle: "è®©æˆ‘ä»¬èŠèŠæ‚¨çš„åŸƒåŠäº§å“ã€‚",
      fields: {
        name: "å…¨å",
        email: "å•†åŠ¡é‚®ç®±",
        company: "å…¬å¸",
        role: "èŒä½",
        phone: "ç”µè¯",
        message:
          "æˆ‘ä»¬å¦‚ä½•å¸®åŠ©æ‚¨ï¼Ÿå‘Šè¯‰æˆ‘ä»¬æ‚¨ç†æƒ³çš„åŸƒåŠäº§å“å’Œç›®æ ‡å¸‚åœºã€‚",
      },
      submit: "å‘é€åˆä½œå’¨è¯¢",
      note: "æ‚¨çš„å’¨è¯¢å°†ç›´æŽ¥è½¬å‘ç»™ Kemerya å›¢é˜Ÿã€‚",
    },
    conversion: {
      eyebrow: "æ­£åœ¨å¯»æ‰¾å€¼å¾—ä¿¡èµ–çš„åŸƒåŠåˆä½œä¼™ä¼´ï¼Ÿ",
      title: ["è®©æˆ‘ä»¬è°ˆè°ˆåŸƒåŠã€‚", "åˆä½œä»Žè¿™é‡Œå¼€å§‹ã€‚"],
      description:
        "å‡†å¤‡å¥½æŠŠåŸƒåŠåŠ å…¥æ‚¨çš„äº§å“ç»„åˆäº†å—ï¼Ÿæˆ‘ä»¬å°†ä¸ºæ‚¨çš„å“ç‰Œé‡èº«å®šåˆ¶åˆä½œæ–¹æ¡ˆã€‚",
      primary: "æˆä¸ºåˆä½œä¼™ä¼´",
      secondary: "é¢„çº¦ 15 åˆ†é’Ÿé€šè¯",
    },
    footer: {
      blurb:
        "æ‚¨å€¼å¾—ä¿¡èµ–çš„åŸƒåŠåˆä½œä¼™ä¼´ï¼Œä¸ºæ‚¨æ‰“é€ ç§äººå®šåˆ¶æ—…ç¨‹å¹¶æä¾›å¯é çš„å½“åœ°è¿è¥æœåŠ¡ã€‚",
      navTitle: "æŽ¢ç´¢",
      partnerTitle: "åˆä½œ",
      contactTitle: "è”ç³»",
      policy: "éšç§æ”¿ç­–",
      terms: "æœåŠ¡æ¡æ¬¾",
      developer: "ç”± Omar Elshemy è®¾è®¡ä¸Žå¼€å‘",
      business: {
        headline: "æ‚¨å€¼å¾—ä¿¡èµ–çš„åŸƒåŠç§äººæ—…è¡Œä¼™ä¼´ã€‚",
        address: "é˜¿å¸ƒå°”Â·èƒ¡å°”è¡— 250 å·ï¼Œå“ˆæ‹‰å§†ï¼Œå‰è¨ï¼ŒåŸƒåŠ",
      },
    },
  },
} as const;

export function getLocalePath(locale: Locale, path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalizedPath || "/en";
  }
  return `/${locale}${normalizedPath || ""}`;
}

export type UiTranslations = {
  skipToMainContent: string;
  mainNavigation: string;
  mobileNavigation: string;
  contactKemeryaTours: string;
  becomePartnerKemeryaTours: string;
  visitKemeryaHomepage: string;
  partnerWithKemeryaTours: string;
  bookPartnershipConsultation: string;
  businessProof: string;
  selectLanguage: string;
  languageSelectorMenu: string;
  socialMediaLinks: string;
  legalLinks: string;
  explore: string;
  private: string;
  messageField: string;
  whatsapp: string;
  kemeryaToursHome: string;
  openMainMenu: string;
  closeMainMenu: string;
  heroImageAlt: string;
  localGuideImageAlt: string;
  nileImageAlt: string;
  partnershipInquirySubject: string;
  viewAllFaq: string;
};

export const uiTranslations: Record<Locale, UiTranslations> = {
  en: {
    skipToMainContent: "Skip to main content",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    contactKemeryaTours: "Contact Kemerya Tours",
    becomePartnerKemeryaTours: "Become a partner with Kemerya Tours",
    visitKemeryaHomepage: "Visit the Kemerya homepage",
    partnerWithKemeryaTours: "Partner with Kemerya Tours",
    bookPartnershipConsultation: "Book a partnership consultation call",
    businessProof: "Business proof",
    selectLanguage: "Select language",
    languageSelectorMenu: "Language selector menu",
    socialMediaLinks: "Social media links",
    legalLinks: "Legal links",
    explore: "Explore",
    private: "Private",
    messageField: "Message",
    whatsapp: "WhatsApp",
    kemeryaToursHome: "Kemerya Tours home",
    openMainMenu: "Open main menu",
    closeMainMenu: "Close main menu",
    heroImageAlt: "Private Egypt travel experience near the pyramids",
    localGuideImageAlt: "Local guide sharing insights during an Egypt journey",
    nileImageAlt: "Cinematic view of Egypt and the Nile",
        partnershipInquirySubject: "Partnership Inquiry",
    viewAllFaq: "VIEW ALL FAQ",
  },
  ar: {
    skipToMainContent: "Ø§Ù†ØªÙ‚Ù„ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ",
    mainNavigation: "Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ",
    mobileNavigation: "Ø§Ù„ØªÙ†Ù‚Ù„ Ø¹Ø¨Ø± Ø§Ù„Ù‡Ø§ØªÙ",
    contactKemeryaTours: "ØªÙˆØ§ØµÙ„ Ù…Ø¹ Kemerya Tours",
    becomePartnerKemeryaTours: "Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ø´Ø±ÙƒØ§Ø¡ Kemerya Tours",
    visitKemeryaHomepage: "Ø²ÙŠØ§Ø±Ø© Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© Ù„Ù€ Kemerya Tours",
    partnerWithKemeryaTours: "ÙƒÙ† Ø´Ø±ÙŠÙƒÙ‹Ø§ Ù„Ù€ Kemerya Tours",
    bookPartnershipConsultation: "Ø§Ø­Ø¬Ø² Ù…ÙƒØ§Ù„Ù…Ø© Ù„Ù…Ù†Ø§Ù‚Ø´Ø© Ø§Ù„Ø´Ø±Ø§ÙƒØ©",
    businessProof: "Ù…Ø¤Ø´Ø±Ø§Øª Ù…ÙˆØ«ÙˆÙ‚Ø© Ø¹Ù„Ù‰ Ø®Ø¨Ø±ØªÙ†Ø§",
    selectLanguage: "Ø§Ø®ØªØ± Ø§Ù„Ù„ØºØ©",
    languageSelectorMenu: "Ù‚Ø§Ø¦Ù…Ø© Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù„ØºØ©",
    socialMediaLinks: "Ø±ÙˆØ§Ø¨Ø· Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠ",
    legalLinks: "Ø§Ù„Ø±ÙˆØ§Ø¨Ø· Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©",
    explore: "Ø§ÙƒØªØ´Ù",
    private: "Ø®Ø§Øµ",
    messageField: "Ø§Ù„Ø±Ø³Ø§Ù„Ø©",
    whatsapp: "واتساب",
    kemeryaToursHome: "Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© Ù„Ù€ Kemerya Tours",
    openMainMenu: "Ø§ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    closeMainMenu: "Ø£ØºÙ„Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    heroImageAlt: "ØªØ¬Ø±Ø¨Ø© Ø³ÙØ± Ø®Ø§ØµØ© ÙÙŠ Ù…ØµØ± Ø¨Ø§Ù„Ù‚Ø±Ø¨ Ù…Ù† Ø§Ù„Ø£Ù‡Ø±Ø§Ù…Ø§Øª",
    localGuideImageAlt: "Ù…Ø±Ø´Ø¯ Ù…Ø­Ù„ÙŠ ÙŠØ´Ø§Ø±Ùƒ Ù…Ø¹Ø§Ø±ÙÙ‡ Ø®Ù„Ø§Ù„ Ø±Ø­Ù„Ø© ÙÙŠ Ù…ØµØ±",
    nileImageAlt: "Ù…Ø´Ù‡Ø¯ Ø³ÙŠÙ†Ù…Ø§Ø¦ÙŠ Ù„Ù…ØµØ± ÙˆÙ†Ù‡Ø± Ø§Ù„Ù†ÙŠÙ„",
    partnershipInquirySubject: "Ø§Ø³ØªÙØ³Ø§Ø± Ø¹Ù† Ø§Ù„Ø´Ø±Ø§ÙƒØ©",
    viewAllFaq: "Ø¹Ø±Ø¶ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£Ø³Ø¦Ù„Ø©",
  },
  fr: {
    skipToMainContent: "Aller au contenu principal",
    mainNavigation: "Navigation principale",
    mobileNavigation: "Navigation mobile",
    contactKemeryaTours: "Contacter Kemerya Tours",
    becomePartnerKemeryaTours: "Devenir partenaire de Kemerya Tours",
    visitKemeryaHomepage: "Visiter le site de Kemerya Tours",
    partnerWithKemeryaTours: "Devenir partenaire de Kemerya Tours",
    bookPartnershipConsultation: "Planifier un Ã©change sur le partenariat",
    businessProof: "Nos rÃ©sultats sur le terrain",
    selectLanguage: "Choisir la langue",
    languageSelectorMenu: "Menu de sÃ©lection de la langue",
    socialMediaLinks: "Liens vers les rÃ©seaux sociaux",
    legalLinks: "Liens juridiques",
    explore: "DÃ©couvrir",
    private: "PrivÃ©",
    messageField: "Message",
    whatsapp: "WhatsApp",
    kemeryaToursHome: "Accueil de Kemerya Tours",
    openMainMenu: "Ouvrir le menu principal",
    closeMainMenu: "Fermer le menu principal",
    heroImageAlt: "Voyage privÃ© en Ã‰gypte prÃ¨s des pyramides",
    localGuideImageAlt: "Un guide local partage ses connaissances pendant un voyage en Ã‰gypte",
    nileImageAlt: "Vue cinÃ©matographique de lâ€™Ã‰gypte et du Nil",
    partnershipInquirySubject: "Demande de partenariat",
    viewAllFaq: "VOIR TOUTES LES FAQ",
  },
  it: {
    skipToMainContent: "Vai al contenuto principale",
    mainNavigation: "Navigazione principale",
    mobileNavigation: "Navigazione mobile",
    contactKemeryaTours: "Contatta Kemerya Tours",
    becomePartnerKemeryaTours: "Diventa partner di Kemerya Tours",
    visitKemeryaHomepage: "Visita il sito di Kemerya Tours",
    partnerWithKemeryaTours: "Collabora con Kemerya Tours",
    bookPartnershipConsultation: "Prenota una consulenza sulla partnership",
    businessProof: "I risultati sul campo",
    selectLanguage: "Seleziona la lingua",
    languageSelectorMenu: "Menu di selezione della lingua",
    socialMediaLinks: "Link ai social media",
    legalLinks: "Link legali",
    explore: "Scopri",
    private: "Privato",
    messageField: "Messaggio",
    whatsapp: "WhatsApp",
    kemeryaToursHome: "Home di Kemerya Tours",
    openMainMenu: "Apri il menu principale",
    closeMainMenu: "Chiudi il menu principale",
    heroImageAlt: "Viaggio privato in Egitto vicino alle piramidi",
    localGuideImageAlt: "Una guida locale racconta lâ€™Egitto durante il viaggio",
    nileImageAlt: "Veduta cinematografica dellâ€™Egitto e del Nilo",
    partnershipInquirySubject: "Richiesta di partnership",
    viewAllFaq: "VEDI TUTTE LE FAQ",
  },
  es: {
    skipToMainContent: "Ir al contenido principal",
    mainNavigation: "NavegaciÃ³n principal",
    mobileNavigation: "NavegaciÃ³n mÃ³vil",
    contactKemeryaTours: "Contactar con Kemerya Tours",
    becomePartnerKemeryaTours: "Hazte socio de Kemerya Tours",
    visitKemeryaHomepage: "Visitar la web de Kemerya Tours",
    partnerWithKemeryaTours: "Colabora con Kemerya Tours",
    bookPartnershipConsultation: "Concertar una llamada sobre la colaboraciÃ³n",
    businessProof: "Resultados sobre el terreno",
    selectLanguage: "Seleccionar idioma",
    languageSelectorMenu: "MenÃº de selecciÃ³n de idioma",
    socialMediaLinks: "Enlaces a redes sociales",
    legalLinks: "Enlaces legales",
    explore: "Descubrir",
    private: "Privado",
    messageField: "Mensaje",
    whatsapp: "WhatsApp",
    kemeryaToursHome: "Inicio de Kemerya Tours",
    openMainMenu: "Abrir el menÃº principal",
    closeMainMenu: "Cerrar el menÃº principal",
    heroImageAlt: "Viaje privado por Egipto cerca de las pirÃ¡mides",
    localGuideImageAlt: "Un guÃ­a local comparte sus conocimientos durante un viaje por Egipto",
    nileImageAlt: "Vista cinematogrÃ¡fica de Egipto y el Nilo",
    partnershipInquirySubject: "Consulta de colaboraciÃ³n",
    viewAllFaq: "VER TODAS LAS FAQ",
  },
  de: {
    skipToMainContent: "Zum Hauptinhalt springen",
    mainNavigation: "Hauptnavigation",
    mobileNavigation: "Navigation fÃ¼r MobilgerÃ¤te",
    contactKemeryaTours: "Kemerya Tours kontaktieren",
    becomePartnerKemeryaTours: "Partner von Kemerya Tours werden",
    visitKemeryaHomepage: "Kemerya-Tours-Website besuchen",
    partnerWithKemeryaTours: "Mit Kemerya Tours zusammenarbeiten",
    bookPartnershipConsultation: "BeratungsgesprÃ¤ch zur Partnerschaft buchen",
    businessProof: "Unsere Ergebnisse vor Ort",
    selectLanguage: "Sprache auswÃ¤hlen",
    languageSelectorMenu: "SprachauswahlmenÃ¼",
    socialMediaLinks: "Links zu sozialen Medien",
    legalLinks: "Rechtliche Hinweise",
    explore: "Entdecken",
    private: "Privat",
    messageField: "Nachricht",
    whatsapp: "WhatsApp",
    kemeryaToursHome: "Startseite von Kemerya Tours",
    openMainMenu: "HauptmenÃ¼ Ã¶ffnen",
    closeMainMenu: "HauptmenÃ¼ schlieÃŸen",
    heroImageAlt: "Private Ã„gyptenreise nahe den Pyramiden",
    localGuideImageAlt: "Ein lokaler Guide gibt Einblicke wÃ¤hrend einer Ã„gyptenreise",
    nileImageAlt: "Filmischer Blick auf Ã„gypten und den Nil",
    partnershipInquirySubject: "Partnerschaftsanfrage",
    viewAllFaq: "ALLE FAQ ANSEHEN",
  },
  pt: {
    skipToMainContent: "Ir para o conteÃºdo principal",
    mainNavigation: "NavegaÃ§Ã£o principal",
    mobileNavigation: "NavegaÃ§Ã£o para dispositivos mÃ³veis",
    contactKemeryaTours: "Contactar a Kemerya Tours",
    becomePartnerKemeryaTours: "Tornar-se parceiro da Kemerya Tours",
    visitKemeryaHomepage: "Visitar o site da Kemerya Tours",
    partnerWithKemeryaTours: "Estabelecer parceria com a Kemerya Tours",
    bookPartnershipConsultation: "Marcar uma conversa sobre a parceria",
    businessProof: "Resultados no terreno",
    selectLanguage: "Selecionar idioma",
    languageSelectorMenu: "Menu de seleÃ§Ã£o de idioma",
    socialMediaLinks: "LigaÃ§Ãµes para as redes sociais",
    legalLinks: "LigaÃ§Ãµes legais",
    explore: "Descobrir",
    private: "Privado",
    messageField: "Mensagem",
    whatsapp: "WhatsApp",
    kemeryaToursHome: "PÃ¡gina inicial da Kemerya Tours",
    openMainMenu: "Abrir o menu principal",
    closeMainMenu: "Fechar o menu principal",
    heroImageAlt: "Viagem privada pelo Egito perto das pirÃ¢mides",
    localGuideImageAlt: "Guia local partilha conhecimentos durante uma viagem pelo Egito",
    nileImageAlt: "Vista cinematogrÃ¡fica do Egito e do Nilo",
    partnershipInquirySubject: "Pedido de parceria",
    viewAllFaq: "VER TODAS AS FAQ",
  },
  nl: {
    skipToMainContent: "Ga naar de hoofdinhoud",
    mainNavigation: "Hoofdnavigatie",
    mobileNavigation: "Navigatie voor mobiel",
    contactKemeryaTours: "Contact opnemen met Kemerya Tours",
    becomePartnerKemeryaTours: "Partner worden van Kemerya Tours",
    visitKemeryaHomepage: "De website van Kemerya Tours bezoeken",
    partnerWithKemeryaTours: "Samenwerken met Kemerya Tours",
    bookPartnershipConsultation: "Een gesprek over de samenwerking plannen",
    businessProof: "Bewezen resultaten ter plaatse",
    selectLanguage: "Taal selecteren",
    languageSelectorMenu: "Menu voor taalselectie",
    socialMediaLinks: "Links naar sociale media",
    legalLinks: "Juridische links",
    explore: "Ontdekken",
    private: "PrivÃ©",
    messageField: "Bericht",
    whatsapp: "WhatsApp",
    kemeryaToursHome: "Startpagina van Kemerya Tours",
    openMainMenu: "Hoofdmenu openen",
    closeMainMenu: "Hoofdmenu sluiten",
    heroImageAlt: "PrivÃ©reis door Egypte bij de piramides",
    localGuideImageAlt: "Een lokale gids deelt inzichten tijdens een reis door Egypte",
    nileImageAlt: "Sfeervol uitzicht op Egypte en de Nijl",
    partnershipInquirySubject: "Aanvraag voor samenwerking",
    viewAllFaq: "ALLES FAQ BEKIJKEN",
  },
  zh: {
    skipToMainContent: "è·³è½¬è‡³ä¸»è¦å†…å®¹",
    mainNavigation: "ä¸»å¯¼èˆª",
    mobileNavigation: "ç§»åŠ¨ç«¯å¯¼èˆª",
    contactKemeryaTours: "è”ç³» Kemerya Tours",
    becomePartnerKemeryaTours: "æˆä¸º Kemerya Tours åˆä½œä¼™ä¼´",
    visitKemeryaHomepage: "è®¿é—® Kemerya Tours å®˜ç½‘",
    partnerWithKemeryaTours: "ä¸Ž Kemerya Tours åˆä½œ",
    bookPartnershipConsultation: "é¢„çº¦åˆä½œå’¨è¯¢",
    businessProof: "å®žåœ°è¿è¥æˆæžœ",
    selectLanguage: "é€‰æ‹©è¯­è¨€",
    languageSelectorMenu: "è¯­è¨€é€‰æ‹©èœå•",
    socialMediaLinks: "ç¤¾äº¤åª’ä½“é“¾æŽ¥",
    legalLinks: "æ³•å¾‹ä¿¡æ¯é“¾æŽ¥",
    explore: "æŽ¢ç´¢",
    private: "ç§äººå®šåˆ¶",
    messageField: "ç•™è¨€",
    whatsapp: "WhatsApp",
    kemeryaToursHome: "Kemerya Tours é¦–é¡µ",
    openMainMenu: "æ‰“å¼€ä¸»èœå•",
    closeMainMenu: "å…³é—­ä¸»èœå•",
    heroImageAlt: "é‡‘å­—å¡”é™„è¿‘çš„åŸƒåŠç§äººæ—…è¡Œä½“éªŒ",
    localGuideImageAlt: "å½“åœ°å¯¼æ¸¸åœ¨åŸƒåŠæ—…é€”ä¸­åˆ†äº«è§è§£",
    nileImageAlt: "åŸƒåŠä¸Žå°¼ç½—æ²³çš„ç”µå½±èˆ¬æ™¯è‡´",
    partnershipInquirySubject: "åˆä½œå’¨è¯¢",
    viewAllFaq: "æŸ¥çœ‹æ‰€æœ‰å¸¸è§é—®é¢˜",
  },
};

