const { chromium } = require('playwright-chromium');
const { assert } = require('chai');

let browser, page; // Declare reusable variables

describe('messengerTests', function () {

    before(async () => { browser = await chromium.launch(); });

    after(async () => { await browser.close(); });

    beforeEach(async () => { page = await browser.newPage(); });

    afterEach(async () => { await page.close(); });

    it.only('loads static page', async function () {

        await page.goto('http://127.0.0.1:5500/HW2/01.Messenger/index.html');

        await page.click("text=Refresh");

        await page.waitForTimeout(200);

        const content = await page.$eval('#messages', el => el.value);

        assert.include(content,
            `Spami: Hello, are you there?`
            // `Garry: Yep, whats up :?`
            // Spami: How are you? Long time no see? :)
            // George: Hello, guys! :))
            // Spami: Hello, George nice to see you! :))))
        );
    });
    it('page displays send messages', async () => {
        await page.goto('http://127.0.0.1:5500/HW2/01.Messenger/index.html');

        await page.fill('#author', 'Peter');
        await page.fill('#content', `Hello, it's Peter!`);
        await page.click('text=Send');
        await page.waitForTimeout(200);
        await page.click('text=Refresh');

        const content = await page.$eval('#messages', el => el.value);

        assert.include(content, `Hello, it's Peter!`);
    });
});