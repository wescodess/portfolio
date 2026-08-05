const puppeteer = require('puppeteer');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch({headless:'new'});
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await delay(2000);
  const nav = await page.waitForSelector('nav');
  const initialTop = await nav.evaluate((el) => el.getBoundingClientRect().top);
  await page.evaluate(() => {
    const container = document.querySelector('.layout-root');
    container.scrollTo({ top: 2000, behavior: 'instant' });
  });
  await delay(1000);
  const scrolledTop = await nav.evaluate((el) => el.getBoundingClientRect().top);
  console.log(JSON.stringify({ initialTop, scrolledTop }, null, 2));
  await browser.close();
})();
