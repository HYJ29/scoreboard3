import React from 'react';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = () =>{
  return (
    <Consumer>
      {context => {
        return (
          <React.Fragment>
            {
              context.players.map( (player, index ) =>
                <Player
                  {...player}
                  key={player.id.toString()}
                  index={index}
                  isHighScore = {player.score === context.highScore}
                />
              )
            }
          </React.Fragment>
        )

      }}
    </Consumer>

  )
}

export default PlayerList;
