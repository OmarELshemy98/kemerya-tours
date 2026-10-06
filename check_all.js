const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const content = fs.readFileSync(p, 'utf8');
const lines = content.split('\n');

// Print lines 149-157 and 181-184 with exact content
console.log('=== AR trust (149-157) ===');
for (let i = 148; i < 158; i++) {
  console.log((i+1) + ': ' + lines[i]);
}
console.log('=== AR story (181-190) ===');
for (let i = 180; i < 192; i++) {
  console.log((i+1) + ': ' + lines[i]);
}
console.log('=== FR nav (check) ===');
// Find FR section
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('fr: {')) {
    for (let j = i; j < i+10; j++) console.log((j+1) + ': ' + lines[j]);
    break;
  }
}
console.log('=== IT nav (check) ===');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('it: {')) {
    for (let j = i; j < i+10; j++) console.log((j+1) + ': ' + lines[j]);
    break;
  }
}
console.log('=== ES nav (check) ===');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('es: {')) {
    for (let j = i; j < i+10; j++) console.log((j+1) + ': ' + lines[j]);
    break;
  }
}
