import { GO_TO_LOBBY, GO_TO_BOARD } from '../actions';

export default function(state='lobby', action) {
  switch (action.type) {
    case GO_TO_LOBBY:
      return 'lobby';

    case GO_TO_BOARD:
      return 'board';

    default:
      return state;
  }
}
