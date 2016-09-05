import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
const rootElement = document.getElementById('root');

ReactDOM.render(<Clock/>, rootElement);

$(document).on('click', '.noteBtn', function() {

  if($(this).hasClass('active')) {  // 활성화 상태였을경우
    window.require('electron').ipcRenderer.send('noteShow', false);
    $(this).removeClass('active');
    $(this).find('i').attr('class', 'fa fa-file-o');
  } else {  // 비활성화 상태였을경우
    window.require('electron').ipcRenderer.send('noteShow', true);
    $(this).addClass('active');
    $(this).find('i').attr('class', 'fa fa-file');
  }

  console.log('absdf');
  //window.require('electron').ipcRenderer.send('noteShow', true);

});
