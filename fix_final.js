const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
let content = fs.readFileSync(p, 'utf8');

// Fix FR hero title indentation and content
content = content.replace(
  /          title: \[[\s\S]*?L'ÉGYPTE VOUS APPELLE\.[\s\S]*?\],/,
  `      title: [
        "L'ÉGYPTE VOUS APPELLE.",
        "LES PYRAMIDES VOUS ATTENDENT.",
        "VOTRE TABLE EST PRÊTE.",
        "VOTRE ÉGYPTE VOUS ATTEND.",
      ],`
);

// Fix FR hero primary: CONTACT -> CONTACTEZ-NOUS (if still CONTACT)
content = content.replace(
  /(Voyages privés en Égypte"[\s\S]*?title: \[[^\]]*\],[\s\S]*?subtitle: [^,]+,[\s\S]*?primary: )"CONTACT"/,
  '$1"CONTACTEZ-NOUS"'
);

// Fix IT hero title (2-element -> 4-element)
content = content.replace(
  /title: \["L'EGITTO,", "PROGETTATO INTORNO A TE\."\],/,
  `title: [
        "L'EGITTO TI CHIAMA.",
        "LE PIRAMIDI TI ASPETTANO.",
        "IL TUO TAVOLO È PRONTO.",
        "IL TUO EGIPTO TI ASPETTA.",
      ],`
);

// Fix IT hero primary: "CONTACT" -> "CONTATTACI"
content = content.replace(
  /(subtitle: "Viaggi privati. Guide personali. Il tuo ritmo. Il tuo Egitto\.",[\s\n]+primary: )"CONTACT"/,
  '$1"CONTATTACI"'
);

// Fix ES hero primary: "CONTACT" -> "CONTÁCTANOS"
content = content.replace(
  /(subtitle: "Viajes privados. Guías personales. Tu ritmo. Tu Egipto\.",[\s\n]+primary: )"CONTACT"/,
  '$1"CONTÁCTANOS"'
);

fs.writeFileSync(p, content);
console.log('Fixes applied');
