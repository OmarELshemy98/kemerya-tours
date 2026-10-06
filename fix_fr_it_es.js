const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const lines = fs.readFileSync(p, 'utf8').split('\n');

// Collect edits for FR, IT, ES nav - change destinations/experiences/about to journeys/story
// and fix contact values
for (let i = 0; i < lines.length; i++) {
  // FR nav
  if (lines[i].includes('destinations: "Destinations"')) {
    lines[i] = '      journeys: "Voyages",';
    lines.splice(i+1, 1); // remove experiences line
  }
  // IT nav
  if (lines[i].includes('destinations: "Destinazioni"')) {
    lines[i] = '      journeys: "Viaggi",';
    lines.splice(i+1, 1); // remove experiences line
  }
  // ES nav
  if (lines[i].includes('destinations: "Destinos"')) {
    lines[i] = '      journeys: "Viajes",';
    lines.splice(i+1, 1); // remove experiences line
  }
}

// Now fix about -> story and contact for FR, IT, ES
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('about: "À propos"')) lines[i] = '      story: "Notre histoire",';
  if (lines[i].includes('about: "Chi siamo"')) lines[i] = '      story: "La nostra storia",';
  if (lines[i].includes('about: "Nosotros"')) lines[i] = '      story: "Nuestra historia",';
  if (lines[i].includes('contact: "CONTACTEZ-NOUS"')) lines[i] = '      contact: "CONTACT",';
  if (lines[i].includes('contact: "CONTATTACI"')) lines[i] = '      contact: "CONTACT",';
  if (lines[i].includes('contact: "CONTÁCTANOS"')) lines[i] = '      contact: "CONTACT",';
}

// Re-read after splicing
const c2 = lines.join('\n');
const l2 = c2.split('\n');

// FR/IT/ES trust: add eyebrow + statement before items
const trustData = [
  { marker: 'Années d', eyebrow: 'Voyage privé, soutenu par une vraie expérience', statement: 'Des voyages conçus avec clarté, attention et connaissance locale.' },
  { marker: 'Anni di', eyebrow: "Viaggio privato, sostenuto da un'esperienza autentica", statement: "Tour su misura concepiti con chiarezza, cura e conoscenza locale." },
  { marker: 'Años de', eyebrow: 'Viaje privado, respaldado por experiencia real', statement: 'Viajes privados diseñados con claridad, cuidado y conocimiento local.' },
];

for (const td of trustData) {
  for (let i = 0; i < l2.length; i++) {
    if (l2[i] && l2[i].includes(td.marker) && l2[i-1] && l2[i-1].trim() === 'items: [') {
      const prevLines = l2.slice(Math.max(0, i-5), i);
      if (!prevLines.some(l => l.includes('eyebrow'))) {
        l2.splice(i-1, 0, 
          '      eyebrow: "' + td.eyebrow + '",',
          '      statement: "' + td.statement + '",'
        );
      }
    }
  }
}

// Re-read after splice
const c3 = l2.join('\n');
const l3 = c3.split('\n');

// FR/IT/ES story: merge split title, add eyebrow
for (let i = 0; i < l3.length; i++) {
  if (l3[i] && l3[i+1]) {
    // FR: eyebrow "Plus que voir l'Égypte" + title "La comprendre."
    if (l3[i].includes('Plus que voir') && l3[i].includes('eyebrow') && l3[i+1].includes('comprendre') && l3[i+1].includes('title')) {
      l3[i] = '      eyebrow: "",';
      l3[i+1] = '      title: "Plus que voir l\u2019Égypte. La comprendre.",';
    }
    // IT: eyebrow "Più che vedere l'Egitto" + title "Capirlo."
    if (l3[i].includes('Più che vedere') && l3[i].includes('eyebrow') && l3[i+1].includes('Capirlo') && l3[i+1].includes('title')) {
      l3[i] = '      eyebrow: "",';
      l3[i+1] = '      title: "Più che vedere l\u2019Egitto. Capirlo.",';
    }
    // ES: eyebrow "Más que ver Egipto" + title "Entenderlo."
    if (l3[i].includes('Más que ver Egipto') && l3[i].includes('eyebrow') && l3[i+1].includes('Entenderlo') && l3[i+1].includes('title')) {
      l3[i] = '      eyebrow: "",';
      l3[i+1] = '      title: "Más que ver Egipto. Comprenderla.",';
    }
  }
}

// Re-read after fixes
const c4 = l3.join('\n');
const l4 = c4.split('\n');

// FR/IT/ES cta title: 3 elements -> 2 elements
for (let i = 0; i < l4.length; i++) {
  // FR
  if (l4[i].includes('VOTRE ÉGYPTE.') && l4[i].includes('VOTRE RYTHME.') && l4[i].includes('VOTRE VOYAGE.')) {
    l4[i] = '      title: ["L\u2019ÉGYPTE VOUS APPELLE.", "VOTRE TABLE EST PRÊTE."],';
  }
  // IT
  if (l4[i].includes('IL TUO EGITTO.') && l4[i].includes('IL TUO RITMO.') && l4[i].includes('IL TUO VIAGGIO.')) {
    l4[i] = '      title: ["L\u2019EGITTO TI CHIAMA.", "IL TUO TAVOLO È PRONTO."],';
  }
  // ES
  if (l4[i].includes('TU EGIPTO.') && l4[i].includes('TU RITMO.') && l4[i].includes('TU VIAJE.')) {
    l4[i] = '      title: ["EGIPTO TE LLAMA.", "TU MESA ESTÁ PUESTA."],';
  }
}

// FR/IT/ES hero title: old 2-element -> new 4-element
for (let i = 0; i < l4.length; i++) {
  // FR hero title
  if (l4[i].includes("L'ÉGYPTE") && l4[i+1] && l4[i+1].includes('CONÇUE')) {
    l4.splice(i, 2,
      '      title: [',
      '        "L' + "'" + 'ÉGYPTE VOUS APPELLE.",',
      '        "LES PYRAMIDES VOUS ATTENDENT.",',
      '        "VOTRE TABLE EST PRÊTE.",',
      '        "VOTRE ÉGYPTE VOUS ATTEND.",',
      '      ],'
    );
    break;
  }
}
for (let i = 0; i < l4.length; i++) {
  // IT hero title
  if (l4[i].includes("L'EGITTO") && l4[i+1] && l4[i+1].includes('PROGETTATO')) {
    l4.splice(i, 2,
      '      title: [',
      '        "L' + "'" + 'EGITTO TI CHIAMA.",',
      '        "LE PIRAMIDI TI ASPETTANO.",',
      '        "IL TUO TAVOLO È PRONTO.",',
      '        "IL TUO EGIPTO TI ASPETTA.",',
      '      ],'
    );
    break;
  }
}
for (let i = 0; i < l4.length; i++) {
  // ES hero title
  if (l4[i].includes('"EGIPTO') && l4[i+1] && l4[i+1].includes('DISEÑADO')) {
    l4.splice(i, 2,
      '      title: [',
      '        "EGIPTO TE LLAMA.",',
      '        "LAS PIRÁMIDES TE ESPERAN.",',
      '        "TU MESA ESTÁ PUESTA.",',
      '        "TU EGIPTO TE ESPERA.",',
      '      ],'
    );
    break;
  }
}

fs.writeFileSync(p, l4.join('\n'));
console.log('FR/IT/ES fixes applied successfully');
