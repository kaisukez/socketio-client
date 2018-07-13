import { INITIALIZE_SOCKET } from '../actions';

export default function(state={}, action) {
  switch(action.type) {
    case INITIALIZE_SOCKET:
      console.log('init socket!!')
      return action.socket;

    default:
      return state;
  }
}
