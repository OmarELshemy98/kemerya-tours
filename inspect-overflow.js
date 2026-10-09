/** Debug: try CSS.getBoxModelForPseudo on known pseudo-owners (.hero::after, .section-surface::before).
 *  Falls back to composing pseudo computed-geometry + element rect if CDP unsupported. */
import puppeteer from "puppeteer";
const url = process.argv[2] || "http://localhost:3100/ar";
const vp = [1366, 900];
(async () => {
  const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"] });
  const page = await b.newPage();
  await page.setViewport({ width: vp[0], height: vp[1] });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 25000 });
  await new Promise((r) => setTimeout(r, 1600));
    console.log("chrome:", b.version());
  const client = await page.target().createCDPSession();
  await client.send("DOM.enable");
  await client.send("CSS.enable");
  const {
    root: { nodeId: rootId },
  } = await client.send("DOM.getDocument");
  // real-element max-right
  const maxReal = await page.evaluate(() => {
    let m = 0;
    const iw = window.innerWidth;
    document.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > m) m = r.right;
    });
    return { innerWidth: iw, maxRealRight: Math.round(m), sw: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) };
  });
  console.log("REAL:", JSON.stringify(maxReal));
  // try getBoxModelForPseudo on .hero::after
  const hero = await client.send("DOM.querySelector", { nodeId: rootId, selector: ".hero" });
  console.log("hero nodeId:", hero.nodeId);
  try {
    const r = await client.send("CSS.getBoxModelForPseudo", { nodeId: hero.nodeId, pseudoType: "after" });
    console.log("hero::after OK:", JSON.stringify(r));
  } catch (e) {
    console.log("hero::after ERR:", e.message || String(e).slice(0, 200));
  }
  // fallback: compose pseudo geometry for top candidates
  const comp = await page.evaluate(() => {
    const iw = window.innerWidth;
    const out = [];
    document.querySelectorAll("*").forEach((el) => {
      const er = el.getBoundingClientRect();
      const elCs = getComputedStyle(el);
      const elT = elCs.transform;
      ["::before", "::after"].forEach((p) => {
        const cs = getComputedStyle(el, p);
        if (!cs.content || cs.content === "none") return;
        const w = parseFloat(cs.width) || 0;
        const h = parseFloat(cs.height) || 0;
        if (w < 1) return;
        const left = parseFloat(cs.left);
        const right = parseFloat(cs.right);
        const tx = parseFloat((cs.transform.match(/matrix.*\(-?[\d.]+, \S+, \S+, \S+, (-?[\d.]+), -?[\d.]+\)/) || [, "0"])[1]) || 0;
        out.push({ cls: String(el.className || "").slice(0, 50), pseudo: p, elLeft: Math.round(er.left), elW: Math.round(er.width), pseudoW: Math.round(w), pseudoLeft: Math.round(left), tx: Math.round(tx), estRight: Math.round(er.left + left + w + tx) });
      });
    });
    return { iw, top: out.sort((a, b) => b.estRight - a.estRight).slice(0, 10) };
  });
  console.log("COMPOSED:", JSON.stringify(comp, null, 2));
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });




