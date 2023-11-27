const randomstring = require("randomstring");
const { urlContains, elementToBeClickable, invisibilityOf, visibilityOf } = require('wdio-wait-for');
const random_name = require('node-random-name');

class CommonUtils {

    waitForElement(element, time, msg) {
        return browser.waitUntil(visibilityOf(element), { timeout: (time * 1000), timeoutMsg: msg });
    }

    waitForElementInvisibility(element, time, msg) {
        return browser.waitUntil(invisibilityOf(element), { timeout: (time * 1000), timeoutMsg: msg });
    }

    waitForElementToBeClickable(element, time, msg) {
        return browser.waitUntil(elementToBeClickable(element), { timeout: (time * 1000), timeoutMsg: msg });
    }

    waitForUrl(url, time, msg) {
        return browser.waitUntil(urlContains(url), { timeout: (time * 1000), timeoutMsg: msg })
    }

    randomString(len) {
        return randomstring.generate({
            length: len,
            charset: 'alphabetic'
        }).toLowerCase();
    }

    randomNumber(len) {
        return randomstring.generate({
            length: len,
            charset: 'numeric'
        })
    }

    getRandomName(param) {
        return random_name(param);
    }
}

module.exports = new CommonUtils();
