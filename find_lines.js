const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const lines = fs.readFileSync(p, 'utf8').split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('nav: {') || lines[i].includes('trust: {') || 
      (lines[i].includes('story:') && lines[i].includes('{')) || 
      (lines[i].includes('cta:') && lines[i].includes('{')) ||
      lines[i].includes('primary:') || lines[i].includes('title: ["') ||
      lines[i].includes('destinations:') || lines[i].includes('experiences:') ||
      lines[i].includes('about:') || lines[i].includes('title: "EGIPTO') ||
      lines[i].includes('eyebrow:') || lines[i].includes('title: "فهمها') ||
      lines[i].includes('title: "La comprendre') ||
      lines[i].includes('title: "Capirlo') ||
      lines[i].includes('title: "Entenderlo')) {
    console.log((i+1) + ': ' + lines[i]);
  }
}
