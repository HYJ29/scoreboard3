import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class Player extends PureComponent {
  render() {
    const {
      id,
      name,
      score,
      changeScore,
      index
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(id)}>✖</button>
          { name }
        </span>

        <Counter
        score={score}
        changeScore={changeScore}
        index={index}
        />
      </div>
    );
  }
}

Player.propTypes ={
  name: PropTypes.string,
  id: PropTypes.number,
  score: PropTypes.number,
  index: PropTypes.number,
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func
}

export default Player;
