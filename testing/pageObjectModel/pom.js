import {By } from 'selenium-webdriver';

export let LoginPOM = {
     "loginBtnHomePage"               : By.xpath("//*[@id='loginBtn']"),
     "loginAsEmployer"               : By.xpath("//*[@id='login-employer']"),
     "loginAsStudent"               : By.xpath("//*[@id='login-student']"),
     "emailInput"                     : By.xpath("//*[@id='login-email']"),
     "passwordInput"                  : By.xpath("//*[@id='login-password']"),
     "loginSubmit"                    : By.xpath("//*[@id='login-password']"),   
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