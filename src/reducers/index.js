import { combineReducers } from 'redux';

import UpdateSocket from './reducer_update_socket';
import UpdateBoardState from './reducer_update_board_state';

const rootReducer = combineReducers({
  socket: UpdateSocket,
  boardState: UpdateBoardState
});

export default rootReducer;
