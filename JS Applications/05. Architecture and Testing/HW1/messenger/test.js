const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser;
let page;

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

describe('E2E tests', async () => {
  before(async () => { 
      browser = await chromium.launch(); 
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

  it('loads static page', async () => {
    await page.goto('http://127.0.0.1:5500/HW1/messenger/index.html');
    await page.click('text=Refresh')
    
    const content = await page.evaluate(el => el.value, await page.$('textarea'))
    
    expect(content).to.contains('Spami: Hello, are you there?')
    expect(content).to.contains('Spami: Hello, George nice to see you! :)))')
  });  
  it.only('Sends message', async () => {
    let author = 'Test'
    let content = 'TestContent'
    await page.route('**/jsonstore/messenger',route => route.fulfill(json({author: author, content: content, _id: "111"})))
    await page.goto('http://127.0.0.1:5500/HW1/messenger/index.html');
    await page.fill('text=Message', content)
    await page.fill('text=Name', author)
    const [request]=await Promise.all([
    page.waitForRequest(request => request.url().includes('/jsonstore/messenger') && request.method() === 'POST'),
    page.click('text=Send')
    ]);
 
    const parsed = JSON.parse(request.postData())
    expect(parsed.author).to.equal('Test')
  });  
});