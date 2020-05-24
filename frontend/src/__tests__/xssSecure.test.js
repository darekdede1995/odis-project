const pupperteer = require('puppeteer');

async function sendUnsecureComment(comment, author = 'Haker') {
  const browser = await pupperteer.launch({
    headless: false,
    //slowMo: 40,
    args: ['--window-size=1920,1080'],
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/comments');
  await page.click('.comments-form > input');
  await page.type('.comments-form > input', String(author));
  await page.click('.comments-form > textarea');
  await page.type('.comments-form > textarea', String(comment));
  await page.click('.comments-form > button');

  return page;
}

test('Comment with <img> should not inject script', async () => {
  const testId = Date.now();
  const testScript = `var el = document.createElement(\'div\');el.id=\'${testId}\';document.querySelector(\'body\').appendChild(el)`;

  const unsecureComment = ` <img
                              src="https://placeimgxxx.com/320/320/any"
                              onerror="${testScript}"
                            />`;

  const page = await sendUnsecureComment(unsecureComment, testId);
  await page.waitForXPath(
    `//div[@class='comment']/div[contains(., '${testId}')]`
  );
  const scriptInjectedElements = await page.$x(`//div[@id='${testId}']`);
  expect(scriptInjectedElements).toHaveLength(0);
}, 1000000);

test('Comment with <script> should not inject script', async () => {
  const testId = Date.now();
  const testScript = `var el = document.createElement(\'div\');el.id=\'${testId}\';document.querySelector(\'body\').appendChild(el)`;
  const unsecureComment = ` <script>
                              ${testScript}
                            </script>`;

  const page = await sendUnsecureComment(unsecureComment, testId);
  await page.waitForXPath(
    `//div[@class='comment']/div[contains(., '${testId}')]`
  );
  const scriptInjectedElements = await page.$x(`//div[@id='${testId}']`);
  expect(scriptInjectedElements).toHaveLength(0);
}, 1000000);

test('Comment with <button> should not inject clickable button with script', async () => {
  const testId = Date.now();
  const testScript = `var el = document.createElement(\'div\');el.id=\'${testId}\';document.querySelector(\'body\').appendChild(el)`;
  const unsecureComment = ` <button
                              class="test-button-${testId}"
                              onclick="${testScript}"
                            >;</button>`;

  const page = await sendUnsecureComment(unsecureComment, testId);
  await page.waitForXPath(
    `//div[@class='comment']/div[contains(., '${testId}')]`
  );
  await expect(page.click(`.test-button-${testId}`)).rejects.toThrow();

  const scriptInjectedElements = await page.$x(`//div[@id='${testId}']`);
  expect(scriptInjectedElements).toHaveLength(0);
}, 1000000);

test('Element <a> should not inject script', async () => {
  const testId = Date.now();
  const testScript = `var el = document.createElement(\'div\');el.id=\'${testId}\';document.querySelector(\'body\').appendChild(el)`;

  const unsecureComment = ` <a
                              href="javascript: (function (){${testScript}})()"
                            >KLIKNIJ</a>`;

  const page = await sendUnsecureComment(unsecureComment, testId);
  await page.waitForXPath(
    `//div[@class='comment']/div[contains(., '${testId}')]`
  );
  const scriptInjectedElements = await page.$x(`//div[@id='${testId}']`);
  expect(scriptInjectedElements).toHaveLength(0);
}, 1000000);
