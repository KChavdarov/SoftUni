const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://127.0.0.1:5500/HW1/book-library/index.html';

let browser;
let page;

describe('E2E tests', () => {

    before(async () => {
        // browser = await chromium.launch();
        browser = await chromium.launch({ headless: false, slowMo: 500 }) ;
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

    it.only('edit book', async () => {
        await page.goto(host);

        await page.click('text=load all books');
        await page.click('text=edit');

        await page.fill('#editForm >> css=[name="title"]', 'TestTitle');
        await page.fill('#editForm >> css=[name="author"]', 'TestAuthor');

        await page.click('text=save');
        await page.click('text=load all books');
        await page.waitForSelector('tbody');

        let tableContent = await page.$$eval('td', t => t.map(s => s.textContent));
        console.log(tableContent);

        expect(tableContent[0]).to.equal('TestTitle');
        expect(tableContent[1]).to.equal('TestAuthor');
    });
    it('delete book', async () => {
        await page.goto(host);

        const [loadResponse] = await Promise.all([
            page.waitForResponse('http://localhost:3030/jsonstore/collections/books'),
            page.click('text=load all books'),
        ]);

        let books = await loadResponse.json();
        let ids = [];
        Object.entries(books).map(getId);

        function getId([id, book]) {
            ids.push(id);
        }

        page.on('dialog', async dialog => {
            dialog.accept();
        });

        const [deleteResponse] = await Promise.all([
            page.waitForResponse('http://localhost:3030/jsonstore/collections/books/' + ids[0]),
            page.click('text=delete')
        ]);

        let status = deleteResponse.status();

        expect(status).to.equal(200);
    });
});