const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const content = fs.readFileSync(p, 'utf8');
const hadCR = content.includes('\r\n');
let lines = content.split(hadCR ? '\r\n' : '\n');
let frStart = -1, itStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '  fr: {' ) frStart = i;
  if (frStart >= 0 && lines[i] === '  it: {') { itStart = i; break; }
}
console.log('FR:', frStart, 'IT:', itStart);
