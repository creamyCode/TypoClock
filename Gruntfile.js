module.exports = function(grunt) {

  var path = require('path');
  const packageJson = require(path.resolve(__dirname, 'package.json'));
  const rootPath = __dirname;

  [
    'grunt-exec'
  ].forEach(function(task){
    grunt.loadNpmTasks(task);
  });

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      'exec': {
        'x64-packager': {
          command: "electron-packager . TestApp --overwrite --asar --platform win32 --arch x64 --out dist/ --icon favicon.ico --ignore=.gitignore --ignore=Gruntfile.js --ignore=webpack.config.js --ignore=installer.js",
          stdout: true,
          stderr: true
        },
        'x64-installer': {
          command: "node ./installer.js x64",
          stdout: true,
          stderr: true
        }
      }
      // 'create-windows-installer': {
      //   x64: {
      //     appDirectory: './dist/TestApp-win32-x64',
      //     outputDirectory: './dist/installer',
      //     authors: 'creamyCode',
      //     exe: 'TestApp.exe',
      //     overwrite: true,
      //     setup_icon : './favicon.png'
      //   }
      // }

  });

  // 작업 등록
  grunt.registerTask('default', ['exec']);

};
