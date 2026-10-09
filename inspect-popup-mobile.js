/* eslint-disable */
/* Mobile + interaction + timer popup test on LIVE arabic pages. Fixed probe. */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, 'qa-screenshots');

const probe = () => {
  const vw = window.innerWidth, vh = window.innerHeight;
  const cand = [];
  document.querySelectorAll('*').forEach(el => {
    try {
      const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
      if (!r.width && !r.height) return;
      const visible = cs.opacity !== '0' && cs.visibility !== 'hidden' && cs.display !== 'none';
      const big = (cs.position === 'fixed' || cs.position === 'absolute') && parseInt(cs.zIndex || '0') >= 900;
      if (visible && big) cand.push({ tag: el.tagName, id: el.id, class: el.className, zIndex: cs.zIndex, pos: cs.position, rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }, text: (el.innerText||'').slice(0,80) });
    } catch {}
  });
  const iframes = [...document.querySelectorAll('iframe, dialog, noscript')].map(e => ({ tag: e.tagName, src: e.src || '', class: e.className, id: e.id }));
  return JSON.stringify({ viewport: { vw, vh }, visibleOverlays: cand, frames: iframes });
};

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 667 }, locale: 'ar-EG' });
  const results = [];

  async function inspect(label, url, actions) {
    const page = await context.newPage();
    const errs = [];
    page.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    page.on('pageerror', e => errs.push('pageerror: ' + e.message));
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);
    const init = await page.evaluate(probe);
    await page.screenshot({ path: path.join(OUT, label + '_initial.png'), fullPage: true });
    console.log('=== ' + label + ' (initial) ===');
    console.log('errors: ' + JSON.stringify(errs));
    console.log('overlays: ' + init);
    const res = { label, url, initialOverlays: init, initialErrors: errs };
    if (actions) for (const a of actions) {
      errs.length = 0;
      try { await a(page); } catch (e) { errs.push('action ' + a.name + ': ' + e.message); }
      await page.waitForTimeout(1500);
      const after = await page.evaluate(probe);
      await page.screenshot({ path: path.join(OUT, label + '_' + a.name + '.png'), fullPage: true });
      res[a.name] = { errors: errs.slice(), overlays: after };
      console.log('=== ' + label + ' after ' + a.name + ' ===');
      console.log('errors: ' + JSON.stringify(errs));
      console.log('overlays: ' + after);
    }
    await page.close();
    results.push(res);
  }

  // burger opens full-screen mobile menu (is THIS the "popup"?)
  const burgerClick = async (p) => { const b = await p.$('.menu-toggle'); if (!b) throw new Error('no burger'); await b.click(); };
  // navigate directly to contact (simulates "entering contact us")
  const gotoContact = async (p) => { await p.goto('https://kemerya-tours.vercel.app/ar/contact', { waitUntil: 'networkidle' }); };

  await inspect('m_ar_home', 'https://kemerya-tours.vercel.app/ar', [burgerClick]);
  await inspect('m_ar_contact', 'https://kemerya-tours.vercel.app/ar/contact', []);
  // timer: sit on ar contact 7s
  const p = await context.newPage();
  await p.goto('https://kemerya-tours.vercel.app/ar/contact', { waitUntil: 'networkidle' });
  await p.waitForTimeout(7000);
  const after7 = await p.evaluate(probe);
  console.log('=== m_ar_contact after 7s ===');
  console.log('overlays: ' + after7);
  await p.screenshot({ path: path.join(OUT, 'm_ar_contact_7s.png'), fullPage: true });
  results.push({ label: 'm_ar_contact_7s', overlays: after7 });
  await p.close();

  fs.writeFileSync(path.join(OUT, 'popup-mobile-inspection.json'), JSON.stringify(results, null, 2));
  await browser.close();
  console.log('DONE');
})().catch(e => { console.error('FAIL', e); process.exit(1); });

