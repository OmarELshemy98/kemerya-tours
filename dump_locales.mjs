import { readFileSync, writeFileSync } from 'fs';

const buf = readFileSync('lib/brand-content/fr.ts');
const text = buf.toString('utf-8', buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF ? 3 : 0);
const lines = text.split('\n');
for (let i = 0; i < lines.length; i++) {
    console.log(`${i+1}| ${lines[i]}`);
}
