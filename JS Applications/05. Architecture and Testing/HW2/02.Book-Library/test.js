const { chromium } = require('playwright-chromium');
const { assert } = require('chai');

describe('messengerTests', function () {
    let browser, page;

    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });

    after(async () => { await browser.close(); });

    beforeEach(async () => { page = await browser.newPage(); });

    afterEach(async () => { await page.close(); });

    it('loads all books', async function () {
        await page.goto('http://127.0.0.1:5500/HW2/02.Book-Library/index.html');
        await page.click('text=LOAD ALL BOOKS');
        const firstTd = await page.$eval('css=td', td => td.textContent);
        const secondTd = await page.$eval('css=[data-id=d953e5fb-a585-4d6b-92d3-ee90697398a1]', tr => tr.children[0].textContent);


        assert.equal(firstTd, `Harry Potter and the Philosopher's Stone`);
        assert.equal(secondTd, `C# Fundamentals`);
    });
    it('test add book', async () => {
        await page.goto('http://127.0.0.1:5500/HW2/02.Book-Library/index.html');
        await page.fill('css=[placeholder="Title..."]', 'New Book');
        await page.fill('css=[placeholder="Author..."]', 'New Author');


        await page.click('text=Submit');
        assert.notEqual(page.$eval('css=[placeholder="Title..."]', inp => inp.value, ''));
        assert.notEqual(page.$eval('css=[placeholder="Author..."]', inp => inp.value, ''));
        await page.click('text=LOAD ALL BOOKS');
        const numberOfRows = await page.$eval('css=tbody', tbody => tbody.childElementCount);

        assert.equal(3, numberOfRows);
    });
    it('test edit book', async () => {
        await page.goto('http://127.0.0.1:5500/HW2/02.Book-Library/index.html');
        await page.click('text=LOAD ALL BOOKS');
        await page.click('text=Edit');

        const titleContent = await page.$eval('#editForm', form => form.children[3].value);
        const auhtorContent = await page.$eval('#editForm', form => form.children[5].value);
        assert.equal("Harry Potter and the Philosopher's Stone", titleContent);
        assert.equal("J.K.Rowling", auhtorContent);

        await page.fill('#editForm >> css=[name="title"]', 'Changed Title');
        await page.fill('#editForm >> css=[name="author"]', 'Changed Author');
        assert.equal("Changed Title", await page.$eval('#editForm >> css=[name="title"]', field => field.value));
        assert.equal('Changed Author', await page.$eval('#editForm >> css=[name="author"]', field => field.value));

        await page.click('text=Save');
        await page.click('text=LOAD ALL BOOKS');
        const firstTd = await page.$eval('css=td', td => td.textContent);
        const secondTd = await page.$eval('css=[data-id=d953e5fb-a585-4d6b-92d3-ee90697398a0]', tr => tr.children[1].textContent);

        assert.equal('Changed Title', firstTd);
        assert.equal('Changed Author', secondTd);
    });
    it('test delete book', async () => {
        await page.goto('http://127.0.0.1:5500/HW2/02.Book-Library/index.html');
        await page.click('text=LOAD ALL BOOKS');

        page.on('dialog', dialog => dialog.accept());
        await page.click('text=Delete');


        await page.click('text=LOAD ALL BOOKS');
        const numberOfRows = await page.$eval('css=tbody', tbody => tbody.childElementCount);
        assert.equal(1, numberOfRows);
    });
});