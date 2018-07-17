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
    socket.on('roomUpdate', roomName => {
      const rooms = this.state.rooms.slice()
      rooms.push(roomName)
      this.setState({ rooms })
    })
  }

  listenToRoomDestroy = socket => {
    socket.on('roomDestroy', roomName => {
      const rooms = this.state.rooms.slice()
      rooms.splice(rooms.indexOf(roomName), 1)
      this.setState({ rooms })
    })
  }

  getAllRooms = socket => {
    socket.emit('getAllRooms')
  }

  createRoom = socket => {
    socket.emit('createRoom')
  }

  joinRoom = (socket, roomName) => {
    socket.emit('joinRoom', roomName)
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
