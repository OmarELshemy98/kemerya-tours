/* Decisive popup hunt: BOTH prod domains, desktop+mobile.
   Self-contained browser probe (no closure vars). */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, 'qa-screenshots');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const domains = ['https://kemerya-tours.vercel.app', 'https://www.kemeryatours.com'];
  const paths = ['/', '/ar', '/ar/contact', '/en/contact'];
  const results = {};

  for (const vp of [1366, 375]) {
    const ctx = await browser.newContext({ viewport: { width: vp, height: vp === 1366 ? 768 : 667 }, locale: 'ar-EG' });
    for (const d of domains) for (const p of paths) {
      const url = d + p; const label = d.replace(/https?:\/\//, '') + p;
      const page = await ctx.newPage();
      const errs = [];
      page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
      page.on('pageerror', e => errs.push(e.message));
      let status = '?', parsed = {};
      try {
        const res = await page.goto(url, { waitUntil: 'networkidle', timeout: 25000 });
        status = res ? res.status() : null;
        await page.waitForTimeout(2500);
        parsed = await page.evaluate(() => {
          const vw = window.innerWidth, vh = window.innerHeight;
          const scripts = [...document.querySelectorAll('script')].map(s => ({ src: s.src || '', type: s.type || '', hasInline: !!s.textContent, inline: s.textContent ? s.textContent.slice(0, 100) : '' }));
          const frames = [...document.querySelectorAll('iframe, dialog, noscript')].map(e => ({ tag: e.tagName, src: e.src || '' }));
          const overlays = [];
          document.querySelectorAll('*').forEach(el => {
            try {
              const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
              if (!r.width && !r.height) return;
              const visible = cs.opacity !== '0' && cs.visibility !== 'hidden' && cs.display !== 'none';
              const big = (cs.position === 'fixed' || cs.position === 'absolute') && parseInt(cs.zIndex || '0') >= 40;
              const covers = r.left <= vw / 2 && r.right >= vw / 2 && r.top <= vh / 2 && r.bottom >= vh / 2;
              if (visible && big && covers) overlays.push({ tag: el.tagName, id: el.id, class: el.className, zIndex: cs.zIndex, pos: cs.position, text: (el.innerText || '').slice(0, 80) });
            } catch {}
          });
          return { viewport: { vw, vh }, title: document.title, bodyClass: document.body.className.slice(0, 120), scripts, frames, overlays };
        });
        await page.screenshot({ path: path.join(OUT, 'prod_' + vp + '_' + label.replace(/[\/:]/g, '_') + '.png'), fullPage: true });
      } catch (e) { status = 'ERR:' + e.message.slice(0, 80); }
      const scriptsSrc = parsed.scripts ? parsed.scripts.map(s => s.src).filter(Boolean) : [];
      const inlineCount = parsed.scripts ? parsed.scripts.filter(s => s.hasInline).length : 0;
      console.log('### ' + vp + '" ' + url + '" -> ' + status);
      console.log('  errors: ' + JSON.stringify(errs));
      console.log('  script-src: ' + JSON.stringify(scriptsSrc));
      console.log('  inline-scripts: ' + inlineCount + '  ' + JSON.stringify(parsed.scripts ? parsed.scripts.filter(s=>s.hasInline).map(s=>s.inline) : []));
      console.log('  iframes/dialogs/noscript: ' + JSON.stringify(parsed.frames));
      console.log('  overlays(covers-center): ' + JSON.stringify(parsed.overlays));
      results[vp + '|' + url] = { status, errors: errs, ...parsed };
      await page.close();
    }
    await ctx.close();
  }
  fs.writeFileSync(path.join(OUT, 'popup-prod-domains.json'), JSON.stringify(results, null, 2));
  await browser.close();
  console.log('DONE');
})().catch(e => { console.error('FAIL', e); process.exit(1); });
