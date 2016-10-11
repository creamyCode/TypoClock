var path = require("path"),
    ipcMain = require('electron').ipcMain,
    BrowserWindow = require("electron").BrowserWindow;

// 노티 클립 새창이벤트
ipcMain.on('noteShow', (event, noticeData) => {
    console.log('noteShow');
    makeNoteWindow();
});

// 노트 윈도우 생성
function makeNoteWindow(data) {

    const modalPath = "file://" + __dirname + "/public/sticker.html";
    var win = new BrowserWindow({
        //title: '#clibNotice',
        //autoHideMenuBar: true,
        center: true,
        width: 400,
        height: 400,
        frame: false,
        webPreferences : {
          webSecurity : false
        }
    });

    win.on('close', function() {
        win = null;
    });

    win.loadURL(modalPath);

    // 프레임 로딩 후
    win.webContents.on('did-finish-load', () => {

        // 노트 초기화
        win.webContents.send('noteInit', data);

    });

}
