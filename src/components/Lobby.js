import React from 'react';
import styled from 'styled-components';

const renderRooms = rooms => {
  return (
    <ul>
      {rooms.map((room, i) => <li key={i}>{room}</li> )}
    </ul>
  )
}

const Lobby = props => {
  return (
    <div>
      <button onClick={ () => props.goToBoard() }>go to board</button>
      <button onClick={ () => props.createRoom() }>create room</button>
      { renderRooms(props.rooms) }
    </div>
  )
}

export default Lobby;
