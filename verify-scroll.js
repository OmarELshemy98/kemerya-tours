/** Quick verification: report scrollWidth vs innerWidth for a URL + viewport. */
import puppeteer from "puppeteer";
const url = process.argv[2];
const vp = (process.argv[3] || "desktop") === "mobile" ? [375, 812] : [1366, 900];
(async () => {
  const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"] });
  const page = await b.newPage();
  await page.setViewport({ width: vp[0], height: vp[1] });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 25000 });
  await new Promise((r) => setTimeout(r, 1500));
  const d = await page.evaluate(() => {
    const iw = window.innerWidth;
    const sw = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
    return { innerWidth: iw, scrollWidth: sw, overflowPx: sw - iw };
  });
  console.log(JSON.stringify({ url, viewport: vp[0] === 375 ? "mobile" : "desktop", ...d, ok: d.overflowPx <= 0 }));
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
