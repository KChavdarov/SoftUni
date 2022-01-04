const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
const mockData = require('./mock-data.json');

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
}


let browser;
let context;
let page;

describe('E2E tests', function () {
    this.timeout(6000);

    before(async () => {
        // browser = await chromium.launch({ headless: false, slowMo: 500 });
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();

        // block intensive resources and external calls (page routes take precedence)
        await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
        await context.route(url => {
            return url.hostname != 'localhost';
        }, route => route.abort());

        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    describe('Catalog', () => {
        it('loads and displays recipes', async () => {
            await page.route('**/data/recipes*', (request) => request.fulfill(json(mockData.list)));

            await page.goto('http://localhost:5500');

            await page.waitForSelector('article');

            const titles = await page.$$eval('h2', (titles) => titles.map(t => t.textContent));
            expect(titles[0]).contain('Easy Lasagna');
            expect(titles[1]).contain('Grilled Duck Fillet');
        });
    });

    describe('Details', () => {
        it('loads and displays heading', async () => {
            await page.route('**/data/recipes*', (request) => request.fulfill(json(mockData.list)));
            await page.goto('http://localhost:5500');
            await page.waitForSelector('article');
            await page.click('text=Easy Lasagna');
            await page.waitForSelector('article');
            const title = await page.$$eval('#details h2', (title) => title.map(t => t.textContent));
            expect(title[0]).contain('Easy Lasagna');
        });
        it('loads and displays ingredients', async () => {
            await page.route('**/data/recipes*', (request) => request.fulfill(json(mockData.list)));
            await page.goto('http://localhost:5500');
            await page.waitForSelector('article');
            await page.click('text=Easy Lasagna');
            await page.waitForSelector('article');
            const ingredients = await page.$$eval('#details ul li', (ingredients) => ingredients.map(li => li.textContent));
            expect(ingredients[0]).equal('1 tbsp Ingredient 1');
            expect(ingredients[1]).equal('2 cups Ingredient 2');
        });
        it('loads and displays steps', async () => {
            await page.route('**/data/recipes*', (request) => request.fulfill(json(mockData.list)));
            await page.goto('http://localhost:5500');
            await page.waitForSelector('article');
            await page.click('text=Easy Lasagna');
            await page.waitForSelector('article');
            const steps = await page.$$eval('#details .description p', (steps) => steps.map(p => p.textContent));
            expect(steps[0]).equal('Prepare ingredients');
            expect(steps[1]).equal('Mix ingredients');
        });
    });

    describe('Authentication', () => {
        it('register sends correct data', async () => {
            const email = 'john@abv.bg';
            const password = '123123';

            await page.route('**/users/register*', (request) => request.fulfill(json({ _id: '0001', email, accessToken: 'AAAA' })));

            await page.goto('http://localhost:5500');
            await page.click('text=Register');

            await page.waitForSelector('form');

            await page.fill('[name="email"]', email);
            await page.fill('[name="password"]', password);
            await page.fill('[name="rePass"]', password);

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/users/register') && request.method() == 'POST'),
                page.click('[type="submit"]')
            ]);
            expect(JSON.parse(request.postData()).email).equal(email);
            expect(JSON.parse(request.postData()).password).equal(password);
        });

        it('login sends correct data', async () => {
            const email = 'john@abv.bg';
            const password = '123123';

            await page.route('**/users/login*', (request) => request.fulfill(json({ _id: '0001', email, accessToken: 'AAAA' })));

            await page.goto('http://localhost:5500');
            await page.click('text=Login');

            await page.waitForSelector('form');

            await page.fill('[name="email"]', email);
            await page.fill('[name="password"]', password);

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/users/login') && request.method() == 'POST'),
                page.click('[type="submit"]')
            ]);
            expect(JSON.parse(request.postData()).email).equal(email);
            expect(JSON.parse(request.postData()).password).equal(password);
        });
    });

    describe('CRUD Ops', () => {
        beforeEach(async () => {
            const email = 'peter@abv.bg';
            const password = '123456';
            await page.route('**/users/login*', (request) => request.fulfill(json({ _id: '0001', email, accessToken: 'AAAA' })));
            await page.goto('http://localhost:5500');
            await page.click('text=Login');
            await page.waitForSelector('form');
            await page.fill('[name="email"]', email);
            await page.fill('[name="password"]', password);
            await Promise.all([
                page.waitForResponse(response => response.url().includes('/users/login') && response.status() == 200),
                page.click('[type="submit"]')
            ]);

        });

        it.only('create sends correct request', async () => {
            await page.route('**/data/recipes*', (request) => request.fulfill(json({ name, img, ingredients, steps })));
            const name = 'aaa';
            const img = 'bbb';
            const ingredients = 'ccc';
            const steps = 'ddd';

            await page.click('text=Create Recipe');
            await page.fill('[name="name"]', name);
            await page.fill('[name="img"]', img);
            await page.fill('[name="ingredients"]', ingredients);
            await page.fill('[name="steps"]', steps);

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/data/recipes') && request.method() == 'POST'),
                page.click('[type="submit"]')
            ]);
            const postData = JSON.parse(request.postData());
            expect(postData.name).equal('aaa');
            expect(postData.img).equal('bbb');
            expect(postData.ingredients).deep.equal(['ccc']);
            expect(postData.steps).deep.equal(['ddd']);
        });
    });
});
