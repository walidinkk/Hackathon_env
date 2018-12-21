const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless : true });
    const page = await browser.newPage();
    const search = 'ACER'
    await page.goto('https://www.gsmarena.com/makers.php3');
    // const data = await page.$('.st-text td');
    // const target = await data.$eval('a', a => a.innerText)
    // console.log(target);


    const brands = await page.$$('.st-text td');


    for(const brand of brands){
      const name = await brand.$eval('a', a => a.innerText.split('\n')[0])
      const link = await brand.$eval('a', a => a.href)
      console.log(name);
      console.log(link);
    }
  }
  catch (e) {
    console.log(e);
  }
})();
