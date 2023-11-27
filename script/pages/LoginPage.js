const commonUtils = require("../utils/CommonUtils");

class LoginPage {

    get btnLogin() { return $("//button[@data-testid='login-button']")}
    get inputUsername() { return $("//*[@id='username']") }
    get inputPassword() { return $("//*[@id='password']") }
    get btnSubmit() { return $("[type='submit']") }

    async doLogin(username, password) {
        await browser.pause(1000);
        let baseURL = await properties.get("BASE_URL");
        await browser.url(baseURL);
       await browser.pause(5000);
      //  await commonUtils.waitForElement(this.btnLogin, 15, 'Waiting for login screen');
        await this.btnLogin.click();
        await this.inputUsername.setValue(username);
        await this.btnSubmit.click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage()


