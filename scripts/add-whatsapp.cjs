const fs = require("fs");
const f = "D:/kemerya-tours/lib/i18n.ts";
const lines = fs.readFileSync(f, "utf8").split("\n");
const out = [];
const translations = {en:"WhatsApp",ar:"\u0648\u0627\u062a\u0633\u0627\u0628",fr:"WhatsApp",it:"WhatsApp",es:"WhatsApp",de:"WhatsApp",pt:"WhatsApp",nl:"WhatsApp",zh:"WhatsApp"};
let uiStart = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("export const uiTranslations")) { uiStart = i; break; }
}
let currentLocale = "en";
for (let i = 0; i < lines.length; i++) {
  out.push(lines[i]);
  if (i > uiStart && lines[i].indexOf("messageField:") >= 0) {
    const indent = (lines[i].match(/^(\s*)/) || ["",""])[1];
    for (let j = i-1; j >= 0; j--) {
      const m = lines[j].match(/^\s*(en|ar|fr|it|es|de|pt|nl|zh):\s*\{/);
      if (m) { currentLocale = m[1]; break; }
    }
    out.push(indent + "whatsapp: \"" + translations[currentLocale] + "\",");
  }
}
fs.writeFileSync(f, out.join("\n"), "utf8");
console.log("Done.");

