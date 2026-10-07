import { readFileSync } from 'fs';

function readBOM(path) {
    const buf = readFileSync(path);
    if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
        return buf.toString('utf-8', 3);
    }
    return buf.toString('utf-8');
}

const en = readBOM('lib/brand-content/en.ts');
const locales = ['fr', 'es', 'it', 'de', 'pt', 'nl', 'ar', 'zh'];
const localeData = {};
for (const loc of locales) {
    localeData[loc] = readBOM(`lib/brand-content/${loc}.ts`);
}

function extract(str, pattern) {
    const m = str.match(pattern);
    return m ? m[1] : null;
}

// Trust eyebrows
console.log("=== TRUST EYEBROWS ===");
const enTrust = extract(en, /trust: \{\s+eyebrow: "([^"]+)"/);
console.log(`EN: ${enTrust}`);
for (const loc of locales) {
    const val = extract(localeData[loc], /trust: \{\s+eyebrow: "([^"]+)"/);
    console.log(`${loc}: ${val}`);
}
console.log();

// Advantages intro
console.log("=== ADVANTAGES INTRO ===");
const enAdv = extract(en, /advantages: \{[\s\S]*?intro:\s*"([^"]+)"/);
console.log(`EN: ${enAdv ? enAdv.slice(0,200) : 'N/A'}`);
for (const loc of locales) {
    const val = extract(localeData[loc], /advantages: \{[\s\S]*?intro:\s*"([^"]+)"/);
    console.log(`${loc}: ${val ? val.slice(0,200) : 'N/A'}`);
}
console.log();

// Partnership intro
console.log("=== PARTNERSHIP INTRO ===");
const enPart = extract(en, /partnership: \{\s+eyebrow: "([^"]+)"[\s\S]*?intro:\s*"([^"]+)"/);
console.log(`EN eyebrow: ${enPart ? enPart : 'N/A'}`);
const enPartIntro = extract(en, /partnership: \{[\s\S]*?intro:\s*"([^"]+)"/);
console.log(`EN intro: ${enPartIntro ? enPartIntro.slice(0,250) : 'N/A'}`);
for (const loc of locales) {
    const ey = extract(localeData[loc], /partnership: \{\s+eyebrow: "([^"]+)"/);
    const intro = extract(localeData[loc], /partnership: \{[\s\S]*?intro:\s*"([^"]+)"/);
    console.log(`${loc} eyebrow: ${ey}`);
    console.log(`${loc} intro: ${intro ? intro.slice(0,250) : 'N/A'}`);
}
console.log();

// Categories intro
console.log("=== CATEGORIES INTRO ===");
const enCat = extract(en, /categories: \{[\s\S]*?intro:\s*"([^"]+)"/);
console.log(`EN: ${enCat ? enCat.slice(0,250) : 'N/A'}`);
for (const loc of locales) {
    const val = extract(localeData[loc], /categories: \{[\s\S]*?intro:\s*"([^"]+)"/);
    console.log(`${loc}: ${val ? val.slice(0,250) : 'N/A'}`);
}
console.log();

// Conversion intro
console.log("=== CONVERSION INTRO ===");
const enConv = extract(en, /conversion: \{[\s\S]*?intro:\s*"([^"]+)"/);
console.log(`EN: ${enConv ? enConv.slice(0,250) : 'N/A'}`);
for (const loc of locales) {
    const val = extract(localeData[loc], /conversion: \{[\s\S]*?intro:\s*"([^"]+)"/);
    console.log(`${loc}: ${val ? val.slice(0,250) : 'N/A'}`);
}
console.log();

// Footer
console.log("=== FOOTER ===");
const enFooter = extract(en, /footer: \{\s+blurb: "([^"]+)"[\s\S]*?headline: "([^"]+)"/);
if (enFooter) {
    // This only captures blurb due to regex, let's get both separately
}
const enBlurb = extract(en, /footer: \{\s+blurb: "([^"]+)"/);
const enHeadline = extract(en, /footer: [\s\S]*?headline: "([^"]+)"/);
console.log(`EN blurb: ${enBlurb}`);
console.log(`EN headline: ${enHeadline}`);
for (const loc of locales) {
    const blurb = extract(localeData[loc], /footer: \{\s+blurb: "([^"]+)"/);
    const headline = extract(localeData[loc], /footer: [\s\S]*?headline: "([^"]+)"/);
    console.log(`${loc} blurb: ${blurb}`);
    console.log(`${loc} headline: ${headline}`);
}
console.log();

// Partnership steps - last item
console.log("=== PARTNERSHIP STEPS (last) ===");
function extractPartnershipSteps(str) {
    const section = extract(str, /partnershipSteps: \[\s*([\s\S]*?)\s*\],/);
    if (!section) return [];
    return [...section.matchAll(/\"([^\"]+)\"/g)].map(m => m[1]);
}
const enSteps = extractPartnershipSteps(en);
console.log(`EN last step: ${enSteps[enSteps.length - 2]} | ${enSteps[enSteps.length - 1]}`);
for (const loc of locales) {
    const steps = extractPartnershipSteps(localeData[loc]);
    console.log(`${loc} last step: ${steps[steps.length - 2]} | ${steps[steps.length - 1]}`);
}
console.log();

// ClientTypes intro
console.log("=== CLIENTTYPES INTRO ===");
const enCT = extract(en, /clientTypes: \{[\s\S]*?intro:\s*"([^"]+)"/);
console.log(`EN: ${enCT}`);
for (const loc of locales) {
    const val = extract(localeData[loc], /clientTypes: \{[\s\S]*?intro:\s*"([^"]+)"/);
    console.log(`${loc}: ${val}`);
}
console.log();

// Check contact sections
console.log("=== CONTACT EYEBROW/TITLE ===");
const enContactEyebrow = extract(en, /contact: \{\s+eyebrow: "([^"]+)"/);
const enContactTitle = extract(en, /contact: \{[\s\S]*?title: "([^"]+)"/);
console.log(`EN eyebrow: ${enContactEyebrow}`);
console.log(`EN title: ${enContactTitle}`);
for (const loc of locales) {
    const ey = extract(localeData[loc], /contact: \{\s+eyebrow: "([^"]+)"/);
    const title = extract(localeData[loc], /contact: \{[\s\S]*?title: "([^"]+)"/);
    console.log(`${loc} eyebrow: ${ey}`);
    console.log(`${loc} title: ${title}`);
}
console.log();

// Check contact subtitle
console.log("=== CONTACT SUBTITLE ===");
const enContactSub = extract(en, /contact: \{[\s\S]*?subtitle:\s*"([^"]+)"/);
console.log(`EN: ${enContactSub}`);
for (const loc of locales) {
    const val = extract(localeData[loc], /contact: \{[\s\S]*?subtitle:\s*"([^"]+)"/);
    console.log(`${loc}: ${val}`);
}
