const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
let c = fs.readFileSync(p, 'utf8');
let lines = c.split('\n');
lines[85] = '      cta: "EXPLORE ALL JOURNEYS",';
fs.writeFileSync(p, lines.join('\n'));
console.log('Fixed line 86');
