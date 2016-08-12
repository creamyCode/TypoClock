const electron = require('electron')
const path = require('path')
const ChildProcess = require('child_process')
const app = electron.app

app.on('ready', init)

app.on("window-all-closed", function(a) {
    "darwin" != process.platform && app.quit()
});

function init() {

    global.clibWindow = require("./window");
    global.clibWindow.loadPage('index.html');
    global.clibWindow.show();

}
