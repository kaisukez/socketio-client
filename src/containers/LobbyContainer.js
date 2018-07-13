import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import config from '../config.json';
import { initializeSocket } from '../actions';

import Lobby from '../components/Lobby';

class LobbyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { rooms: [] }
  }

  componentWillMount() {
    // console.log('lobby container', this.props.socket)
    // if (Object.keys(this.props.socket).length === 0) {
    //   const socket = io.connect(`${ config.server }`);
    //   this.props.initializeSocket(socket);
    // }
    this.listenToResRooms(this.props.socket)
  }

  listenToResRooms = socket => {
    socket.on('resRooms', ({ rooms }) => {
      this.setState({ rooms })
    })
  }

  render() {
    const lobbyProps = {
      rooms: this.state.rooms,
      goToBoard: () => this.props.goTo('board'),
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
