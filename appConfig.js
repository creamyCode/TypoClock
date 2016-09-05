//test
var path = require("path"),
    Promise = require('promise'),
    fs = require('fs'),
    ipcMain = require('electron').ipcMain,
    session = require("electron").session,
    ipcMain = require('electron').ipcMain ;


// 사용자 앱 종료 이벤트
ipcMain.on('closeClock', (event, widgetInfo) => {

    fs.writeFile(path.join(process.env.HOME,'TypoWidget','MainPos.json'), JSON.stringify(widgetInfo), function(err) {
      if(err) throw err;
      console.log(JSON.stringify(widgetInfo));
      console.log('File write completed');
      global.clibWindow.close();
    });

});



// 메인앱 포지션 설정
function setMainPos(data) {
    session.mainPos = data;
}

// 메인앱 포지션 얻기
function getMainPos() {
    return session.mainPos;
}

// 설정 초기화
function p_configLoad() {
  return new Promise(function(next) {
    fs.readdir(path.join(process.env.HOME,'TypoWidget'), function (err, files) {

      // 에러시 디렉토리 생성
      if(err) {
        fs.mkdir(path.join(process.env.HOME,'TypoWidget'), function (err, folder) {
          console.log('folder write completed');
        })
      };

      // 파일 읽기
      p_LoadAppData('MainPos.json')
      .then(function(userData) {
        console.log('---- user Data ----');
        console.log(userData);

        if (userData) {
          setMainPos(JSON.parse(userData));
        }

        next();
      });

    });
  });
}

// 디렉토리 로드
function p_LoadAppDir() {
    return new Promise(function(next, reject) {
        // 디렉토리 조회
        fs.readdir(path.join(process.env.HOME,'TypoWidget'), function (err, files) {
          if(err) {
            reject();
          } else {
            next('MainPos.json');
          }
        });
    });
}

// 디렉토리 생성
function p_makeAppDir() {
    return new Promise(function(next) {
        fs.mkdir(path.join(process.env.HOME,'TypoWidget'), function (err, folder) {
          console.log('folder write completed');
          next();
        });
    });
}

// 앱데이터 로드
function p_LoadAppData(fileName) {
    return new Promise(function(next) {
        // 파일 읽기
        fs.readFile(path.join(process.env.HOME,'TypoWidget',fileName), 'utf8', function(err, data) {
          next(data);
        });
    });
}

module.exports = {
    session: session,
    setMainPos: setMainPos,
    getMainPos: getMainPos,
    p_configLoad: p_configLoad,
    p_LoadAppData: p_LoadAppData
};
