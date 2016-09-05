import './Clock.css';
import React from 'react';
import moment from 'moment';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.setTime = this.setTime.bind(this);
    this.appClose = this.appClose.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.closeStyle = this.closeStyle.bind(this);
    this.state = {
      date: new Date(),
      mouseover: false
    };

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
    //var win = window.require('electron').remote.getCurrentWindow();
    window.require('electron').ipcRenderer.send('closeClock', {
      type : 'Main',
      x : window.screenX,
      y : window.screenY
    });
  }

  onMouseOver() {
    this.setState({ mouseover:true });
  }

  onMouseOut() {
    this.setState({ mouseover:false });
  }

  closeStyle() {
      if (this.state.mouseover) {
        return { display: "block" }
      } else {
        return { display: "none" }
      }
  }

  render() {

      var time = 'tpTime';
      var month = 'tpMonth';
      var year = 'tpYear';
      var days = 'tpDays';
      var day = 'tpDay';

      return (
              <div className="clock" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                <div className="left">
                  <div className={year}>{moment(this.props.date).format('YYYY')}</div>
                  <div className={month}>{moment(this.props.date).format('MMMM')}</div>
                  <div className={time}>{moment(this.props.date).format('hh:mm:ss')}</div>
                </div>
                <div className="right">
                  <div className={days}>{moment(this.props.date).format('DD')}</div>
                </div>
                <div onClick={this.appClose} className="end" style={this.closeStyle()}>
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
