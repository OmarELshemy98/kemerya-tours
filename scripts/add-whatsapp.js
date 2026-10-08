const fs = require('fs');
const f = 'D:/kemerya-tours/lib/i18n.ts';
let c = fs.readFileSync(f, 'utf8');

// Add whatsapp translations after messageField in uiTranslations
const locales = ['en', 'ar', 'fr', 'it', 'es', 'de', 'pt', 'nl', 'zh'];
const translations = {
  en: 'WhatsApp',
  ar: '\u0648\u0627\u062a\u0633\u0627\u0628',
  fr: 'WhatsApp',
  it: 'WhatsApp',
  es: 'WhatsApp',
  de: 'WhatsApp',
  pt: 'WhatsApp',
  nl: 'WhatsApp',
  zh: 'WhatsApp',
};

let count = 0;
for (const locale of locales) {
  // Match the pattern in uiTranslations entries only (these come after line 1263)
  // Pattern: messageField: "...",\n    kemeryaToursHome: "
  const pattern = new RegExp(
    '(messageField: "\\[^"]+\\)",\\s*\\n)(\\s+)(kemeryaToursHome:\\s*")',
    'g'
  );
  c = c.replace(pattern, (match, msgField, indent, kemerya) => {
    count++;
    return msgField + ',\\n' + indent + 'whatsapp: "' + translations[locale] + '",\\n' + indent + kemerya;
  });
}

fs.writeFileSync(f, c, 'utf8');
console.log('Replacements made:', count);
