import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Icon from './Icons';

class Player extends Component {

  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    score: PropTypes.number,
    index: PropTypes.number,
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    players: PropTypes.arrayOf(PropTypes.object)
  }

  getHighestScore = () => {
    return this.props.players.map(player => player.score)
                      .reduce((highest, player)=> {
                        return highest <= player ? player : highest
                      });
  }

  render() {
    const {id, name, score, changeScore, index, removePlayer} = this.props;
    return (<div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        <Icon score={score} getHighest={this.getHighestScore}/>
        {name}
      </span>

      <Counter score={score} changeScore={changeScore} index={index}/>
    </div>);
  }
}

export default Player;
