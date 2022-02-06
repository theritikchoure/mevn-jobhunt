import {By } from 'selenium-webdriver';

export let LoginPOM = {
     "loginBtnHomePage"               : By.xpath("//*[@id='root']/main/div/div[1]/nav[3]/div[2]/a/button/span[1]"),
     "emailInput"                     : By.xpath("/html/body/div[5]/div/div/div[2]/div/div/form/div[1]/input"),
     "passwordInput"                  : By.xpath("/html/body/div[5]/div/div/div[2]/div/div/form/div[2]/input"),
     "loginSubmit"                    : By.xpath("/html/body/div[5]/div/div/div[2]/div/div/form/button")        
}

export let HomePage = {
     "DocspacePlusLogo"               : By.xpath("//*[@id='root']/main/div/div[1]/nav[3]/span/a/img"),
     "UserNavDropDown"                : By.xpath("/html/body/div/main/div/div[1]/nav[3]/div[2]/div/a"),
     "SignOut"                        : By.xpath("//*[text()='Sign Out']") 
}

export let NavAreas = {
     "Home"                           : By.xpath("//*[@id='root']/main/div/div[1]/nav[3]/div[1]/a[text()='Home']"),
     "Channels"                       : By.xpath("//*[@id='root']/main/div/div[1]/nav[3]/div[1]/a[text()='Channels']"),
     "Experts"                        : By.xpath("//*[@id='root']/main/div/div[1]/nav[3]/div[1]/a[text()='Experts']") 
}