/*
 *********************************************************************************
 *                     Copyright (C) 2018 wystan
 *
 *       filename: chrome.js
 *    description:
 *        created: 2018-09-02 23:22:59
 *         author: wystan
 *
 *********************************************************************************
 */

const { logi } = require("./log");
const spawn = require("child_process").spawn;
const os = require("os");
const program = {
    darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    linux: "google-chrome"
};

class Chrome {
    constructor() {
        this.app = program[os.platform()];
        this.proc = null;
        this.timer = -1;
    }
    go(url) {
        this.proc = spawn(this.app, [ "--new-window", "--ignore-certificate-errors", "--use-fake-ui-for-media-stream", url ]);
        this.proc.on("exit", (code) => {
            logi("exit with", code);
            this.proc = null;
        });
        return this;
    }
    kill() {
        this.proc && this.proc.kill("SIGTERM");
        this.proc = null;
        return this;
    }
    timeout(ms = 5000) {
        this.timer = setTimeout(()=>{
            this.kill();
        }, ms);
        return this;
    }
}

module.exports = Chrome;

/************************************* END **************************************/

