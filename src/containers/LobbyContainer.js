import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { initializeSocket } from '../actions';
import InitializeSocketToStore from '../helpers/InitializeSocketToStore';
import Lobby from '../components/Lobby';

class LobbyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { rooms: [] }
  }

  componentDidMount() {
    const socket = InitializeSocketToStore(
      this.props.socket,
      this.props.initializeSocket,
      'haha'
    )
    this.listenToRoomUpdateAll(socket)
    this.listenToRoomUpdate(socket)
    this.listenToRoomDestroy(socket)
    this.getAllRooms(socket)
  }

  componentWillUnmount() {
    this.props.socket.removeAllListeners()
  }

  listenToRoomUpdateAll = socket => {
    socket.on('roomUpdateAll', rooms => {
      this.setState({ rooms })
    })
  }

  listenToRoomUpdate = socket => {
    socket.on('roomUpdate', roomId => {
      const rooms = this.state.rooms.slice()
      rooms.push(roomId)
      this.setState({ rooms })
    })
  }

  listenToRoomDestroy = socket => {
    socket.on('roomDestroy', roomId => {
      const rooms = this.state.rooms.slice()
      rooms.splice(rooms.indexOf(roomId), 1)
      this.setState({ rooms })
    })
  }

  getAllRooms = socket => {
    socket.emit('getAllRooms')
  }

  createRoom = socket => {
    socket.emit('createRoom')
  }

  joinRoom = (socket, roomId) => {
    socket.emit('joinRoom', roomId)
    this.setState({ page: 'board' })
  }

  render() {
    const lobbyProps = {
      rooms: this.state.rooms,
      goToBoard: () => this.props.goTo('board'),
      createRoom: () => this.createRoom(this.props.socket)
    }

    return <Lobby { ...lobbyProps } />
  }
}

const mapStateToProps = state => ({
  socket: state.socket
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ initializeSocket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
