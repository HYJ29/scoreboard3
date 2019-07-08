import React, {Component} from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
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
  getHighestScore = () => {
    const highScore =  this.state.players.map(player => player.score)
                      .reduce((highest, player)=> {
                        return highest <= player ? player : highest
                      });
    return highScore === 0 ? -1 : highScore;
  }

  render() {
    const highScore = this.getHighestScore();
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions:{
          changeScore: this.handleScore,
          addPlayer: this.handleAddPlayer,
          removePlayer: this.handleRemovePlayer
        },
        highScore: highScore
      }}>
        {this.props.children}
      </ScoreboardContext.Provider>
    )
  }
}
export const Consumer = ScoreboardContext.Consumer;
