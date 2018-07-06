import React, { Component } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initializeBoardState, initializeSocket, cellClicked } from './actions';

import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);
    const boardState = Array(8).fill(Array(8).fill(false));
    this.props.initializeBoardState(boardState);
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:3001');
    this.props.initializeSocket(socket);
  }

  render() {
    return (
      <div className="App">
        <Board
          boardState={this.props.boardState}
          handleClick={this.props.cellClicked}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    boardState: state.boardState,
    socket: state.socket
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    initializeBoardState, initializeSocket, cellClicked
  }, dispatch)
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
