import React, { Component } from 'react';
import io from 'socket.io-client';

class App extends Component {
  componentDidMount() {
    const socket = io.connect('http://localhost:3001')
    this.setState({ socket })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
