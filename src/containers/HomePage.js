import React, { Component } from 'react';

import Navigator from '../components/Navigator';
import Wrapper from './styles/Wrapper';

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <Navigator history={this.props.history} />
        <h1>Homepage</h1>
      </Wrapper>
    )
  }
}

export default HomePage;
