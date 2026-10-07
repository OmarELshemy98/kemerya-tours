import type { Locale } from "@/lib/i18n";

export type Testimonial = {
  name: string;
  label: string;
  quote: string;
};

export type TestimonialsCopy = {
  eyebrow: string;
  title: string;
};

const testimonialsCopy: Record<Locale, TestimonialsCopy> = {
  en: { eyebrow: "PARTNER VOICE", title: "What partners who trusted Kemerya say." },
  ar: { eyebrow: "صوت الشركاء", title: "ماذا يقول الشركاء الذين وثقوا بـ Kemerya." },
  fr: { eyebrow: "VOIX DES PARTENAIRES", title: "Ce que disent les partenaires qui ont fait confiance à Kemerya." },
  de: { eyebrow: "STIMMEN DER PARTNER", title: "Was Partner, die Kemerya vertrauen, sagen." },
  it: { eyebrow: "VOCE DEI PARTNER", title: "Cioè che dicono i partner che hanno fatto fiducia a Kemerya." },
  es: { eyebrow: "VOZ DE LOS PARTNERES", title: "Lo que dicen los partneres que confiaron en Kemerya." },
  pt: { eyebrow: "VOZ DOS PARCEIROS", title: "O que os parceiros que confiaram na Kemerya dizem." },
  nl: { eyebrow: "STEMMEN VAN PARTNERS", title: "Wat partners die Kemerya vertrouwen, zeggen." },
  zh: { eyebrow: "合作伙伴的声音", title: "信任 Kemerya 的合作伙伴怎么说。" },
};

const en: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    label: "Director of Partnerships, Alpine Travel Co.",
    quote:
      "Kemerya turned our Egypt program from a list of bookings into one coordinated operation. Their on-ground team kept every transfer, permit, and guide aligned with our brand standards, so our travelers experienced exactly what we promised.",
  },
  {
    name: "Thomas Berger",
    label: "Groups Manager, Bergmann Reisen",
    quote:
      "Across Cairo, Luxor, and Abu Simbel, their team kept a three-leg itinerary and a last-minute add-on on schedule. We could focus on our guests because the local coordination was flawless.",
  },
  {
    name: "Elena Varga",
    label: "Co-founder, Meridian DMC",
    quote:
      "Booking through Kemerya is the closest thing to having a Cairo office of our own. Every handover was accounted for, so we never chased a confirmation across time zones.",
  },
  {
    name: "James Armitage",
    label: "Head of Product, Thames Travel House",
    quote:
      "They handle permits, guides, and ground logistics so we can present Egypt with confidence. The partnership feels like a seamless extension of our brand.",
  },
];

const ar: Testimonial[] = [
  {
    name: "سارة ميتشل",
    label: "مديرة الشراكات، شركة ألباين للسفر",
    quote:
      "حوّلت Kemerya برنامجنا في مصر من قائمة حجز بسيطة إلى عملية واحدة منسقة. فريقها المحلي حافظ على كل نقل وتصريح ومرشد بما يتماشى مع معايير علامتنا، لذا عايشت ضيوقنا بالضبط ما وعدناهم به.",
  },
  {
    name: "توماس بيرجرمان",
    label: "مدير المجموعات، Bergmann Reisen",
    quote:
      "عبر القاهرة، الأقصر وأبو سمبل، حافظ فريقها على رحلة بثلاثة مراحل وإضافة في اللحظة الأخيرة وفق الجدول. استطعنا التركيز على ضيوفنا لأن التنسيق المحلي كان نموذجيًا.",
  },
  {
    name: "يلينا فارغا",
    label: "شريكة مؤسس، Meridian DMC",
    quote:
      "الحجز عبر Kemerya هو الأقرب إلى امتلاك مكتب في القاهرة. كانت كل عملية تسليم موثقة، فلم نعد أبدًا نتبع تأكيد عبر التوقيت.",
  },
  {
    name: "جيمس أرميتاج",
    label: "رئيس المنتج، Thames Travel House",
    quote:
      "يتعاملون مع التصاريح والمرشدين والمنطقة الأرضية حتى نتمكن من عرض مصر بثقة. الشراكة تشعر بأنها تمديد سلس لعلامتنا.",
  },
];

