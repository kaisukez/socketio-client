import React, { Component } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  initializeBoardState,
  initializeSocket,
  cellClicked,
  goToLobby,
  goToBoard,
} from '../actions';

import Navigator from '../components/Navigator';
import Lobby from '../components/Lobby';
import Board from '../components/Board';
import Wrapper from './styles/Wrapper';

class PlayPage extends Component {
  constructor(props) {
    super(props);
    const boardState = Array(8).fill('').map(a => Array(8).fill(false));
    this.props.initializeBoardState(boardState);
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:3001');
    this.props.initializeSocket(socket);
  }

  createRoom = () => {
    this.props.state.socket.emit('createRoom')
  }

  renderPlayPage() {
    if (this.props.playPageStatus === "lobby")
      return (
        <Lobby goToBoard={this.props.goToBoard} />
      )
    else if (this.props.playPageStatus === "board")
      return (
        <Board
          handleClick={this.props.cellClicked}
          boardState={this.props.boardState}
          goToLobby={this.props.goToLobby}
        />
      )
  }

  render() {
    return (
      <Wrapper>
        <Navigator history={this.props.history} />
        {this.renderPlayPage()}
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    boardState: state.boardState,
    socket: state.socket,
    playPageStatus: state.playPageStatus
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    initializeBoardState, initializeSocket, cellClicked, goToLobby, goToBoard
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
