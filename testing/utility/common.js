import { Builder, By, Key, until } from 'selenium-webdriver';
import { HomePage, LoginPO, NavAreas } from '../pageObjectModel/pom.js';
import  { testData } from '../data/config.js';
import { expect } from 'chai';
let driver;

class CommonUtility {
    async loginToJobhunt(url) {
        console.log("------------Begin loginToJobhunt() Method------------");

        driver = await new Builder().forBrowser('MicrosoftEdge').build();

        console.log("Launching docspacePlus url");
        await driver.get(url);
        await driver.sleep(testData.ThinkTimeOuts.ShortWait);
        await driver.manage().window().maximize();
        console.log(LoginPO)
    }
}