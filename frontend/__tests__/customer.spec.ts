export {}
const puppeteer = require('puppeteer');

describe("https://dronutgroup7frontend.ue.r.appspot.com/", () => {
    it('Check whether the Customer loading page render', async () => {   
      await page.goto('https://dronutgroup7frontend.ue.r.appspot.com/'); 
      const found = await (await page.content()).match(/loading/gi);
      console.log(await page.content());
      console.log("found value:", found);
      await expect(found).not.toBeNull();
    });
  });