import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score:0,
        id: 1,
      },
      {
        name: "Treasure",
        score:0,
        id: 2
      },
      {
        name: "Ashley",
        score:0,
        id: 3
      },
      {
        name: "James",
        score:0,
        id: 4
      }
    ]
  };

  getHighestScore = () => {
    const highScore =  this.state.players.map(player => player.score)
                      .reduce((highest, player)=> {
                        return highest <= player ? player : highest
                      });
    return highScore === 0 ? -1 : highScore;
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      const newPlayer = {
        name: name,
        score:0,
        id: prevState.players.length +1
      }
      return {
        players: [...prevState.players, newPlayer]
      }
    });
  }

  handleScore = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score +=delta
      // players: prevState.players.map(p=>{
      //   if(p.id === id ){
      //     p.score = p.score + delta
      //     return p
      //   } else {
      //     return p
      //   }
      // })
    }));
  }

  render() {
    const highScore = this.getHighestScore();
    return (
      <div className="scoreboard">
        <Header
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index ) =>
          <Player
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            changeScore = {this.handleScore}
            removePlayer={this.handleRemovePlayer}
            players={this.state.players}
            isHighScore = {player.score === highScore}
          />
        )}
        <AddPlayerForm
          addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
