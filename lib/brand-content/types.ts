export type CopyPair = readonly [title: string, description: string];
export type CategoryCopyTriple = readonly [title: string, description: string, b2bBlurb: string];

export type BrandContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: readonly string[];
    subtitle: string;
    primary: string;
    secondary: string;
    note: string;
  };
  trust: {
    eyebrow: string;
    statement: string;
    labels: readonly string[];
  };
    whoKemerya: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    paragraphs: readonly string[];
    principles: readonly string[];
    cta: string;
  };
        aboutUs?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    paragraphs: readonly string[];
    principles: readonly string[];
    sections: readonly {
      title: string;
      content: string;
      items?: readonly string[];
      image?: { src: string; alt: string };
    }[];
    cta: string;
  };
  whyKemerya: {
    title: string;
    items: readonly { title: string; description: string }[];
  };
  brandStatement?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    paragraphs: readonly string[];
    image: string;
    cta: string;
  };
  kemeryaApproach?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly { title: string; description: string }[];
  };
  capTeaser?: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
  };
  whoWeWorkWithGroups?: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: readonly {
      label: string;
      title: string;
      description: string;
      clients: readonly string[];
      image: string;
    }[];
  };
  whyPartnerTeaser?: {
    eyebrow: string;
    title: string;
    intro: string;
    reasons: readonly { title: string; description: string }[];
  };
  brandPhilosophy: {
    title: string;
    description: string;
  };
  clientTypes: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  whyPartner: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  advantages: {
    eyebrow: string;
    title: string;
    intro: string;
  };
    capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  capabilitiesPage?: {
    seo: {
      title: string;
      description: string;
      primaryKeyword: string;
      supportingKeywords: readonly string[];
    };
    hero: {
      eyebrow: string;
      title: readonly string[];
      subtitle: string;
      primary: string;
      secondary: string;
      image: { src: string; alt: string };
    };
    services: {
      title: string;
      intro: string;
      items: readonly {
        title: string;
        description: string;
        image?: { src: string; alt: string };
        icon: string;
        link?: string;
      }[];
    };
    groundArrangements: {
      title: string;
      intro: string;
      items: readonly string[];
    };
    approachTypes: {
      title: string;
      intro: string;
      items: readonly {
        title: string;
        description: string;
        icon: string;
      }[];
    };
    inquirySteps: {
      title: string;
      intro: string;
      steps: readonly {
        number: string;
        title: string;
        description: string;
      }[];
    };
    whoCanDiscuss: {
      title: string;
      intro: string;
      items: readonly string[];
      content: string;
      linkText: string;
      linkPath: string;
    };
    relatedLinks: readonly {
      text: string;
      href: string;
    }[];
        cta: {
      eyebrow: string;
      title: readonly string[];
      description: string;
      primary: string;
    };
  };
  whyPartnerPage?: {
    seo: {
      title: string;
      description: string;
      primaryKeyword: string;
      supportingKeywords: readonly string[];
    };
    hero: {
      eyebrow: string;
      title: readonly string[];
      subtitle: string;
      primary: string;
      secondary: string;
      image: { src: string; alt: string };
    };
    whatMatters: {
      title: string;
      intro: string;
      points: readonly {
        title: string;
        description: string;
        icon: string;
      }[];
    };
    designedFor: {
      title: string;
      intro: string;
      audiences: readonly {
        title: string;
        description: string;
        icon: string;
      }[];
      content: string;
    };
    process: {
      title: string;
      intro: string;
      steps: readonly {
        number: string;
        title: string;
        description: string;
      }[];
    };
    supportingClient: {
      title: string;
      content: string;
      description: string;
    };
    relationship: {
      title: string;
      subtitle: string;
      description: string;
      ctaTitle: string;
      content: string;
      primary: string;
      secondary: string;
    };
    relatedLinks: readonly {
      text: string;
      href: string;
    }[];
    cta: {
      eyebrow: string;
      title: readonly string[];
      description: string;
      primary: string;
      secondary: string;
    };
  };
  categories: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
  };
  journeys: {
    eyebrow: string;
    title: string;
    intro: string;
    modelLabel: string;
  };
  partnership: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      company: string;
      role: string;
      phone: string;
      destination: string;
      message: string;
    };
    submit: string;
    note: string;
  };
  conversion: {
    eyebrow: string;
    title: readonly string[];
    description: string;
    primary: string;
    secondary: string;
  };
  credibility: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
  };
  commercialConfidence: {
    eyebrow: string;
    title: string;
    intro: string;
    points: readonly CopyPair[];
  };
  programCapabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly CopyPair[];
  };
    faq: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly FaqItem[];
  };
  knowledge: {
    eyebrow: string;
    title: string;
    intro: string;
    articles: readonly ArticleItem[];
  };
      footer: {
    blurb: string;
    headline: string;
  };
  datasets: {
    capabilities: readonly CopyPair[];
    clientTypes: readonly CopyPair[];
    whyPartner: readonly CopyPair[];
    advantages: readonly CopyPair[];
    partnershipSteps: readonly CopyPair[];
            commercialCategories: readonly CategoryCopyTriple[];
    commercialCategoriesSubcategories: readonly (readonly string[])[];
    journeys: readonly CopyPair[];
  };
  whyWeWorkWithPage?: {
    seo: {
      title: string;
      description: string;
      primaryKeyword: string;
      supportingKeywords: readonly string[];
    };
    hero: {
      eyebrow: string;
      title: readonly string[];
      subtitle: string;
      intro: string;
      primary: string;
      secondary: string;
      image: { src: string; alt: string };
    };
    audiences: {
      title: string;
      intro: string;
      items: readonly {
        title: string;
        description: string;
        image?: { src: string; alt: string };
      }[];
    };
    differentRequirements: {
      title: string;
      content: string;
    };
    inquiry: {
      title: string;
      intro: string;
      items: readonly string[];
      closing: string;
    };
    practicalStartingPoint: {
      title: string;
      content: readonly string[];
    };
    relatedLinks: readonly { text: string; href: string }[];
    cta: {
      eyebrow: string;
      title: readonly string[];
      description: string;
      primary: string;
      secondary: string;
    };
  };
};

export type LegalLinkTarget = "privacy" | "terms" | "contact";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "link"; prefix: string; label: string; target: LegalLinkTarget };

export type LegalSection = {
  title: string;
  blocks: readonly LegalBlock[];
};

export type LegalContactInfo = {
  intro: string;
  ctaTitle: string;
  ctaLabel: string;
};

export type LegalPageContent = {
  eyeliner: string;
  title: string;
  intro: string;
  sections: readonly LegalSection[];
  contact: LegalContactInfo;
};

export type FaqItem = readonly [question: string, answer: string];

export type ArticleItem = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
};