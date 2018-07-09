import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  grid-column: first / col2-start;
  grid-row: first / row2-start;
`

const navs = ['Home', 'Play', 'Profile', 'Setting']

const renderNavs = () => {
  return (
    navs.map((nav, i) => {
        return (
          <div key={i}>
            <h2>{nav}</h2>
          </div>
        )
    })
  )
}

export default props => {
  return (
    <NavWrapper>
      {renderNavs()}
    </NavWrapper>
  )
}
