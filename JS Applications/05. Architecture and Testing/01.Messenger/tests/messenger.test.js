// В случай, че не използвате Live Server добавката за VSC, моля променете адреса и порта в host според вашият сървър 
// Тестовете използват mock данни и не е нужно REST сървиса, да е стартиран.

const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:5500';

const mockData = {
    'AAA': {
        'author': 'a',
        'content': 'b'
    },
    'BBB': {
        'author': 'c',
        'content': 'd'
    },
};

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

let browser, page;

describe('E2E tests', function () {
    this.timeout(120000);

    // before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('makes correct API refresh call', async () => {
        await page.route('**/jsonstore/messenger*', request => request.fulfill(json(mockData)));

        await page.goto(host + '/index.html');

        const [response] = await Promise.all([
            page.waitForResponse('http://localhost:3030/jsonstore/messenger'),
            page.click('#refresh')
        ]);
        expect(await response.json()).deep.equal(mockData);
    });

    it('loads messages', async () => {
        await page.route('**/jsonstore/messenger*', request => request.fulfill(json(mockData)));

        await page.goto(host + '/index.html');

        await Promise.all([
            page.waitForResponse('http://localhost:3030/jsonstore/messenger'),
            page.click('#refresh')
        ]);
        const [messages] = await page.$$eval('#messages', arr => arr.map(a => a.value));
        expect(messages).equal('a: b\nc: d');
    });

    it('makes correct API call for new message', async () => {
        await page.route('**/jsonstore/messenger*', request => request.fulfill(json({})));
        const name = 'e';
        const msg = 'f';

        await page.goto(host + '/index.html');

        await page.fill('#author', name);
        await page.fill('#content', msg);

        const [request] = await Promise.all([
            page.waitForRequest('http://localhost:3030/jsonstore/messenger'),
            page.click('#submit')
        ]);
        expect(await request.postData()).deep.equal(JSON.stringify({ author: name, content: msg }));
    });
});