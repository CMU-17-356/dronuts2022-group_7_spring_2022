export {}
const puppeteer = require('puppeteer');

describe("https://dronutgroup7frontend.ue.r.appspot.com", () => {
    it('should have correct donut data displayed on home page', async () => {
      await page.goto('https://dronutgroup7frontend.ue.r.appspot.com');
      // const name = await page.$eval('.hnname > a', el => el.innerText)
      // console.log(name)
      // if ((await page.waitForXPath('//*[contains(text(), "Subscription Confirmed")]',30000)) !== null) {
      //   chk = await page.evaluate(el => el.innerText, await page.$x('//*[contains(text(), "Subscription Confirmed")]'))
      //   chk = 'Success'
      // } else { 
      //   chk = 'Failed'
      // }     
      const found = (await page.content()).match(/Strawberry/g);
      // const found = await page.evaluate(() => window.find("your_text"));
      // const title = await page.title();
      // expect(title).toEqual('Google');
      console.log("found value:", found);
      expect(found).not.toBeNull();
      // expect(await page.evaluate(() => window.find("your_text"));
    });
  });