const de: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    label: "Direktorin Partnerschaften, Alpine Travel Co.",
    quote:
      "Kemerya verwandelte unser Ägypten-Programm von einer Buchungsliste in eine koordinierte Operation. Ihr Vor-Ort-Team hielt jeden Transfer, jedes Permit und jeden Guide an unseren Marktstandards, also erlebten unsere Reisenden genau das, was wir versprochen hatten.",
  },
  {
    name: "Thomas Berger",
    label: "Gruppenmanager, Bergmann Reisen",
    quote:
      "Von Kairo über Luxor bis Abu Simbel hielt ihr Team ein Dreier-Umfeld und eine Last-Minute-Zusatzleistung pünktlich. Wir konnten uns auf unsere Gäste konzentrieren, weil die lokale Koordination fehlerlos war.",
  },
  {
    name: "Elena Varga",
    label: "Mitgründerin, Meridian DMC",
    quote:
      "Über Kemerya zu buchen, ist das Nächstbeste an ein eigenes Büro in Kairo. Jede Übergabe war dokumentiert, wir haben nie eine Bestätigung über Zeitzonen hinweg jagen müssen.",
  },
  {
    name: "James Armitage",
    label: "Head of Product, Thames Travel House",
    quote:
      "Sie kümmern sich um Genehmigungen, Guides und Bodlogistik, damit wir Ägypten mit Zuversicht präsentieren können. Die Partnerschaft fühlt sich wie eine nahtlose Erweiterung unserer Marke an.",
  },
];

const it: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    label: "Direttore dei Partnership, Alpine Travel Co.",
    quote:
      "Kemerya ha trasformato il nostro programma in Egitto da una semplice lista di prenotazioni a un'operazione coordinata. Il loro team in loco ha allineato ogni trasferimento, permesso e guida ai nostri standard di marca, i nostri viaggiatori hanno vissuto esattamente ciò che avevamo promesso.",
  },
  {
    name: "Thomas Berger",
    label: "Responsabile Gruppi, Bergmann Reisen",
    quote:
      "Attraverso Il Cairo, Luxor e Abu Simbel, il loro team ha mantenuto un itinerario a tre tappe e un'aggiunta last-minute nei tempi. Poterci concentrare sui nostri ospiti perché la logistica locale era impeccabile.",
  },
  {
    name: "Elena Varga",
    label: "Co-fondatrice, Meridian DMC",
    quote:
      "Prenotare tramite Kemerya è la cosa più vicina ad avere i nostri uffici al Cairo. Ogni consegna era documentata, non abbiamo mai inseguìto una conferma attraverso i fusey orari.",
  },
  {
    name: "James Armitage",
    label: "Head of Product, Thames Travel House",
    quote:
      "Si occupano di permessi, guide e logistica terrestre in modo da poter presentare l'Egitto con fiducia. La partnership si sente come un'estensione impeccabile del nostro brand.",
  },
];

const fr: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    label: "Directrice des partenariats, Alpine Travel Co.",
    quote:
      "Kemerya a transformé notre programme en Égypte d'une simple liste de réservations en une opération coordonnée. Leur équipe sur place a aligné chaque transfert, permis et guide sur nos standards de marque — nos voyageurs ont vécu exactement ce que nous avions promis.",
  },
  {
    name: "Thomas Berger",
    label: "Responsable des groupes, Bergmann Reisen",
    quote:
      "À travers Le Caire, Louxor et Abu Simbel, leur équipe a maintenu un itinéraire à trois étapes et un ajout de dernière minute dans les temps. Nous avons pu nous concentrer sur nos clients parce que la coordination locale était impeccable.",
  },
  {
    name: "Elena Varga",
    label: "Co-fondatrice, Meridian DMC",
    quote:
      "Réserver via Kemerya est le plus proche équivalent à disposer de nos propres bureaux au Caire. Chaque passation de dossier était documentée — nous n'avons jamais dû traquer une confirmation à travers les fuseaux horaires.",
  },
  {
    name: "James Armitage",
    label: "Responsable produit, Thames Travel House",
    quote:
      "Ils gèrent les permis, les guides et la logistique terrestre afin que nous puissions présenter l'Égypte avec confiance. Le partenariat ressent comme une extension fluide de notre marque.",
  },
];

const es: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    label: "Directora de Partnerships, Alpine Travel Co.",
    quote:
      "Kemerya convirtió nuestro programa en Egipto de una simple lista de reservas a una operación coordinada. Su equipo in situ alineó cada traslado, permiso y guía con nuestros estándares de marca — nuestros viajeros vivieron exactamente lo que prometimos.",
  },
  {
    name: "Thomas Berger",
    label: "Responsable de Grupos, Bergmann Reisen",
    quote:
      "A través de El Cairo, Luxor y Abu Simbel, su equipo mantuvo una ruta de tres cambios y una adición de última hora a tiempo. Pudimos centrarnos en nuestros clientes porque la coordinación local fue impecable.",
  },
  {
    name: "Elena Varga",
    label: "Cofundadora, Meridian DMC",
    quote:
      "Reservar a través de Kemerya es lo más parecido a tener nuestras propias oficinas en el Cairo. Cada entrega estaba documentada — nunca tuvimos que perseguir una confirmación entre husos horarios.",
  },
  {
    name: "James Armitage",
    label: "Head of Product, Thames Travel House",
    quote:
      "Gestionan permisos, guías y logística terrestre para que podamos presentar Egipto con confianza. La parcería se siente como una extensión perfecta de nuestra marca.",
  },
];

