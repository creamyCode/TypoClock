import './Clock.css';
import React from 'react';
import moment from 'moment';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.setTime = this.setTime.bind(this);
    this.appClose = this.appClose.bind(this);
    this.state = {date: new Date()};
  }

  // 컴포넌트가 DOM 트리에 추가되기 전 한 번만 호출
  componentWillMount() {
    // ....
  }

  // 컴포넌트가 DOM 트리에 추가된 상태에 호출
  componentDidMount() {

    this.timer = setInterval(function() {
      this.setTime(new Date());
    }.bind(this),1000);

  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }

  setTime(date) {
    this.setState({date: date});
  }

  appClose() {
    var win = window.require('electron').remote.getCurrentWindow();
    win.close();
  }

  render() {

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
                <div onClick={this.appClose} className="end">
                  <i className="fa fa-times"></i>
                </div>
              </div>
      );
    }
}

// data validate
Clock.propTypes =  {
  date : React.PropTypes.object
};

export default Clock;
