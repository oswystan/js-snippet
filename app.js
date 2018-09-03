#!/usr/bin/env node
/*
 *********************************************************************************
 *                     Copyright (C) 2018 wystan
 *
 *       filename: app.js
 *    description:
 *        created: 2018-09-02 23:18:39
 *         author: wystan
 *
 *********************************************************************************
 */

const { logd, logi, logw, loge } = require("./log");
const chrome = require("./chrome");

function main() {
    logi("app is starting...");
    let browser = new chrome();
    browser.go("https://www.sogou.com").timeout(120000);
}

main();

/************************************* END **************************************/

