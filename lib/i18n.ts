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
