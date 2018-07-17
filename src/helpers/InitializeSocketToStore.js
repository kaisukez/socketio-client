import io from 'socket.io-client';

import config from '../config.json';

const InitializeSocketToStore = (socket, initializeSocket, username) => {
  let newSocket
  if (Object.keys(socket).length === 0) {
    newSocket = io.connect(`${ config.server }`);
    initializeSocket(newSocket);
  } else {
    newSocket = socket
  }
  newSocket.emit('setUsername', username)
  return newSocket
}

export default InitializeSocketToStore;
