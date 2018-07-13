import React from 'react';
import styled from 'styled-components';

const cellSize = 60;
const borderWidth = 2;

const Block = styled.div `
  // width: ${ cellSize }px;
  // height: ${ cellSize }px;
  border: ${ borderWidth }px solid grey;
  background-color: ${ props => props.isClicked ? 'lightblue' : 'lightgrey' };

  width: 11vh;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

const Row = styled.div `
  display: flex;
`

const renderBoard = (boardState, squareClicked) => {
  return (
    boardState.map((row, i) => {
      return (
        <Row key={i}>
          {row.map((col, j) => {
            return (
              <Block
                key={j}
                isClicked={col}
                onClick={ () => squareClicked({ y: i, x: j }) }
              />
            )
          })}
        </Row>
      )
    })
  )
}

const Board = props => {
  return (
    <div>
      { renderBoard(props.boardState, props.squareClicked) }
      <button onClick={ () => props.goToLobby() }>back to lobby</button>
    </div>
  )
}

export default Board;
