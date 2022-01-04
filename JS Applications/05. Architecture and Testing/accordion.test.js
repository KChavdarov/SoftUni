const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

describe('E2E tests', function () {
    this.timeout(6000);

    before(async () => {
        browser = await chromium.launch();
        // browser = await chromium.launch({ headless: false, slowMo: 500 });
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });

    it.only('loads static page', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');
        await page.screenshot({ path: 'index.png' });

        const titles = await page.$$eval('.accordion .head span', (spans) => spans.map(s => s.textContent));
        console.log(titles);
    });

    it('loads articles', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');

        let content = await page.textContent('.accordion:nth-child(1) .head span');
        expect(content).equal('Scalable Vector Graphics');
        content = await page.textContent('.accordion:nth-child(2) .head span');
        expect(content).equal('Open standard');
        content = await page.textContent('.accordion:nth-child(3) .head span');
        expect(content).equal('Unix');
        content = await page.textContent('.accordion:nth-child(4) .head span');
        expect(content).equal('ALGOL');
    });

    it('toggles content', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');

        await page.click('.accordion:nth-child(1) >> text=More');
        await page.waitForSelector('.accordion:nth-child(1) .extra p');
        const isVisible = await page.isVisible('.accordion:nth-child(1) .extra p');
        expect(isVisible).be.true;
        await page.click('.accordion:nth-child(1) >> text=Less');
        const isHidden = await page.isHidden('.accordion:nth-child(1) .extra p');
        expect(isHidden).be.true;
    });
});
