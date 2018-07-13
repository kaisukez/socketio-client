import { combineReducers } from 'redux';

import socket from './reducer_socket';

const rootReducer = combineReducers({
  socket,
});

export default rootReducer;
