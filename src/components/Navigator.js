import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  height: 100vh;
`

const NavButton = styled.button`
  border: none;
  outline: none;
  color: white;
  background-color: lightgrey;
`

const navs = ['home', 'play', 'profile', 'setting']

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const renderNavs = history => {
  return (
    navs.map((nav, i) => {
      return (
        <NavButton
          key={i}
          onClick={ () => history.push(`/${nav}`) }
        >
        {capitalize(nav)}
        </NavButton>
      )
    })
  )
}

export default props => {
  return (
    <NavWrapper>
      {renderNavs(props.history)}
    </NavWrapper>
  )
}
