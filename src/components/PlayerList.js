import React from 'react';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = ({highScore}) =>{
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
                  isHighScore = {player.score === highScore}
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