const pt: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    label: "Diretora de Parcerias, Alpine Travel Co.",
    quote:
      "Kemerya transformou nosso programa no Egito de uma simples lista de reservas em uma operação coordenada. Sua equipe in loco alinhou cada transferência, permissão e guia aos nossos padrões de marca, nossos viajantes vivenciaram exatamente o que prometemos.",
  },
  {
    name: "Thomas Berger",
    label: "Gerente de Grupos, Bergmann Reisen",
    quote:
      "De Cairo a Luxor e Abu Simbel, sua equipe manteve uma roteiro de três conexões e uma inclusão de última hora no prazo. Pudemos nos concentrar em nossos clientes porque a coordenação local foi impecável.",
  },
  {
    name: "Elena Varga",
    label: "Cofundadora, Meridian DMC",
    quote:
      "Reservar pela Kemerya é o mais próximo de ter nossos próprios escritório no Cairo. Cada entrega foi documentada, nunca tivemos de perseguir uma confirmação entre fusos horários.",
  },
  {
    name: "James Armitage",
    label: "Head of Product, Thames Travel House",
    quote:
      "Eles lidam com permissões, guias e logística terrestre para que possamos apresentar o Egito com confiança. A parceria parece uma extensão impecável da nossa marca.",
  },
];

const nl: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    label: "Directeur Partnerschappen, Alpine Travel Co.",
    quote:
      "Kemerya veranderde ons Egypte-programma van een woordeloze reserveringslijst naar een opgekende operatie. Hunterrein team hield elke transfer, vergunning en gids op onze merkstandaarden, onze reizigers beleefden precies wat we beloofden.",
  },
  {
    name: "Thomas Berger",
    label: "Groepsmanager, Bergmann Reisen",
    quote:
      "Van Cairo over Luxor naar Abu Simbel hield hun team een driestops itinerary én een last-minute toevoeging op tijd. We konden ons richten op onze gasten omdat de lokale coördinatie vlekkeloos was.",
  },
  {
    name: "Elena Varga",
    label: "Mede-oprichter, Meridian DMC",
    quote:
      "De boekingen via Kemerya zijn het dichtstbijzijnde aan een eigen kantoor in Cairo. Elke overdracht was gedocumenteerd, we hoefden nooit een bevestiging langs tijdzones te jagen.",
  },
  {
    name: "James Armitage",
    label: "Head of Product, Thames Travel House",
    quote:
      "Ze regelen vergunningen, gidsen en terreinlogistiek zodat we Egypte met vertrouwen kunnen presenteren. Het partnerschap voelt als een naadloze uitbreiding van ons merk.",
  },
];

const zh: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    label: "Alpine Travel Co. 合伙伙伴总监",
    quote:
      "Kemerya 将我们在埃及的项目从一份预订清单转化为一次协调一致的运营。他们的现地团队确保每次接送、许可和向导都符合我们的品牌标准，我们的旅行者体验的正是我们承诺的。",
  },
  {
    name: "Thomas Berger",
    label: "Bergmann Reisen 团队经理",
    quote: "穿越开罗、罗克斯顿和阿布塞比勒，我们的三段行程和一项临时添加都按时完成。我们可以专心于我们的客人，因为当地协调毫无瑕疵。",
  },
  {
    name: "Elena Varga",
    label: "Meridian DMC 联合创始人",
    quote: "通过 Kemerya 预订就像拥有我们自己的开罗办事处一样。每次交接都有记录，我们从来不必通过时区追踸确认函。",
  },
  {
    name: "James Armitage",
    label: "Thames Travel House 产品总监",
    quote: "他们处理许可证、向导和地面物流，让我们能够自信地呈现埃及。合作就像我们品牌的无缝延伸。",
  },
];

const byLocale: Record<Locale, Testimonial[]> = {
  en,
  ar,
  fr,
  de,
  it,
  es,
  pt,
  nl,
  zh,
};

export function getTestimonials(locale: Locale): Testimonial[] {
  return byLocale[locale];
}

export function getTestimonialsCopy(locale: Locale): TestimonialsCopy {
  return testimonialsCopy[locale];
}
