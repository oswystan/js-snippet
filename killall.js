/*
 *********************************************************************************
 *                     Copyright (C) 2018 wystan
 *
 *       filename: killall.js
 *    description:
 *        created: 2018-09-03 19:59:15
 *         author: wystan
 *
 *********************************************************************************
 */

const exec = require("child_process").execSync;

module.exports = function(proc) {
    let cmd = `killall ${proc} || echo 'no such process'`;
    exec(cmd);
}

/************************************* END **************************************/

