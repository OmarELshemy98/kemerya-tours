export type CopyPair = readonly [title: string, description: string];

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
  whyKemerya: {
    title: string;
    items: readonly { title: string; description: string }[];
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
    commercialCategories: readonly CopyPair[];
    journeys: readonly CopyPair[];
  };
};

export type FaqItem = readonly [question: string, answer: string];