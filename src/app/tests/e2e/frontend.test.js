/* eslint-disable no-undef */

beforeAll(async () => {
    await page.goto(URL, { waitUntil: 'domcontentloaded' });
});

afterEach(async () => {
    await page.reload();
});

it('valid input', async () => {
    const form = await page.$('.form');
    const input = await form.$('.validate__input');
    await input.type('4024007165824979');

    const submit = await form.$('.validate__button');
    submit.click();
    page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.card__active');

    const result = await page.evaluate(() => document.querySelector('.card__active').className);
    const expected = 'card card__visa card__active';
    expect(result).toBe(expected);
});

it('invalid input', async () => {
    const form = await page.$('.form');
    const input = await form.$('.validate__input');
    await input.type('40a23423');

    const submit = await form.$('.validate__button');
    submit.click();

    await page.waitForSelector('.error');
    const result = await page.evaluate(() => document.querySelector('.error').className);
    expect(result).toBe('error');
});

// test('jsdom', () => {
//     document.body.innerHTML = '<div id="container"></div>';
//     const container = document.querySelector('#container');

//     expect(container.id).toBe('conainer');
// })

// it('invalid inpit', async () => {
//     const form = await page.$('.form');
//     const input = await form.$('.validate__input');
//     await input.type('40a23423');

//     const submit = await form.$('.validate__button');
//     submit.click();
//     const result = async () => {
//         try {
// eslint-disable-next-line max-len
//             const result = await page.waitForSelector('.card__active', {visible: true, timeout: 1000});
//             console.log(result);
//         }
//         catch(e) {
//             throw new Error();
//         }
//     }
//     expect(result).toThrow();
// })
