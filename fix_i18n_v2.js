const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
let c = fs.readFileSync(p, 'utf8');

// === AR locale fixes ===
// AR nav: replace destinations/experiences/about with journeys/story
c = c.replace(
  /    nav: \{\n      destinations: "الوجهات",\n      experiences: "التجارب",\n      why: "لماذا كيمريا",\n      about: "من نحن",\n      contact: "تواصل معنا",\n      explore: "استكشف مصر",\n    \},/,
  `    nav: {
      journeys: "الرحلات",
      why: "لماذا كيمريا",
      story: "قصتنا",
      contact: "اتصل بنا",
      explore: "استكشف مصر",
    },`
);
// AR trust: add eyebrow and statement
c = c.replace(
  /    trust: \{\n      items: \[/,
  `    trust: {
      eyebrow: "سفر خاص مدعوم بخبرة حقيقية",
      statement: "رحلات مصر الخاصة المصممة بعناية، بحكمة ومعرفة محلية.",
      items: [`
);
// AR hero title
c = c.replace(
  /      title: \["مصر،", "مصممة حولك\."\],/,
  `      title: [
        "مصر تنادي.",
        "الأهرامات تنتظر.",
        "طاولتك مهيأة.",
        "مصر الخاصة بك تنتظر.",
      ],`
);
// AR story title: merge two-line into one
c = c.replace(
  /      title: "أكثر من رؤية مصر",\n      title: "فهمها\.",/,
  `      eyebrow: "",
      title: "أكثر من رؤية مصر. فهمها.",`
);
// AR cta title: 3 elements to 2 elements
c = c.replace(
  /      title: \["مصر الخاصة بك\.", "سرعتك\.", "رحلتك\."\],/,
  `      title: ["مصر تنادي.", "طاولتك مهيأة."]`
);
// AR cta description: fix the apostrophe
c = c.replace(
  /"لست متأكداً من الاختيار الصحيح؟ أخبرنا وقت السفر، من يرافقك، وما الذي ترغب في تجربته. سنساعدك في تصميم الرحلة وفق احتياجاتك\."/,
  `"لست متأكداً من الاختيار الصحيح؟ أخبرنا متى تسافر، من يرافقك، وما الذي ترغب في تجربته. سنساعدك في تصميم الرحلة حولك."`
);

// === FR locale fixes ===
// FR nav
c = c.replace(
  /      destinations: "Destinations",\n      experiences: "Expériences",\n      why: "Pourquoi Kemerya",\n      about: "À propos",\n      contact: "CONTACTEZ-NOUS",\n      explore: "Découvrir l'Égypte",/,
  `      journeys: "Voyages",
      why: "Pourquoi Kemerya",
      story: "Notre histoire",
      contact: "CONTACT",
      explore: "Découvrir l'Égypte"`
);
// FR trust
c = c.replace(
  /    trust: \{\n      items: \[/,
  `    trust: {
      eyebrow: "Voyage privé, soutenu par une vraie expérience",
      statement: "Des voyages conçus avec clarté, attention et connaissance locale.",
      items: [`
);
// FR hero title
c = c.replace(
  /      title: \["L'ÉGYPTE,", "CONÇUE AUTOUR DE VOUS\."\],/,
  `      title: [
        "L'ÉGYPTE VOUS APPELLE.",
        "LES PYRAMIDES VOUS ATTENDENT.",
        "VOTRE TABLE EST PRÊTE.",
        "VOTRE ÉGYPTE VOUS ATTEND.",
      ],`
);
// FR story title
c = c.replace(
  /      title: "Plus que voir l'Égypte",\n      title: "La comprendre\.",/,
  `      eyebrow: "",
      title: "Plus que voir l'Égypte. La comprendre."`
);
// FR cta title
c = c.replace(
  /      title: \["VOTRE ÉGYPTE.", "VOTRE RYTHME.", "VOTRE VOYAGE."\],/,
  `      title: ["L'ÉGYPTE VOUS APPELLE.", "VOTRE TABLE EST PRÊTE."]`
);

// === IT locale fixes ===
// IT nav
c = c.replace(
  /      destinations: "Destinazioni",\n      experiences: "Esperienze",\n      why: "Perché Kemerya",\n      about: "Chi siamo",\n      contact: "CONTATTACI",\n      explore: "Esplora l'Egitto",/,
  `      journeys: "Viaggi",
      why: "Perché Kemerya",
      story: "La nostra storia",
      contact: "CONTACT",
      explore: "Esplora l'Egitto"`
);
// IT trust
c = c.replace(
  /    trust: \{\n      items: \[/,
  `    trust: {
      eyebrow: "Viaggio privato, sostenuto da un'esperienza autentica",
      statement: "Tour su misura concepiti con chiarezza, cura e conoscenza locale.",
      items: [`
);
// IT hero title
c = c.replace(
  /      title: \["L'EGITTO,", "PROGETTATO INTORNO A TE\."\],/,
  `      title: [
        "L'EGITTO TI CHIAMA.",
        "LE PIRAMIDI TI ASPETTANO.",
        "IL TUO TAVOLO È PRONTO.",
        "IL TUO EGIPTO TI ASPETTA.",
      ],`
);
// IT story title
c = c.replace(
  /      title: "Più che vedere l'Egitto",\n      title: "Capirlo\.",/,
  `      eyebrow: "",
      title: "Più che vedere l'Egitto. Capirlo."`
);
// IT cta title
c = c.replace(
  /      title: \["IL TUO EGITTO.", "IL TUO RITMO.", "IL TUO VIAGGIO."\],/,
  `      title: ["L'EGITTO TI CHIAMA.", "IL TUO TAVOLO È PRONTO."]`
);

// === ES locale fixes ===
// ES nav
c = c.replace(
  /      destinations: "Destinos",\n      experiences: "Experiencias",\n      why: "Por qué Kemerya",\n      about: "Nosotros",\n      contact: "CONTÁCTANOS",\n      explore: "Explora Egipto",/,
  `      journeys: "Viajes",
      why: "Por qué Kemerya",
      story: "Nuestra historia",
      contact: "CONTACT",
      explore: "Explora Egipto"`
);
// ES trust
c = c.replace(
  /    trust: \{\n      items: \[/,
  `    trust: {
      eyebrow: "Viaje privado, respaldado por experiencia real",
      statement: "Viajes privados diseñados con claridad, cuidado y conocimiento local.",
      items: [`
);
// ES hero title
c = c.replace(
  /      title: \["EGIPTO,", "DISEÑADO ALREDEDOR TUYO\."\],/,
  `      title: [
        "EGIPTO TE LLAMA.",
        "LAS PIRÁMIDES TE ESPERAN.",
        "TU MESA ESTÁ PUESTA.",
        "TU EGIPTO TE ESPERA.",
      ],`
);
// ES story title
c = c.replace(
  /      eyebrow: "Más que ver Egipto",\n      title: "Entenderlo\.",/,
  `      eyebrow: "",
      title: "Más que ver Egipto. Comprenderla."`
);
// ES cta title
c = c.replace(
  /      title: \["TU EGIPTO.", "TU RITMO.", "TU VIAJE."\],/,
  `      title: ["EGIPTO TE LLAMA.", "TU MESA ESTÁ PUESTA."]`
);

fs.writeFileSync(p, c);
console.log('All locale updates applied successfully');
