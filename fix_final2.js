const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
let lines = fs.readFileSync(p, 'utf8').split('\n');

// Find and fix FR hero section
for (let i = 0; i < lines.length; i++) {
  // FR hero: "Voyages privés. Guides personnels" context - look for the description line
  if (lines[i].includes('Vous ne savez pas quel type d') && lines[i].trim().startsWith('description:')) {
    // This is FR cta description, not hero subtitle
    // We need to fix the hero section which is before this
    // Find the FR hero section
    let heroStart = -1;
    for (let j = 0; j < i; j++) {
      if (lines[j].includes('hero: {') && lines[j-1] && lines[j-1].includes('nav: {')) {
        heroStart = j;
      }
    }
    // Actually let's just find the FR section and fix hero
  }
}

// Better approach: find by unique strings
// 1. Fix FR hero title indentation and content
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('L') && lines[i].includes('ÉGYPTE VOUS APPELLE') && lines[i] !== lines.find(l => l.includes('subtitle: "Voyages privés'))) {
    // Check if this is the hero title (has wrong indentation)
    if (lines[i].startsWith('            title:')) {
      // Replace lines i through i+5 with properly indented version
      lines.splice(i, 6,
        '      title: [',
        '        "L\u2019ÉGYPTE VOUS APPELLE.",',
        '        "LES PYRAMIDES VOUS ATTENDENT.",',
        '        "VOTRE TABLE EST PRÊTE.",',
        '        "VOTRE ÉGYPTE VOUS ATTEND.",',
        '      ],'
      );
    }
  }
}

// 2. Fix FR hero: description -> subtitle, fix primary/secondary
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Vous ne savez pas quel type d\u2019expérience')) {
    // This line is in the wrong place (FR hero has cta description instead of subtitle)
    // Check if we're in the FR hero section (before trust)
    let inFrHero = false;
    for (let j = i; j >= 0; j--) {
      if (lines[j].includes('hero: {')) {
        inFrHero = true;
        break;
      }
      if (lines[j].includes('trust: {') || lines[j].includes('cta:')) {
        break;
      }
    }
    if (inFrHero) {
      // Replace this description line and the following primary/secondary
      // lines[i]   = description:
      // lines[i+1] =  "Vous ne savez pas..."
      // lines[i+2] =  primary: "CONTACTEZ-NOUS",  (this is cta primary, hero should also be CONTACTEZ-NOUS)
      // lines[i+3] =  secondary: "APPELER",        (should be DÉCOUVRIR L'ÉGYPTE)
      // Actually the hero has: eyebrow, title, description, primary, secondary, note, }
      // We need: eyebrow, title, subtitle, primary, secondary, note, }
      
      // Replace description: -> subtitle:
      lines[i] = '      subtitle: "Voyages privés. Guides personnels. Votre rythme. Votre Égypte.",';
      // Remove the description text line
      lines.splice(i+1, 1);
      // After removing, line i+1 is now what was i+2 (primary: "CONTACTEZ-NOUS")
      // The secondary was "APPELER" - need to fix
      for (let j = i+1; j < i+5; j++) {
        if (lines[j].includes('secondary:') && lines[j].includes('APPELER')) {
          lines[j] = '      secondary: "DÉCOUVRIR L\u2019ÉGYPTE",';
        }
      }
    }
  }
}

// 3. Fix IT hero title (2-element -> 4-element)
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('EGITTO') && lines[i+1] && lines[i+1].includes('PROGETTATO')) {
    // Check if this is a single-line title in an array
    if (lines[i].includes('title: [')) {
      lines.splice(i, 1,
        '      title: [',
        '        "L\u2019EGITTO TI CHIAMA.",',
        '        "LE PIRAMIDI TI ASPETTANO.",',
        '        "IL TUO TAVOLO È PRONTO.",',
        '        "IL TUO EGIPTO TI ASPETTA.",',
        '      ],'
      );
    }
  }
}

// 4. Fix IT hero primary: "CONTACTEZ-NOUS" -> "CONTATTACI" (only in hero section)
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('subtitle:') && lines[i].includes('Viaggi privati. Guide personali')) {
    if (lines[i+1] && lines[i+1].includes('primary:') && lines[i+1].includes('CONTACTEZ-NOUS')) {
      lines[i+1] = '      primary: "CONTATTACI",';
    }
  }
}

fs.writeFileSync(p, lines.join('\n'));
console.log('Fixed FR hero, IT hero title, IT hero primary');
