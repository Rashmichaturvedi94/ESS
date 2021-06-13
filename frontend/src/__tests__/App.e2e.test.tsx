const puppeteer = require('puppeteer');

const username = 'admin';
const password = 'password';

// End to end tests
describe('Login Form', () => {
  test('Can submit login form', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('#loginForm');
    await page.click("input[name=username]");
    await page.type("input[name=username]", username);
    await page.click("input[name=password]");
    await page.type("input[name=password]", password);

    await page.click("button[type=submit]");

    browser.close();
  }, 9000000);
});
