import { combineReducers } from 'redux';

import UpdateSocket from './reducer_update_socket';
import UpdatePlayPageStatus from './reducer_update_play_page_status';
import UpdateBoardState from './reducer_update_board_state';
import UpdateRooms from './reducer_update_rooms';

const rootReducer = combineReducers({
  socket: UpdateSocket,
  playPageStatus: UpdatePlayPageStatus,
  boardState: UpdateBoardState,
  rooms: UpdateRooms,
});

export default rootReducer;
