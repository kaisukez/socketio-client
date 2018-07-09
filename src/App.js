import React, { Component } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initializeBoardState, initializeSocket, cellClicked } from './actions';

import Navigator from './components/Navigator';
import Board from './components/Board';

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`

class App extends Component {
  constructor(props) {
    super(props);
    const boardState = Array(8).fill('').map(a => Array(8).fill(false));
    this.props.initializeBoardState(boardState);
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:3001');
    this.props.initializeSocket(socket);
  }

  render() {
    return (
      <AppWrapper className="App">
        <Navigator />
        <Board
          boardState={this.props.boardState}
          handleClick={this.props.cellClicked}
        />
      </AppWrapper>
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
