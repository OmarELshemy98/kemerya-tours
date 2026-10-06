const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const c = fs.readFileSync(p, 'utf8');
const lines = c.split('\n');
// Check FR hero title line (around 233)
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('ÉGYPTE') && lines[i].includes('title')) {
    console.log('FR hero title line ' + (i+1) + ':');
    for (let j = 0; j < lines[i].length; j++) {
      const ch = lines[i][j];
      if (ch.charCodeAt(0) > 127 || ch === "'" || ch === '"') {
        console.log('  char ' + j + ': ' + ch.charCodeAt(0) + ' (' + ch + ')');
      }
    }
  }
}
// Check IT hero title
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('EGITTO') && lines[i].includes('title')) {
    console.log('IT hero title line ' + (i+1) + ':');
    for (let j = 0; j < lines[i].length; j++) {
      const ch = lines[i][j];
      if (ch.charCodeAt(0) > 127 || ch === "'" || ch === '"') {
        console.log('  char ' + j + ': ' + ch.charCodeAt(0) + ' (' + ch + ')');
      }
    }
  }
}
// Check FR story line
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Plus que voir')) {
    console.log('FR story line ' + (i+1) + ': ' + lines[i]);
  }
  if (lines[i].includes('comprendre') && lines[i].includes('title')) {
    console.log('FR story title line ' + (i+1) + ': ' + lines[i]);
  }
}
// Check IT story
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Più che vedere')) {
    console.log('IT story line ' + (i+1) + ': ' + lines[i]);
  }
  if (lines[i].includes('Capirlo') && lines[i].includes('title')) {
    console.log('IT story title line ' + (i+1) + ': ' + lines[i]);
  }
}
// Check FR cta title
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('VOTRE ÉGYPTE.') && lines[i].includes('VOTRE RYTHME.')) {
    console.log('FR cta line ' + (i+1) + ': ' + lines[i]);
  }
}
// Check IT cta title
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('IL TUO EGITTO.') && lines[i].includes('IL TUO RITMO.')) {
    console.log('IT cta line ' + (i+1) + ': ' + lines[i]);
  }
}
// Check ES cta title
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('TU EGIPTO.') && lines[i].includes('TU RITMO.')) {
    console.log('ES cta line ' + (i+1) + ': ' + lines[i]);
  }
}
