import React, { Component } from 'react';
import {Provider} from './Context';

import Header from './Header';
import PlayerList from './PlayerList';
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
      <Provider value={{
        players: this.state.players,
        actions:{
          changeScore: this.handleScore,
          addPlayer: this.handleAddPlayer,
          removePlayer: this.handleRemovePlayer
        }
      }}>
        <div className="scoreboard">
          <Header />

          {/* Players list */}
          <PlayerList
            highScore={highScore}
          />
          <AddPlayerForm />
        </div>
      </Provider>

    );
  }
}

export default App;
