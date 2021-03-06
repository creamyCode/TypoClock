//test
var path = require("path"),
    fs = require('fs'),
    app = require('electron').app,
    //iconPath = path.join(__dirname, config.getIconPath()),
    BrowserWindow = require("electron").BrowserWindow,
    mainWindow = new BrowserWindow({
        x: global.appConfig.getMainPos() != undefined ? global.appConfig.getMainPos().x : 1570,
        y: global.appConfig.getMainPos() != undefined ? global.appConfig.getMainPos().y : 60,
        width: 320,
        resizable: false,
        height: 140,
        minWidth: 320,
        minHeight: 140,
        transparent: true,
        toolbar: false,
        frame: false,
        //backgroundColor : '#80FFFFFF',
        //icon: iconPath,
        show: !1,
        title: "TypoClock"
    });

global.quit = true;
mainWindow.on("closed", function() {
    mainWindow = null;
    app.quit();
    // if (global.clibTray) {
    //   global.clibTray.destroy();
    // }
});

// mainWindow.on("close", function(e) {
//     if (!global.quit) {
//         hide();
//         e.preventDefault();
//     }
// });

function show() {
    mainWindow.show();
}

function hide() {
    mainWindow.hide();
}

function close() {
    mainWindow.close();
}

function minimize() {
    mainWindow.minimize();
}

function maximize() {
    mainWindow.maximize();
}

function loadURL(url) {
    mainWindow.loadURL(url);
}

function loadPage(page) {
    var viewsPath = "file://" + __dirname + "/public/";
    mainWindow.loadURL(viewsPath + page);
}

function reload() {
    mainWindow.webContents.reload();
}

function focus() {
    mainWindow.focus();
}

function isMinimized() {
    return mainWindow.isMinimized();
}

module.exports = {
    window: mainWindow,
    webContents: mainWindow.webContents,
    webview: null,
    session: mainWindow.webContents.session,
    show: show,
    hide: hide,
    close: close,
    minimize: minimize,
    maximize: maximize,
    loadURL: loadURL,
    loadPage: loadPage,
    reload: reload,
    focus: focus,
    isMinimized: isMinimized
};
