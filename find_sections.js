const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const lines = fs.readFileSync(p, 'utf8').split('\n');
// Find all locale markers and nav/trust/story/cta sections
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(': {') && (lines[i].includes('ar:') || lines[i].includes('fr:') || lines[i].includes('it:') || lines[i].includes('es:'))) {
    console.log(`LOCALE ${lines[i].trim()} at line ${i+1}`);
  }
  if (lines[i].includes('nav: {') || lines[i].includes('trust: {') || (lines[i].includes('story:') && lines[i].includes('{')) || (lines[i].includes('cta:') && lines[i].includes('{')) || lines[i].includes('description:')) {
    // Only show relevant ones
    if (lines[i].includes('nav:') || lines[i].includes('trust:') || lines[i].includes('story:') || lines[i].includes('cta: {')) {
      console.log(`  line ${i+1}: ${lines[i].trim()}`);
    }
  }
}
