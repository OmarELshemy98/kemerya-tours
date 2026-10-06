const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const ap = String.fromCharCode(0x2019);
const content = fs.readFileSync(p, 'utf8');
const lines = content.split('\n');

let frHeroIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === 'hero: {') {
    let inFr = false;
    for (let j = i; j >= 0; j--) {
      if (lines[j].trim() === 'fr: {') { inFr = true; break; }
      if (lines[j].trim() === 'en: {' || lines[j].trim() === 'ar: {') break;
    }
    if (inFr) { frHeroIdx = i; break; }
  }
}
let frHeroEnd = frHeroIdx;
for (let i = frHeroIdx + 1; i < lines.length; i++) {
  if (lines[i].trim() === '},') { frHeroEnd = i; break; }
}
console.log('FR hero:', frHeroIdx, 'to', frHeroEnd);
const L = [];
L.push('    hero: {');
L.push('      eyebrow: "Voyages priv\u00e9s en \u00c9gypte",');
L.push('      title: [');
L.push('        "L' + ap + '\u00c9GYPTE VOUS APPELLE.",');
L.push('        "LES PYRAMIDES VOUS ATTENDENT.",');
L.push('        "VOTRE TABLE EST PR\u00caTE.",');
L.push('        "VOTRE \u00c9GYPTE VOUS ATTEND.",');
L.push('      ],');
L.push('      subtitle:');
L.push('        "Voyages priv\u00e9s. Guides personnels. Votre rythme. Votre \u00c9gypte.",');
L.push('      primary: "CONTACTEZ-NOUS",');
L.push('      secondary: "D\u00e9COUVRIR L' + ap + '\u00c9GYPTE",');
L.push('      note: "Expertise locale \u2022 Planning sur mesure \u2022 Support 24/7",');
L.push('    },');
L.push('    trust: {');
L.push('      eyebrow: "Voyage priv\u00e9, soutenu par une vraie exp\u00e9rience",');
L.push('      statement: "Des voyages con\u00e7us avec clart\u00e9, attention et connaissance locale.",');
L.push('      items: [');
L.push('    difference: {');
L.push('      eyebrow: "La diff\u00e9rence Kemerya",');
L.push('      title: "L' + ap + '\u00c9gypte n' + ap + 'est pas une checklist.",');
L.push('      intro: "L' + ap + 'exp\u00e9rience doit \u00eatre personnelle.",');
L.push('      cards: [');
L.push('        { title: "CON\u00c7U SUR MESURE", description: "Votre voyage est pens\u00e9 autour de votre groupe." },');
L.push('        { title: "EXPERTISE LOCALE", description: "D\u00e9couvrez l' + ap + '\u00c9gypte avec des professionnels locaux et des guides \u00e9gyptologues." },');
L.push('        { title: "VOTRE RYTHME", description: "Voyagez sans pr\u00e9cipitation ni agenda rigide." },');
L.push('        { title: "TOUJOURS CONNECT\u00c9S", description: "Notre \u00e9quipe vous accompagne avant et pendant le voyage." },');
L.push('      ],');
L.push('    },');
L.push('    destinations: {');
L.push('      eyebrow: "Cat\u00e9gories principales",');
L.push('      title: "Quatre fa\u00e7ons de vivre l' + ap + '\u00c9gypte",');
L.push('      intro: "Chaque cat\u00e9gorie ouvre une mani\u00e8re diff\u00e9rente de vivre l' + ap + '\u00c9gypte: d\u00e9couvertes urbaines, itin\u00e9raires immersifs, escapades c\u00f4ti\u00e8res et voyages tranquilles sur le Nil.",');
L.push('      cta: "D\u00e9couvrir",');
L.push('    },');
L.push('    journeys: {');
L.push('      eyebrow: "Voyages s\u00e9lectionn\u00e9s",');
L.push('      title: "Quelques parcours choisis pour d\u00e9couvrir l' + ap + '\u00c9gypte.",');
L.push('      intro: "Ces itin\u00e9raires refl\u00e8tent les exp\u00e9riences que les voyageurs recherchent le plus: atmosph\u00e8re, intimit\u00e9 et lien profond avec la culture.",');
L.push('      cta: "TOUS LES VOYAGES",');
L.push('    },');
L.push('    story: {');
L.push('      eyebrow: "",');
L.push('      title: "Plus que voir l' + ap + '\u00c9gypte. La comprendre.",');
L.push('      intro: "Un s\u00e9jour en \u00c9gypte ne se r\u00e9sume pas aux monuments. Il s' + ap + 'agit aussi d' + ap + 'histoires, de contexte, de savoir local et de lien humain qui rend la destination vivante.",');
L.push('      bullets: [');
L.push('        "Accompagnement priv\u00e9 avec un regard local et un contexte historique.",');
L.push('        "Un rythme sur mesure qui laisse place \u00e0 la spontan\u00e9it\u00e9.",');
L.push('        "Un soutien avant, pendant et apr\u00e8s le voyage.",');
L.push('      ],');
L.push('      cta: "CONTACTEZ-NOUS",');
L.push('    },');
L.push('    testimonials: {');
L.push('      eyebrow: "Des voyageurs qui ont vu l' + ap + '\u00c9gypte \u00e0 leur mani\u00e8re",');
L.push('      title: "Des exp\u00e9riences r\u00e9elles de voyageurs qui ont choisi Kemerya.",');
L.push('    },');
L.push('    cta: {');
L.push('      eyebrow: "Voyages sur mesure",');
L.push('      title: [');
L.push('        "L' + ap + '\u00c9GYPTE VOUS APPELLE.",');
L.push('        "VOTRE TABLE EST PR\u00caTE.",');
L.push('      ],');
L.push('      description:');
L.push('        "Vous ne savez pas quel type d' + ap + 'exp\u00e9rience \u00e9gyptienne convient le mieux? Dites-nous quand vous voyagez, qui vous accompagne et ce que vous souhaitez vivre. Nous vous aiderez \u00e0 concevoir le voyage autour de vous.",');
L.push('      primary: "CONTACTEZ-NOUS",');
L.push('      secondary: "APPELER",');
L.push('    },');

lines.splice(frHeroIdx, frHeroEnd - frHeroIdx + 1, ...L);
fs.writeFileSync(p, lines.join('\n'));
console.log('FR replaced, total new lines:', L.length);

L.push('        { value: "10+", label: "Ann\u00e9es d' + ap + 'exp\u00e9rience" },');
L.push('        { value: "2,000+", label: "Voyageurs satisfaits" },');
L.push('        { value: "4.9", label: "Avis moyens" },');
L.push('        { value: "100%", label: "Voyages sur mesure" },');
L.push('        { value: "24/7", label: "Support voyageurs" },');
L.push('      ],');
L.push('    },');

