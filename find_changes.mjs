import { readFileSync } from 'fs';

function readBOM(path) {
    const buf = readFileSync(path);
    const offset = (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) ? 3 : 0;
    return buf.toString('utf-8', offset);
}

const files = {
    en: readBOM('lib/brand-content/en.ts'),
    fr: readBOM('lib/brand-content/fr.ts'),
    es: readBOM('lib/brand-content/es.ts'),
    it: readBOM('lib/brand-content/it.ts'),
    de: readBOM('lib/brand-content/de.ts'),
    pt: readBOM('lib/brand-content/pt.ts'),
    nl: readBOM('lib/brand-content/nl.ts'),
    ar: readBOM('lib/brand-content/ar.ts'),
    zh: readBOM('lib/brand-content/zh.ts'),
};

const terms = {
    'fr': { operator: 'opérateur', client: 'client', wider: 'vaste' },
    'es': { operator: 'operador', client: 'cliente', wider: 'general' },
    'it': { operator: 'operatore', client: 'cliente', wider: 'ampio' },
    'de': { operator: 'operator', client: 'kund', wider: 'weitere' },
    'pt': { operator: 'operador', client: 'cliente', wider: 'distinto' },
    'nl': { operator: 'operator', client: 'klant', wider: 'groter' },
    'ar': { operator: 'مشغ', client: 'عميل', wider: 'أكبر' },
    'zh': { operator: '运营', client: '客户', wider: '更大' },
};

for (const [locale, t] of Object.entries(terms)) {
    const content = files[locale];
    console.log(`\n========== ${locale.toUpperCase()} ==========`);
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let flags = [];
        if (line.toLowerCase().includes(t.operator.toLowerCase())) {
            flags.push('OPERATOR?');
        }
        if (line.toLowerCase().includes(t.client.toLowerCase())) {
            flags.push('CLIENT?');
        }
        if (t.wider && line.toLowerCase().includes(t.wider.toLowerCase())) {
            flags.push('WIDER?');
        }
        if (flags.length > 0) {
            console.log(`  Line ${i+1}: [${flags.join(', ')}] ${line.trim().slice(0, 180)}`);
        }
    }
}

// Datasets check
console.log('\n\n========== DATASETS: CLIENT/OPERATOR ==========');
for (const locale of Object.keys(terms)) {
    const content = files[locale];
    const datasetsMatch = content.match(/datasets: \{([\s\S]*?)\n  \},/);
    if (datasetsMatch) {
        const datasets = datasetsMatch[1];
        const lines = datasets.split('\n');
        console.log(`\n--- ${locale} datasets ---`);
        for (let i = 0; i < lines.length; i++) {
            const low = lines[i].toLowerCase();
            if (low.includes(terms[locale].client.toLowerCase()) || low.includes(terms[locale].operator.toLowerCase())) {
                console.log(`  [MATCH] ${lines[i].trim().slice(0, 200)}`);
            }
        }
    }
}
