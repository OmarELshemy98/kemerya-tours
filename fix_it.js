const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const l = fs.readFileSync(p, 'utf8').split('\n');

for (let i = 0; i < l.length; i++) {
  const t = l[i].replace(/\r/g, '');
  if (t.trim().startsWith('title: [') && t.includes('EGITTO')) {
    let section = '';
    for (let j = i; j >= 0; j--) {
      const tt = l[j].trim();
      if (tt === 'hero: {' || tt === 'cta: {') { section = tt; break; }
    }
    console.log('Line', i+1, 'in', section);
    const four = [
      '      title: [',
      '        "L\u2019EGITTO TI CHIAMA.",',
      '        "LE PIRAMIDI TI ASPETTANA.",',
      '        "IL TUO TAVOLO \u00c8 PRONTO.",',
      '        "IL TUO EGITTO TI ASPETTA.",',
      '      ],',
    ];
    l.splice(i, 1, ...four);
    break;
  }
}

fs.writeFileSync(p, l.join('\n'));
console.log('IT hero title fixed');
