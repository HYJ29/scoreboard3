import React, {Component} from 'react';

class AddPlayerForm extends Component {
  state = {
    value: ''
  }

  changeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  addPlayer = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({
      value: ''
    })
  };

  render() {
    return (
      <form
        onSubmit={this.addPlayer}
      >
        <input
          type="text"
          placeholder="Enter a players name"
          value={this.state.value}
          onChange={this.changeValue}
        />
        <input
          type="submit"
          value ="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;
