/* eslint-disable */
// Renders live + local pages, dumps any popup/modal/overlay/consent/iframe elements.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, 'qa-screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

function esc(s) { return String(s).replace(/</g, '&lt;'); }

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1366, height: 768 }, locale: 'ar-EG' });

  const targets = [
    { name: 'live_ar_home', url: 'https://kemerya-tours.vercel.app/ar' },
    { name: 'live_ar_contact', url: 'https://kemerya-tours.vercel.app/ar/contact' },
    { name: 'live_en_contact', url: 'https://kemerya-tours.vercel.app/en/contact' },
  ];

  const results = {};

  for (const t of targets) {
    const page = await context.newPage();
    const errs = [];
    page.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    page.on('pageerror', e => errs.push('pageerror: ' + e.message));

    await page.goto(t.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2500); // let client JS hydrate & any timers fire

    await page.screenshot({ path: path.join(OUT, t.name + '.png'), fullPage: true });

    const dom = await page.evaluate(() => {
      function rect(e) { try { return e.getBoundingClientRect(); } catch { return null; } }
      const viewport = { w: window.innerWidth, h: window.innerHeight };
      const matches = [];
      const all = document.querySelectorAll('iframe, dialog, [class*="modal"], [class*="popup"], [class*="cookie"], [class*="consent"], [class*="banner"], [class*="overlay"], [class*="toast"], [class*="drawer"], [class*="sheet"], [id*="modal"], [id*="popup"], [id*="cookie"], [id*="consent"], [id*="banner"], [id*="overlay"]');
      all.forEach(el => {
        const r = rect(el);
        if (!r) return;
        matches.push({ tag: el.tagName, id: el.id, class: el.className, text: (el.innerText || '').slice(0, 120), rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), top: Math.round(r.top), left: Math.round(r.left) }, zIndex: getComputedStyle(el).zIndex, position: getComputedStyle(el).position, opacity: getComputedStyle(el).opacity, display: getComputedStyle(el).display, html: el.outerHTML.slice(0, 400) });
      });
      // fixed/absolute elements with z-index >= 999 covering viewport center
      const candidates = [];
      document.querySelectorAll('*').forEach(el => {
        const r = rect(el);
        const cs = getComputedStyle(el);
        if (!r || !r.width || !r.height) return;
        const big = (cs.position === 'fixed' || cs.position === 'absolute') && (!cs.zIndex || parseInt(cs.zIndex) >= 999);
        const coversCenter = r.left <= viewport.w / 2 && r.right >= viewport.w / 2 && r.top <= viewport.h / 2 && r.bottom >= viewport.h / 2;
        if (big && coversCenter) {
          candidates.push({ tag: el.tagName, id: el.id, class: el.className, rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }, zIndex: cs.zIndex, position: cs.position, opacity: cs.opacity });
        }
      });
      return JSON.stringify({ viewport, matches, candidates });
    });

    let parsed = {};
    try { parsed = JSON.parse(dom); } catch (e) { parsed = { error: e.message, raw: dom.slice(0, 2000) }; }

    results[t.name] = { url: t.url, errors: errs, viewport: parsed.viewport, modalMatches: parsed.matches, fixedCandidates: parsed.candidates };
    console.log('=== ' + t.name + ' ===');
    console.log('url: ' + t.url);
    console.log('console/page errors: ' + JSON.stringify(errs));
    console.log('viewport: ' + JSON.stringify(parsed.viewport));
    console.log('modal/iframe/noscript class matches: ' + JSON.stringify(parsed.matches, null, 2));
    console.log('fixed/absolute z>=999 covering viewport center: ' + JSON.stringify(parsed.candidates, null, 2));
    console.log('');
  }

  fs.writeFileSync(path.join(OUT, 'popup-inspection.json'), JSON.stringify(results, null, 2));
  await browser.close();
  console.log('DONE. Results -> qa-screenshots/popup-inspection.json');
})().catch(e => { console.error('FAIL', e); process.exit(1); });
