const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless : false });
    const page = await browser.newPage();

    await page.goto('https://www.gsmarena.com/makers.php3');
    await page.waitForSelector('.review-header');
    console.log("all ok");
  }
  catch (e) {
    console.log(e);
  }
})();
