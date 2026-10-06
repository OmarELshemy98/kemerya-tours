export const locales = ["en", "ar", "fr", "it", "es"] as const;
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
      eyebrow: "WHY PARTNERS CHOOSE KEMER YA",
      title: "THE KEMER YA DIFFERENCE",
      intro:
        "These are not just our strengths — they are your competitive advantages in the market.",
    },
    advantages: {
      eyebrow: "THE KEMER YA ADVANTAGE",
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
      title: "WHAT GUESTS WHO TRUSTED KEMER YA SAY.",
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
        "شريك مصري موثوق لشركات السفر الدولية. رحلات خاصة، عمليات أرضية موثوقة، وتجارب مصر ببيضاء العلامة التجارية.",
    },
    nav: {
      capabilities: "القدرات",
      categories: "الفئات",
      whyPartner: "لماذا الشراكة",
      whoWeWorkWith: "مع من نعمل",
      contact: "اتصل بنا",
      workWithUs: "تعامل معنا",
    },
    hero: {
      eyebrow: "شريكك في مصر",
      title: [
        "شريكك الموثوق في مصر.",
        "خبرتك في مصر. عملياتنا المحلية.",
        "رحلات خاصة. شراكة سلسة.",
        "دعنا نبني منتجات مصر معا.",
      ],
      subtitle:
        "خبرة محلية، رحلات خاصة، وعمليات أرضية سلسة لشركات السفر الدولية.",
      primary: "كن شريكا",
      secondary: "معلومات الشراكة",
      note: "أكثر من 10 سنوات • أكثر من 2000 مسافر • تقييم 4.9",
    },
    trust: {
      eyebrow: "مثبت على الأرض",
      statement: "مشغل مصري متميز بنتائج موثقة عبر مصر منذ 2016.",
      items: [
        { value: "10+", label: "سنوات تشغيل" },
        { value: "2,000+", label: "مسافرون تم تسليمهم" },
        { value: "4.9", label: "تقييم متوسط" },
        { value: "100%", label: "رحلات مخصصة" },
        { value: "24/7", label: "دعم أرضي" },
      ],
    },
    whoKemerya: {
      eyebrow: "تأسس عام 2016 • القاهرة، مصر",
      title: "أكثر من مشغل سياحي.",
      subtitle: "شريكك المحلي في مصر.",
      intro: "Kemerya هي مشغل مصري متميز مصمم لعصر الشراكة.",
      paragraphs: [
        "نحن لسنا مشغل سياحي للأسواق الضخمة. نحن شبكة مختارة من المرشدين المصريين والصانعين المحليين ومعالجي الأرض الذين نشأوا رحلات مصرية داكنة وعالية الجودة منذ 2016. كل راوحة ننشئها مصممة للبيع من قبلك بسلاسة.",
        "مقرنا في القاهرة بعمليات في جميع أنحاء النيل والبحر الأحمر والصحراء الغربية، نحن فريقك الخلفي. أنت تمتلك العلاقة العملاء والإيرادات. نحن نتعامل مع كل التفاصيل التشغيلية على الأرض في مصر.",
      ],
      cta: "كن شريكا معنا",
    },
    clientTypes: {
      eyebrow: "مع من نعمل",
      title: "شركات سفر دولية نشاركها.",
      intro:
        "من وكالات سفر فاخرة إلى شركات إدارة الوجهات، نحن نوفر الخبرة في مصر التي تحتاجها لتقديم رحلات متميزة لعملائك بثقة.",
    },
    whyPartner: {
      eyebrow: "لماذا يختار الشركاء KEMER YA",
      title: "الفرق بين KEMER YA",
      intro: "هذه ليست مجرد قوتنا — هذه ميزات منافسية لك في السوق.",
    },
    advantages: {
      eyebrow: "ميزة KEMER YA",
      title: "أنت تبيع. نحن نتشغيل.",
      intro:
        "دورك هو المبيعات. دورنا هو التنفيذ الكامل على الأرض في مصر — من التصاريح إلى الإرشاد إلى التحويلات السلسة.",
    },
    capabilities: {
      eyebrow: "ما الذي يمكننا تقديمه",
      title: "عمليات مصر الكاملة",
      intro:
        "من الفكرة الأولية إلى التنفيذ على الأرض، نحن نوفر طيفا كاملا من خدمات سفر مصر التي سيعجبك عملاؤك.",
    },
    categories: {
      eyebrow: "الفئات التجارية",
      title: "أربع طرق لبيع مصر",
      intro:
        "كل فئة تفتح منهجا مختلفا لتطوير منتجات مصر: اكتشافات حضرية، راوحات غامرة، إغاقات ساحلية، ورحلات نهرية بطيئة.",
      cta: "استكشف",
    },
    journeys: {
      eyebrow: "نماذج الرحلات الرئيسية",
      title: "أربعة نماذج رحلية.",
      intro:
        "هذه الطرز تعكس ما يطلبه الشركاء الدوليون بشكل متكرر: الجو، الخصوصية، والاتصال الثقافي العميق.",
      cta: "عرض جميع الرحلات",
    },
    testimonials: {
      eyebrow: "تجارب المسافرين",
      title: "ماذا يقول ضيوف KEMER YA الذين وثقوا به.",
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
        email: "البريد النشط للأعمال",
        company: "الشركة",
        role: "الوظيفة",
        phone: "رقم الهاتف",
        message:
          "كيف يمكننا مساعدتك؟ أخبرنا عن منتج مصر المثالي وسوقك المستهدف.",
      },
      submit: "إرسل استفسارا للشراكة",
      note: "نرد خلال 24 ساعة عمل. بدون أي التزام.",
    },
    conversion: {
      eyebrow: "شريكك التالي في مصر؟",
      title: ["دعنا نتحدث عن مصر.", "شراكتك تبدأ هنا."],
      description:
        "هل أنت مستعد لإضافة مصر إلى محفظتك؟ سنبني حزمة شراكة مخصصة لعلامتك التجارية.",
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
        address: "شارع أبو هل 250، الهرم، جيزة، مصر",
      },
    },
  },
  fr: {
    meta: {
      title: "Partenariat B2B Égypte | Kemerya Tours",
      description:
        "Partenaire égyptien de confiance pour les entreprises du tourisme international. Circuits privés, opérations terrain fiables, et expériences Égypte en marque blanche.",
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
      eyebrow: "VOTRE PARTENAIR EN ÉGYPTE",
      title: [
        "VOTRE PARTENAIR ÉGYPTIEN DE CONFIANCE.",
        "VOTRE EXPERTISE EN ÉGYPTE. NOS OPÉRATIONS LOCALES.",
        "TRAVERSÉES PRIVÉES. PARTENARIAT FLUIDE.",
        "CONSTRUISONS DES PRODUITS ÉGYPTE ENSEMBLE.",
      ],
      subtitle:
        "Expertise locale, traversées privées, et opérations terrain fluides pour les entreprises de voyage internationales.",
      primary: "DEVENIR PARTENAire",
      secondary: "INFORMATIONS PARTENARIAT",
      note: "10+ Ans d'Expérience • 2,000+ Voyageurs • Note 4.9",
    },
    trust: {
      eyebrow: "Prouvé Sur Le Terrain",
      statement:
        "Opérateur local de prestige avec des résultats vérifiés à travers l'Égypte depuis 2016.",
      items: [
        { value: "10+", label: "Années d'Expérience" },
        { value: "2,000+", label: "Voyageurs Livrés" },
        { value: "4.9", label: "Note Moyenne" },
        { value: "100%", label: "Itinéraires Sur Mesure" },
        { value: "24/7", label: "Support Terrain" },
      ],
    },
    whoKemerya: {
      eyebrow: "FONDÉ EN 2016 • LE CAIRE, ÉGYPTE",
      title: "PLUS QU'UN OPÉRATEUR TOURISTIQUE.",
      subtitle: "VOTRE PARTENAIR LOCAL EN ÉGYPTE.",
      intro:
        "Kemerya est un opérateur d'Égypte de prestige conçu pour l'ère des partenariats.",
      paragraphs: [
        "Nous ne sommes pas un opérateur de masse. Nous sommes un réseau sélectionné de guides égyptologues, d'artisans locaux et de gestionnaires terrain qui ont été à créer des trajets intimes de haute gamme depuis 2016. Chaque itinéraire que nous créons est conçu pour être vendu par vous — sans heurts.",
        "Basés au Caire avec des opérations à travers le Nil, la Mer Rouge et le Désert Ouest, nous agissons comme votre équipe de derrière les coulisses. Vous possédez la relation client et le revenu. Nous gérons chaque détail opérationnel sur le terrain en Égypte.",
      ],
      cta: "DEVENIR PARTENAire",
    },
    clientTypes: {
      eyebrow: "AVEC QUI NOUS TRAVAILLONS",
      title:
        "ENTREPRISES DE VOYAGE INTERNATIONALES AVEC LESQUELLE NOUS PARTENAISSONS.",
      intro:
        "Des agences de voyage de luxe aux sociétés de gestion de destinations, nous fournissons l'expertise en Égypte dont vous avez besoin pour offrir des trajets premium à vos clients en toute confiance.",
    },
    whyPartner: {
      eyebrow: "POURQUOI LES PARTENAires CHOISISSENT KEMER YA",
      title: "LA DIFFÉRENTIATION KEMER YA",
      intro:
        "Ce ne sont pas seulement nos forces — ce sont vos avantages concurrentiels sur le marché.",
    },
    advantages: {
      eyebrow: "L'AVANTAGE KEMER YA",
      title: "VOUS VENDEZ. NOUS OPÉRONS.",
      intro:
        "Votre rôle est les ventes client. Le nôtre est l'exécution impeccable sur le terrain en Égypte — des permis aux guides en passant par des transitions fluides.",
    },
    capabilities: {
      eyebrow: "CE QUE NOUS POUVONS FAIRE",
      title: "OPÉRATIONS ÉGYPTE DE BOUT EN BOUT",
      intro:
        "Du concept initial à l'exécution sur le terrain, nous fournissons le spectre complet des services de voyage en Égypte que vos clients adoreront.",
    },
    categories: {
      eyebrow: "CATÉGORIES COMMERCIALES",
      title: "QUATRE MANIÈRES DE VENDRE L'ÉGYPTE",
      intro:
        "Chaque catégorie ouvre une approche différente du développement de produits France : découvertes urbaines, itinéraires immersifs, évasions côtières et trajets fluviaux lents.",
      cta: "Explore",
    },
    journeys: {
      eyebrow: "MODÈLES DE TRAJETS SIGNATURE",
      title: "QUATRE ARCHÉTYPE DE TRAJET.",
      intro:
        "Ces modèles reflètent ce que les partenaires internationaux demandent le plus fréquemment : l'atmosphère, la confidentialité et la connexion culturelle profonde.",
      cta: "VOIR TOUS LES TRAJETS",
    },
    testimonials: {
      eyebrow: "EXPÉRIENCES DE VOYAGEURS",
      title: "CE QUE DISENT LES CLIENTs QUI ONT CONFIÉ KEMER YA.",
    },
    partnership: {
      eyebrow: "COMMENT ÇA FONCTIONNE",
      title: "UN PARTENARIAT SIMPLE EN 5 ÉTAPES",
      intro: "Démarrer est simple. Voici comment nous travaillons ensemble.",
    },
    contact: {
      eyebrow: "DEMANDE DE PARTENARIAT",
      title: "PRÊT À DEVENIR PARTENAire ?",
      subtitle: "DISCUTONS DE VOTRE PRODUIT ÉGYPTE.",
      fields: {
        name: "Nom Complet",
        email: "Email Professionnel",
        company: "Entreprise",
        role: "Rôle",
        phone: "Téléphone",
        message:
          "Comment pouvons-nous vous aider ? Parlez-nous de votre produit Égypte idéal et de votre marché cible.",
      },
      submit: "ENVOYER LA DEMANDE DE PARTENARIAT",
      note: "Nous répondons dans les 24 heures ouvrables. Sans obligation.",
    },
    conversion: {
      eyebrow: "VOTRE PROCHAIN PARTENAire EN ÉGYPTE ?",
      title: ["PARLONS ÉGYPTE.", "VOTRE PARTENARIAT COMMENCE ICI."],
      description:
        "Prêt à ajouter l'Égypte à votre portefeuille de produits ? Nous créerons un paquet de partenariat personnalisé pour votre marque.",
      primary: "DEVENIR PARTENAire",
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
      workWithUs: "Lavora Con Noi",
    },
    hero: {
      eyebrow: "IL VOSTRO PARTNER IN EGITTO",
      title: [
        "IL VOSTRO PARTNER EGIZIANO AFFIDABILE.",
        "LA VOSTRA ESPERIENZA IN EGITTO. LE NOSTRE OPERAZIONI LOCALI.",
        "TOUR PRIVATI. PARTNERSHIP FLUIDA.",
        "DIAMO AL CANCRO INSIEME.",
      ],
      subtitle:
        "Esperienza locale, tour privati, e operazioni in loco fluide per le aziende di viaggio internazionali.",
      primary: "DIVENTA PARTNER",
      secondary: "INFORMAZIONI PARTNERSHIP",
      note: "10+ Anni di Attività • 2,000+ Viaggiatori • Valutazione 4.9",
    },
    trust: {
      eyebrow: "VALIDATO IN LOCO",
      statement:
        "Operatore locale de lusso con risultati verificati in tutta l'Egitto dal 2016.",
      items: [
        { value: "10+", label: "Anni di Attività" },
        { value: "2,000+", label: "Viaggiatori Serviti" },
        { value: "4.9", label: "Valutazione Media" },
        { value: "100%", label: "Itinerari Su Misura" },
        { value: "24/7", label: "Supporto in Loco" },
      ],
    },
    whoKemerya: {
      eyebrow: "FONDATA NEL 2016 • IL CAIRO, EGITTO",
      title: "PIÙ DI UN OPERATORE TURISTICO.",
      subtitle: "IL VOSTRO PARTNER LOCALE IN EGITTO.",
      intro:
        "Kemerya è un operatore d'Egitto de lusso progettato per l'era della partnership.",
      paragraphs: [
        "Non siamo un operatore di massa. Siamo una rete selezionata di guide egizologhe, artigiani locali e gestori in loco che da nel 2016 creano viaggi intimi di alta gamma. Ogni itinerario che creiamo è progettato per essere venduto da te — senza intoppi.",
        "Seduti al Cairo con operazioni attraverso il Nilo, il Mar Rosso e il Deserto Ovest, agiamo come la tua squadra dietro le quinte. Tu possiedi la relazione con il cliente e i ricavi. Ci occupiamo di ogni dettaglio operativo in loco in Egitto.",
      ],
      cta: "DIVENTA PARTNER",
    },
    clientTypes: {
      eyebrow: "CON CHI LAVORIAMO",
      title: "AZIENDE DI VIAGGIO INTERNAZIONALI CON CUI PARTNIAMO.",
      intro:
        "Dalle agenzie di viaggio di lusso alle società di gestione delle destinazioni, forniamo l'esperienza in Egitto di cui hai bisogno per offrire tour premium ai tuoi clienti con fiducia.",
    },
    whyPartner: {
      eyebrow: "PERCHÉ I PARTNER SCELGONO KEMER YA",
      title: "LA DIFFERENZA KEMER YA",
      intro:
        "Non sono solo le nostre forze — sono i tuoi vantaggi competitivi sul mercato.",
    },
    advantages: {
      eyebrow: "IL VANTAGGIO KEMER YA",
      title: "TU VENDI. NOI OPERIAMO.",
      intro:
        "Il tuo ruolo è le vendite. Il nostro è l'esecuzione impeccabile in loco in Egitto — dai permessi alle guide fino alle transizioni fluide.",
    },
    capabilities: {
      eyebrow: "COSA POSSIAMO OFFRIRE",
      title: "OPERAZIONI EGIZIE INTEGRATE",
      intro:
        "Dal concetto iniziale all'esecuzione in loco, forniamo l'intero spettro dei servizi di viaggio in Egitto che i tuoi clienti adoreranno.",
    },
    categories: {
      eyebrow: "CATEGORIE COMMERCIALI",
      title: "QUATTRO MODI PER VENDERE L'EGITTO",
      intro:
        "Ogni categoria apre un approccio diverso allo sviluppo del prodotto Egitto: scoperte urbane, itinerari immersivi, soste costiere e viaggi fluviali lenti.",
      cta: "Esplora",
    },
    journeys: {
      eyebrow: "MODELLI DI VIAGGIO FIRMATI",
      title: "QUATTRO ARCHETIPI DI VIAGGIO.",
      intro:
        "Questi modelli riflettono ciò che i partner internazionali richiedono più frequentemente: atmosfera, privacy e connessione culturale profonda.",
      cta: "VEDI TUTTI I VIAGGI",
    },
    testimonials: {
      eyebrow: "ESPERIENZE DEI VIAGGIATORI",
      title: "COSA DICONO I CLIENTI CHE HANNO CONFIATO KEMER YA.",
    },
    partnership: {
      eyebrow: "COME FUNZIONA",
      title: "UNA PARTNERSHIP SEMPLICE IN 5 PASSI",
      intro: "Iniziare è semplice. Ecco come lavoriamo insieme.",
    },
    contact: {
      eyebrow: "RICHIESTA DI PARTNERSHIP",
      title: "PRONTO A DIVENTARE PARTNER?",
      subtitle: "PARLIAMO DEL VOSTRO PRODOTTO EGITTO.",
      fields: {
        name: "Nome Completo",
        email: "Email Aziendale",
        company: "Azienda",
        role: "Ruolo",
        phone: "Telefono",
        message:
          "Come possiamo aiutarti? Parlanos del tuo prodotto Egitto ideale e del tuo mercato di riferimento.",
      },
      submit: "INVIA RICHIESTA DI PARTNERSHIP",
      note: "Rispondiamo entro 24 ore lavorative. Senza impegno.",
    },
    conversion: {
      eyebrow: "IL VOSTRO PROSSIMO PARTNER IN EGITTO?",
      title: ["PARLIAMO DELL'EGITTO.", "LA TUA PARTNERSHIP INIZIA QUI."],
      description:
        "Pronto ad aggiungere l'Egitto al tuo portfolio di prodotti? Creeremo un pacchetto di partnership personalizzato per la tua marca.",
      primary: "DIVENTA PARTNER",
      secondary: "PRENOTA UNA CHIAMATA DI 15 MINUTI",
    },
    footer: {
      blurb:
        "Il tuo partner egiziano affidabile per tour privati e operazioni in loco affidabili.",
      navTitle: "Esplora",
      partnerTitle: "Partnership",
      contactTitle: "Contatti",
      policy: "Politica sulla Privacy",
      terms: "Termini di Servizio",
      developer: "Progettato e sviluppato da Omar Elshemy",
      business: {
        headline: "Il tuo partner egiziano affidabile per viaggi privati.",
        address: "Via Aboul Houl, 250, Il Cairo, Egitto",
      },
    },
  },
  es: {
    meta: {
      title: "Partnership B2B en Egipto | Kemerya Tours",
      description:
        "Socio egipcio confiable para empresas de viajes internacionales. Tours privados, operaciones en tierra confiables, y experiencias de Egipto enmarcadas.",
    },
    nav: {
      capabilities: "Capacidades",
      categories: "Categorías",
      whyPartner: "Por Qué Asociarse",
      whoWeWorkWith: "Con Quiénes Trabajamos",
      contact: "CONTACTO",
      workWithUs: "Trabaja Con Nosotros",
    },
    hero: {
      eyebrow: "TU SOCIO EN EGIPTO",
      title: [
        "TU SOCIO EGIPCIO DE CONFIANZA.",
        "TU EXPERIENCIA EN EGIPTO. NUESTRAS OPERACIONES LOCALES.",
        "TOURS PRIVADOS. ASOCIACIÓN FLUIDA.",
        "CONSTRUYAMOS PRODUCTOS DE EGIPTO JUNTOS.",
      ],
      subtitle:
        "Experiencia local, tours privados y operaciones en tierra fluidas para empresas de viajes internacionales.",
      primary: "CONVERTIRSE EN SOCIO",
      secondary: "INFORMACIÓN DE ASOCIACIÓN",
      note: "10+ Años Operando • 2,000+ Viajeros • Calificación 4.9",
    },
    trust: {
      eyebrow: "VALIDADO EN TIERRA",
      statement:
        "Operador local de boutique con resultados verificados en toda Egipto desde 2016.",
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
      intro:
        "Kemerya es un operador de Egipto de boutique diseñado para la era de las asociaciones.",
      paragraphs: [
        "No somos un operador masivo. Somos una red curada de guías egritólogos, artesanos locales y manejadores de tierra que han estado creando viajes íntimos de alta gama desde 2016. Cada itinerario que creamos está diseñado para ser vendido por ti — sin problemas.",
        "Con sede en El Cairo con operaciones a través del Nilo, el Mar Rojo y el Desierto Oeste, actuamos como tu equipo detrás de los reflectores. Tú posees la relación con el cliente y los ingresos. Nosotros gestionamos cada detalle operativo en tierra en Egipto.",
      ],
      cta: "CONVERTIRSE EN SOCIO",
    },
    clientTypes: {
      eyebrow: "CON QUIÉNES TRABAJAMOS",
      title: "EMPRESAS DE VIAJES INTERNACIONALES CON LAS QUE COLABORAMOS.",
      intro:
        "Desde agencias de viajes de lujo hasta empresas de gestión de destinos, proporcionamos la experiencia en Egipto que necesitas para ofrecer viajes premium a tus clientes con confianza.",
    },
    whyPartner: {
      eyebrow: "POR QUÉ LOS SOCIOS ELIGEN KEMER YA",
      title: "LA DIFERENCIA KEMER YA",
      intro:
        "Estos no son solo nuestras fortalezas — son tus ventajas competitivas en el mercado.",
    },
    advantages: {
      eyebrow: "LA VENTAJA KEMER YA",
      title: "TÚ VENDEN. NOSOTROS OPERAMOS.",
      intro:
        "Tu papel es las ventas. El nuestro es la ejecución impecable en tierra en Egipto — desde permisos hasta guías hasta transiciones fluidas.",
    },
    capabilities: {
      eyebrow: "LO QUE PODEMOS OFRECER",
      title: "OPERACIONES EGIPTO DE PUNTO A PUNTO",
      intro:
        "Del concepto inicial a la ejecución en tierra, proporcionamos el espectro completo de servicios de viaje en Egipto que a tus clientes les encantarán.",
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
      title: "LO QUE DICEN LOS CLIENTES QUE CONFIARON EN KEMER YA.",
    },
    partnership: {
      eyebrow: "CÓMO FUNCIONA",
      title: "UNA ASOCIACIÓN SIMPLE EN 5 PASOS",
      intro: "Empezar es sencillo. Aquí te mostramos cómo trabajamos juntos.",
    },
    contact: {
      eyebrow: "CONSULTA DE ASOCIACIÓN",
      title: "¿LISTO PARA ASOCIARSE?",
      subtitle: "HABLEMOS DE TU PRODUCTO EGIPTO.",
      fields: {
        name: "Nombre Completo",
        email: "Correo Electrónico Profesional",
        company: "Empresa",
        role: "Cargo",
        phone: "Teléfono",
        message:
          "¿Cómo podemos ayudarte? Cuéntanos sobre tu producto Egipcio ideal y tu mercado objetivo.",
      },
      submit: "ENVIAR CONSULTA DE ASOCIACIÓN",
      note: "Respondemos en 24 horas laborables. Sin compromiso.",
    },
    conversion: {
      eyebrow: "¿TU PRÓXIMO SOCIO EN EGIPTO?",
      title: ["HABLEMOS DE EGIPTO.", "TU ASOCIACIÓN COMIENZA AQUÍ."],
      description:
        "¿Listo para agregar Egipto a tu cartera de productos? Crearemos un paquete de asociación personalizado para tu marca.",
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
        headline: "Su socio egipcio de confianza para viajes privados.",
        address: "Calle Aboul Houl 250, El Cairo, Egipto",
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
