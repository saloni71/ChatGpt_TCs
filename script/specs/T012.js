
const commonUtils = require('../utils/CommonUtils');
const loginpage = require('../pages/LoginPage');

When("Login to Chat Gpt via user", { timeout: 120 * 1000 }, async () => {
    const username = await properties.get("AUTHENTICATION_USERNAME");
    const password = await properties.get("AUTHENTICATION_PASSWORD");
    await loginpage.doLogin(username, password);
})

When("Click on New chat and enter text", { timeout: 120 * 1000 }, async () => {
    await browser.pause(15000)
    // await LoginPage.inputTextArea.click();
    (await $("$('#prompt-textarea')")).click();
    await $("//textarea[@id='prompt-textarea']").setValue("Plan the vacation itenary for me")
})

When("Rename chat from left panel", { timeout: 120 * 1000 }, async () => {
    await $("//*[contains(@class,'relative') and text()='Rename ChatGPT Test Case']//div[contains(@class,'absolute')]").click();
    await browser.pause(1000);
    await $("//*[@role='menuitem' and text()='Rename']").click();
    await browser.pause(1000);
    await $("//li[contains(@class,'relative')]").clearValue();
    await browser.pause(1000);
    await $("//li[contains(@class,'relative')]").setValue("ABCDFR");
})

When("Delete chat from left panel", { timeout: 120 * 1000 }, async () => {
    await $("//*[contains(@class,'relative') and text()='ABCDFR']//div[contains(@class,'absolute')]").click();
    await browser.pause(1000);
    await $("//*[@role='menuitem' and text()='Delete chat']").click();
    await browser.pause(1000);
    await $("//*[contains(@class,'btn-danger')]//div[text()='Delete']").click();
    await browser.pause(2000);
    expect(await $("//*[contains(@class,'relative') and text()='ABCDFR']//div[contains(@class,'absolute')]").isDisplayed()).to.be.false;
})