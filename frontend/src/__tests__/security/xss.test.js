const pupperteer = require('puppeteer');

test('Insecure <Comment /> will inject script', async () => {
  const browser = await pupperteer.launch({
    headless: false,
    //slowMo: 80,
    args: ['--window-size=1920,1080'],
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/comments');

  let unsecureComment =
    '<img src="https://placeimgxxx.com/320/320/any" onerror="document.querySelector(\'.comment:last-of-type\').style.backgroundColor=\'#ff0000\'">';

  await page.click('.security__container > button');
  await page.click('.comments-form > input');
  await page.type('.comments-form > input', 'Karol');
  await page.click('.comments-form > textarea');
  await page.type('.comments-form > textarea', unsecureComment);
  await page.click('.comments-form > button');
  const color = await page.$eval(
    '.comment:last-of-type',
    el => el.style.backgroundColor
  );
  expect(color).toBe('rgb(255, 0, 0)');
}, 1000000);
