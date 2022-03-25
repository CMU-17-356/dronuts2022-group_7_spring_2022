
export {}
const puppeteer = require('puppeteer');

describe("https://dronutgroup7frontend.ue.r.appspot.com/pending", () => {
    it('Check whether the Employee loading page render', async () => {   
      await page.goto('https://dronutgroup7frontend.ue.r.appspot.com/pending'); 
      const found = await (await page.content()).match(/loading/gi);
      await expect(found).not.toBeNull();
    });
  });