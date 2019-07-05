import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime:0,
    previousTime:0
  }

  // componentDidMount() {
  //   this.intervalID = setInterval(this.tick, 100);
  // }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    console.log('ticking...');
    if(this.state.isRunning){
      const now = Date.now();
      this.setState(prev => ({
        previousTime: now,
        elapsedTime: prev.elapsedTime + (now - this.state.previousTime)
      }))
    }

  }

  handleStopwatch = () => {
    this.setState(prev => ({
      isRunning:!prev.isRunning,
      previousTime: Date.now()
    }));
    if(!this.state.isRunning ===true ){
      this.intervalID = setInterval(this.tick, 100);
    } else {
      clearInterval(this.intervalID);
    }

  };

  resetStopwatch = () => {
    this.setState(prev => ({
      elapsedTime:0
    }))
  }
  render() {
    const seconds = Math.floor(this.state.elapsedTime/1000);
      return (
        <div className={`stopwatch ${this.props.display}`}>
          <h2>Stopwatch</h2>
          <span className="stopwatch-time">{ seconds }</span>
          <button onClick={this.handleStopwatch}>
            {this.state.isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={this.resetStopwatch}>Reset</button>
        </div>
      );

  };
}

Stopwatch.proptypes = {
  display: PropTypes.string
}
export default Stopwatch;
