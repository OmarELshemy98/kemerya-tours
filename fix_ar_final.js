const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const lines = fs.readFileSync(p, 'utf8').split('\n');

// AR trust (line 149-150): insert eyebrow + statement before items
lines.splice(149, 0, '      eyebrow: "سفر خاص مدعوم بخبرة حقيقية",', '      statement: "رحلات مصر الخاصة المصممة بعناية، بحكمة ومعرفة محلية.",');
// After splice, line numbers shift by 2
// AR story: was at 181-183, now at 183-185
// eyebrow: "أكثر من رؤية مصر" -> ""
// title: "فهمها." -> "أكثر من رؤية مصر. فهمها."
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('أكثر من رؤية مصر') && lines[i+1]) {
    if (lines[i].includes('eyebrow') && lines[i+1].includes('فهمها')) {
      lines[i] = '      eyebrow: "",';
      lines[i+1] = '      title: "أكثر من رؤية مصر. فهمها.",';
      break;
    }
  }
}

fs.writeFileSync(p, lines.join('\n'));
console.log('AR fixes applied');
