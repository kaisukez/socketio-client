import React, { Component } from 'react';

import Navigator from '../components/Navigator';
import Wrapper from './styles/Wrapper';

class ProfilePage extends Component {
  render() {
    return (
      <Wrapper>
        <Navigator history={this.props.history} />
        <h1>Profile</h1>
      </Wrapper>
    )
  }
}

export default ProfilePage;
