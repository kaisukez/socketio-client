import React from 'react';
import styled from 'styled-components'

const borderWidth = 2;

const Block = styled.div `
  width: ${props => props.size || 30}px;
  height: ${props => props.size || 30}px;
  background-color: ${props => props.isClicked ? 'lightblue' : 'lightgrey'};
  border-width: ${props => props.borderWidth || 2}px;
  border-style: solid;
  border-color: grey;
`

const Row = styled.div `
  display: flex;
`

const Wrapper = styled.div `
  border-width: ${props => props.borderWidth || 2}px;
  border-style: solid;
  border-color: grey;
`

const renderBoard = boardState => {
  return (
    boardState.map((row, i) => {
      return (
        <Row borderWidth={borderWidth} key={i}>
          {row.map((col, i) => {
            return (
              <Block
                key={i}
                isClicked={col}
                size={50}
                borderWidth={borderWidth}
              />
            )
          })}
        </Row>
      )
    })
  )
}

export default props => {
  return (
    <Wrapper borderWidth={borderWidth}>
      {renderBoard(props.boardState)}
    </Wrapper>
  )
}
