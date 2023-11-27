const { After } = require("@wdio/cucumber-framework");
const LoginPage = require("../script/pages/LoginPage");
const Page = require("../script/pages/Page");
const cucumberJson = require('wdio-cucumberjs-json-reporter');

After(async () => {
    const allGUID = await browser.getWindowHandles();
    console.log("=> Total Windows : " + allGUID.length);
    for (let i = 1; i < allGUID.length; i++) {
        if (allGUID.length > 1) {
            await Page.closeNewTab();
        }
    }
})

// After('not @logout', async () => {
//     await browser.pause(5000);
//     await LoginPage.doLogout();
//     await browser.pause(5000);
// })

/**
 * Capture SS 
 */
After(async function () {
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

/**
 * Fetch log from the browser
 */
After(async function () {
    const log = await browser.getLogs("browser");
    return cucumberJson.attach(log, "application/json");
});
