const fs = require('fs');
const c = fs.readFileSync('D:/kemerya-tours/lib/i18n.ts', 'utf8');
const lines = c.split('\n');
// Check AR nav lines 129-135
for (let i = 128; i < 136; i++) {
  console.log((i+1) + ': [' + lines[i].replace(/ /g, '.') + ']');
}
// Check AR trust lines 149-157
for (let i = 148; i < 158; i++) {
  console.log((i+1) + ': [' + lines[i].replace(/ /g, '.') + ']');
}
// Check AR story lines 181-183
for (let i = 180; i < 184; i++) {
  console.log((i+1) + ': [' + lines[i].replace(/ /g, '.') + ']');
}
