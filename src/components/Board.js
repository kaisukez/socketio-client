import React, { Component } from 'react';
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

const Wrapper = styled.div `
  // width: ${ cellSize * 8 + borderWidth }px;
  // height: ${ cellSize * 8 + borderWidth }px;
  // border: 1px solid grey;
`


class Board extends Component {
  renderBoard = (boardState, handleClick) => {
    if (Object.keys(boardState).length === 0) {
      return <div></div>
    }

    return (
      boardState.map((row, i) => {
        return (
          <Row key={i}>
          {row.map((col, j) => {
            return (
              <Block
              key={j}
              isClicked={col}
              onClick={ () => handleClick({ y: i, x: j }) }
              />
            )
          })}
          </Row>
        )
      })
    )
  }

  render() {
    return (
      <Wrapper>
        { this.renderBoard(this.props.boardState, this.props.handleClick) }
        <button onClick={ () => this.props.goToLobby() }>back to lobby</button>
      </Wrapper>
    )
  }
}

export default Board;
