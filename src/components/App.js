import './App.css';
import React from 'react';
import moment from 'moment';

class App extends React.Component {

  render(){

      var time = 'tpTime';
      var month = 'tpMonth';
      var year = 'tpYear';
      var days = 'tpDays';
      var day = 'tpDay';

      return (
              <div className="clock">
                <div className="left">
                  <div className={year}>{moment(this.props.date).format('YYYY')}</div>
                  <div className={month}>{moment(this.props.date).format('MMMM')}</div>
                  <div className={time}>{moment(this.props.date).format('hh:mm:ss')}</div>
                </div>
                <div className="right">
                  <div className={days}>{moment(this.props.date).format('DD')}</div>
                </div>
                <div className="end">
                  <i className="fa fa-times"></i>
                </div>
              </div>
      );
    }
}

export default App;
