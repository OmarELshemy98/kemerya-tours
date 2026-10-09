/** Hide-and-test: find which element's ::before/::after pseudo inflates body
 *  scrollWidth beyond the viewport on /ar. Hides each element, re-measures sw,
 *  and dumps the offending element's pseudo computed geometry. */
import puppeteer from "puppeteer";
const url = process.argv[2] || "http://localhost:3100/ar";
const isMobile = (process.argv[3] || "desktop") === "mobile";
const vp = isMobile ? [375, 812] : [1366, 900];
(async () => {
  const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"] });
  const page = await b.newPage();
  await page.setViewport({ width: vp[0], height: vp[1] });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 25000 });
  await new Promise((r) => setTimeout(r, 1600));
  const d = await page.evaluate(() => {
    const iw = window.innerWidth;
    const base = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
    const snap = [...document.querySelectorAll("body *")];
    const culprits = [];
    const dump = (el, p) => {
      const cs = getComputedStyle(el, p);
      return { pos: cs.position, display: cs.display, width: cs.width, height: cs.height, left: cs.left, right: cs.right, top: cs.top, bottom: cs.bottom, transform: cs.transform, transformOrigin: cs.transformOrigin, content: cs.content, visibility: cs.visibility, overflow: cs.overflow, zIndex: cs.zIndex };
    };
    for (const el of snap) {
      el.style.display = "none";
      const sw = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
      el.style.display = "";
      if (sw < base - 20) {
        culprits.push({ tag: el.tagName, cls: String(el.className || "").slice(0, 70), id: el.id, swAfterHide: sw, before: dump(el, "::before"), after: dump(el, "::after") });
      }
    }
    return { innerWidth: iw, base, culprits };
  });
  console.log(JSON.stringify({ url, viewport: isMobile ? "mobile" : "desktop", ...d }, null, 2));
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
