const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
let c = fs.readFileSync(p, 'utf8');

// Fix AR nav - replace entire nav block
c = c.replace(
  /    nav: \{\n          journeys: "الرحلات",\n      why: "لماذا كيمريا",\n      story: "قصتنا",\n      contact: "اتصل بنا",\n      explore: "استكشف مصر",\n    \},/,
  `    nav: {
      journeys: "الرحلات",
      why: "لماذا كيمريا",
      story: "قصتنا",
      contact: "اتصل بنا",
      explore: "استكشف مصر",
    },`
);

// Fix AR trust - add eyebrow and statement
c = c.replace(
  /    trust: \{\n      items: \[\n        \{ value: "10\+", label: "سنوات خبرة" \}/,
  `    trust: {
      eyebrow: "سفر خاص مدعوم بخبرة حقيقية",
      statement: "رحلات مصر الخاصة المصممة بعناية، بحكمة ومعرفة محلية.",
      items: [
        { value: "10+", label: "سنوات خبرة" }`
);

// Fix AR story - merge split title and add eyebrow
c = c.replace(
  /      eyebrow: "أكثر من رؤية مصر",\n      title: "فهمها\.",/,
  `      eyebrow: "",
      title: "أكثر من رؤية مصر. فهمها.",`
);

// Fix AR cta description apostrophe
c = c.replace(
  /"لست متأكداً من الاختيار الصحيح؟ أخبرنا متى تسافر، من يرافقك، وما الذي ترغب في تجربته. سنساعدك في تصميم الرحلة حولك\."/,
  `"لست متأكداً من الاختيار الصحيح؟ أخبرنا متى تسافر، من يرافقك، وما الذي ترغب في تجربته. سنساعدك في تصميم الرحلة حولك."`
);

fs.writeFileSync(p, c);
console.log('AR fixes applied');
