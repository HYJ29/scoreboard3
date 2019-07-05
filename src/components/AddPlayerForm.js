import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends PureComponent {
  playerInput = React.createRef()

  addPlayer = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset()
  };

  render() {
    return (
      <form
        onSubmit={this.addPlayer}
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
    );
  }
}

AddPlayerForm.propTypes = {
  addPlayer: PropTypes.func
}

export default AddPlayerForm;
