// В случай, че не използвате Live Server добавката за VSC, моля променете адреса и порта в host според вашият сървър 
// Тестовете използват mock данни и не е нужно REST сървиса, да е стартиран.
 
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:5500';

const mockData = {
    'AAA': {
        'author': 'a',
        'title': 'b'
    },
    'BBB': {
        'author': 'c',
        'title': 'd'
    }
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

let browser;
let page;

describe('E2E tests', function () {
    this.timeout(60000);


    before(async () => {
        // browser = await chromium.launch({ headless: false, slowMo: 500 });
        browser = await chromium.launch();
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        page.close();
    });

    it('makes correct API request to load books', async () => {
        await page.route('**/jsonstore/collections/books', route => route.fulfill(json(mockData)));
        await page.goto(host + '/index.html');
        const [response] = await Promise.all([
            page.waitForResponse(response => response.url() === 'http://localhost:3030/jsonstore/collections/books' && response.status() === 200),
            page.click('#loadBooks')
        ]);
        expect(await response.json()).deep.equal(mockData);
    });

    it('loads correct content', async () => {
        await page.route('**/jsonstore/collections/books', route => route.fulfill(json(mockData)));
        await page.goto(host + '/index.html');
        await page.click('#loadBooks');
        await page.waitForSelector('tbody');
        const title = await page.textContent('tr[data-id="AAA"] td:nth-child(1)');
        const author = await page.textContent('tr[data-id="AAA"] td:nth-child(2)');
        expect(title).equal('b');
        expect(author).equal('a');
    });

    it('edit form shows correct input values', async () => {
        await page.route('**/jsonstore/collections/books', route => route.fulfill(json(mockData)));
        await page.route('**/jsonstore/collections/books/AAA', route => route.fulfill(json(mockData.AAA)));
        await page.goto(host + '/index.html');
        await page.click('#loadBooks');
        await page.waitForSelector('tbody');
        await Promise.all([
            page.waitForResponse(response => response.url() === 'http://localhost:3030/jsonstore/collections/books/AAA' && response.status() === 200),
            page.click('tr[data-id="AAA"] .editBtn')
        ]);

        await page.isVisible('#editForm');
        const values = await page.$$eval('#editForm input', inputs => inputs.map(i => i.value));
        expect(values).deep.equal(['AAA', 'b', 'a']);
    });

    it('editing books sends correct requests', async () => {
        await page.route('**/jsonstore/collections/books', route => route.fulfill(json(mockData)));
        await page.route('**/jsonstore/collections/books/AAA', route => route.fulfill(json(mockData.AAA)));
        await page.goto(host + '/index.html');
        await page.click('#loadBooks');
        await page.waitForSelector('tbody');
        await page.click('tr[data-id="AAA"] .editBtn');
        await page.isVisible('#editForm');
        await page.fill('#editForm input[name="title"]', 'e');
        await page.fill('#editForm input[name="author"]', 'f');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.url() === 'http://localhost:3030/jsonstore/collections/books/AAA' && request.method() === 'PUT'),
            page.click('#editForm button')
        ]);
        expect(await request.postDataJSON()).deep.equal({ 'author': 'f', 'title': 'e' });
    });

    it('creating books sends correct requests', async () => {
        await page.route('**/jsonstore/collections/books', route => route.fulfill(json(mockData.AAA)));
        await page.goto(host + '/index.html');
        page.on('dialog', dialog => { console.log('----No empty fields permitted----'); dialog.accept(); });
        await page.click('#createForm button');
        await page.fill('#createForm input[name="title"]', 'e');
        await page.fill('#createForm input[name="author"]', 'f');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.url() === 'http://localhost:3030/jsonstore/collections/books' && request.method() === 'POST'),
            page.click('#createForm button')
        ]);
        expect(await request.postDataJSON()).deep.equal({ 'author': 'f', 'title': 'e' });
    });

    it('deleting books sends correct requests', async () => {
        await page.route('**/jsonstore/collections/books', route => route.fulfill(json(mockData)));
        await page.route('**/jsonstore/collections/books/AAA', route => route.fulfill(json(mockData.AAA)));

        await page.goto(host + '/index.html');
        await page.click('#loadBooks');
        await page.waitForSelector('tbody');

        page.on('dialog', dialog => { console.log('----Delete confirmation requested----'); dialog.accept(); });

        const [request, response] = await Promise.all([
            page.waitForRequest(request => request.url() === 'http://localhost:3030/jsonstore/collections/books/AAA' && request.method() === 'DELETE'),
            page.waitForResponse(response => response.url() === 'http://localhost:3030/jsonstore/collections/books/AAA' && response.status() === 200),
            page.click('tr[data-id="AAA"] .deleteBtn')
        ]);
        expect(await response.request()).deep.equal(request);
        expect(await response.json()).deep.equal(mockData.AAA);
    });
});