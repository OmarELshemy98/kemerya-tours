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
        "Trusted Egyptian B2B partner for international travel businesses. Private journeys, reliable on-ground operations, and white-label Egypt experiences.",
    },
    nav: {
      capabilities: "Capabilities",
      categories: "Categories",
      whyPartner: "Why Partner",
      whoWeWorkWith: "Who We Work With",
      contact: "CONTACT",
      workWithUs: "Work With Us",
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
      note: "10+ Years Operating • 2,000+ Travelers • 4.9 Rating",
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
      eyebrow: "EST. 2016 • CAIRO, EGYPT",
      title: "MORE THAN A TOUR OPERATOR.",
      subtitle: "YOUR LOCAL PARTNER IN EGYPT.",
      intro:
        "Kemerya is a boutique Egypt operator built for the partnership era.",
      paragraphs: [
        "We are not a mass-market operator. We are a curated network of Egyptologist guides, local artisans, and ground handlers who have been crafting intimate, high-end journeys since 2016. Every itinerary we create is designed to be sold by you — seamlessly.",
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
        "These are not just our strengths — they are your competitive advantages in the market.",
    },
    advantages: {
      eyebrow: "THE KEMERYA ADVANTAGE",
      title: "YOU SELL. WE OPERATE.",
      intro:
        "Your role is client-facing sales. Ours is flawless execution on the ground in Egypt — from permits to guides to seamless transitions.",
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
    testimonials: {
      eyebrow: "TRAVELER EXPERIENCES",
      title: "WHAT GUESTS WHO TRUSTED KEMERYA SAY.",
    },
    partnership: {
      eyebrow: "HOW IT WORKS",
      title: "A SIMPLE 5-STEP PARTNERSHIP",
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
      note: "We respond within 24 business hours. No obligation.",
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
      title: "شراكة مصر للأعمال B2B | Kemerya Tours",
      description:
        "شريك مصري موثوق لشركات السفر الدولية، يقدم رحلات خاصة وعمليات ميدانية موثوقة وتجارب في مصر بخدمات العلامة البيضاء.",
    },
    nav: {
      capabilities: "القدرات",
      categories: "الفئات",
      whyPartner: "لماذا تختارنا كشريك؟",
      whoWeWorkWith: "مع من نعمل",
      contact: "اتصل بنا",
      workWithUs: "اعمل معنا",
    },
    hero: {
      eyebrow: "شريكك في مصر",
      title: [
        "شريكك الموثوق في مصر.",
        "خبرتك في مصر. عملياتنا المحلية.",
        "رحلات خاصة. شراكة سلسة.",
        "لنبنِ معًا منتجات سياحية في مصر.",
      ],
      subtitle:
        "خبرة محلية، رحلات خاصة، وعمليات أرضية سلسة لشركات السفر الدولية.",
      primary: "كن شريكا",
      secondary: "معلومات الشراكة",
      note: "أكثر من 10 سنوات • أكثر من 2000 مسافر • تقييم 4.9",
    },
    trust: {
      eyebrow: "خبرة مثبتة على أرض الواقع",
      statement: "شركة سياحية محلية متخصصة، حققت نتائج موثوقة في أنحاء مصر منذ عام 2016.",
      items: [
        { value: "10+", label: "سنوات تشغيل" },
        { value: "2,000+", label: "مسافر تمّت خدمتهم" },
        { value: "4.9", label: "متوسط التقييم" },
        { value: "100%", label: "رحلات مخصصة" },
        { value: "24/7", label: "دعم أرضي" },
      ],
    },
    whoKemerya: {
      eyebrow: "تأسس عام 2016 • القاهرة، مصر",
      title: "أكثر من مشغل سياحي.",
      subtitle: "شريكك المحلي في مصر.",
      intro: "Kemerya شركة سياحية مصرية متخصصة، تأسست لتواكب عصر الشراكات.",
      paragraphs: [
        "لسنا شركة سياحية جماهيرية، بل شبكة منتقاة تضم مرشدي علم المصريات والحرفيين المحليين ومقدمي الخدمات الأرضية. نصمم منذ عام 2016 رحلات أصيلة وفاخرة، ونعدّ كل برنامج سياحي بحيث يسهل عليكم تسويقه وبيعه.",
        "نتخذ من القاهرة مقرًا لنا، وننفذ رحلات في أنحاء النيل والبحر الأحمر والصحراء الغربية. نعمل كفريقك خلف الكواليس: تحتفظ أنت بعلاقة العميل وبالإيرادات، ونتولى جميع التفاصيل التشغيلية على أرض مصر.",
      ],
      cta: "كن شريكا معنا",
    },
    clientTypes: {
      eyebrow: "مع من نعمل",
      title: "شركات السفر الدولية التي نتعاون معها.",
      intro:
        "من وكالات سفر فاخرة إلى شركات إدارة الوجهات، نحن نوفر الخبرة في مصر التي تحتاجها لتقديم رحلات متميزة لعملائك بثقة.",
    },
    whyPartner: {
      eyebrow: "لماذا يختار الشركاء Kemerya",
      title: "ما يميز Kemerya",
      intro: "هذه ليست مجرد نقاط قوة لدينا، بل مزايا تنافسية تمنحك الأفضلية في السوق.",
    },
    advantages: {
      eyebrow: "مزايا Kemerya",
      title: "أنت تبيع، ونحن نتولى التنفيذ.",
      intro:
        "ينصب دورك على المبيعات والتواصل المباشر مع العملاء، بينما نتولى نحن التنفيذ المتقن على أرض مصر، من التصاريح والمرشدين إلى التنقلات السلسة.",
    },
    capabilities: {
      eyebrow: "ما الذي يمكننا تقديمه",
      title: "عمليات متكاملة في مصر من البداية إلى النهاية",
      intro:
        "من الفكرة الأولية حتى التنفيذ على أرض الواقع، نوفر مجموعة متكاملة من خدمات السفر في مصر التي سيستمتع بها عملاؤك.",
    },
    categories: {
      eyebrow: "الفئات التجارية",
      title: "أربع طرق لبيع مصر",
      intro:
        "تتيح كل فئة نهجًا مختلفًا لتطوير منتجات سياحية في مصر: اكتشاف المدن، وبرامج غامرة، وعطلات ساحلية، ورحلات نهرية هادئة.",
      cta: "استكشف",
    },
    journeys: {
      eyebrow: "نماذج الرحلات الرئيسية",
      title: "أربعة نماذج لرحلات مميزة.",
      intro:
        "تعكس هذه النماذج أكثر ما يطلبه الشركاء الدوليون: أجواء مميزة، وخصوصية، وارتباطًا ثقافيًا عميقًا.",
      cta: "عرض جميع الرحلات",
    },
    testimonials: {
      eyebrow: "تجارب المسافرين",
      title: "ماذا يقول الضيوف الذين وضعوا ثقتهم في Kemerya؟",
    },
    partnership: {
      eyebrow: "كيف يعمل ذلك",
      title: "شراكة بسيطة من 5 خطوات",
      intro: "البدء سهل. إليك كيف نعمل معا.",
    },
    contact: {
      eyebrow: "استفسار الشراكة",
      title: "هل أنت مستعد للشراكة؟",
      subtitle: "دعنا نناقش منتج مصر الخاص بك.",
      fields: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني للعمل",
        company: "الشركة",
        role: "الوظيفة",
        phone: "رقم الهاتف",
        message:
          "كيف يمكننا مساعدتك؟ أخبرنا عن منتج مصر المثالي وسوقك المستهدف.",
      },
      submit: "أرسل استفسار الشراكة",
      note: "نرد خلال 24 ساعة عمل. بدون أي التزام.",
    },
    conversion: {
      eyebrow: "شريكك التالي في مصر؟",
      title: ["دعنا نتحدث عن مصر.", "شراكتك تبدأ هنا."],
      description:
        "هل أنت مستعد لإضافة مصر إلى محفظة منتجاتك السياحية؟ سنعدّ لك عرض شراكة مخصصًا يتوافق مع علامتك التجارية.",
      primary: "كن شريكا",
      secondary: "احجز مكالمة 15 دقيقة",
    },
    footer: {
      blurb: "شريكك الموثوق في مصر للرحلات الخاصة والعمليات الأرضية الموثوقة.",
      navTitle: "استكشف",
      partnerTitle: "الشراكة",
      contactTitle: "اتصل بنا",
      policy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      developer: "صمم وطور بواسطة عمر الشيمي",
      business: {
        headline: "شريكك الموثوق في مصر للرحلات الخاصة.",
        address: "شارع أبو الهول 250، الهرم، الجيزة، مصر",
      },
    },
  },
  fr: {
    meta: {
      title: "Partenariat B2B Égypte | Kemerya Tours",
      description:
        "Partenaire égyptien de confiance pour les entreprises internationales du tourisme. Voyages privés, opérations fiables sur place et expériences en Égypte en marque blanche.",
    },
    nav: {
      capabilities: "Capacités",
      categories: "Catégories",
      whyPartner: "Pourquoi Nous Choisir",
      whoWeWorkWith: "Avec Qui Nous Travaillons",
      contact: "CONTACT",
      workWithUs: "Travaillez Avec Nous",
    },
    hero: {
      eyebrow: "VOTRE PARTENAIRE EN ÉGYPTE",
      title: [
        "VOTRE PARTENAIRE ÉGYPTIEN DE CONFIANCE.",
        "VOTRE OFFRE SUR L’ÉGYPTE. NOS OPÉRATIONS LOCALES.",
        "VOYAGES PRIVÉS. UN PARTENARIAT FLUIDE.",
        "CRÉONS ENSEMBLE DES OFFRES SUR L’ÉGYPTE.",
      ],
      subtitle:
        "Expertise locale, voyages privés et opérations parfaitement coordonnées en Égypte pour les professionnels internationaux du voyage.",
      primary: "DEVENIR PARTENAIRE",
      secondary: "INFORMATIONS SUR LE PARTENARIAT",
      note: "10+ ans d’activité • 2 000+ voyageurs • Note moyenne : 4,9",
    },
    trust: {
      eyebrow: "UNE EXPERTISE ÉPROUVÉE SUR LE TERRAIN",
      statement:
        "Opérateur local à taille humaine, aux résultats vérifiés en Égypte depuis 2016.",
      items: [
        { value: "10+", label: "Années d’activité" },
        { value: "2,000+", label: "Voyageurs accompagnés" },
        { value: "4.9", label: "Note moyenne" },
        { value: "100%", label: "Itinéraires Sur Mesure" },
        { value: "24/7", label: "Assistance sur place 24 h/24, 7 j/7" },
      ],
    },
    whoKemerya: {
      eyebrow: "FONDÉ EN 2016 • LE CAIRE, ÉGYPTE",
      title: "PLUS QU'UN OPÉRATEUR TOURISTIQUE.",
      subtitle: "VOTRE PARTENAIRE LOCAL EN ÉGYPTE.",
      intro:
        "Kemerya est un voyagiste égyptien à taille humaine, pensé pour une nouvelle ère de partenariats.",
      paragraphs: [
        "Nous ne sommes pas un opérateur de masse. Nous sommes un réseau trié sur le volet de guides spécialisés en égyptologie, d’artisans locaux et de prestataires sur place. Depuis 2016, nous créons des voyages intimistes et haut de gamme. Chaque itinéraire est conçu pour être commercialisé par vos soins, en toute simplicité.",
        "Implantés au Caire et présents le long du Nil, sur la mer Rouge et dans le désert occidental, nous sommes votre équipe en coulisses. Vous gardez la relation client et les revenus ; nous prenons en charge tous les aspects opérationnels sur place, en Égypte.",
      ],
      cta: "DEVENEZ PARTENAIRE",
    },
    clientTypes: {
      eyebrow: "AVEC QUI NOUS TRAVAILLONS",
      title:
        "LES PROFESSIONNELS INTERNATIONAUX DU VOYAGE QUE NOUS ACCOMPAGNONS.",
      intro:
        "Des agences de voyage haut de gamme aux sociétés de gestion de destinations, nous vous apportons l’expertise de l’Égypte nécessaire pour proposer en toute confiance des voyages d’exception à vos clients.",
    },
    whyPartner: {
      eyebrow: "POURQUOI NOS PARTENAIRES CHOISISSENT KEMERYA",
      title: "CE QUI DISTINGUE KEMERYA",
      intro:
        "Ce ne sont pas seulement nos forces — ce sont vos avantages concurrentiels sur le marché.",
    },
    advantages: {
      eyebrow: "L'AVANTAGE KEMERYA",
      title: "VOUS VENDEZ. NOUS OPÉRONS.",
      intro:
        "Votre rôle : vendre et accompagner vos clients. Le nôtre : assurer une exécution irréprochable sur le terrain en Égypte, des autorisations aux guides, jusqu’à la fluidité des déplacements.",
    },
    capabilities: {
      eyebrow: "CE QUE NOUS POUVONS FAIRE",
      title: "OPÉRATIONS EN ÉGYPTE, DE BOUT EN BOUT",
      intro:
        "Du concept initial à la mise en œuvre sur le terrain, nous proposons une gamme complète de services de voyage en Égypte qui séduiront vos clients.",
    },
    categories: {
      eyebrow: "CATÉGORIES COMMERCIALES",
      title: "QUATRE MANIÈRES DE VENDRE L'ÉGYPTE",
      intro:
        "Chaque catégorie ouvre une voie différente pour développer une offre touristique en Égypte : découvertes urbaines, itinéraires immersifs, escapades côtières et croisières fluviales au rythme tranquille.",
      cta: "Explorer",
    },
    journeys: {
      eyebrow: "MODÈLES DE VOYAGE EMBLÉMATIQUES",
      title: "QUATRE MODÈLES DE VOYAGE EMBLÉMATIQUES.",
      intro:
        "Ces modèles reflètent les demandes les plus fréquentes de nos partenaires internationaux : une atmosphère marquante, des séjours privés et un lien culturel profond.",
      cta: "VOIR TOUS LES TRAJETS",
    },
    testimonials: {
      eyebrow: "EXPÉRIENCES DE VOYAGEURS",
      title: "CE QUE DISENT LES VOYAGEURS QUI ONT FAIT CONFIANCE À KEMERYA.",
    },
    partnership: {
      eyebrow: "COMMENT ÇA FONCTIONNE",
      title: "UN PARTENARIAT SIMPLE EN 5 ÉTAPES",
      intro: "La mise en place est simple. Voici comment nous collaborons.",
    },
    contact: {
      eyebrow: "DEMANDE DE PARTENARIAT",
      title: "ENVIE DE DEVENIR PARTENAIRE ?",
      subtitle: "ÉCHANGEONS SUR VOTRE OFFRE POUR L’ÉGYPTE.",
      fields: {
        name: "Nom Complet",
        email: "Adresse e-mail professionnelle",
        company: "Entreprise",
        role: "Rôle",
        phone: "Téléphone",
        message:
            "Comment pouvons-nous vous aider ? Décrivez-nous l’offre que vous souhaitez proposer en Égypte ainsi que votre marché cible.",
      },
          submit: "ENVOYER LA DEMANDE DE PARTENARIAT",
      note: "Nous répondons dans les 24 heures ouvrables. Sans obligation.",
    },
    conversion: {
      eyebrow: "VOTRE PROCHAIN PARTENAIRE EN ÉGYPTE ?",
      title: ["PARLONS DE VOTRE OFFRE EN ÉGYPTE.", "VOTRE PARTENARIAT COMMENCE ICI."],
      description:
        "Prêt à intégrer l’Égypte à votre portefeuille de produits ? Nous élaborerons une offre de partenariat sur mesure, adaptée à votre marque.",
      primary: "DEVENIR PARTENAIRE",
      secondary: "RÉSERVER UN APPEL DE 15 MINUTES",
    },
    footer: {
      blurb:
        "Votre partenaire égyptien de confiance pour des voyages privés et des opérations fiables sur le terrain.",
      navTitle: "Explorer",
      partnerTitle: "Partenariat",
      contactTitle: "Contact",
      policy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      developer: "Conçu et développé par Omar Elshemy",
      business: {
        headline:
          "Votre partenaire égyptien de confiance pour des voyages privés.",
        address: "250, rue Aboul Houl, Haram, Gizeh, Égypte",
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
      capabilities: "Capacità",
      categories: "Categorie",
      whyPartner: "Perché Partner",
      whoWeWorkWith: "Con Chi Lavoriamo",
      contact: "CONTATTI",
      workWithUs: "Collabora con noi",
    },
    hero: {
      eyebrow: "IL TUO PARTNER IN EGITTO",
      title: [
        "IL TUO PARTNER EGIZIANO DI FIDUCIA.",
        "LA TUA COMPETENZA SULL'EGITTO. LA NOSTRA OPERATIVITÀ LOCALE.",
        "VIAGGI PRIVATI. UNA COLLABORAZIONE SENZA INTOPPI.",
        "CREIAMO INSIEME PRODOTTI TURISTICI PER L'EGITTO.",
      ],
      subtitle:
        "Competenza locale, viaggi privati e operatività sul territorio senza intoppi per le aziende internazionali del settore turistico.",
      primary: "DIVENTA PARTNER",
      secondary: "INFORMAZIONI PARTNERSHIP",
      note: "10+ anni di attività • 2.000+ viaggiatori • valutazione 4,9",
    },
    trust: {
      eyebrow: "VALIDATO IN LOCO",
      statement:
        "Operatore locale boutique con risultati comprovati in tutto l'Egitto dal 2016.",
      items: [
        { value: "10+", label: "Anni di Attività" },
        { value: "2,000+", label: "Viaggiatori accompagnati" },
        { value: "4.9", label: "Valutazione media" },
        { value: "100%", label: "Itinerari Su Misura" },
        { value: "24/7", label: "Supporto in Loco" },
      ],
    },
    whoKemerya: {
      eyebrow: "FONDATA NEL 2016 • IL CAIRO, EGITTO",
      title: "PIÙ DI UN OPERATORE TURISTICO.",
      subtitle: "IL TUO PARTNER LOCALE IN EGITTO.",
      intro: "Kemerya è un tour operator boutique specializzato in Egitto, pensato per una nuova era di collaborazione.",
      paragraphs: [
        "Non siamo un operatore di massa. Siamo una rete selezionata di guide esperte di egittologia, artigiani locali e operatori sul territorio che dal 2016 creano viaggi esclusivi e di alta gamma. Ogni itinerario è pensato per essere venduto da te, senza intoppi.",
        "Con sede al Cairo e operativi lungo il Nilo, sul Mar Rosso e nel Deserto Occidentale, siamo il tuo team dietro le quinte. Tu gestisci il rapporto con il cliente e i ricavi; noi curiamo ogni dettaglio operativo in Egitto.",
      ],
      cta: "DIVENTA PARTNER",
    },
    clientTypes: {
      eyebrow: "CON CHI LAVORIAMO",
      title: "AZIENDE INTERNAZIONALI DEL SETTORE TURISTICO CON CUI COLLABORIAMO.",
      intro:
        "Dalle agenzie di viaggi di lusso alle società di gestione delle destinazioni, mettiamo a disposizione la competenza sull'Egitto necessaria per proporre con sicurezza viaggi di alta gamma ai tuoi clienti.",
    },
    whyPartner: {
      eyebrow: "PERCHÉ I PARTNER SCELGONO KEMERYA",
      title: "LA DIFFERENZA KEMERYA",
      intro:
        "Non sono solo i nostri punti di forza: sono anche i tuoi vantaggi competitivi sul mercato.",
    },
    advantages: {
      eyebrow: "IL VANTAGGIO KEMERYA",
      title: "TU VENDI. NOI OPERIAMO.",
      intro:
        "Il tuo ruolo è vendere e seguire i clienti. Il nostro è garantire un'esecuzione impeccabile in Egitto, dai permessi alle guide, fino ai trasferimenti senza intoppi.",
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
        "Questi modelli riflettono le richieste più frequenti dei partner internazionali: atmosfera, riservatezza e un profondo legame con la cultura locale.",
      cta: "VEDI TUTTI I VIAGGI",
    },
    testimonials: {
      eyebrow: "ESPERIENZE DEI VIAGGIATORI",
      title: "COSA DICONO GLI OSPITI CHE SI SONO AFFIDATI A KEMERYA.",
    },
    partnership: {
      eyebrow: "COME FUNZIONA",
      title: "UNA PARTNERSHIP SEMPLICE IN 5 PASSI",
      intro: "Iniziare è semplice. Ecco come lavoriamo insieme.",
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
      note: "Rispondiamo entro 24 ore lavorative. Senza impegno.",
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
        "Il tuo partner egiziano di fiducia per viaggi privati e un'operatività affidabile sul territorio.",
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
        "Socio egipcio de confianza para empresas internacionales del sector turístico. Viajes privados, operaciones locales fiables y experiencias en Egipto con marca blanca.",
    },
    nav: {
      capabilities: "Serviços",
      categories: "Categorías",
      whyPartner: "Por Qué Asociarse",
      whoWeWorkWith: "Con Quiénes Trabajamos",
      contact: "CONTACTO",
      workWithUs: "Colabora con nosotros",
    },
    hero: {
      eyebrow: "TU SOCIO EN EGIPTO",
      title: [
        "TU SOCIO EGIPCIO DE CONFIANZA.",
        "TU CONOCIMIENTO DE EGIPTO. NUESTRA OPERATIVA LOCAL.",
        "VIAJES PRIVADOS. COLABORACIÓN FLUIDA.",
        "CREEMOS JUNTOS PRODUCTOS TURÍSTICOS PARA EGIPTO.",
      ],
      subtitle:
        "Conocimiento local, viajes privados y operaciones sobre el terreno sin contratiempos para empresas internacionales del sector turístico.",
      primary: "CONVERTIRSE EN SOCIO",
      secondary: "INFORMACIÓN DE ASOCIACIÓN",
      note: "10+ años de actividad • 2.000+ viajeros • valoración 4,9",
    },
    trust: {
      eyebrow: "VALIDADO EN TIERRA",
      statement:
        "Operador local boutique con resultados contrastados en todo Egipto desde 2016.",
      items: [
        { value: "10+", label: "Años Operando" },
        { value: "2,000+", label: "Viajeros Atendidos" },
        { value: "4.9", label: "Calificación Promedio" },
        { value: "100%", label: "Itinerarios Personalizados" },
        { value: "24/7", label: "Soporte en Tierra" },
      ],
    },
    whoKemerya: {
      eyebrow: "FUNDADO EN 2016 • EL CAIRO, EGIPTO",
      title: "MÁS QUE UN OPERADOR TURÍSTICO.",
      subtitle: "TU SOCIO LOCAL EN EGIPTO.",
      intro: "Kemerya es un operador turístico boutique especializado en Egipto, creado para una nueva era de colaboración.",
      paragraphs: [
        "No somos un operador masivo. Somos una red seleccionada de guías expertos en egiptología, artesanos locales y operadores sobre el terreno que crean viajes exclusivos y de alta gama desde 2016. Cada itinerario está pensado para que tú lo vendas sin complicaciones.",
        "Con sede en El Cairo y operaciones en el Nilo, el mar Rojo y el Desierto Occidental, somos tu equipo entre bastidores. Tú mantienes la relación con el cliente y los ingresos; nosotros nos ocupamos de cada detalle operativo en Egipto.",
      ],
      cta: "CONVERTIRSE EN SOCIO",
    },
    clientTypes: {
      eyebrow: "CON QUIÉNES TRABAJAMOS",
      title: "EMPRESAS INTERNACIONALES DEL SECTOR TURÍSTICO CON LAS QUE COLABORAMOS.",
      intro:
        "Desde agencias de viajes de lujo hasta empresas de gestión de destinos, ponemos a tu disposición el conocimiento de Egipto que necesitas para ofrecer con confianza viajes de alta gama a tus clientes.",
    },
    whyPartner: {
      eyebrow: "POR QUÉ LOS SOCIOS ELIGEN KEMERYA",
      title: "LA DIFERENCIA KEMERYA",
      intro:
        "No son solo nuestros puntos fuertes: también son ventajas competitivas para ti en el mercado.",
    },
    advantages: {
      eyebrow: "LA VENTAJA KEMERYA",
      title: "TÚ VENDES. NOSOTROS OPERAMOS.",
      intro:
        "Tu papel consiste en vender y atender a los clientes. El nuestro, en garantizar una ejecución impecable en Egipto, desde los permisos y las guías hasta los traslados sin contratiempos.",
    },
    capabilities: {
      eyebrow: "LO QUE PODEMOS OFRECER",
      title: "GESTIÓN INTEGRAL DE VIAJES EN EGIPTO",
      intro:
        "Desde la idea inicial hasta la ejecución sobre el terreno, ofrecemos toda la gama de servicios turísticos en Egipto que tus clientes apreciarán.",
    },
    categories: {
      eyebrow: "CATEGORÍAS COMERCIALES",
      title: "CUATRO FORMAS DE VENDER EGIPTO",
      intro:
        "Cada categoría abre un enfoque diferente para el desarrollo de productos de Egipto: descubrimientos urbanos, itinerarios inmersivos, escapadas costeras y viajes fluviales lentos.",
      cta: "Explorar",
    },
    journeys: {
      eyebrow: "MODELOS DE VIAJES DESTACADOS",
      title: "CUATRO ARQUETIPOS DE VIAJE.",
      intro:
        "Estos modelos reflejan lo que los socios internacionales solicitan con mayor frecuencia: atmósfera, privacidad y conexión cultural profunda.",
      cta: "VER TODOS LOS VIAJES",
    },
    testimonials: {
      eyebrow: "EXPERIENCIAS DE VIAJEROS",
      title: "LO QUE DICEN LOS VIAJEROS QUE CONFIARON EN KEMERYA.",
    },
    partnership: {
      eyebrow: "CÓMO FUNCIONA",
      title: "UNA COLABORACIÓN SENCILLA EN 5 PASOS",
      intro: "Empezar es sencillo. Aquí te mostramos cómo trabajamos juntos.",
    },
    contact: {
      eyebrow: "SOLICITUD DE COLABORACIÓN",
      title: "¿TE INTERESA COLABORAR?",
      subtitle: "HABLEMOS DE TU PRODUCTO TURÍSTICO PARA EGIPTO.",
      fields: {
        name: "Nombre Completo",
        email: "Correo Electrónico Profesional",
        company: "Empresa",
        role: "Cargo",
        phone: "Teléfono",
        message:
          "¿Cómo podemos ayudarte? Cuéntanos qué producto turístico te gustaría ofrecer en Egipto y cuál es tu mercado objetivo.",
      },
      submit: "ENVIAR SOLICITUD DE COLABORACIÓN",
      note: "Respondemos en 24 horas laborables. Sin compromiso.",
    },
    conversion: {
      eyebrow: "¿BUSCAS UN SOCIO EN EGIPTO?",
      title: ["HABLEMOS DE EGIPTO.", "TU COLABORACIÓN EMPIEZA AQUÍ."],
      description:
        "¿Quieres añadir Egipto a tu cartera de productos? Crearemos un paquete de colaboración a medida de tu marca.",
      primary: "CONVERTIRSE EN SOCIO",
      secondary: "RESERVA UNA LLAMADA DE 15 MIN",
    },
    footer: {
      blurb:
        "Tu socio egipcio confiable para tours privados y operaciones en tierra confiables.",
      navTitle: "Explorar",
      partnerTitle: "Asociación",
      contactTitle: "Contacto",
      policy: "Política de Privacidad",
      terms: "Términos de Servicio",
      developer: "Diseñado y desarrollado por Omar Elshemy",
      business: {
        headline: "Tu socio egipcio de confianza para viajes privados.",
        address: "Calle Aboul Houl 250, Haram, Guiza, Egipto",
      },
    },
  },
  de: {
    meta: {
      title: "B2B-Partnerschaft Ägypten | Kemerya Tours",
      description:
        "Verlässlicher ägyptischer B2B-Partner für internationale Reiseunternehmen. Private Reisen, zuverlässige Vor-Ort-Operationen und maßgeschneiderte Ägyptenerlebnisse.",
    },
    nav: {
      capabilities: "Leistungen",
      categories: "Kategorien",
      whyPartner: "Warum Partner",
      whoWeWorkWith: "Mit wem wir arbeiten",
      contact: "KONTAKT",
      workWithUs: "Mit uns arbeiten",
    },
    hero: {
      eyebrow: "IHR ÄGYPTEN-PARTNER",
      title: [
        "IHR VERLÄSSLICHER PARTNER FÜR ÄGYPTEN.",
        "IHRE ÄGYPTEN-EXPERTISE. UNSERE UMSETZUNG VOR ORT.",
        "PRIVATE REISEN. REIBUNGSLOSE PARTNERSCHAFT.",
        "LASSEN SIE UNS GEMEINSAM ÄGYPTEN-REISEANGEBOTE ENTWICKELN.",
      ],
      subtitle:
        "Lokale Expertise, individuelle Reisen und zuverlässige Abläufe vor Ort für internationale Reiseunternehmen.",
      primary: "WERDEN SIE PARTNER",
      secondary: "PARTNERSCHAFTSINFO",
      note: "10+ Jahre Erfahrung • 2.000+ Reisende • 4,9 Bewertung",
    },
    trust: {
      eyebrow: "AUF DEM BODEN BEWÄHRT",
      statement:
        "Boutique-Local-Operator mit nachgewiesenen Ergebnissen in Ägypten seit 2016.",
      items: [
        { value: "10+", label: "Jahre Erfahrung" },
        { value: "2,000+", label: "Reisende begleitet" },
        { value: "4.9", label: "Durchschnittsbewertung" },
        { value: "100%", label: "Maßgeschneiderte Routen" },
        { value: "24/7", label: "Vor-Ort-Support" },
      ],
    },
    whoKemerya: {
      eyebrow: "GEGRÜNDET 2016 • KAIRO, ÄGYPTEN",
      title: "MEHR ALS EIN REISEVERANSTALTER.",
      subtitle: "IHR LOKALER PARTNER IN ÄGYPTEN.",
      intro: "Kemerya ist ein spezialisierter Reiseveranstalter in Ägypten, der auf die Zusammenarbeit mit Partnern ausgerichtet ist.",
      paragraphs: [
        "Wir sind kein Massenanbieter. Wir sind ein sorgfältig ausgewähltes Netzwerk aus Ägyptologen, lokalen Handwerkern und Dienstleistern vor Ort, das seit 2016 persönliche, hochwertige Reisen gestaltet. Jede Reise entwickeln wir so, dass Sie sie reibungslos verkaufen können.",
        "Mit Sitz in Kairo und Aktivitäten am Nil, am Roten Meer und in der Westlichen Wüste sind wir Ihr Team hinter den Kulissen. Sie behalten die Kundenbeziehung und den Umsatz. Wir kümmern uns um alle operativen Details vor Ort in Ägypten.",
      ],
      cta: "WERDEN SIE PARTNER",
    },
    clientTypes: {
      eyebrow: "MIT WEN WIR ARBEITEN",
      title: "INTERNATIONALE REISEUNTERNEHMEN, MIT DENEN WIR ZUSAMMENARBEITEN.",
      intro:
        "Von Luxusreisebüros bis zu Destination-Management-Unternehmen bieten wir Ihnen die Ägypten-Expertise, die Sie brauchen, um Ihren Kunden hochwertige Reisen überzeugend anzubieten.",
    },
    whyPartner: {
      eyebrow: "WARUM PARTNER KEMERYA WÄHLEN",
      title: "DAS MACHT KEMERYA AUS",
      intro:
        "Das sind nicht nur unsere Stärken – das sind Ihre Wettbewerbsvorteile auf dem Markt.",
    },
    advantages: {
      eyebrow: "DER KEMERYA-VORTEIL",
      title: "SIE VERKAUFEN. WIR OPERIEREN.",
      intro:
        "Sie kümmern sich um Vertrieb und Kundenbeziehung. Wir sorgen für die reibungslose Umsetzung vor Ort in Ägypten – von Genehmigungen über lokale Reiseleiter bis hin zu nahtlosen Abläufen.",
    },
    capabilities: {
      eyebrow: "WAS WIR BIETEN",
      title: "KOMPLETTE REISEORGANISATION IN ÄGYPTEN",
      intro:
        "Von der ersten Idee bis zur Umsetzung vor Ort bieten wir das komplette Spektrum an Ägypten-Reisedienstleistungen, die Ihre Kunden lieben werden.",
    },
    categories: {
      eyebrow: "ANGEBOTSKATEGORIEN",
      title: "VIER WEGE, ÄGYPTEN ZU VERKAUFEN",
      intro:
        "Jede Kategorie eröffnet einen anderen Ansatz für Ägypten-Reiseangebote: urbane Entdeckungen, intensive Rundreisen, Auszeiten an der Küste und entschleunigte Flussreisen.",
      cta: "Entdecken",
    },
    journeys: {
      eyebrow: "MARKANTE REISEMODELLE",
      title: "VIER REISEARCHETYPEN.",
      intro:
        "Diese Modelle spiegeln wider, was internationale Partner am häufigsten verlangen: Atmosphäre, Privatsphäre und tiefe kulturelle Verbindung.",
      cta: "ALLE REISEN ANSEHEN",
    },
    testimonials: {
      eyebrow: "REISEERFAHRUNGEN",
      title: "WAS GÄSTE ÜBER KEMERYA SAGEN.",
    },
    partnership: {
      eyebrow: "WIE ES FUNKTIONIERT",
      title: "EINE PARTNERSCHAFT IN 5 EINFACHEN SCHRITTEN",
      intro: "Der Start ist einfach. So arbeiten wir zusammen.",
    },
    contact: {
      eyebrow: "PARTNERSCHAFTSANFRAGE",
      title: "BEREIT FÜR EINE PARTNERSCHAFT?",
      subtitle: "LASSEN SIE UNS ÜBER IHR ÄGYPTEN-PRODUKT REDEN.",
      fields: {
        name: "Vollständiger Name",
        email: "Geschäfts-E-Mail",
        company: "Unternehmen",
        role: "Rolle",
        phone: "Telefon",
        message:
          "Wie können wir helfen? Erzählen Sie uns von Ihrem idealen Reiseangebot für Ägypten und Ihrem Zielmarkt.",
      },
      submit: "PARTNERSCHAFTSANFRAGE SENDEN",
      note: "Wir antworten innerhalb von 24 Arbeitsstunden. Unverbindlich.",
    },
    conversion: {
      eyebrow: "IHR NÄCHSTER PARTNER FÜR ÄGYPTEN?",
      title: ["LASSEN SIE UNS ÜBER ÄGYPTEN SPRECHEN.", "IHRE PARTNERSCHAFT BEGINNT HIER."],
      description:
        "Bereit, Ägypten zu Ihrem Produktportfolio hinzuzufügen? Wir erstellen ein maßgeschneidertes Partnerschaftspaket für Ihre Marke.",
      primary: "WERDEN SIE PARTNER",
      secondary: "15-MINÜTIGES GESPRÄCH BUCHEN",
    },
    footer: {
      blurb:
        "Ihr verlässlicher ägyptischer Partner für private Reisen und zuverlässige Abläufe vor Ort.",
      navTitle: "Erkunden",
      partnerTitle: "Partnerschaft",
      contactTitle: "Kontakt",
      policy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      developer: "Entworfen und entwickelt von Omar Elshemy",
      business: {
        headline: "Ihr verlässlicher ägyptischer Partner für private Reisen.",
        address: "Aboul Houl Straße 250, Haram, Gizeh, Ägypten",
      },
    },
  },
  pt: {
    meta: {
      title: "Parceria B2B no Egito | Kemerya Tours",
      description:
        "Parceiro egípcio confiável para empresas de viagens internacionais. Viagens privadas, operações locais confiáveis e experiências no Egito em marca branca.",
    },
    nav: {
      capabilities: "Capacidades",
      categories: "Categorias",
      whyPartner: "Por que ser parceiro",
      whoWeWorkWith: "Com quem trabalhamos",
      contact: "CONTATO",
      workWithUs: "Trabalhe conosco",
    },
    hero: {
      eyebrow: "SEU PARCEIRO NO EGITO",
      title: [
        "SEU PARCEIRO EGÍPCIO DE CONFIANÇA.",
        "SUA EXPERTISE NO EGITO. NOSSAS OPERAÇÕES LOCAIS.",
        "VIAGENS PRIVADAS. PARCERIA SEM ATRITOS.",
        "VAMOS DESENVOLVER JUNTOS PRODUTOS TURÍSTICOS PARA O EGITO.",
      ],
      subtitle:
        "Conhecimento local, viagens privadas e operações confiáveis no destino para empresas internacionais de viagens.",
      primary: "TORNE-SE PARCEIRO",
      secondary: "INFORMAÇÕES DA PARCERIA",
      note: "10+ anos • 2.000+ viajantes • avaliação 4,9",
    },
    trust: {
      eyebrow: "EXPERIÊNCIA COMPROVADA NO EGITO",
      statement:
        "Operadora local especializada, com resultados comprovados em todo o Egito desde 2016.",
      items: [
        { value: "10+", label: "Anos de operação" },
        { value: "2,000+", label: "Viajantes atendidos" },
        { value: "4.9", label: "Avaliação média" },
        { value: "100%", label: "Roteiros personalizados" },
        { value: "24/7", label: "Assistência no destino" },
      ],
    },
    whoKemerya: {
      eyebrow: "FUNDADO EM 2016 • CAIRO, EGITO",
      title: "MAIS DO QUE UM OPERADOR TURÍSTICO.",
      subtitle: "SEU PARCEIRO LOCAL NO EGITO.",
      intro: "A Kemerya é uma operadora de turismo especializada no Egito, criada para uma nova era de parcerias.",
      paragraphs: [
        "Não somos uma operadora de massa. Somos uma rede cuidadosamente selecionada de egiptólogos, artesãos locais e equipes de operação em campo que criam viagens personalizadas e de alto padrão desde 2016. Cada roteiro é pensado para que você possa vendê-lo sem complicações.",
        "Com sede no Cairo e operações no Nilo, no Mar Vermelho e no Deserto Ocidental, atuamos nos bastidores como sua equipe local. Você mantém o relacionamento com o cliente e fica com a receita. Nós cuidamos de todos os detalhes operacionais no Egito.",
      ],
      cta: "TORNE-SE PARCEIRO",
    },
    clientTypes: {
      eyebrow: "COM QUEM TRABALHAMOS",
      title: "EMPRESAS INTERNACIONAIS DE TURISMO COM AS QUAIS TRABALHAMOS.",
      intro:
        "De agências de viagens de luxo a empresas de gestão de destinos, oferecemos o conhecimento especializado sobre o Egito de que você precisa para apresentar viagens de alto padrão aos seus clientes com confiança.",
    },
    whyPartner: {
      eyebrow: "POR QUE OS PARCEIROS ESCOLHEM KEMERYA",
      title: "A DIFERENÇA KEMERYA",
      intro:
        "Estes não são apenas os nossos pontos fortes: são também vantagens competitivas para si no mercado.",
    },
    advantages: {
      eyebrow: "A VANTAGEM KEMERYA",
      title: "VOCÊ VENDE. NÓS OPERAMOS.",
      intro:
        "O seu papel é cuidar das vendas e da relação com o cliente. O nosso é garantir uma execução impecável no Egito, das autorizações aos guias e aos deslocamentos sem contratempos.",
    },
    capabilities: {
      eyebrow: "O QUE PODEMOS ENTREGAR",
      title: "OPERAÇÕES NO EGITO DE PONTA A PONTA",
      intro:
        "Da conceção inicial à operação no destino, oferecemos a gama completa de serviços turísticos no Egito que os seus clientes vão apreciar.",
    },
    categories: {
      eyebrow: "CATEGORIAS COMERCIAIS",
      title: "QUATRO FORMAS DE VENDER O EGITO",
      intro:
        "Cada categoria oferece uma abordagem diferente para desenvolver produtos turísticos no Egito: experiências urbanas, itinerários imersivos, estadias no litoral e viagens fluviais num ritmo tranquilo.",
      cta: "Explorar",
    },
    journeys: {
      eyebrow: "MODELOS DE VIAGEM DISTINTIVOS",
      title: "QUATRO ARQUÉTIPOS DE VIAGEM.",
      intro:
        "Esses modelos refletem o que os parceiros internacionais mais pedem: atmosfera, privacidade e conexão cultural profunda.",
      cta: "VER TODOS OS ROTEIROS",
    },
    testimonials: {
      eyebrow: "DEPOIMENTOS DE VIAJANTES",
      title: "O QUE DIZEM OS CLIENTES QUE CONFIARAM NA KEMERYA.",
    },
    partnership: {
      eyebrow: "COMO FUNCIONA",
      title: "UMA PARCERIA SIMPLES EM 5 ETAPAS",
      intro: "Começar é simples. Veja como trabalhamos juntos.",
    },
    contact: {
      eyebrow: "CONSULTA DE PARCERIA",
      title: "PRONTO PARA UMA PARCERIA?",
      subtitle: "VAMOS FALAR SOBRE SEU PRODUTO TURÍSTICO PARA O EGITO.",
      fields: {
        name: "Nome completo",
        email: "E-mail corporativo",
        company: "Empresa",
        role: "Cargo",
        phone: "Telefone",
        message:
          "Como podemos ajudar? Conte-nos qual produto turístico pretende oferecer no Egito e qual é o seu mercado-alvo.",
      },
      submit: "ENVIAR CONSULTA DE PARCERIA",
      note: "Respondemos em até 24 horas úteis. Sem compromisso.",
    },
    conversion: {
      eyebrow: "SEU PRÓXIMO PARCEIRO NO EGITO?",
      title: ["VAMOS FALAR SOBRE O EGITO.", "SUA PARCERIA COMEÇA AQUI."],
      description:
        "Pronto para adicionar o Egito ao seu portfólio? Vamos criar um pacote personalizado para sua marca.",
      primary: "TORNE-SE PARCEIRO",
      secondary: "AGENDAR UMA CHAMADA DE 15 MIN",
    },
    footer: {
      blurb:
        "Seu parceiro egípcio de confiança para viagens privadas e operações confiáveis no Egito.",
      navTitle: "Explorar",
      partnerTitle: "Parceria",
      contactTitle: "Contato",
      policy: "Política de Privacidade",
      terms: "Termos de Serviço",
      developer: "Desenhado e desenvolvido por Omar Elshemy",
      business: {
        headline: "Seu parceiro egípcio confiável para viagens privadas.",
        address: "Rua Aboul Houl 250, Haram, Gizé, Egito",
      },
    },
  },
  nl: {
    meta: {
      title: "B2B-partnerschap Egypte | Kemerya Tours",
      description:
        "Vertrouwde Egyptische B2B-partner voor internationale reisbedrijven. Privéreizen, betrouwbare operaties ter plaatse en premium Egyptische ervaringen.",
    },
    nav: {
      capabilities: "Mogelijkheden",
      categories: "Categorieën",
      whyPartner: "Waarom partner",
      whoWeWorkWith: "Met wie werken we samen",
      contact: "CONTACT",
      workWithUs: "Werk met ons",
    },
    hero: {
      eyebrow: "UW EGYPTE-PARTNER",
      title: [
        "UW VERTROUWDE EGYPTE-PARTNER.",
        "UW EXPERTISE IN EGYPTE. ONZE LOKALE OPERATIES.",
        "PRIVÉREIZEN. NAADLOZE SAMENWERKING.",
        "LATEN WE SAMEN REISPRODUCTEN VOOR EGYPTE ONTWIKKELEN.",
      ],
      subtitle:
        "Lokale expertise, privéreizen en naadloze operaties voor internationale reisbedrijven.",
      primary: "WORD PARTNER",
      secondary: "PARTNERSCHAPSINFO",
      note: "10+ jaar ervaring • 2.000+ reizigers • beoordeling 4,9",
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
      eyebrow: "OPGERICHT IN 2016 • CAÏRO, EGYPTE",
      title: "MEER DAN EEN TOUROPERATOR.",
      subtitle: "UW LOKALE PARTNER IN EGYPTE.",
      intro: "Kemerya is een kleinschalige touroperator in Egypte, klaar voor een nieuw tijdperk van samenwerking.",
      paragraphs: [
        "We zijn geen touroperator voor massatoerisme. We zijn een zorgvuldig samengesteld netwerk van Egyptologen, lokale ambachtslieden en lokale uitvoerders dat sinds 2016 kleinschalige reizen in het hogere segment samenstelt. Elke reis die we maken, is zo ontworpen dat u die eenvoudig aan uw klanten kunt verkopen.",
        "Vanuit Caïro, met activiteiten langs de Nijl, aan de Rode Zee en in de Westelijke Woestijn, zijn we uw team achter de schermen. De klantrelatie en inkomsten zijn van u. Wij verzorgen ter plaatse alle operationele details in Egypte.",
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
        "Dit zijn niet alleen onze sterktes — het zijn uw concurrentievoordelen op de markt.",
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
      eyebrow: "COMMERCIËLE CATEGORIEËN",
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
    testimonials: {
      eyebrow: "REISERVARINGEN",
      title: "WAT GASTEN OVER KEMERYA ZEGGEN.",
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
      note: "Wij reageren binnen 24 werkuren. Vrijblijvend.",
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
        "Uw vertrouwde Egyptische partner voor privéreizen en betrouwbare uitvoering ter plaatse.",
      navTitle: "Verkennen",
      partnerTitle: "Partnerschap",
      contactTitle: "Contact",
      policy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      developer: "Ontworpen en ontwikkeld door Omar Elshemy",
      business: {
        headline: "Uw vertrouwde Egyptische partner voor privéreizen.",
        address: "Aboul Houlstraat 250, Haram, Gizeh, Egypte",
      },
    },
  },
  zh: {
    meta: {
      title: "埃及 B2B 合作 | Kemerya Tours",
      description:
        "国际旅行企业的可靠埃及 B2B 合作伙伴。私人定制旅程、稳定的地面运营及高端埃及体验。",
    },
    nav: {
      capabilities: "能力",
      categories: "类别",
      whyPartner: "为何合作",
      whoWeWorkWith: "合作对象",
      contact: "联系",
      workWithUs: "与我们合作",
    },
    hero: {
      eyebrow: "您的埃及合作伙伴",
      title: [
        "您值得信赖的埃及合作伙伴。",
        "您的埃及专业知识。我们的本地运营能力。",
        "私人旅行。无缝合作。",
        "让我们共同打造埃及产品。",
      ],
      subtitle:
        "本地专业知识、私人旅行以及国际旅行企业所需的高效地面运营支持。",
      primary: "成为合作伙伴",
      secondary: "合作信息",
      note: "10+ 年运营 • 2,000+ 位旅客 • 4.9 评分",
    },
    trust: {
      eyebrow: "实地运营实力",
      statement:
        "从 2016 年起，作为精品本地运营商，我们在埃及取得了持续且可验证的成果。",
      items: [
        { value: "10+", label: "运营年限" },
        { value: "2,000+", label: "旅客接待量" },
        { value: "4.9", label: "平均评分" },
        { value: "100%", label: "定制路线" },
        { value: "24/7", label: "地面支持" },
      ],
    },
    whoKemerya: {
      eyebrow: "成立于 2016 • 开罗，埃及",
      title: "不只是旅行运营商。",
      subtitle: "您在埃及的本地合作伙伴。",
      intro: "Kemerya 是一家精品埃及旅游运营商，致力于以合作伙伴模式开展业务。",
      paragraphs: [
        "我们不是面向大众市场的旅游运营商，而是由埃及学专家导游、本地工匠和当地执行团队组成的精选网络，自 2016 年起为旅客打造私密、高品质的旅程。我们设计的每条行程，都便于您向客户销售。",
        "我们总部位于开罗，业务覆盖尼罗河沿岸、红海地区和西部沙漠，是您可靠的幕后运营团队。客户关系和收益由您掌握，我们负责埃及当地的所有运营细节。",
      ],
      cta: "成为合作伙伴",
    },
    clientTypes: {
      eyebrow: "我们合作的对象",
      title: "我们合作的国际旅行企业。",
      intro:
        "从奢华旅行社到目的地管理公司，我们为您提供所需的埃及专业知识，助您自信地向客户推出高端旅程。",
    },
    whyPartner: {
      eyebrow: "为什么合作伙伴选择 Kemerya",
      title: "Kemerya 的独特之处",
      intro:
        "这些不仅是我们的优势，也是您在市场中的竞争优势。",
    },
    advantages: {
      eyebrow: "Kemerya 的优势",
      title: "您销售。我们执行。",
      intro:
        "您负责面向客户的销售，我们负责确保埃及当地运营顺利无误，包括许可办理、导游安排和各环节衔接。",
    },
    capabilities: {
      eyebrow: "我们能提供什么",
      title: "埃及全程运营服务",
      intro:
        "从初步构想到当地执行，我们提供客户喜爱的全方位埃及旅游服务。",
    },
    categories: {
      eyebrow: "商业类别",
      title: "开拓埃及旅游产品的四种方式",
      intro:
        "每个类别都带来不同的埃及产品开发思路：城市探索、沉浸式路线、海岸度假和慢游尼罗河。",
      cta: "探索",
    },
    journeys: {
      eyebrow: "标志性路线模型",
      title: "四种经典旅程类型。",
      intro:
        "这些旅程体现了国际合作伙伴最常提出的需求：独特氛围、私密体验与深度文化交流。",
      cta: "查看全部线路",
    },
    testimonials: {
      eyebrow: "旅客体验",
      title: "听听信赖 Kemerya 的旅客怎么说。",
    },
    partnership: {
      eyebrow: "合作方式",
      title: "一个简单的 5 步合作流程",
      intro: "合作流程很简单，以下是我们的合作方式。",
    },
    contact: {
      eyebrow: "合作咨询",
      title: "准备好合作了吗？",
      subtitle: "让我们聊聊您的埃及产品。",
      fields: {
        name: "全名",
        email: "商务邮箱",
        company: "公司",
        role: "职位",
        phone: "电话",
        message:
          "我们如何帮助您？告诉我们您理想的埃及产品和目标市场。",
      },
      submit: "发送合作咨询",
      note: "我们将在 24 个工作小时内回复。提交咨询无需承担任何义务。",
    },
    conversion: {
      eyebrow: "正在寻找值得信赖的埃及合作伙伴？",
      title: ["让我们谈谈埃及。", "合作从这里开始。"],
      description:
        "准备好把埃及加入您的产品组合了吗？我们将为您的品牌量身定制合作方案。",
      primary: "成为合作伙伴",
      secondary: "预约 15 分钟通话",
    },
    footer: {
      blurb:
        "您值得信赖的埃及合作伙伴，为您打造私人定制旅程并提供可靠的当地运营服务。",
      navTitle: "探索",
      partnerTitle: "合作",
      contactTitle: "联系",
      policy: "隐私政策",
      terms: "服务条款",
      developer: "由 Omar Elshemy 设计与开发",
      business: {
        headline: "您值得信赖的埃及私人旅行伙伴。",
        address: "阿布尔·胡尔街 250 号，哈拉姆，吉萨，埃及",
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

export type LocalizedPair = readonly [title: string, description: string];

export type DatasetTranslations = {
  capabilities: readonly LocalizedPair[];
  clientTypes: readonly LocalizedPair[];
  whyPartner: readonly LocalizedPair[];
  advantages: readonly LocalizedPair[];
  partnershipSteps: readonly LocalizedPair[];
  commercialCategories: readonly LocalizedPair[];
  journeys: readonly LocalizedPair[];
  testimonials: readonly LocalizedPair[];
};

export const datasetTranslations: Record<Exclude<Locale, "en">, DatasetTranslations> = {
  ar: {
    capabilities: [
      ["رحلات خاصة", "مسارات مصممة خصيصًا لمجموعة عميلك، مع مرشدين خاصين من علماء المصريات وخدمات لوجستية من الدرجة الأولى."],
      ["برامج المجموعات", "رحلات لمجموعات صغيرة من 4 إلى 12 ضيفًا، مصممة لمستشاري السفر الذين يبحثون عن أسعار واضحة ومزايا الوفورات المشتركة."],
      ["مسارات مصممة خصيصًا", "تُبنى كل رحلة حول اهتمامات عميلك ووتيرته وموعد السفر المناسب له، من دون مواعيد ثابتة للمجموعات."],
      ["رحلات نيلية", "تجارب على متن مراكب الدهبيّة واليخوت النيلية من فئة الخمس نجوم، مع جولات برية على ضفاف النهر بإرشاد خبراء."],
      ["رحلات الشاطئ", "تجارب سلسة في الموانئ لركاب الرحلات البحرية في البحر المتوسط والبحر الأحمر، مع الالتزام بالمواعيد في كل مرة."],
      ["تجارب ثقافية أصيلة", "دروس طهي أصيلة، وورش حرفية، وزيارات للقرى النوبية، وموائد محلية عامرة."],
      ["رحلات فاخرة", "إقامات من فئة الخمس نجوم، وتنقلات خاصة، وتجارب راقية مصممة للعملاء الباحثين عن التميز."],
      ["رحلات مهيأة لذوي الإعاقة", "مسارات مهيأة للكراسي المتحركة ومرشدون مدرّبون خصيصًا لتلبية احتياجات التنقل."],
      ["رحلات تصوير فوتوغرافي", "رحلات يقودها مصورون، وتُوقّت للاستمتاع بالساعة الذهبية في أكثر المواقع المصرية جمالًا للتصوير."],
      ["رحلات الشركات والحوافز", "تنظيم متكامل لرحلات الحوافز والفعاليات المؤسسية، بما يشمل إدارة المشاريع وإعداد التقارير."],
      ["خدمات العلامة البيضاء", "علامتك التجارية وأسعارك، وعملياتنا على الأرض في مصر."],
      ["تصميم منتجات مخصصة", "ابتكروا معنا منتجات مصرية فريدة، مع وصول حصري وعقود خاصة."],
    ],
    clientTypes: [
      ["وكالات السفر الفاخر", "شركات بيع راقية تبحث عن تجارب مصرية حصرية بخدمة متكاملة لعملائها من ذوي الملاءة المالية العالية."],
      ["منظمو الرحلات", "منظمو رحلات راسخون يرغبون في إضافة برامج سفر إلى مصر بدعم تشغيلي موثوق."],
      ["مستشارو السفر", "مستشارون مستقلون يبحثون عن مسارات مصرية موثوقة تتيح عمولات مناسبة."],
      ["شركات إدارة الوجهات", "شركات إدارة وجهات تتوسع إلى مصر عبر مشغّل محلي موثوق وخاضع للتدقيق."],
      ["مسؤولو سفر الشركات", "مخططو اجتماعات وحوافز ومؤتمرات ومعارض يصممون فعاليات ورحلات مكافآت."],
      ["مخططو الحوافز والمكافآت", "مصممون يبتكرون رحلات حوافز مؤثرة على النيل وما وراءه."],
    ],
    whyPartner: [
      ["خبرة محلية", "علماء مصريات مرخصون، ورواة قصص نوبيون، ومضيفون من البدو، جميعهم موثوقون ومدرّبون."],
      ["شراكة بالعلامة البيضاء", "علامتك وشعارك وأسعارك وعلاقتك بالعميل؛ ونحن نعمل خلف الكواليس."],
      ["برامج مصممة خصيصًا", "لا مواعيد أو مسارات ثابتة؛ نصمم البرامج وفق اهتمامات العميل ووتيرته وموسم السفر."],
      ["عمليات ميدانية موثوقة", "نقل مرخص، ودعم طارئ على مدار الساعة، ومرشدون متعددو اللغات، وخطط بديلة أثبتت كفاءتها في أكثر من 2,000 رحلة."],
      ["خصوصية وتجارب حصرية", "إمكانية الوصول لكبار الشخصيات، وزيارات بعد ساعات العمل، وتجارب تسوق حصرية."],
      ["تكاليف مباشرة", "من دون هوامش الوسطاء؛ أسعار مباشرة وعمولة لك."],
      ["دعم للشركاء على مدار الساعة", "دعم مخصص قبل الرحلة وأثناءها وبعدها، مع فريق يتحدث لغة الشريك."],
      ["سياحة مسؤولة", "المجتمعات المحلية أولًا، مع دعم الحرفيين والحفاظ على البيئة والحد من الأثر."],
      ["عميلك وعلاقتك التجارية", "لن نتواصل مع عملائك مباشرة؛ أنت صاحب العلاقة بهم."],
      ["تعاون يتطور باستمرار", "مراجعات ربع سنوية، وتطوير للمنتجات، وتحسينات مبنية على الملاحظات."],
    ],
    advantages: [
      ["العلاقة مع العميل", "العلاقة لك؛ لا نتواصل مع عملائك أبدًا."],
      ["الخدمات اللوجستية والعمليات", "نتولى التصاريح والنقل والمرشدين وكل التفاصيل، ونضمن تنفيذًا متقنًا."],
      ["الخبرة المحلية", "مرشدون من علماء المصريات، ورواة قصص نوبيون، ومضيفون من البدو."],
      ["هيكل العمولات", "أسعار شفافة وتنافسية لرحلات التعريف بالوجهة، ولك حرية تحديد هامشك وأسعارك."],
      ["اتساق العلامة التجارية", "نحافظ على علامتك وصوتها، ونقدم الخدمة باسمك."],
    ],
    partnershipSteps: [
      ["الاستشارة الأولية", "نتعرف إلى علامتك التجارية وقاعدة عملائك والتجارب المصرية التي تنشدها."],
      ["عرض مخصص", "باقة مصممة لاحتياجاتك، تشمل الأسعار والعمولات ومسارات نموذجية."],
      ["عمليات سلسة", "يسافر عملاؤك براحة بينما نتولى نحن كل التفاصيل الميدانية."],
      ["دعم متواصل", "مكتب مخصص لدعم الشركاء على مدار الساعة طوال فترة السفر."],
      ["شراكة مستمرة", "ملاحظات ومراجعات ربع سنوية وتطوير متواصل للمنتجات."],
    ],
    commercialCategories: [
      ["اكتشاف المدن", "تراث القاهرة والإسكندرية والأقصر، وأسواقها وثقافتها."],
      ["مسارات غامرة", "تواصل مع المجتمعات المحلية، برفقة علماء المصريات، في قلب مصر التاريخي."],
      ["عطلات ساحلية", "شواطئ البحر الأحمر والبحر المتوسط، والغوص والاسترخاء وكرم الضيافة."],
      ["رحلات نهرية على مهل", "رحلات على متن الدهبيّة واليخوت النيلية لاكتشاف المناظر الطبيعية والمجتمعات على ضفاف النهر."],
    ],
    journeys: [
      ["رحلة خاصة إلى القاهرة والجيزة", "مدخل غامر إلى مصر، مع إرشاد شخصي بين مواقعها الأيقونية."],
      ["رحلة مصر الفاخرة", "إقامات أنيقة وتخطيط سلس ووجهات مختارة بإيقاع متوازن لتجربة لا تُنسى."],
      ["رحلة نيلية على متن الدهبيّة", "إبحار هادئ وحميم على النيل، بإيقاع مريح وتواصل أعمق مع المكان."],
      ["رحلة عائلية في مصر", "مسارات خاصة مدروسة وسهلة التنقل، مصممة لتناسب أفراد العائلة من جميع الأعمار."],
    ],
    testimonials: [
      ["مسافر موثّق · الولايات المتحدة", "جعلت Kemerya رحلتنا إلى مصر لا تُنسى. كان كل شيء مرتبًا بإتقان، من مرشد عالم المصريات الخاص عند الأهرامات إلى الإبحار بالفلوكة على النيل وقت الغروب."],
      ["شغوف بالسفر · المملكة المتحدة", "صُممت لنا رحلة خاصة لعشرة أيام بين القاهرة والأقصر وأسوان. وقد أضافت معرفة الفريق وشغفه بالتاريخ قيمة إلى كل لحظة."],
      ["مسافر بمفرده · أستراليا", "كانت التجربة رائعة من أول رسالة بريد إلكتروني حتى الوداع. تولى الفريق رحلة عائلية مع أطفال بصبر، وجعلها ممتعة ودافئة."],
    ],
  },
  fr: {
    capabilities: [
      ["Voyages privés", "Des itinéraires conçus exclusivement pour le groupe de votre client, avec des égyptologues dédiés et une logistique de premier ordre."],
      ["Programmes en petits groupes", "Des départs de 4 à 12 voyageurs, pensés pour les conseillers qui recherchent des tarifs prévisibles et les avantages d’un voyage partagé."],
      ["Itinéraires sur mesure", "Chaque voyage s’adapte aux envies, au rythme et à la saison préférée de votre client, sans dates de départ fixes en groupe."],
      ["Croisières sur le Nil", "Des expériences cinq étoiles en dahabieh ou en bateau de croisière, complétées par des excursions guidées par des experts le long du fleuve."],
      ["Excursions à terre", "Des escales parfaitement orchestrées pour les croisiéristes en Méditerranée et en mer Rouge, toujours à l’heure."],
      ["Immersion culturelle", "Cours de cuisine authentiques, ateliers d’artisanat, visites de villages nubiens et festins locaux."],
      ["Voyages de luxe", "Hébergements cinq étoiles, transferts privés et expériences d’exception pour une clientèle haut de gamme."],
      ["Voyages accessibles", "Des itinéraires accessibles en fauteuil roulant et des guides spécialement formés aux besoins liés à la mobilité."],
      ["Safaris photo", "Des voyages menés par un photographe et programmés à l’heure dorée, dans les plus beaux sites d’Égypte."],
      ["Événements d’entreprise et voyages de récompense", "Une prise en charge de bout en bout des voyages de récompense et événements d’entreprise, avec gestion de projet et reporting."],
      ["Services en marque blanche", "Votre marque et vos tarifs, nos opérations en Égypte."],
      ["Conception de produits sur mesure", "Créons ensemble des produits uniques en Égypte, avec accès exclusifs et contrats privés."],
    ],
    clientTypes: [
      ["Agences de voyages de luxe", "Des agences haut de gamme en quête d’expériences exclusives en Égypte et d’un service irréprochable pour une clientèle fortunée."],
      ["Tour-opérateurs", "Des opérateurs établis qui souhaitent proposer des départs en Égypte avec un soutien opérationnel fiable."],
      ["Conseillers en voyages", "Des conseillers indépendants à la recherche d’itinéraires fiables en Égypte et de commissions avantageuses."],
      ["Sociétés de gestion de destination", "Des DMC qui développent leur offre en Égypte avec l’appui d’un opérateur local sélectionné."],
      ["Acheteurs de voyages d’entreprise", "Des organisateurs de réunions, d’incentives, de conférences et de salons qui conçoivent événements et voyages de récompense."],
      ["Organisateurs de voyages de récompense", "Des concepteurs de voyages incentive transformateurs sur le Nil et au-delà."],
    ],
    whyPartner: [
      ["Expertise locale", "Des égyptologues agréés, des conteurs nubiens et des hôtes bédouins sélectionnés et formés."],
      ["Partenariat en marque blanche", "Votre marque, votre logo, vos tarifs et votre relation client ; nous opérons en coulisses."],
      ["Programmes sur mesure", "Aucune date ni aucun itinéraire imposés : chaque programme suit les envies, le rythme et la saison de votre client."],
      ["Opérations fiables sur place", "Transport agréé, assistance d’urgence 24 h/24 et 7 j/7, guides multilingues et plans de secours éprouvés sur plus de 2 000 voyages."],
      ["Expériences privées et exclusives", "Accès VIP, visites en dehors des horaires d’ouverture et expériences de shopping exclusives."],
      ["Coûts directs", "Aucune marge d’intermédiaire : des tarifs directs et votre commission."],
      ["Assistance B2B 24 h/24 et 7 j/7", "Un accompagnement dédié avant, pendant et après le voyage, assuré par une équipe qui parle la langue de votre partenaire."],
      ["Tourisme responsable", "Les communautés d’abord : valorisation des artisans, conservation et faible impact."],
      ["Votre client, votre relation", "Nous ne contactons jamais vos clients directement : vous restez maître de la relation."],
      ["Une collaboration qui évolue", "Des bilans trimestriels, de nouveaux produits et des améliorations guidées par vos retours."],
    ],
    advantages: [
      ["Relation client", "Elle vous appartient ; nous ne contactons jamais vos clients."],
      ["Logistique et opérations", "Nous gérons permis, transport, guides et détails pour assurer une exécution sans faille."],
      ["Expertise locale", "Des guides égyptologues, des conteurs nubiens et des hôtes bédouins."],
      ["Structure des commissions", "Des tarifs transparents et compétitifs pour les voyages de familiarisation ; vous fixez votre marge et vos prix."],
      ["Respect de votre marque", "Une prestation en marque blanche fidèle à votre identité et à votre ton."],
    ],
    partnershipSteps: [
      ["Premier échange", "Nous découvrons votre marque, votre clientèle et les expériences que vous souhaitez proposer en Égypte."],
      ["Proposition personnalisée", "Une offre adaptée, avec tarifs, commissions et exemples d’itinéraires."],
      ["Opérations sans accroc", "Vos clients voyagent pendant que nous prenons en charge toute l’organisation sur place."],
      ["Assistance dédiée", "Un interlocuteur B2B disponible 24 h/24 et 7 j/7 pendant le voyage."],
      ["Partenariat durable", "Des retours, des bilans trimestriels et le développement continu de nouveaux produits."],
    ],
    commercialCategories: [
      ["Découvertes urbaines", "Le patrimoine du Caire, d’Alexandrie et de Louxor, leurs bazars et leur culture."],
      ["Itinéraires immersifs", "À la rencontre des communautés locales, avec des égyptologues, au cœur historique du pays."],
      ["Escapades côtières", "Les plages de la mer Rouge et de la Méditerranée, la plongée, la détente et l’hospitalité."],
      ["Croisières fluviales au rythme lent", "Des voyages en dahabieh ou en croisière sur le Nil, entre paysages et communautés riveraines."],
    ],
    journeys: [
      ["Voyage privé au Caire et à Gizeh", "Une première découverte immersive de l’Égypte, guidée en privé à travers ses sites emblématiques."],
      ["Voyage de luxe en Égypte", "Des séjours élégants, une organisation fluide et des étapes bien rythmées pour des souvenirs durables."],
      ["Voyage en dahabieh sur le Nil", "Une navigation intimiste et paisible, au rythme tranquille et au plus près des lieux."],
      ["Voyage en famille en Égypte", "Des itinéraires privés soigneusement conçus, faciles à suivre et adaptés à tous les âges."],
    ],
    testimonials: [
      ["Voyageur vérifié · États-Unis", "Kemerya a rendu notre voyage en Égypte inoubliable, parfaitement organisé : de notre égyptologue privé aux pyramides à notre balade en felouque sur le Nil au coucher du soleil."],
      ["Passionné de voyages · Royaume-Uni", "Notre itinéraire sur mesure de dix jours au Caire, à Louxor et à Assouan était exceptionnel. La connaissance de l’équipe et sa passion pour l’histoire ont enrichi chaque instant."],
      ["Voyageur solo · Australie", "Tout a été remarquable, du premier e-mail jusqu’aux adieux. L’équipe a organisé avec patience un voyage en famille avec des enfants, dans une ambiance chaleureuse et joyeuse."],
    ],
  },
  it: {
    capabilities: [
      ["Viaggi privati", "Itinerari su misura creati in esclusiva per il gruppo dei tuoi clienti, con guide private egittologhe e logistica di prima classe."],
      ["Programmi di gruppo", "Partenze per piccoli gruppi da 4 a 12 ospiti, pensate per i consulenti di viaggio che desiderano tariffe prevedibili e vantaggi condivisi."],
      ["Itinerari su misura", "Ogni viaggio è costruito intorno agli interessi, ai ritmi e alla stagione preferiti dai tuoi clienti, senza date fisse per i gruppi."],
      ["Crociere sul Nilo", "Esperienze a cinque stelle in dahabiya e in crociera, con escursioni a terra lungo il fiume accompagnate da guide esperte."],
      ["Escursioni a terra", "Esperienze portuali ben organizzate per i passeggeri delle crociere nel Mediterraneo e nel Mar Rosso, sempre puntuali."],
      ["Immersione culturale", "Autentiche lezioni di cucina, laboratori artigianali, visite ai villaggi nubiani e banchetti locali."],
      ["Viaggi di lusso", "Soggiorni a cinque stelle, trasferimenti privati ed esperienze esclusive per una clientela di alto profilo."],
      ["Viaggi accessibili", "Itinerari accessibili in sedia a rotelle e guide con formazione specifica per le esigenze di mobilità."],
      ["Safari fotografici", "Viaggi guidati da fotografi, programmati nelle ore della luce dorata nei siti più fotogenici d'Egitto."],
      ["Viaggi incentive ed eventi aziendali", "Viaggi incentive ed eventi aziendali gestiti dall'inizio alla fine, con project management e reportistica."],
      ["Servizi white label", "Il tuo brand e i tuoi prezzi, con le nostre operazioni in Egitto."],
      ["Progettazione di prodotti su misura", "Creiamo insieme prodotti unici in Egitto, con accessi esclusivi e contratti privati."],
    ],
    clientTypes: [
      ["Agenzie di viaggi di lusso", "Operatori di fascia alta che cercano esperienze esclusive in Egitto e un servizio impeccabile per una clientela facoltosa."],
      ["Tour operator", "Operatori affermati che desiderano aggiungere partenze in Egitto con il supporto operativo necessario."],
      ["Consulenti di viaggio", "Consulenti indipendenti in cerca di itinerari affidabili in Egitto, con commissioni vantaggiose."],
      ["Destination management company", "DMC che ampliano la propria offerta all'Egitto attraverso un operatore locale selezionato e affidabile."],
      ["Acquirenti di viaggi aziendali", "Organizzatori di eventi MICE e viaggi incentive che progettano eventi e viaggi premio."],
      ["Organizzatori di viaggi incentive e programmi premio", "Professionisti che creano viaggi incentive straordinari sul Nilo e oltre."],
    ],
    whyPartner: [
      ["Competenza locale", "Egittologi abilitati, narratori nubiani e ospiti beduini selezionati e formati."],
      ["Partnership white label", "Il tuo brand, logo, prezzi e rapporto con il cliente; noi lavoriamo dietro le quinte."],
      ["Programmi su misura", "Nessuna data o itinerario prestabilito: ogni programma segue gli interessi, i ritmi e la stagione preferiti dal cliente."],
      ["Operazioni affidabili sul posto", "Trasporti autorizzati, assistenza d'emergenza 24 ore su 24, 7 giorni su 7, guide multilingue e piani di emergenza collaudati in oltre 2.000 viaggi."],
      ["Esperienze private ed esclusive", "Accessi VIP, visite fuori orario ed esperienze esclusive nel commercio locale."],
      ["Costi diretti", "Nessun ricarico di intermediari: tariffe dirette e commissioni per te."],
      ["Supporto B2B 24/7", "Un referente dedicato prima, durante e dopo il viaggio, che parla la lingua del partner."],
      ["Turismo etico", "Al centro ci sono le comunità locali, gli artigiani, la tutela del patrimonio e un impatto ridotto."],
      ["I tuoi clienti, il tuo rapporto", "Non contattiamo mai direttamente i tuoi clienti: il rapporto resta tuo."],
      ["Una collaborazione in continua evoluzione", "Revisioni trimestrali, nuovi prodotti e miglioramenti basati sui feedback."],
    ],
    advantages: [
      ["Il rapporto con il cliente", "È tuo: non contattiamo mai i tuoi clienti."],
      ["Logistica e operazioni", "Gestiamo con precisione permessi, trasporti, guide e ogni dettaglio."],
      ["Competenza locale", "Guide egittologhe, narratori nubiani e ospiti beduini."],
      ["Struttura delle commissioni", "Tariffe FAM trasparenti e competitive; sei tu a definire ricarico e prezzi."],
      ["Coerenza del brand", "Il tuo brand e la tua voce, con un servizio white label."],
    ],
    partnershipSteps: [
      ["Consulenza iniziale", "Conosciamo il tuo brand, la clientela e le esperienze in Egitto che desideri offrire."],
      ["Proposta su misura", "Un pacchetto personalizzato con prezzi, commissioni e itinerari di esempio."],
      ["Operazioni senza intoppi", "I tuoi clienti viaggiano mentre noi gestiamo ogni dettaglio sul posto."],
      ["Supporto attivo", "Un desk B2B dedicato, disponibile 24/7 durante il viaggio."],
      ["Partnership continuativa", "Raccogliamo feedback, svolgiamo revisioni trimestrali e sviluppiamo nuovi prodotti nel tempo."],
    ],
    commercialCategories: [
      ["Scoperte urbane", "Patrimonio, bazar e cultura del Cairo, di Alessandria e di Luxor."],
      ["Itinerari immersivi", "Comunità locali, egittologi e il cuore storico del Paese."],
      ["Fughe sulla costa", "Spiagge, immersioni, relax e ospitalità sul Mar Rosso e sul Mediterraneo."],
      ["Viaggi lenti sul fiume", "Crociere in dahabiya e sul Nilo, tra paesaggi e comunità locali."],
    ],
    journeys: [
      ["Viaggio privato al Cairo e a Giza", "Un'introduzione coinvolgente all'Egitto, con una guida personale tra i suoi luoghi iconici."],
      ["Viaggio di lusso in Egitto", "Soggiorni eleganti, organizzazione senza pensieri e tappe memorabili con ritmi ben calibrati."],
      ["Viaggio in dahabiya sul Nilo", "Una navigazione lenta e intima sul Nilo, dal ritmo disteso e profondamente legata ai luoghi."],
      ["Viaggio in famiglia in Egitto", "Itinerari privati curati e semplici da vivere, pensati per le famiglie e adatti a tutte le età."],
    ],
    testimonials: [
      ["Viaggiatore verificato · Stati Uniti", "Kemerya ha reso indimenticabile il nostro viaggio in Egitto, organizzando tutto alla perfezione: dalla guida egittologa privata alle piramidi fino alla feluca sul Nilo al tramonto."],
      ["Appassionato di viaggi · Regno Unito", "L'itinerario su misura di 10 giorni tra Cairo, Luxor e Assuan e la conoscenza e passione per la storia del team hanno reso speciale ogni momento."],
      ["Viaggiatore in solitaria · Australia", "Un servizio eccellente, dalla prima email ai saluti finali. Durante il tour in famiglia, il team ha seguito i bambini con pazienza e calore, rendendo tutto divertente."],
    ],
  },
  es: {
    capabilities: [
      ["Viajes privados", "Itinerarios a medida creados en exclusiva para el grupo de tus clientes, con guías egiptólogos privados y una logística de primer nivel."],
      ["Programas en grupo", "Salidas para grupos pequeños de 4 a 12 viajeros, pensadas para asesores de viajes que buscan precios previsibles y ventajas compartidas."],
      ["Itinerarios a medida", "Cada viaje se diseña según los intereses, el ritmo y la temporada preferidos de tus clientes, sin fechas fijas para grupos."],
      ["Cruceros por el Nilo", "Experiencias de cinco estrellas en dahabiya y crucero, con excursiones en tierra por el río acompañadas por guías expertos."],
      ["Excursiones en tierra", "Experiencias portuarias bien coordinadas para pasajeros de cruceros por el Mediterráneo y el mar Rojo, siempre puntuales."],
      ["Inmersión cultural", "Auténticas clases de cocina, talleres artesanales, visitas a pueblos nubios y celebraciones gastronómicas locales."],
      ["Viajes de lujo", "Alojamientos de cinco estrellas, traslados privados y experiencias exclusivas para clientes de alto nivel."],
      ["Viajes accesibles", "Itinerarios accesibles en silla de ruedas y guías con formación específica para atender necesidades de movilidad."],
      ["Safaris fotográficos", "Viajes dirigidos por fotógrafos, programados para aprovechar la hora dorada en los lugares más fotogénicos de Egipto."],
      ["Viajes de incentivo y eventos corporativos", "Viajes de incentivo y eventos corporativos de principio a fin, con gestión de proyectos e informes."],
      ["Servicios de marca blanca", "Tu marca y tus precios, con nuestra operación en Egipto."],
      ["Diseño de productos a medida", "Creamos contigo productos únicos en Egipto, con acceso exclusivo y acuerdos privados."],
    ],
    clientTypes: [
      ["Agencias de viajes de lujo", "Agencias de alta gama que buscan experiencias exclusivas en Egipto y un servicio impecable para clientes de alto poder adquisitivo."],
      ["Touroperadores", "Operadores consolidados que quieren incorporar salidas a Egipto con respaldo operativo."],
      ["Asesores de viajes", "Asesores independientes que buscan itinerarios fiables por Egipto y comisiones competitivas."],
      ["Empresas de gestión de destinos", "DMC que amplían su oferta a Egipto mediante un operador local de confianza y previamente seleccionado."],
      ["Responsables de viajes corporativos", "Organizadores de eventos MICE y viajes de incentivo que diseñan eventos y viajes de recompensa."],
      ["Organizadores de incentivos y programas de recompensas", "Diseñadores de viajes de incentivo transformadores por el Nilo y más allá."],
    ],
    whyPartner: [
      ["Experiencia local", "Egiptólogos acreditados, narradores nubios y anfitriones beduinos seleccionados y formados."],
      ["Colaboración de marca blanca", "Tu marca, logotipo, precios y relación con el cliente; nosotros trabajamos entre bastidores."],
      ["Programas a medida", "Sin fechas ni rutas fijas: cada programa se adapta a los intereses, el ritmo y la temporada preferidos del cliente."],
      ["Operaciones fiables sobre el terreno", "Transporte autorizado, asistencia de emergencia 24/7, guías multilingües y planes de contingencia probados en más de 2.000 viajes."],
      ["Experiencias privadas y exclusivas", "Acceso VIP, visitas fuera del horario habitual y experiencias comerciales exclusivas."],
      ["Costes directos", "Sin recargos de intermediarios: tarifas directas y tu comisión."],
      ["Asistencia B2B 24/7", "Un contacto dedicado antes, durante y después del viaje, que habla el idioma del socio."],
      ["Turismo ético", "Las comunidades locales, los artesanos, la conservación y el bajo impacto son prioritarios."],
      ["Tus clientes, tu relación", "Nunca contactamos directamente con tus clientes: tú mantienes la relación."],
      ["Una colaboración en evolución", "Revisiones trimestrales, nuevos productos y mejoras basadas en los comentarios."],
    ],
    advantages: [
      ["La relación con el cliente", "Es tuya: nunca contactamos directamente con tus clientes."],
      ["Logística y operaciones", "Nos ocupamos con precisión de permisos, transporte, guías y todos los detalles."],
      ["Experiencia local", "Guías egiptólogos, narradores nubios y anfitriones beduinos."],
      ["Estructura de comisiones", "Tarifas FAM transparentes y competitivas; tú defines el margen y los precios."],
      ["Coherencia de marca", "Tu marca y tu voz, con un servicio de marca blanca."],
    ],
    partnershipSteps: [
      ["Consulta inicial", "Conocemos tu marca, tu clientela y las experiencias en Egipto que quieres ofrecer."],
      ["Propuesta personalizada", "Un paquete a medida con precios, comisiones e itinerarios de ejemplo."],
      ["Operaciones sin complicaciones", "Tus clientes viajan mientras nosotros nos ocupamos de todos los detalles sobre el terreno."],
      ["Asistencia activa", "Un equipo B2B dedicado, disponible 24/7 durante el viaje."],
      ["Colaboración continua", "Recopilamos comentarios, hacemos revisiones trimestrales y desarrollamos nuevos productos de forma continua."],
    ],
    commercialCategories: [
      ["Descubrimientos urbanos", "Patrimonio, bazares y cultura en El Cairo, Alejandría y Luxor."],
      ["Itinerarios inmersivos", "Comunidades locales, egiptólogos y el corazón histórico del país."],
      ["Escapadas costeras", "Playas, buceo, descanso y hospitalidad en el mar Rojo y el Mediterráneo."],
      ["Viajes tranquilos por el río", "Cruceros en dahabiya y por el Nilo, entre paisajes y comunidades locales."],
    ],
    journeys: [
      ["Viaje privado a El Cairo y Guiza", "Una introducción envolvente a Egipto, con acompañamiento personal por sus lugares más emblemáticos."],
      ["Viaje de lujo por Egipto", "Estancias elegantes, una planificación fluida y destinos memorables a un ritmo bien pensado."],
      ["Viaje en dahabiya por el Nilo", "Una travesía íntima y pausada por el Nilo, con tiempo para disfrutar del entorno y conectar con el lugar."],
      ["Viaje familiar por Egipto", "Itinerarios privados, cómodos y bien organizados para familias, pensados para todas las edades."],
    ],
    testimonials: [
      ["Viajero verificado · Estados Unidos", "Kemerya hizo que nuestro viaje a Egipto fuera inolvidable y lo organizó a la perfección: desde el egiptólogo privado en las pirámides hasta el paseo en faluca por el Nilo al atardecer."],
      ["Entusiasta de los viajes · Reino Unido", "El itinerario a medida de 10 días por El Cairo, Luxor y Asuán, junto con los conocimientos y la pasión del equipo por la historia, hicieron que cada momento fuera especial."],
      ["Viajero en solitario · Australia", "Un servicio extraordinario, desde el primer correo hasta la despedida. En el viaje familiar, el equipo atendió a los niños con paciencia y calidez, y consiguió que todos se divirtieran."],
    ],
  },
  de: {
    capabilities: [
      ["Private Reisen", "Maßgeschneiderte Reisen exklusiv für die Gruppe Ihrer Kunden, mit privaten Ägyptologen und erstklassiger Logistik."],
      ["Gruppenprogramme", "Kleingruppenreisen für 4–12 Gäste, konzipiert für Reiseberater, die planbare Preise und gemeinsame Kostenvorteile schätzen."],
      ["Individuelle Reiseplanung", "Jede Reise richtet sich nach den Interessen, dem Tempo und der Reisezeit Ihrer Kunden – ohne feste Gruppentermine."],
      ["Nilkreuzfahrten", "Fünf-Sterne-Erlebnisse an Bord einer Dahabiya oder eines Kreuzfahrtschiffs, ergänzt durch fachkundig geführte Landausflüge entlang des Nils."],
      ["Landausflüge", "Reibungslos organisierte Hafenerlebnisse für Kreuzfahrtgäste am Mittelmeer und Roten Meer – stets pünktlich."],
      ["Kulturelle Begegnungen", "Authentische Kochkurse, Kunsthandwerks-Workshops, Besuche nubischer Dörfer und gemeinsame Essen mit Einheimischen."],
      ["Luxusreisen", "Fünf-Sterne-Unterkünfte, private Transfers und besondere Erlebnisse für anspruchsvolle Kunden."],
      ["Barrierefreies Reisen", "Rollstuhlgerechte Reiseverläufe und speziell geschulte Guides für Gäste mit eingeschränkter Mobilität."],
      ["Fotografie-Safaris", "Von Fotografen begleitete Reisen, abgestimmt auf die goldene Stunde an Ägyptens fotogensten Orten."],
      ["Firmen- und Incentivereisen", "Komplett organisierte Incentivereisen und Firmenevents mit Projektmanagement und Reporting."],
      ["White-Label-Services", "Ihre Marke und Ihre Preise – wir übernehmen die Organisation vor Ort in Ägypten."],
      ["Individuelle Produktentwicklung", "Entwickeln Sie mit uns einzigartige Ägypten-Produkte mit exklusivem Zugang und direkten Verträgen."],
    ],
    clientTypes: [
      ["Luxusreisebüros", "Hochwertige Anbieter, die wohlorganisierte, exklusive Ägyptenreisen für eine anspruchsvolle Kundschaft suchen."],
      ["Reiseveranstalter", "Etablierte Veranstalter, die ihr Ägypten-Angebot mit verlässlicher operativer Unterstützung erweitern möchten."],
      ["Reiseberater", "Unabhängige Berater, die verlässliche Ägypten-Reisen mit attraktiven Provisionsmöglichkeiten suchen."],
      ["Destinationsmanagement-Unternehmen", "DMCs, die ihr Angebot durch einen geprüften lokalen Veranstalter auf Ägypten ausweiten möchten."],
      ["Einkäufer für Geschäftsreisen", "MICE- und Incentive-Planer, die Events und Prämienreisen gestalten."],
      ["Incentive- und Prämienplaner", "Planer, die außergewöhnliche Incentivereisen entlang des Nils und darüber hinaus entwickeln."],
    ],
    whyPartner: [
      ["Lokale Expertise", "Zertifizierte Ägyptologen, nubische Geschichtenerzähler und Beduinen-Gastgeber – sorgfältig ausgewählt und geschult."],
      ["White-Label-Partnerschaft", "Ihre Marke, Ihr Logo, Ihre Preise und Ihre Kundenbeziehung – wir bleiben im Hintergrund."],
      ["Individuelle Programme", "Keine festen Termine oder Routen: Jede Reise orientiert sich an den Interessen, dem Tempo und der Reisezeit Ihrer Kunden."],
      ["Verlässlicher Service vor Ort", "Lizenzierte Transportanbieter, 24/7-Notfallhilfe, mehrsprachige Guides und bewährte Notfallpläne aus über 2.000 Reisen."],
      ["Private und exklusive Erlebnisse", "VIP-Zugang, Besuche außerhalb der Öffnungszeiten und exklusive Einkaufserlebnisse."],
      ["Direkte Konditionen", "Direktpreise ohne Zwischenaufschläge und mit Ihrer Provision."],
      ["B2B-Support rund um die Uhr", "Persönliche Betreuung vor, während und nach der Reise – mit Ansprechpersonen, die Ihre Sprache sprechen."],
      ["Verantwortungsvoller Tourismus", "Im Mittelpunkt stehen lokale Gemeinschaften, Kunsthandwerker, Naturschutz und umweltschonendes Reisen."],
      ["Ihre Kunden, Ihre Beziehung", "Wir kontaktieren Ihre Kunden niemals direkt. Die Kundenbeziehung bleibt bei Ihnen."],
      ["Partnerschaft mit Perspektive", "Gemeinsame Quartalsgespräche, neue Produkte und kontinuierliche Verbesserungen auf Basis Ihres Feedbacks."],
    ],
    advantages: [
      ["Kundenbeziehung", "Sie behalten die volle Kontrolle – wir kontaktieren Ihre Kunden niemals direkt."],
      ["Logistik und Organisation", "Wir kümmern uns zuverlässig um Genehmigungen, Transport, Guides und alle Details vor Ort."],
      ["Lokale Expertise", "Ägyptologen, nubische Geschichtenerzähler und Beduinen-Gastgeber mit fundierten Ortskenntnissen."],
      ["Provisionsmodell", "Transparente, wettbewerbsfähige FAM-Konditionen; Aufschlag und Preise bestimmen Sie."],
      ["Markenkonformität", "Ihre Marke und Ihre Tonalität – umgesetzt mit unserem White-Label-Service."],
    ],
    partnershipSteps: [
      ["Erstgespräch", "Wir lernen Ihre Marke, Ihre Kundschaft und die gewünschten Ägypten-Erlebnisse kennen."],
      ["Individuelles Angebot", "Sie erhalten ein maßgeschneidertes Paket mit Preisen, Provisionen und Beispielreisen."],
      ["Reibungslose Organisation", "Ihre Kunden reisen, während wir uns um alle Details vor Ort kümmern."],
      ["Persönliche Unterstützung", "Unser engagiertes B2B-Team ist während der Reise rund um die Uhr erreichbar."],
      ["Langfristige Partnerschaft", "Wir tauschen Feedback aus, führen Quartalsgespräche und entwickeln Ihr Angebot kontinuierlich weiter."],
    ],
    commercialCategories: [
      ["Stadterlebnisse", "Kairo, Alexandria und Luxor: Kulturerbe, Basare und lebendige Stadtkultur."],
      ["Reisen mit Tiefgang", "Lokale Gemeinschaften, Begegnungen mit Ägyptologen und das historische Kernland Ägyptens."],
      ["Küstenauszeiten", "Strände am Roten Meer und Mittelmeer, Tauchen, Erholung und herzliche Gastfreundschaft."],
      ["Entschleunigte Nilreisen", "Dahabiya- und Nilkreuzfahrten durch eindrucksvolle Landschaften und lebendige Gemeinschaften."],
    ],
    journeys: [
      ["Private Reise nach Kairo und Gizeh", "Ein intensiver Einstieg in Ägypten mit persönlicher Begleitung zu den berühmtesten Sehenswürdigkeiten."],
      ["Luxusreise durch Ägypten", "Stilvolle Unterkünfte, sorgfältige Planung und ein angenehmer Rhythmus zwischen unvergesslichen Reisezielen."],
      ["Nilreise mit der Dahabiya", "Eine entschleunigte, persönliche Reise auf dem Nil – mit Zeit zum Durchatmen und für tiefere Einblicke in die Region."],
      ["Familienreise durch Ägypten", "Durchdachte private Reiserouten mit entspanntem Ablauf, die Gästen jeden Alters gerecht werden."],
    ],
    testimonials: [
      ["Verifizierter Reisender · USA", "Kemerya hat unsere Ägyptenreise unvergesslich gemacht. Von unserem privaten Ägyptologen an den Pyramiden bis zur Felukenfahrt auf dem Nil bei Sonnenuntergang war alles perfekt organisiert."],
      ["Reisebegeisterter · UK", "Unsere maßgeschneiderte zehntägige Reise durch Kairo, Luxor und Assuan war hervorragend. Das Wissen und die Begeisterung des Teams für Geschichte haben jeden Moment bereichert."],
      ["Alleinreisende · Australien", "Vom ersten Kontakt per E-Mail bis zum Abschied war alles ausgezeichnet. Unsere Familienreise mit Kindern wurde geduldig, unterhaltsam und herzlich gestaltet."],
    ],
  },
  pt: {
    capabilities: [
      ["Viagens Privadas", "Itinerários personalizados, criados exclusivamente para o grupo dos seus clientes, com egiptólogos privados e logística de primeira classe."],
      ["Programas para Grupos", "Saídas para pequenos grupos de 4 a 12 viajantes, pensadas para consultores de viagem que procuram preços previsíveis e vantagens de escala."],
      ["Itinerários Personalizados", "Cada viagem é concebida de acordo com os interesses, o ritmo e a época preferida dos seus clientes, sem datas fixas para grupos."],
      ["Cruzeiros no Nilo", "Experiências de cinco estrelas em dahabiyas e navios de cruzeiro, com excursões em terra acompanhadas por especialistas ao longo do rio."],
      ["Excursões em Escala", "Experiências portuárias bem coordenadas para passageiros de cruzeiros no Mediterrâneo e no Mar Vermelho, sempre pontuais."],
      ["Imersão Cultural", "Aulas de culinária autênticas, oficinas de artesanato, visitas a aldeias núbias e refeições partilhadas com a população local."],
      ["Viagens de Luxo", "Alojamentos de cinco estrelas, transfers privados e experiências exclusivas para clientes exigentes."],
      ["Viagens Acessíveis", "Itinerários acessíveis a cadeiras de rodas e guias com formação específica para apoiar pessoas com mobilidade reduzida."],
      ["Safáris Fotográficos", "Viagens acompanhadas por fotógrafos e planeadas para aproveitar a hora dourada nos locais mais fotogénicos do Egito."],
      ["Viagens Corporativas e de Incentivo", "Organização integral de viagens de incentivo e eventos corporativos, com gestão de projetos e relatórios."],
      ["Serviços White-Label", "A sua marca e os seus preços; nós tratamos das operações no Egito."],
      ["Desenvolvimento de Produtos Personalizados", "Crie connosco produtos únicos para o Egito, com acesso exclusivo e contratos privados."],
    ],
    clientTypes: [
      ["Agências de Viagens de Luxo", "Agências de gama alta que procuram experiências exclusivas no Egito, com serviço personalizado, para clientes exigentes."],
      ["Operadores Turísticos", "Operadores estabelecidos que pretendem acrescentar viagens ao Egito à sua oferta, com apoio operacional."],
      ["Consultores de Viagem", "Consultores independentes que procuram itinerários fiáveis no Egito e comissões atrativas."],
      ["Empresas de Gestão de Destinos", "DMCs que pretendem expandir a sua atividade para o Egito através de um operador local criteriosamente selecionado."],
      ["Responsáveis por Viagens Corporativas", "Planeadores de MICE e incentivos que concebem eventos e viagens de recompensa."],
      ["Planeadores de Incentivos e Recompensas", "Profissionais que criam viagens de incentivo marcantes pelo Nilo e além."],
    ],
    whyPartner: [
      ["Conhecimento Local", "Egiptólogos licenciados, contadores de histórias núbios e anfitriões beduínos, cuidadosamente selecionados e formados."],
      ["Parceria White-Label", "A sua marca, o seu logótipo, os seus preços e a relação com os seus clientes; nós trabalhamos nos bastidores."],
      ["Programas Personalizados", "Sem datas ou rotas fixas: cada programa é pensado de acordo com os interesses, o ritmo e a época preferida dos clientes."],
      ["Operações Fiáveis no Destino", "Transportes licenciados, apoio de emergência 24/7, guias multilingues e planos de contingência comprovados em mais de 2.000 viagens."],
      ["Experiências Privadas e Exclusivas", "Acesso VIP, visitas fora do horário de funcionamento e experiências de compras exclusivas."],
      ["Custos Diretos", "Tarifas diretas, sem margens de intermediários, com comissão para si."],
      ["Apoio B2B 24/7", "Acompanhamento dedicado antes, durante e depois da viagem, com uma equipa que fala a sua língua."],
      ["Turismo Responsável", "Damos prioridade às comunidades locais, aos artesãos, à conservação e a experiências de baixo impacto."],
      ["Os Seus Clientes, a Sua Relação", "Nunca contactamos os seus clientes diretamente. A relação com eles é sua."],
      ["Colaboração em Evolução", "Revisões trimestrais, novos produtos e melhorias contínuas com base no seu feedback."],
    ],
    advantages: [
      ["Relação com os Clientes", "É sua; nunca contactamos os seus clientes diretamente."],
      ["Logística e Operações", "Tratamos com rigor das autorizações, dos transportes, dos guias e de todos os detalhes no destino."],
      ["Conhecimento Local", "Guias egiptólogos, contadores de histórias núbios e anfitriões beduínos com profundo conhecimento local."],
      ["Estrutura de Comissões", "Condições FAM transparentes e competitivas; define a sua própria margem e os seus preços."],
      ["Coerência com a Sua Marca", "A sua marca e o seu tom de voz, com uma operação white-label."],
    ],
    partnershipSteps: [
      ["Conversa Inicial", "Conhecemos a sua marca, o seu perfil de clientes e as experiências que procura oferecer no Egito."],
      ["Proposta Personalizada", "Preparamos um pacote à medida, com preços, comissões e exemplos de itinerários."],
      ["Operações sem Complicações", "Os seus clientes viajam enquanto tratamos de todos os detalhes no destino."],
      ["Apoio Permanente", "A nossa equipa B2B dedicada está disponível 24/7 durante a viagem."],
      ["Parceria Contínua", "Partilhamos feedback, fazemos revisões trimestrais e desenvolvemos continuamente novos produtos."],
    ],
    commercialCategories: [
      ["Descobertas Urbanas", "Cairo, Alexandria e Luxor: património, bazares e cultura local."],
      ["Itinerários Imersivos", "Comunidades locais, egiptólogos e o coração histórico do Egito."],
      ["Refúgios na Costa", "Praias no Mar Vermelho e no Mediterrâneo, mergulho, descanso e hospitalidade."],
      ["Viagens Tranquilas pelo Nilo", "Dahabiyas e cruzeiros pelo Nilo, entre paisagens marcantes e comunidades locais."],
    ],
    journeys: [
      ["Viagem Privada ao Cairo e a Gizé", "Uma introdução envolvente ao Egito, com acompanhamento personalizado pelos seus locais mais emblemáticos."],
      ["Viagem de Luxo pelo Egito", "Estadias elegantes, planeamento cuidado e um ritmo equilibrado entre destinos memoráveis."],
      ["Viagem pelo Nilo em Dahabiya", "Uma viagem intimista e tranquila pelo Nilo, num ritmo sereno e com uma ligação mais profunda ao destino."],
      ["Viagem em Família pelo Egito", "Itinerários privados cuidadosamente planeados, com um ritmo descontraído e experiências para todas as idades."],
    ],
    testimonials: [
      ["Viajante Verificado · EUA", "A Kemerya tornou a nossa viagem ao Egito inesquecível. Do egiptólogo privado nas pirâmides ao passeio de feluca pelo Nilo ao pôr do sol, tudo foi organizado na perfeição."],
      ["Entusiasta de Viagens · Reino Unido", "Fizemos um itinerário personalizado de 10 dias pelo Cairo, Luxor e Assuão. O conhecimento da equipa e a paixão pela história enriqueceram cada momento."],
      ["Viajante a Solo · Austrália", "A experiência foi excelente, desde o primeiro e-mail até à despedida. A viagem em família com crianças foi organizada com paciência, boa disposição e muito carinho."],
    ],
  },
  nl: {
    capabilities: [
      ["Privéreizen", "Reisprogramma's op maat, exclusief samengesteld voor de groep van je klant, met privégidsen die Egyptoloog zijn en eersteklas logistiek."],
      ["Groepsprogramma's", "Kleinschalige groepsreizen voor 4–12 gasten, met voorspelbare prijzen en gedeelde kostenvoordelen voor reisadviseurs."],
      ["Reizen op maat", "Elke reis sluit aan op de interesses, het reistempo en het seizoen van je klant; geen vaste groepsdata."],
      ["Nijlcruises", "Vijfsterrenreizen per dahabiya of cruiseschip, met deskundig begeleide excursies aan wal langs de rivier."],
      ["Excursies aan wal", "Vlot georganiseerde havenervaringen voor passagiers van cruises op de Middellandse Zee en de Rode Zee, altijd op tijd."],
      ["Culturele onderdompeling", "Authentieke kooklessen, ambachtelijke workshops, bezoeken aan Nubische dorpen en lokale maaltijden."],
      ["Luxereizen", "Vijfsterrenaccommodaties, privétransfers en bijzondere ervaringen voor klanten in het hogere segment."],
      ["Toegankelijke reizen", "Reisprogramma's die toegankelijk zijn met een rolstoel, met speciaal opgeleide gidsen voor gasten met mobiliteitsbehoeften."],
      ["Fotografiesafari's", "Reizen onder leiding van een fotograaf, gepland rond het gouden uur op de meest fotogenieke plekken van Egypte."],
      ["Zakelijke reizen en incentives", "Incentivereizen en zakelijke evenementen van begin tot eind geregeld, inclusief projectmanagement en rapportage."],
      ["White-labeldiensten", "Jouw merk en prijzen, met onze operationele expertise in Egypte achter de schermen."],
      ["Productontwikkeling op maat", "Ontwikkel samen met ons unieke Egypte-producten, met exclusieve toegang en rechtstreekse contracten."],
    ],
    clientTypes: [
      ["Luxereisbureaus", "Premium reisaanbieders die exclusieve, volledig verzorgde Egyptereizen zoeken voor welgestelde klanten."],
      ["Touroperators", "Ervaren touroperators die Egypte-reizen willen toevoegen, met operationele ondersteuning ter plaatse."],
      ["Reisadviseurs", "Onafhankelijke adviseurs die betrouwbare Egypte-reizen zoeken met aantrekkelijke commissiemogelijkheden."],
      ["Bedrijven voor bestemmingsmanagement", "DMC's die hun aanbod uitbreiden naar Egypte via een zorgvuldig geselecteerde lokale operator."],
      ["Zakelijke inkopers van reizen", "Planners van MICE- en incentiveprogramma's die evenementen en beloningsreizen samenstellen."],
      ["Planners van incentives en beloningsreizen", "Ontwerpers van inspirerende incentiveprogramma's langs de Nijl en daarbuiten."],
    ],
    whyPartner: [
      ["Lokale expertise", "Ervaren, erkende Egyptologen, Nubische verhalenvertellers en Bedoeïenenhosts die zorgvuldig zijn geselecteerd en opgeleid."],
      ["White-labelsamenwerking", "Jouw merk, logo, prijzen en klantrelatie blijven van jou; wij werken achter de schermen."],
      ["Reisprogramma's op maat", "Geen vaste data of routes: elk programma sluit aan op de interesses, het tempo en het seizoen van je klant."],
      ["Betrouwbare uitvoering ter plaatse", "Erkende vervoerders, 24/7-noodhulp, meertalige gidsen en beproefde noodplannen, aangescherpt tijdens meer dan 2.000 reizen."],
      ["Privé en exclusief", "VIP-toegang, bezoeken buiten openingstijden en exclusieve winkelervaringen."],
      ["Rechtstreekse tarieven", "Geen opslag van tussenpersonen: je profiteert van rechtstreekse tarieven en bepaalt je eigen commissie."],
      ["24/7-ondersteuning voor partners", "Toegewijde ondersteuning voor, tijdens en na de reis, met een aanspreekpunt dat jouw taal spreekt."],
      ["Ethisch toerisme", "De gemeenschap staat voorop, met ruimte voor ambachtslieden, natuurbescherming en reizen met een kleine impact."],
      ["Jouw klant, jouw relatie", "We benaderen je klanten nooit rechtstreeks; de relatie blijft volledig in handen van jou als partner."],
      ["Samenwerking die blijft groeien", "Elk kwartaal evalueren we de samenwerking, ontwikkelen we producten en verwerken we feedback."],
    ],
    advantages: [
      ["De klantrelatie", "Die blijft van jou; we nemen nooit rechtstreeks contact op met je klanten."],
      ["Logistiek en uitvoering", "Wij verzorgen vergunningen, vervoer, gidsen en alle praktische details tot in de puntjes."],
      ["Lokale expertise", "Egyptoloog-gidsen, Nubische verhalenvertellers en Bedoeïenenhosts."],
      ["Commissiestructuur", "Transparante, concurrerende FAM-tarieven; jij bepaalt je opslag en verkoopprijs."],
      ["Aansluiting op jouw merk", "Jouw merk en tone of voice, met onze dienstverlening onder jouw naam."],
    ],
    partnershipSteps: [
      ["Kennismaking", "We leren je merk, klantenbestand en gewenste Egypte-ervaringen kennen."],
      ["Voorstel op maat", "Een passend pakket met prijzen, commissies en voorbeeldprogramma's."],
      ["Zorgeloze uitvoering", "Terwijl je klanten op reis zijn, regelen wij alle details ter plaatse."],
      ["Actieve ondersteuning", "Tijdens de reis staat ons toegewijde B2B-team 24/7 voor je klaar."],
      ["Langdurige samenwerking", "We verzamelen feedback, evalueren elk kwartaal en blijven samen nieuwe producten ontwikkelen."],
    ],
    commercialCategories: [
      ["Stadse ontdekkingen", "Erfgoed, bazaars en cultuur in Caïro, Alexandrië en Luxor."],
      ["Reizen vol ontmoetingen", "Lokale gemeenschappen, Egyptologen en het historische hart van het land."],
      ["Ontspanning aan de kust", "Stranden, duiken, ontspanning en gastvrijheid aan de Rode Zee en de Middellandse Zee."],
      ["Rustige reizen over de Nijl", "Dahabiya- en Nijlcruises langs landschappen en gemeenschappen, in een ontspannen tempo."],
    ],
    journeys: [
      ["Privéreis Caïro en Gizeh", "Een meeslepende kennismaking met Egypte, met persoonlijke begeleiding langs iconische bezienswaardigheden."],
      ["Luxe reis door Egypte", "Verfijnde verblijven, zorgvuldige planning en een rustig tempo langs bestemmingen die bijblijven."],
      ["Nijlreis per dahabiya", "Een rustige, intieme tocht over de Nijl, met tijd om de omgeving echt te leren kennen."],
      ["Familiereis door Egypte", "Doordachte, ontspannen privéreizen voor het hele gezin, geschikt voor alle leeftijden."],
    ],
    testimonials: [
      ["Geverifieerde reiziger · VS", "Dankzij Kemerya werd Egypte onvergetelijk. Alles was perfect geregeld: van onze privégids, een Egyptoloog bij de piramides, tot een tocht met een felucca over de Nijl bij zonsondergang."],
      ["Reisliefhebber · VK", "Onze tiendaagse reis op maat door Caïro, Luxor en Aswan was fantastisch. De kennis en passie van het team voor geschiedenis maakten elk moment bijzonder."],
      ["Soloreiziger · Australië", "Van mijn eerste e-mail tot het afscheid was alles uitstekend. Het team begeleidde onze familiereis met kinderen met veel geduld; het was leuk en voelde meteen warm en welkom."],
    ],
  },
  zh: {
    capabilities: [
      ["私人定制旅程", "专为客户团队量身打造的专属行程，配备私人埃及学家导游和一流的地接安排。"],
      ["小团体行程", "为旅行顾问设计的精品团期，每团4至12位客人，价格清晰可预期，也能共享团队成本优势。"],
      ["量身定制行程", "每趟旅程都根据客户的兴趣、节奏和出行季节设计，不设固定团期。"],
      ["尼罗河游轮", "五星级达哈比亚帆船与游轮体验，沿途搭配专家带领的岸上游览。"],
      ["岸上观光", "为地中海和红海邮轮旅客安排顺畅的港口体验，准时衔接每段行程。"],
      ["深度文化体验", "地道烹饪课程、手工艺工作坊、努比亚村庄探访和当地宴席。"],
      ["奢华旅行", "五星级住宿、私人接送和高品质体验，满足高端客户需求。"],
      ["无障碍旅行", "提供轮椅无障碍行程，并安排接受过专项培训、熟悉行动需求的导游。"],
      ["摄影之旅", "由摄影师带队，配合黄金时段探访埃及最上镜的景点。"],
      ["企业与奖励旅游", "全程统筹企业活动与奖励旅行，涵盖项目管理和报告。"],
      ["白标服务", "使用您的品牌与定价，由我们在幕后负责埃及地接运营。"],
      ["定制产品设计", "携手打造独特的埃及旅行产品，安排专属体验并签订直接合作协议。"],
    ],
    clientTypes: [
      ["奢华旅行社", "面向高净值客户的高端旅行服务商，寻求独家、周到的埃及旅行体验。"],
      ["旅游运营商", "希望新增埃及线路、并获得当地运营支持的成熟旅游运营商。"],
      ["旅行顾问", "寻求可靠埃及行程和灵活佣金合作的独立旅行顾问。"],
      ["目的地管理公司", "通过经过筛选的当地运营伙伴拓展埃及业务的目的地管理公司。"],
      ["企业差旅采购方", "策划MICE活动、企业活动和奖励旅行的规划人员。"],
      ["奖励与激励旅游策划人", "设计尼罗河沿线及埃及其他地区、令人难忘的奖励旅行。"],
    ],
    whyPartner: [
      ["深厚的本地经验", "由持证埃及学家、努比亚故事讲述者和贝都因接待伙伴组成的团队，均经过严格筛选与培训。"],
      ["白标合作", "您的品牌、标识、定价和客户关系都由您掌握；我们在幕后提供支持。"],
      ["量身定制的行程", "不受固定日期或路线限制，按客户的兴趣、节奏和出行季节灵活设计。"],
      ["可靠的当地运营", "持证交通服务、全天候紧急支持、多语种导游，以及经过2,000多次旅程验证的应急方案。"],
      ["私人专属体验", "贵宾礼遇、闭馆后参观和独家购物体验。"],
      ["直接合作价格", "没有中间商加价，享受直接报价，佣金由您决定。"],
      ["全天候B2B支持", "行前、行程中和行程后均有专人支持，并安排能使用合作伙伴语言沟通的联系人。"],
      ["负责任的旅游", "以当地社区为先，支持手艺人和自然保护，尽量降低旅行影响。"],
      ["客户归您，关系也归您", "我们绝不直接联系您的客户，客户关系始终由您掌握。"],
      ["持续发展的合作", "定期每季度回顾合作、打磨产品，并根据反馈不断改进。"],
    ],
    advantages: [
      ["客户关系", "客户始终归您所有；我们不会直接联系您的客户。"],
      ["物流与运营", "从许可、交通、导游到各项细节，都由我们妥善安排。"],
      ["本地专业团队", "埃及学家导游、努比亚故事讲述者和贝都因接待伙伴。"],
      ["佣金安排", "FAM熟悉考察价格透明且具竞争力，销售加价和定价由您决定。"],
      ["贴合您的品牌", "以您的品牌和表达方式呈现，由我们提供白标服务。"],
    ],
    partnershipSteps: [
      ["初步沟通", "了解您的品牌、客户群，以及您希望提供的埃及体验。"],
      ["定制方案", "根据需求设计专属套餐，并提供价格、佣金方案和行程范例。"],
      ["顺畅执行", "客户安心出行，所有当地安排由我们负责。"],
      ["全程支持", "旅途中由专属B2B服务团队全天候提供支持。"],
      ["长期合作", "收集反馈、每季度回顾合作，并持续共同开发新产品。"],
    ],
    commercialCategories: [
      ["城市探索", "在开罗、亚历山大和卢克索感受历史遗产、集市与城市文化。"],
      ["沉浸式行程", "走近当地社区，在埃及学家的陪伴下探索这片土地的历史腹地。"],
      ["海滨度假", "在红海与地中海享受海滩、潜水、休闲时光和当地款待。"],
      ["尼罗河慢旅", "乘坐达哈比亚帆船或尼罗河游轮，沿途欣赏风光、走近当地社区，从容感受河上旅程。"],
    ],
    journeys: [
      ["开罗与吉萨私人之旅", "在私人导览陪同下走访标志性古迹，沉浸式开启埃及之旅。"],
      ["埃及奢华之旅", "入住雅致酒店，享受周到安排，以舒适节奏探访令人难忘的目的地。"],
      ["尼罗河达哈比亚帆船之旅", "悠然乘船沿尼罗河前行，在宁静的节奏中深入感受当地风土。"],
      ["埃及家庭之旅", "精心设计轻松顺畅的私人家庭行程，适合不同年龄的家庭成员。"],
    ],
    testimonials: [
      ["已验证旅客 · 美国", "Kemerya让埃及之旅变得难以忘怀，安排得无可挑剔：从金字塔旁的私人埃及学家导览，到日落时分乘坐尼罗河帆船。"],
      ["旅行爱好者 · 英国", "这趟为我们量身打造的10天行程涵盖开罗、卢克索和阿斯旺。团队对历史的了解与热爱，让每一刻都更加精彩。"],
      ["独自旅行者 · 澳大利亚", "从第一封邮件到道别，服务始终出色。带孩子参加家庭旅行时，团队耐心周到，让旅程既有趣又温暖。"],
    ],
  },
};

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
  kemeryaToursHome: string;
  openMainMenu: string;
  closeMainMenu: string;
  heroImageAlt: string;
  localGuideImageAlt: string;
  nileImageAlt: string;
  partnershipInquirySubject: string;
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
    kemeryaToursHome: "Kemerya Tours home",
    openMainMenu: "Open main menu",
    closeMainMenu: "Close main menu",
    heroImageAlt: "Private Egypt travel experience near the pyramids",
    localGuideImageAlt: "Local guide sharing insights during an Egypt journey",
    nileImageAlt: "Cinematic view of Egypt and the Nile",
    partnershipInquirySubject: "Partnership Inquiry",
  },
  ar: {
    skipToMainContent: "انتقل إلى المحتوى الرئيسي",
    mainNavigation: "التنقل الرئيسي",
    mobileNavigation: "التنقل عبر الهاتف",
    contactKemeryaTours: "تواصل مع Kemerya Tours",
    becomePartnerKemeryaTours: "انضم إلى شركاء Kemerya Tours",
    visitKemeryaHomepage: "زيارة الصفحة الرئيسية لـ Kemerya Tours",
    partnerWithKemeryaTours: "كن شريكًا لـ Kemerya Tours",
    bookPartnershipConsultation: "احجز مكالمة لمناقشة الشراكة",
    businessProof: "مؤشرات موثوقة على خبرتنا",
    selectLanguage: "اختر اللغة",
    languageSelectorMenu: "قائمة اختيار اللغة",
    socialMediaLinks: "روابط التواصل الاجتماعي",
    legalLinks: "الروابط القانونية",
    explore: "اكتشف",
    private: "خاص",
    messageField: "الرسالة",
    kemeryaToursHome: "الصفحة الرئيسية لـ Kemerya Tours",
    openMainMenu: "افتح القائمة الرئيسية",
    closeMainMenu: "أغلق القائمة الرئيسية",
    heroImageAlt: "تجربة سفر خاصة في مصر بالقرب من الأهرامات",
    localGuideImageAlt: "مرشد محلي يشارك معارفه خلال رحلة في مصر",
    nileImageAlt: "مشهد سينمائي لمصر ونهر النيل",
    partnershipInquirySubject: "استفسار عن الشراكة",
  },
  fr: {
    skipToMainContent: "Aller au contenu principal",
    mainNavigation: "Navigation principale",
    mobileNavigation: "Navigation mobile",
    contactKemeryaTours: "Contacter Kemerya Tours",
    becomePartnerKemeryaTours: "Devenir partenaire de Kemerya Tours",
    visitKemeryaHomepage: "Visiter le site de Kemerya Tours",
    partnerWithKemeryaTours: "Devenir partenaire de Kemerya Tours",
    bookPartnershipConsultation: "Planifier un échange sur le partenariat",
    businessProof: "Nos résultats sur le terrain",
    selectLanguage: "Choisir la langue",
    languageSelectorMenu: "Menu de sélection de la langue",
    socialMediaLinks: "Liens vers les réseaux sociaux",
    legalLinks: "Liens juridiques",
    explore: "Découvrir",
    private: "Privé",
    messageField: "Message",
    kemeryaToursHome: "Accueil de Kemerya Tours",
    openMainMenu: "Ouvrir le menu principal",
    closeMainMenu: "Fermer le menu principal",
    heroImageAlt: "Voyage privé en Égypte près des pyramides",
    localGuideImageAlt: "Un guide local partage ses connaissances pendant un voyage en Égypte",
    nileImageAlt: "Vue cinématographique de l’Égypte et du Nil",
    partnershipInquirySubject: "Demande de partenariat",
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
    kemeryaToursHome: "Home di Kemerya Tours",
    openMainMenu: "Apri il menu principale",
    closeMainMenu: "Chiudi il menu principale",
    heroImageAlt: "Viaggio privato in Egitto vicino alle piramidi",
    localGuideImageAlt: "Una guida locale racconta l’Egitto durante il viaggio",
    nileImageAlt: "Veduta cinematografica dell’Egitto e del Nilo",
    partnershipInquirySubject: "Richiesta di partnership",
  },
  es: {
    skipToMainContent: "Ir al contenido principal",
    mainNavigation: "Navegación principal",
    mobileNavigation: "Navegación móvil",
    contactKemeryaTours: "Contactar con Kemerya Tours",
    becomePartnerKemeryaTours: "Hazte socio de Kemerya Tours",
    visitKemeryaHomepage: "Visitar la web de Kemerya Tours",
    partnerWithKemeryaTours: "Colabora con Kemerya Tours",
    bookPartnershipConsultation: "Concertar una llamada sobre la colaboración",
    businessProof: "Resultados sobre el terreno",
    selectLanguage: "Seleccionar idioma",
    languageSelectorMenu: "Menú de selección de idioma",
    socialMediaLinks: "Enlaces a redes sociales",
    legalLinks: "Enlaces legales",
    explore: "Descubrir",
    private: "Privado",
    messageField: "Mensaje",
    kemeryaToursHome: "Inicio de Kemerya Tours",
    openMainMenu: "Abrir el menú principal",
    closeMainMenu: "Cerrar el menú principal",
    heroImageAlt: "Viaje privado por Egipto cerca de las pirámides",
    localGuideImageAlt: "Un guía local comparte sus conocimientos durante un viaje por Egipto",
    nileImageAlt: "Vista cinematográfica de Egipto y el Nilo",
    partnershipInquirySubject: "Consulta de colaboración",
  },
  de: {
    skipToMainContent: "Zum Hauptinhalt springen",
    mainNavigation: "Hauptnavigation",
    mobileNavigation: "Navigation für Mobilgeräte",
    contactKemeryaTours: "Kemerya Tours kontaktieren",
    becomePartnerKemeryaTours: "Partner von Kemerya Tours werden",
    visitKemeryaHomepage: "Kemerya-Tours-Website besuchen",
    partnerWithKemeryaTours: "Mit Kemerya Tours zusammenarbeiten",
    bookPartnershipConsultation: "Beratungsgespräch zur Partnerschaft buchen",
    businessProof: "Unsere Ergebnisse vor Ort",
    selectLanguage: "Sprache auswählen",
    languageSelectorMenu: "Sprachauswahlmenü",
    socialMediaLinks: "Links zu sozialen Medien",
    legalLinks: "Rechtliche Hinweise",
    explore: "Entdecken",
    private: "Privat",
    messageField: "Nachricht",
    kemeryaToursHome: "Startseite von Kemerya Tours",
    openMainMenu: "Hauptmenü öffnen",
    closeMainMenu: "Hauptmenü schließen",
    heroImageAlt: "Private Ägyptenreise nahe den Pyramiden",
    localGuideImageAlt: "Ein lokaler Guide gibt Einblicke während einer Ägyptenreise",
    nileImageAlt: "Filmischer Blick auf Ägypten und den Nil",
    partnershipInquirySubject: "Partnerschaftsanfrage",
  },
  pt: {
    skipToMainContent: "Ir para o conteúdo principal",
    mainNavigation: "Navegação principal",
    mobileNavigation: "Navegação para dispositivos móveis",
    contactKemeryaTours: "Contactar a Kemerya Tours",
    becomePartnerKemeryaTours: "Tornar-se parceiro da Kemerya Tours",
    visitKemeryaHomepage: "Visitar o site da Kemerya Tours",
    partnerWithKemeryaTours: "Estabelecer parceria com a Kemerya Tours",
    bookPartnershipConsultation: "Marcar uma conversa sobre a parceria",
    businessProof: "Resultados no terreno",
    selectLanguage: "Selecionar idioma",
    languageSelectorMenu: "Menu de seleção de idioma",
    socialMediaLinks: "Ligações para as redes sociais",
    legalLinks: "Ligações legais",
    explore: "Descobrir",
    private: "Privado",
    messageField: "Mensagem",
    kemeryaToursHome: "Página inicial da Kemerya Tours",
    openMainMenu: "Abrir o menu principal",
    closeMainMenu: "Fechar o menu principal",
    heroImageAlt: "Viagem privada pelo Egito perto das pirâmides",
    localGuideImageAlt: "Guia local partilha conhecimentos durante uma viagem pelo Egito",
    nileImageAlt: "Vista cinematográfica do Egito e do Nilo",
    partnershipInquirySubject: "Pedido de parceria",
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
    private: "Privé",
    messageField: "Bericht",
    kemeryaToursHome: "Startpagina van Kemerya Tours",
    openMainMenu: "Hoofdmenu openen",
    closeMainMenu: "Hoofdmenu sluiten",
    heroImageAlt: "Privéreis door Egypte bij de piramides",
    localGuideImageAlt: "Een lokale gids deelt inzichten tijdens een reis door Egypte",
    nileImageAlt: "Sfeervol uitzicht op Egypte en de Nijl",
    partnershipInquirySubject: "Aanvraag voor samenwerking",
  },
  zh: {
    skipToMainContent: "跳转至主要内容",
    mainNavigation: "主导航",
    mobileNavigation: "移动端导航",
    contactKemeryaTours: "联系 Kemerya Tours",
    becomePartnerKemeryaTours: "成为 Kemerya Tours 合作伙伴",
    visitKemeryaHomepage: "访问 Kemerya Tours 官网",
    partnerWithKemeryaTours: "与 Kemerya Tours 合作",
    bookPartnershipConsultation: "预约合作咨询",
    businessProof: "实地运营成果",
    selectLanguage: "选择语言",
    languageSelectorMenu: "语言选择菜单",
    socialMediaLinks: "社交媒体链接",
    legalLinks: "法律信息链接",
    explore: "探索",
    private: "私人定制",
    messageField: "留言",
    kemeryaToursHome: "Kemerya Tours 首页",
    openMainMenu: "打开主菜单",
    closeMainMenu: "关闭主菜单",
    heroImageAlt: "金字塔附近的埃及私人旅行体验",
    localGuideImageAlt: "当地导游在埃及旅途中分享见解",
    nileImageAlt: "埃及与尼罗河的电影般景致",
    partnershipInquirySubject: "合作咨询",
  },
};
