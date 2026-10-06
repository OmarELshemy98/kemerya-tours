const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const c = fs.readFileSync(p, 'utf8');
const lines = c.split('\n');

// Collect all edits as a map of line index -> new content
const edits = {};

// === AR fixes ===
// AR nav line 130: fix indentation (12 spaces -> 6)
edits[129] = '      journeys: "الرحلات",';
// AR trust: add eyebrow + statement before items (line 150)
lines.splice(149, 0, '      eyebrow: "سفر خاج مدعوم بخبرة حقيقية"', '      statement: "رحلات مصر الخاصة المصممة بعناية، بحكمة ومعرفة محلية.",');
// After splice, line numbers shift by 2. Re-read adjusted indices below.
// We need to recalculate - let's just rebuild the file

fs.writeFileSync(p, fs.readFileSync(p, 'utf8')); // no-op

// Actually, let me do string replacement instead
let content = fs.readFileSync(p, 'utf8');

// Fix AR nav indentation
content = content.replace(
  '            journeys: "الرحلات",',
  '      journeys: "الرحلات",'
);

// Fix AR trust - add eyebrow and statement
content = content.replace(
  '    trust: {\n      items: [\n        { value: "10+", label: "سنوات خبرة" }',
  '    trust: {\n      eyebrow: "سفر خاص مدعوم بخبرة حقيقية",\n      statement: "رحلات مصر الخاصة المصممة بعناية، بحكمة ومعرفة محلية.",\n      items: [\n        { value: "10+", label: "سنوات خبرة" }'
);

// Fix AR story - merge title, add eyebrow
content = content.replace(
  '      eyebrow: "أكثر من رؤية مصر",\n      title: "فهمها.",',
  '      eyebrow: "",\n      title: "أكثر من رؤية مصر. فهمها.",'
);

fs.writeFileSync(p, content);
console.log('AR fixes applied');
