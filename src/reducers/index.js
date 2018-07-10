import { combineReducers } from 'redux';

import UpdateSocket from './reducer_update_socket';
import UpdatePlayPageStatus from './reducer_update_play_page_status';
import UpdateBoardState from './reducer_update_board_state';

const rootReducer = combineReducers({
  socket: UpdateSocket,
  playPageStatus: UpdatePlayPageStatus,
  boardState: UpdateBoardState,
});

export default rootReducer;
