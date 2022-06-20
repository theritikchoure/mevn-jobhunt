import { commUtil } from '../../libs/common';
import { testData } from '../../data/docspacePlus_testdata'

describe("Login to DocspacePlus and Navigate Different Pages", function () {

    this.beforeAll(async function () {
        
    });

    it('Launch docspaceplus stage and login',async function () {
        console.log("DocspacePlus Launch and Login");
        await commUtil.loginDocSpacePlus(testData.Browser.Chrome,testData.Environment.StageUrl);
       
    });

    it('Navigate to Channels page',async function () {
        console.log("Navigate to Channels page");
        await commUtil.navigateToAreas('Channels');
       
    });

    it('Navigate to Experts page',async function () {
        console.log("Navigate to Experts page");
        await commUtil.navigateToAreas('Experts');
       
    });

    it('Navigate to Home page',async function () {
        console.log("Navigate to Home page");
        await commUtil.navigateToAreas('Home');
       
    });

    it('Sign out',async function () {
        console.log("User Sign Out from the application");
        await commUtil.signOutDocSpacePlus();
       
    });

    this.afterAll(async function () {
        await commUtil.closeAllBrowsers();
       
        });
});