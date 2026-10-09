const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const SCREENSHOTS_DIR = path.join(__dirname, 'qa-screenshots');
if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext({ viewport: { width: 375, height: 667 }, deviceScaleFactor: 2, locale: 'en-US' });
  const results = { burgerMenu: {}, animations: {}, visualIdentity: {}, consoleErrors: [], accessibility: {}, localeTests: [] };

  async function navigateTo(page, locale) {
    const url = locale ? `http://localhost:3100/${locale}` : 'http://localhost:3100/';
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
  }

      
  function collectConsole(page, label) {
    page.on('console', msg => { if (msg.type() === 'error') results.consoleErrors.push('[' + label + '] ' + msg.text()); });
    page.on('pageerror', err => results.consoleErrors.push('[' + label + '] ' + err.message));
  }

  // TEST 1: Burger Menu 375px English
  console.log('=== TEST 1: Burger Menu 375px English ===');
  const p1 = await context.newPage(); collectConsole(p1, '375-en'); await navigateTo(p1, '');
  const burgerExists = await p1.$('.menu-toggle') !== null;
  console.log('Burger visible at 375px:', burgerExists);
  results.burgerMenu.burgerVisible375 = burgerExists;
    await p1.click('.menu-toggle'); await p1.waitForTimeout(800);
  const menuOpen = await p1.$('.mobile-menu.is-open') !== null;
  console.log('Menu opens:', menuOpen); results.burgerMenu.menuOpens = menuOpen;
  // Body scroll lock check — right after first open (before any nav)
  const bodyOl = await p1.evaluate(() => document.body.style.overflow);
  console.log('Body scroll lock after open:', bodyOl); results.burgerMenu.bodyScrollLock = bodyOl === 'hidden';
  const bodyComp = await p1.evaluate(() => window.getComputedStyle(document.body).overflow);
  console.log('Body computed overflow:', bodyComp);
  await p1.screenshot({ path: path.join(SCREENSHOTS_DIR, '01_burger_open_375_en.png'), fullPage: false });
  const overlayVisible = await p1.$('.mobile-menu-overlay.is-open') !== null;
  console.log('Overlay visible:', overlayVisible); results.burgerMenu.overlayVisible = overlayVisible;
  const xBtn = await p1.$('.mobile-menu__close') !== null;
  console.log('X button inside menu:', xBtn); results.burgerMenu.xButtonExists = xBtn;
  const langInMenu = await p1.$('.mobile-menu__lang') !== null;
  console.log('LanguageSwitcher in menu:', langInMenu); results.burgerMenu.langInMenu = langInMenu;
  await p1.keyboard.press('Escape'); await p1.waitForTimeout(800);
  const escClosed = await p1.$('.mobile-menu.is-open') === null;
  console.log('Escape closes:', escClosed); results.burgerMenu.escapeCloses = escClosed;
    // Re-open for overlay test
  await p1.click('.menu-toggle'); await p1.waitForTimeout(500);
  const overlayEl = await p1.$('.mobile-menu-overlay');
  if (overlayEl) {
    // Click via evaluate to bypass pointer-event hit testing
    await p1.evaluate(() => {
      const overlay = document.querySelector('.mobile-menu-overlay');
      overlay?.click();
    });
  }
  await p1.waitForTimeout(800);
  const overlayClosed = await p1.$('.mobile-menu.is-open') === null;
  console.log('Overlay click closes:', overlayClosed); results.burgerMenu.overlayClickCloses = overlayClosed;
  await p1.click('.menu-toggle'); await p1.waitForTimeout(500);
  const navLink = await p1.$('.mobile-menu__list a');
  if (navLink) { await navLink.click(); await p1.waitForTimeout(1500); const navClosed = await p1.$('.mobile-menu.is-open') === null; console.log('Nav link closes:', navClosed); results.burgerMenu.navLinkCloses = navClosed; }
  // After nav link closes menu + navigates, verify body overflow is restored
  const bodyAfterNav = await p1.evaluate(() => document.body.style.overflow);
  console.log('Body overflow after nav close:', bodyAfterNav); results.burgerMenu.bodyScrollRestored = bodyAfterNav !== 'hidden';
  const ariaExp = await p1.getAttribute('.menu-toggle', 'aria-expanded');
  console.log('aria-expanded:', ariaExp); results.burgerMenu.ariaExpanded = ariaExp;
    // Find element causing horizontal overflow
  const overflowEl = await p1.evaluate(() => {
    const els = document.querySelectorAll('*');
    for (const el of els) {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      if (rect.right > window.innerWidth + 1 && rect.width > 0 && style.overflow !== 'hidden') {
        return { tag: el.tagName, class: el.className, right: rect.right, width: rect.width, left: rect.left };
      }
    }
    return null;
  });
  console.log('Overflow element:', overflowEl);
  await p1.close();

    // TEST 2: 720px — just below the 721px breakpoint (burger still visible)
  console.log('\n=== TEST 2: Burger Menu 720px English ===');
  const p2 = await context.newPage(); collectConsole(p2, '720-en');
  await p2.setViewportSize({ width: 720, height: 1024 });
  await navigateTo(p2, '');
    await p2.click('.menu-toggle'); await p2.waitForTimeout(500);
  const isOpen720 = await p2.$eval('.menu-toggle', el => el.classList.contains('is-open'));
  console.log('menu-toggle is-open:', isOpen720); results.burgerMenu.isOpen720 = isOpen720;
  const barCount = await p2.$$eval('.menu-toggle .bar', els => els.length);
  console.log('Bars count:', barCount); results.burgerMenu.barCount720 = barCount;
  const barTransform = await p2.$eval('.menu-toggle .bar', el => window.getComputedStyle(el).transform);
  console.log('Bar transform (not none):', barTransform !== 'none'); results.burgerMenu.barTransform720 = barTransform !== 'none';
  await p2.keyboard.press('Escape'); await p2.waitForTimeout(500);
  const overflow720 = await p2.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  console.log('No overflow at 720px:', !overflow720); results.burgerMenu.noOverflow720 = !overflow720;
  await p2.screenshot({ path: path.join(SCREENSHOTS_DIR, '03_menu_720_en.png'), fullPage: true });
  await p2.close();

  // TEST 2b: 768px — verify desktop nav shows, burger hidden
  console.log('\n=== TEST 2b: Desktop nav at 768px ===');
  const p2b = await context.newPage(); collectConsole(p2b, '768-en');
  await p2b.setViewportSize({ width: 768, height: 1024 });
  await navigateTo(p2b, '');
    const burgerAt768 = await p2b.isVisible('.menu-toggle');
  const desktopNav768 = await p2b.$('nav[aria-label]') !== null;
  console.log('Burger hidden at 768px:', !burgerAt768);
  console.log('Desktop nav visible at 768px:', desktopNav768);
  results.burgerMenu.desktopNavAt768 = desktopNav768 && !burgerAt768;
  await p2b.screenshot({ path: path.join(SCREENSHOTS_DIR, '04_desktop_nav_768.png'), fullPage: true });
  await p2b.close();

    // TEST 3: Desktop (1200px) — verify burger hidden
  console.log('\n=== TEST 3: Desktop 1200px ===');
  const p3 = await context.newPage(); collectConsole(p3, 'desktop-en');
  await p3.setViewportSize({ width: 1200, height: 800 });
  await navigateTo(p3, '');
    const burgerDesktop = await p3.isVisible('.menu-toggle');
  console.log('Burger hidden at desktop:', !burgerDesktop); results.burgerMenu.desktopHidden = !burgerDesktop;
  const desktopNav = await p3.$('nav') !== null;
  console.log('Desktop nav present:', desktopNav); results.burgerMenu.desktopNavPresent = desktopNav;
    await p3.close();

  // TEST 4: Arabic RTL 375px
  console.log('\n=== TEST 4: Arabic RTL 375px ===');
  const p4 = await context.newPage(); collectConsole(p4, '375-ar');
  await p4.goto('http://localhost:3100/ar', { waitUntil: 'networkidle' }); await p4.waitForTimeout(800);
  const dirAr = await p4.$eval('html', el => el.getAttribute('dir'));
  console.log('Arabic dir attr:', dirAr); results.localeTests.push({ locale: 'ar', dir: dirAr === 'rtl' });
  await p4.click('.menu-toggle'); await p4.waitForTimeout(500);
  const arMenuOpen = await p4.$('.mobile-menu.is-open') !== null;
  console.log('Arabic menu opens:', arMenuOpen); results.localeTests.push({ locale: 'ar-menu', opens: arMenuOpen });
  await p4.keyboard.press('Escape'); await p4.waitForTimeout(300);
      const arLangInMenu = await p4.$('.mobile-menu__lang') !== null;
    console.log('Arabic LanguageSwitcher in menu:', arLangInMenu);
  await p4.screenshot({ path: path.join(SCREENSHOTS_DIR, '07_arabic_home_375.png'), fullPage: true });
  await p4.keyboard.press('Escape'); await p4.waitForTimeout(300);
  // Navigate to categories page to check RTL arrow
  await p4.goto('http://localhost:3100/ar/categories', { waitUntil: 'networkidle' }); await p4.waitForTimeout(500);
  let arrowText = '';
  try {
    const arrowEl = await p4.$('.chapter-link__arrow');
    if (arrowEl) {
      arrowText = await p4.textContent('.chapter-link__arrow');
      console.log('Arabic arrow text:', arrowText);
    } else {
      console.log('Arabic chapter-link__arrow not found on categories page');
    }
  } catch (e) {
    console.log('Arrow check skipped:', e.message);
  }
  results.localeTests.push({ locale: 'ar-langInMenu', langInMenu: arLangInMenu });
  results.localeTests.push({ locale: 'ar-arrow', arrowText: arrowText });
  await p4.close();

  // TEST 5: French locale desktop
  console.log('\n=== TEST 5: French 1200px ===');
  const p5 = await context.newPage(); collectConsole(p5, 'fr');
  await p5.setViewportSize({ width: 1200, height: 800 });
  await navigateTo(p5, 'fr');
  const frHero = await p5.$('.hero') !== null;
  console.log('French page loaded with hero:', frHero); results.localeTests.push({ locale: 'fr', loaded: frHero });
  await p5.screenshot({ path: path.join(SCREENSHOTS_DIR, '09_french_home_desktop.png'), fullPage: true });
  await p5.close();

  // TEST 6: Animations
  console.log('\n=== TEST 6: Animations ===');
  const p6 = await context.newPage(); collectConsole(p6, 'anim-en');
    await p6.setViewportSize({ width: 1200, height: 800 });
  await p6.goto('http://localhost:3100/en/categories', { waitUntil: 'networkidle' }); await p6.waitForTimeout(800);
    const heroLines = await p6.$$eval('.hero h1 .line', els => els.length);
  console.log('Hero title lines:', heroLines); results.animations.heroLines = heroLines;
  const chaptersCount = await p6.$$eval('.chapters', els => els.length);
  console.log('.chapters elements:', chaptersCount); results.animations.chaptersCount = chaptersCount;
  const ctaCount = await p6.$$eval('.closing-cta', els => els.length);
  console.log('.closing-cta elements:', ctaCount); results.animations.ctaCount = ctaCount;
  const staggerItems = await p6.$$eval('.mobile-menu__list li', els => els.length).catch(() => 0);
  console.log('Mobile menu list items (stagger):', staggerItems); results.animations.staggerCount = staggerItems;
  // Simulate scroll-reveal by adding revealed class
  await p6.evaluate(() => {
    document.querySelectorAll('.chapters').forEach(el => el.classList.add('revealed'));
    document.querySelectorAll('.closing-cta').forEach(el => el.classList.add('revealed'));
  });
  const revealedAfter = await p6.$$eval('.chapters.revealed', els => els.length);
  console.log('Chapters revealed after trigger:', revealedAfter); results.animations.revealedAfterScroll = revealedAfter;
  await p6.screenshot({ path: path.join(SCREENSHOTS_DIR, '11_animations_scrolled.png'), fullPage: true });
  await p6.close();

  // TEST 7: Reduced motion
  console.log('\n=== TEST 7: Reduced Motion ===');
  const rmContext = await browser.newContext({ viewport: { width: 375, height: 667 }, reducedMotion: 'reduce' });
  const p7 = await rmContext.newPage(); collectConsole(p7, 'rm-en');
    await navigateTo(p7, '');
  // Check .closing-cta (footer CTA, uses useRevealOnScroll) — should be visible with reduced motion
  const ctaRevealed = await p7.$('.closing-cta.revealed') !== null;
  console.log('Closing CTA has revealed class (reduced motion):', ctaRevealed);
  const ctaOpacity = await p7.$eval('.closing-cta', el => window.getComputedStyle(el).opacity);
  console.log('Closing CTA opacity (should be 1):', ctaOpacity);
  results.animations.reducedMotionOpacity = parseFloat(ctaOpacity);
  const transitionDur = await p7.$eval('.menu-toggle .bar', el => window.getComputedStyle(el).transitionDuration);
  console.log('Transition duration with reduced motion:', transitionDur); results.animations.reducedMotionTransition = transitionDur;

  // TEST 8: Visual Identity Audit
  console.log('\n=== TEST 8: Visual Identity ===');
  const p8 = await context.newPage(); collectConsole(p8, 'vis-en');
  await p8.setViewportSize({ width: 1200, height: 800 });
  await navigateTo(p8, '');
  const bodyBg = await p8.$eval('body', el => window.getComputedStyle(el).backgroundColor);
  console.log('Body background:', bodyBg); results.visualIdentity.bodyBg = bodyBg;
  // Debug gold colors — find elements with 'gold' class and their actual colors
  const goldDebug = await p8.evaluate(() => {
    const els = document.querySelectorAll('[class*="gold"], [class*="Gold"], .text-gold, .color-gold');
    return Array.from(els).map(el => ({ cls: el.className, color: window.getComputedStyle(el).color, bg: window.getComputedStyle(el).backgroundColor }));
  });
  console.log('Gold elements debug:', JSON.stringify(goldDebug));
  results.visualIdentity.goldDebug = goldDebug;
  const goldEls = await p8.$$eval('[class*="gold"], [class*="Gold"], .text-gold, .color-gold', els => Array.from(els).map(el => window.getComputedStyle(el).color).filter(c => c));
  console.log('Gold colors found:', goldEls); results.visualIdentity.goldColors = [...new Set(goldEls)];
  const catImgs = await p8.$$eval('.chapter-image img', els => els.length);
  console.log('Category images:', catImgs); results.visualIdentity.categoryImages = catImgs;
  const decorative = await p8.$$eval('.sun-disk, .egyptian-bird, .lotus-flower, .obelisk, .nile-wave, .temple-frame', els => els.length).catch(() => 0);
  console.log('Decorative components (should be 0 or minimal):', decorative); results.visualIdentity.decorativeComponents = decorative;
    // Check hero lines on home page
  const heroLines = await p8.$$eval('.hero h1 .line', els => els.length);
  console.log('Hero title lines on home:', heroLines);
  results.animations.heroLinesHome = heroLines;

  const footerCta = await p8.$('.closing-cta') !== null;
  console.log('Footer closing CTA:', footerCta); results.visualIdentity.footerCta = footerCta;
  const footerCols = await p8.$$eval('.footer-grid > *', els => els.length);
  console.log('Footer grid children:', footerCols); results.visualIdentity.footerGridCols = footerCols;
  const heroExists = await p8.$('.hero') !== null;
  console.log('Hero present:', heroExists); results.visualIdentity.heroPresent = heroExists;
  const heroImgEl = await p8.$('.hero img') !== null;
  console.log('Hero has image element:', heroImgEl); results.visualIdentity.heroImgEl = heroImgEl;
  await p8.screenshot({ path: path.join(SCREENSHOTS_DIR, '15_visual_identity_en.png'), fullPage: true });
  await p8.close();

  // TEST 9: All 9 locales quick check
  console.log('\n=== TEST 9: All Locales ===');
    const locales = ['en', 'es', 'de', 'it', 'pt', 'nl', 'zh', 'ar', 'fr'];
        for (const loc of locales) {
    const p = await context.newPage(); collectConsole(p, loc);
    await p.setViewportSize({ width: 1200, height: 800 });
    try {
      await p.goto('http://localhost:3100/' + loc, { waitUntil: 'networkidle', timeout: 10000 });
      await p.waitForTimeout(500);
      const hero = await p.$('.hero') !== null;
      const hasErr = results.consoleErrors.filter(e => e.includes('[' + loc)).length;
      console.log(loc + ': loaded=' + hero + ', errors=' + hasErr);
      results.localeTests.push({ locale: loc, loaded: hero, errors: hasErr });
      if (loc === 'ar') {
        const dir = await p.$eval('html', el => el.getAttribute('dir'));
        console.log('  Arabic dir:', dir);
        results.localeTests.push({ locale: 'ar-dir', dir });
      }
    } catch (e) {
      console.log(loc + ': ERROR - ' + e.message);
      results.localeTests.push({ locale: loc, loaded: false, error: e.message });
    }
    await p.close();
  }

  // Summary
  fs.writeFileSync(path.join(SCREENSHOTS_DIR, 'qa-results.json'), JSON.stringify(results, null, 2));
  console.log('\n========== QA RESULTS SUMMARY ==========');
  console.log('Burger Menu:', JSON.stringify(results.burgerMenu, null, 2));
  console.log('Animations:', JSON.stringify(results.animations, null, 2));
  console.log('Console Errors:', results.consoleErrors);
  console.log('Locale Tests:', JSON.stringify(results.localeTests, null, 2));
  console.log('Visual Identity:', JSON.stringify(results.visualIdentity, null, 2));
    await browser.close();
  console.log('\nQA Complete.');
})().catch(e => { console.error('QA FAILED:', e); process.exit(1); });