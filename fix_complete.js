const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
let content = fs.readFileSync(p, 'utf8');
let lines = content.split('\n');

// Find FR section boundaries (handle \r)
let frStart = -1, itStart = -1;
for (let i = 0; i < lines.length; i++) {
  const t = lines[i].replace(/\r$/, '');
  if (t === '  fr: {') frStart = i;
  if (frStart >= 0 && t === '  it: {') { itStart = i; break; }
}
console.log('FR start:', frStart, 'IT start:', itStart);

