/*
 *********************************************************************************
 *                     Copyright (C) 2018 wystan
 *
 *       filename: log.js
 *    description: usage: const { logd, logi, logw, loge } = require("./log");
 *        created: 2018-09-02 23:12:46
 *         author: wystan
 *
 *********************************************************************************
 */

const logd = (...args)=>{ console.debug.call(console, "D|" + new Date().toISOString(), ...args); };
const logi = (...args)=>{ console.info.call(console,  "I|" + new Date().toISOString(), ...args); };
const logw = (...args)=>{ console.warn.call(console,  "W|" + new Date().toISOString(), ...args); };
const loge = (...args)=>{ console.error.call(console, "E|" + new Date().toISOString(), ...args); };

module.exports.logd = logd;
module.exports.logi = logi;
module.exports.logw = logw;
module.exports.loge = loge;

/************************************* END **************************************/
