const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const l = fs.readFileSync(p, 'utf8').split('\n');

const locs = [];
for (let i = 0; i < l.length; i++) {
  const t = l[i].trim().replace(/\r/g, '');
  const m = t.match(/^(\w+): {/);
  if (m) locs.push({ name: m[1], start: i });
}
locs.push({ name: 'END', start: l.length });

for (let n = 0; n < locs.length - 1; n++) {
  const loc = locs[n].name;
  const start = locs[n].start;
  const end = locs[n + 1].start;
  const block = l.slice(start, end).map(x => x.replace(/\r$/, ''));

  // Hero title check
  for (let i = 0; i < block.length; i++) {
    if (block[i].trim() === 'hero: {') {
      let count = 0, inTitle = false;
      for (let j = i + 1; j < block.length; j++) {
        const tt = block[j].trim();
        if (tt === 'title: [') { inTitle = true; continue; }
        if (inTitle && tt === '],') break;
        if (inTitle && tt.startsWith('"')) count++;
      }
      if (count !== 4) console.log('FAIL ' + loc + ': hero title has ' + count + ' elements');
    }
  }

  // Trust check
  for (let i = 0; i < block.length; i++) {
    if (block[i].trim() === 'trust: {') {
      let hasEyebrow = false, hasStatement = false;
      for (let j = i + 1; j < block.length; j++) {
        const tt = block[j].trim();
        if (tt === '},') break;
        if (tt.startsWith('eyebrow:')) hasEyebrow = true;
        if (tt.startsWith('statement:')) hasStatement = true;
      }
      if (!hasEyebrow) console.log('FAIL ' + loc + ': trust missing eyebrow');
      if (!hasStatement) console.log('FAIL ' + loc + ': trust missing statement');
    }
  }

  // CTA primary check
  for (let i = 0; i < block.length; i++) {
    if (block[i].trim() === 'cta: {') {
      let hasPrimary = false;
      for (let j = i + 1; j < block.length; j++) {
        const tt = block[j].trim();
        if (tt === '},') break;
        if (tt.startsWith('primary:')) hasPrimary = true;
      }
      if (!hasPrimary) console.log('FAIL ' + loc + ': cta missing primary');
    }
  }

  // Story title check (merged)
  for (let i = 0; i < block.length; i++) {
    if (block[i].trim().startsWith('title:') && block[i+1] && block[i+1].trim().startsWith('title:')) {
      console.log('FAIL ' + loc + ': story has duplicate title keys');
    }
  }
}
console.log('Verification complete - check for FAIL lines above');
