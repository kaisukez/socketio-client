import React, { Component } from 'react';
import { connect } from 'react-redux';

class Lobby extends Component {
  renderRoomLists = rooms => {
    return (
      rooms.map((room, i) => {
        return (
          <li key={i}>{room}</li>
        )
      })
    )
  }

  renderRooms = () => {
    return (
      <div>
        <h2>rooms</h2>
        {this.renderRoomLists(this.props.rooms)}
      </div>
    )
  }

  createRoom = () => {
    this.props.socket.emit('createRoom')
  }

  render() {
    return (
      <div>
      <button>Quick Start</button>
      <button onClick={ () => this.createRoom() }>Create Room</button>
      <button onClick={ () => this.props.goToBoard() }>go to board</button>
      {this.renderRooms()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    socket: state.socket,
    rooms: state.rooms,
  }
}

export default connect(mapStateToProps)(Lobby);
