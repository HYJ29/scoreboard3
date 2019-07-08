import React, { PureComponent} from 'react';
import {Consumer} from './Context';

class AddPlayerForm extends PureComponent {
  playerInput = React.createRef()

  render() {
    return (
      <Consumer>
        {context => {
          const addPlayer = (e) => {
            e.preventDefault();
            context.actions.addPlayer(this.playerInput.current.value);
            e.currentTarget.reset()
          };
          return (
            <form
              onSubmit={addPlayer}
            >
              <input
                type="text"
                placeholder="Enter a players name"
                ref={this.playerInput}
              />
              <input
                type="submit"
                value ="Add Player"
              />
            </form>
          )
        }}
      </Consumer>
    );
  }
}

export default AddPlayerForm;
