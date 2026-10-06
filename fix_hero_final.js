const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const lines = fs.readFileSync(p, 'utf8').split('\n');

// Fix FR hero title (line 232) and primary (line 234)
for (let i = 0; i < lines.length; i++) {
  // FR hero title
  if (lines[i] && lines[i].includes("L\u2019ÉGYPTE") && lines[i+1] && lines[i+1].includes('CONÇUE AUTOUR')) {
    lines.splice(i, 2,
      '      title: [',
      '        "L\u2019ÉGYPTE VOUS APPELLE.",',
      '        "LES PYRAMIDES VOUS ATTENDENT.",',
      '        "VOTRE TABLE EST PRÊTE.",',
      '        "VOTRE ÉGYPTE VOUS ATTEND.",',
      '      ],'
    );
    break;
  }
}

// Fix FR hero primary: "CONTACT" -> "CONTACTEZ-NOUS" (only the one after subtitle)
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('subtitle:') && lines[i+1] && lines[i+1].includes('primary:') && lines[i+1].includes('CONTACT')) {
    if (lines[i+1].includes('"CONTACT"')) {
      lines[i+1] = lines[i+1].replace('"CONTACT"', '"CONTACTEZ-NOUS"');
    }
    break;
  }
}

// Fix IT hero title (line 321)
for (let i = 0; i < lines.length; i++) {
  if (lines[i] && lines[i].includes("L\u2019EGITTO") && lines[i+1] && lines[i+1].includes('PROGETTATO INTORNO')) {
    lines.splice(i, 2,
      '      title: [',
      '        "L\u2019EGITTO TI CHIAMA.",',
      '        "LE PIRAMIDI TI ASPETTANO.",',
      '        "IL TUO TAVOLO È PRONTO.",',
      '        "IL TUO EGIPTO TI ASPETTA.",',
      '      ],'
    );
    break;
  }
}

// Fix IT hero primary: "CONTACT" -> "CONTATTACI"
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('subtitle:') && lines[i+1] && lines[i+1].includes('primary:') && lines[i+1].includes('CONTACT')) {
    if (lines[i+1].includes('"CONTACT"')) {
      lines[i+1] = lines[i+1].replace('"CONTACT"', '"CONTATTACI"');
    }
    break;
  }
}

// Fix ES hero primary: "CONTACT" -> "CONTÁCTANOS"
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('subtitle:') && lines[i+1] && lines[i+1].includes('primary:') && lines[i+1].includes('"CONTACT"')) {
    if (lines[i].includes('Viajes privados')) {
      lines[i+1] = lines[i+1].replace('"CONTACT"', '"CONTÁCTANOS"');
    }
    break;
  }
}

fs.writeFileSync(p, lines.join('\n'));
console.log('FR/IT/ES hero fixes applied');
