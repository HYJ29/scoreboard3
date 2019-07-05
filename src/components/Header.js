import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const {
      players,
      title
    } = this.props;
    return (
      <header>
        <Stats players={ players }/>
        <h1 onClick={this.stopwatchDisplay}>{ title }</h1>
        <Stopwatch display={this.state.stopwatchShow}/>
      </header>
    );
  }
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
  title: "Scoreboard"
}

export default Header;
