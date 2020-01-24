import  React, { Component } from 'react';
import './DigitalClock.css';

class DigitalClock extends Component {


  render() {


    console.log(this.props.time);
    
    const date = new Date(this.props.time);

    console.log(date);

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let mi = date.getMilliseconds();

    let session = 'AM';
    if (h == 0) {
      h = 12;
    }

    if(h > 12) {
      h = h - 12;
      session = 'PM';
    }

    return (
    <h1 className="clock">Time {h}:{m}:{s} {session}</h1>
    )

  }
}

export default DigitalClock;