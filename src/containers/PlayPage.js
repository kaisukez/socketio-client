import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import config from '../config.json';
import { initializeSocket } from '../actions';

import Navigator from '../components/Navigator';
import LobbyContainer from '../containers/LobbyContainer';
import BoardContainer from '../containers/BoardContainer';
import Wrapper from './styles/Wrapper';

class PlayPage extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'lobby' }
  }

  componentWillMount() {
    if (Object.keys(this.props.socket).length === 0) {
      console.log('play page will mount')
      const socket = io.connect(`${ config.server }`);
      this.props.initializeSocket(socket);
    }
  }

  goTo = nextPage => {
    this.setState({ page: nextPage })
  }

  renderPlayPage = () => {
    const props = {
      goTo: nextPage => this.goTo(nextPage),
      socket: this.props.socket
    }
    if (this.state.page === 'lobby')
      return <LobbyContainer { ...props } />
    else if (this.state.page === 'board')
      return <BoardContainer { ...props } />
    else
      return null
  }

  render() {
    return (
      <Wrapper>
        <Navigator history={this.props.history} />
        { this.renderPlayPage() }
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  socket: state.socket
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ initializeSocket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
