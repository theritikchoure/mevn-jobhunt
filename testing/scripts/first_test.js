const {Builder} = require('selenium-webdriver');
const url = "https://google.com/";

(async function example() {

  // Launch The Browser
  let driver = await new Builder().forBrowser('MicrosoftEdge').build();
  
  // Navigate To URL
  await driver.get(url);

  // Close the browser
  await driver.quit();
})();