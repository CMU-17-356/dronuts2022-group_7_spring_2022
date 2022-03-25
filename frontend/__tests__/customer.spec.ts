export {}
const puppeteer = require('puppeteer');

describe("https://dronutgroup7frontend.ue.r.appspot.com/", () => {
    it('Check whether the Customer loading page render', async () => {   
      await page.goto('https://dronutgroup7frontend.ue.r.appspot.com/'); 
      const found = await (await page.content()).match(/customer/gi);
      await expect(found).not.toBeNull();
    });
  });