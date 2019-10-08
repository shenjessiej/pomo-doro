import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  // Initialize state

  // after first mount
  componentDidMount() {
  }


  render() {

    return (
      <div className="Timer">
          {(this.props.minutes < 10) ? "0" + this.props.minutes : this.props.minutes}:{(this.props.seconds < 10) ? "0" + this.props.seconds : this.props.seconds}
        </div>
    );
  }
}

export default Timer;
