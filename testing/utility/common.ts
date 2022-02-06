import { Builder, By, Key, until } from 'selenium-webdriver';
import { HomePage, LoginPO, NavAreas } from '../pageObjectModel/pom.js';
import  { testData } from '../data/config.js';
import { expect } from 'chai';
let driver;



class commonutility {

public async loginDocSpacePlus(browser: any, url:any): Promise<void> {
    console.log("---------------------Begin loginDocSpacePlus() Method--------------------------------------------------------");
    
        if (browser==='CHROME'|| browser==='CH'||browser==='chrome'||browser==='ch'){
            console.log("Browser is chrome, building the chrome driver");
            driver = await new Builder().forBrowser('chrome').build();
        }
        else if(browser==='FIREFOX'|| browser==='FF'||browser==='firefox'||browser==='ff'){
            console.log("Browser is chrome, building the chrome driver");
            driver = await new Builder().forBrowser('chrome').build();
        }
        else{
            //define some other browser
        }

        console.log("Launching docspacePlus url");
        await driver.get(url);
        await driver.sleep(testData.ThinkTimeOuts.ShortWait);
        await driver.manage().window().maximize();

        console.log("Find and click on the login button from docspacePlus landing page");
        await driver.wait(until.elementLocated(LoginPO.loginBtnHomePage),testData.ThinkTimeOuts.LongWait);
        let loginBtn = await driver.findElement(LoginPO.loginBtnHomePage);
        await loginBtn.click();

        await driver.sleep(testData.ThinkTimeOuts.ShortWait);
        
        console.log("Find and input user email for login");
        await driver.wait(until.elementLocated(LoginPO.emailInput),testData.ThinkTimeOuts.LongWait);
        let emailInput = await driver.findElement(LoginPO.emailInput);
        await emailInput.sendKeys(testData.Login.UserName);

        await driver.sleep(testData.ThinkTimeOuts.ShortWait);
        
        console.log("Find and input user password for login");
        await driver.wait(until.elementLocated(LoginPO.passwordInput),testData.ThinkTimeOuts.LongWait);
        let passInput = await driver.findElement(LoginPO.passwordInput);
        await passInput.sendKeys(testData.Login.Password);

        await driver.sleep(testData.ThinkTimeOuts.ShortWait);

        console.log("click on Login button to login user");
        await driver.wait(until.elementLocated(LoginPO.loginSubmit),testData.ThinkTimeOuts.LongWait);
        let loginSubmit = await driver.findElement(LoginPO.loginSubmit);
        await loginSubmit.click();

        await driver.sleep(testData.ThinkTimeOuts.ShortWait);

        console.log("validating homepage load post login");
        await driver.wait(until.elementLocated(HomePage.DocspacePlusLogo),testData.ThinkTimeOuts.LongWait);

        console.log("---------------------End loginDocSpacePlus() Method--------------------------------------------------------");

}

public async signOutDocSpacePlus(): Promise<void> {
    console.log("---------------------Begin signOutDocSpacePlus() Method--------------------------------------------------------");
    
    console.log("Dropdown user navigation option");
    await driver.wait(until.elementLocated(HomePage.UserNavDropDown),testData.ThinkTimeOuts.LongWait);
    let userNavBtn = await driver.findElement(HomePage.UserNavDropDown);
    await userNavBtn.click();

    await driver.sleep(testData.ThinkTimeOuts.ShortWait);

    console.log("Click on Sign out");
    await driver.wait(until.elementLocated(HomePage.UserNavDropDown),testData.ThinkTimeOuts.LongWait);
    let signOutLink = await driver.findElement(HomePage.SignOut);
    await signOutLink.click();

    await driver.sleep(testData.ThinkTimeOuts.ShortWait);

    console.log("Find and click on the login button from docspacePlus landing page");
    await driver.wait(until.elementLocated(LoginPO.loginBtnHomePage),testData.ThinkTimeOuts.LongWait);

    console.log("---------------------End signOutDocSpacePlus() Method--------------------------------------------------------");
}

public async closeAllBrowsers(): Promise<void> {
    console.log("---------------------Begin closeAllBrowsers() Method--------------------------------------------------------");
    
    console.log("closing all browser and driver quit");
    await driver.quit();

    console.log("---------------------End closeAllBrowsers() Method--------------------------------------------------------");
}

public async navigateToAreas(area:string): Promise<void> {
    console.log("---------------------Begin navigateToAreas() Method--------------------------------------------------------");
    
    if(area==='Home'){
        console.log("Find and click navigation area:"+area);
        await driver.wait(until.elementLocated(NavAreas.Home),testData.ThinkTimeOuts.LongWait);
        let homeLink = await driver.findElement(NavAreas.Home);
        await homeLink.click();
        await driver.sleep(testData.ThinkTimeOuts.VeryShortWait);
    }
    else if(area ==='Channels'){
        console.log("Find and click navigation area:"+area);
        await driver.wait(until.elementLocated(NavAreas.Channels),testData.ThinkTimeOuts.LongWait);
        let channelLink = await driver.findElement(NavAreas.Channels);
        await channelLink.click();
        await driver.sleep(testData.ThinkTimeOuts.VeryShortWait);
    }
    else if(area=== 'Experts'){
        console.log("Find and click navigation area:"+area);
        await driver.wait(until.elementLocated(NavAreas.Experts),testData.ThinkTimeOuts.LongWait);
        let expertsLink = await driver.findElement(NavAreas.Experts);
        await expertsLink.click();
        await driver.sleep(testData.ThinkTimeOuts.VeryShortWait);

    }
    else{
        console.log("Area to navigate does not match with anything");
    }
    
    console.log("---------------------End navigateToAreas() Method--------------------------------------------------------");
}

}

export let commUtil = new commonutility();