import { CELL_CLICKED, INITIALIZE_BOARD_STATE } from '../actions';

export default function(state={}, action) {
  console.log(action.position)
  switch(action.type) {
    case INITIALIZE_BOARD_STATE:
      return action.boardState;

    case CELL_CLICKED:
      if (Object.keys(state).length !== 0) {
        let x = action.position.x;
        let y = action.position.y;
        let newState = state.slice();
        newState[y][x] = !newState[y][x];
        console.log(newState)
        return newState;
      } else {
        return state;
      }

    default:
      return state;
  }
}
