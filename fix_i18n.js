const fs = require(" fs\);
const c = fs.readFileSync(\D:/kemerya-tours/lib/i18n.ts\,\utf8\);
const lines = c.split(\\n\);
lines[85] = " cta: \\\EXPLORE ALL JOURNEYS\",\;
fs.writeFileSync(\D:/kemerya-tours/lib/i18n.ts\, lines.join(\\n\));
console.log(\Fixed\);
