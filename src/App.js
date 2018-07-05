import React, { Component } from 'react';
import io from 'socket.io-client';

import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: Array(8).fill(Array(8).fill(false))
    }
  }
  componentDidMount() {
    const socket = io.connect('http://localhost:3001');
    this.setState({ socket });
  }

  render() {
    return (
      <div className="App">
        <Board boardState={this.state.boardState} />
      </div>
    );
  }
}

export default App;
