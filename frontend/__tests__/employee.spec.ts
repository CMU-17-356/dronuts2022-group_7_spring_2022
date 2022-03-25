
export {}
const puppeteer = require('puppeteer');

describe("https://dronutgroup7frontend.ue.r.appspot.com/pending", () => {
    it('Check whether the Employee loading page render', async () => {   
      await page.goto('https://dronutgroup7frontend.ue.r.appspot.com/pending'); 
      const found = await (await page.content()).match(/pending/gi);
      console.log(await page.content());
      console.log("found value:", found);
      await expect(found).not.toBeNull();
    });
  });