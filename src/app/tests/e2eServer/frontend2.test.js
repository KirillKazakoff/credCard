import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
    let browser = null;
    let page = null;
    let server = null;
    const baseUrl = 'http://localhost:9001/dist';

    beforeAll(async () => {
        server = fork(`${__dirname}/e2e.server.js`);
        await new Promise((resolve, reject) => {
            server.on('error', reject);
            server.on('message', (message) => {
                if (message === 'ok') {
                    resolve();
                }
            });
        });

        browser = await puppetteer.launch({
            // headless: false, // show gui
            // slowMo: 250,
            // devtools: true, // show devTools
        });
        page = await browser.newPage();
    });

    test('should add do something', async () => {
        await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });

        document.body.innerHTML = '<div id="container"></div>';
        const container = document.querySelector('#container');

        expect(container.id).toBe('container');
    });

    afterAll(async () => {
        await browser.close();
        server.kill();
    });
});
