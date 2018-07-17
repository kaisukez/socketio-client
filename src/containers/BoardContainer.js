import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { initializeSocket } from '../actions';
import InitializeSocketToStore from '../helpers/InitializeSocketToStore'
import Board from '../components/Board';

class BoardContainer extends Component {
  constructor(props) {
    super(props)
    const boardState = Array(8).fill('').map(a => Array(8).fill(false))
    this.state = { boardState }
  }

  componentDidMount() {
    const socket = InitializeSocketToStore(
      this.props.socket,
      this.props.initializeSocket,
      'haha'
    )
    this.listenToUpdateBoardState(socket)
    this.listenToMoved(socket)
    this.getBoardState(socket)
  }

  listenToUpdateBoardState = socket => {
    socket.on('updateWholeBoardState', ({ boardState }) => {
      this.setState({ boardState })
    })
  }

  listenToMoved = socket => {
    socket.on('moved', position => {
      { x, y } = position
      const boardState = this.state.boardState.slice()
      boardState[y][x] !boardState[y][x]
      this.setState({ boardState })
    })
  }

  getBoardState = socket => {
    socket.emit('getBoardState')
  }

  componentWillUnmount() {
    this.props.socket.removeAllListeners()
  }

  squareClicked = position => {
    const x = position.x
    const y = position.y
    const newBoardState = this.state.boardState.slice()
    newBoardState[y][x] = !newBoardState[y][x]
    this.setState({ boardState: newBoardState })
  }

  render() {
    const boardProps = {
      boardState: this.state.boardState,
      squareClicked: this.squareClicked,
      goToLobby: () => this.props.goTo('lobby'),
    }

    return <Board { ...boardProps } />
  }
}

const mapStateToProps = state => ({
  socket: state.socket
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ initializeSocket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
