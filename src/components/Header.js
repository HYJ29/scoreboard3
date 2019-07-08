import React, { Component } from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

class Header extends Component {
  state = {
    stopwatchShow: 'show'
  }
  stopwatchDisplay = () => {
    this.setState(prev=> ({
      stopwatchShow: prev.stopwatchShow ==="show"? "hide":"show"
    }));
  }
  render() {
    return (
      <header>
        <Stats />
        <h1 onClick={this.stopwatchDisplay}>Scoreboard</h1>
        <Stopwatch display={this.state.stopwatchShow}/>
      </header>
    );
  }
}

export default Header;
