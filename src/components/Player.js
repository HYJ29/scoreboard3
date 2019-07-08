import React, {Component} from 'react';
import {Consumer} from './Context';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Icon from './Icons';

class Player extends Component {

  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    score: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  }


  render() {
    const {id, name, score, index, isHighScore} = this.props;
    return (
      <Consumer>
        {context => (
            <div className="player">
            <span className="player-name">
              <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
              <Icon score={score} isHighScore={isHighScore} />
              {name}
            </span>

            <Counter score={score} index={index}/>
          </div>
        )}
      </Consumer>

  );
  }
}

export default Player;
