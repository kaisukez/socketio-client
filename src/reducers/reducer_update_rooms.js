import { ROOM_CREATED, ROOM_DESTROYED } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case ROOM_CREATED:
      return 'lobby';

    case ROOM_DESTROYED:
      const newRooms = state.slice()
      newRooms.splice(newRooms.indexOf(action.roomName), 1)
      return newRooms

    default:
      return state;
  }
}
