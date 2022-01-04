const { chromium } = require('playwright-chromium');
const { assert } = require('chai');
let browser, page; // Declare reusable variable
const url = 'http://127.0.0.1:5500/HW3/index.html';
describe('E2E tests', function () {
  //this.timeout(6000);
  //{ headless: false, slowMo: 1000 }
  before(async () => { browser = await chromium.launch(); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); });

  it('look for content', async () => {
    await page.goto(url);
    await page.click('#refresh');
    await page.waitForSelector('#refresh');
    const messages = await page.$eval('#messages', e => e.value.split('\n'));
    assert.deepEqual(messages, [
      'Spami: Hello, are you there?',
      'Garry: Yep, whats up :?',
      'Spami: How are you? Long time no see? :)',
      'George: Hello, guys! :))',
      'Spami: Hello, George nice to see you! :)))',
    ]);
  });

  it('check textarea', async () => {
    await page.goto(url);
    //await page.click('#submit');
    await page.dispatchEvent('#submit', 'click');
    //await page.waitForSelector('#submit');
    //await page.click('#refresh');
    await page.dispatchEvent('#refresh', 'click');
    await page.waitForSelector('#refresh');

    const messages = await page.$eval('#messages', e => e.value.split('\n'));

    assert.deepEqual(messages, [
      'Spami: Hello, are you there?',
      'Garry: Yep, whats up :?',
      'Spami: How are you? Long time no see? :)',
      'George: Hello, guys! :))',
      'Spami: Hello, George nice to see you! :)))',
      ': '
    ]);
  });

  it('check textarea 2', async () => {
    await page.goto(url);

    await page.fill('#author', 'Alber');
    await page.fill('#content', 'The Plague');

    //await page.click('#submit');
    //await page.click('#refresh');
    await page.dispatchEvent('#submit', 'click');
    await page.dispatchEvent('#refresh', 'click');


    await page.waitForSelector('#refresh');

    const messages = await page.$eval('#messages', e => e.value.split('\n'));

    assert.deepEqual(messages, [
      'Spami: Hello, are you there?',
      'Garry: Yep, whats up :?',
      'Spami: How are you? Long time no see? :)',
      'George: Hello, guys! :))',
      'Spami: Hello, George nice to see you! :)))',
      ': ',
      'Alber: The Plague',
    ]);

  });
});


