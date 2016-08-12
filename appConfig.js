//test
var path = require("path"),
    fs = require('fs'),
    ipcMain = require('electron').ipcMain ;


// 사용자 로그인 ipc이벤트
ipcMain.on('closeClock', (event, widgetInfo) => {
    console.log(JSON.stringify(widgetInfo));
    console.log(process.env.HOME);
    console.log(path.join(process.env.HOME,'TypoWidget'));
});

fs.readdir(path.join(process.env.HOME,'TypoWidget'), function (err, files) {

  if(err) console.log(err);

  console.log('read success');

});

// module.exports = {
//     eee : 'eee'
// };
