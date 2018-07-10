import React, { Component } from 'react';
import styled from 'styled-components';


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
        {this.renderRoomLists(this.props.state.rooms)}
      </div>
    )
  }

  render() {
    return (
      <div>
      <button>Quick Start</button>
      <button>Create Room</button>
      <button onClick={ () => this.props.goToBoard() }>go to board</button>
      {this.renderRooms(['haha'])}
      </div>
    )
  }
}

export default Lobby;
