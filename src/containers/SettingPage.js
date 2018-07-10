import React, { Component } from 'react';

import Navigator from '../components/Navigator';
import Wrapper from './styles/Wrapper';

class SettingPage extends Component {
  render() {
    return (
      <Wrapper>
        <Navigator history={this.props.history} />
        <h1>Setting</h1>
      </Wrapper>
    )
  }
}

export default SettingPage;
