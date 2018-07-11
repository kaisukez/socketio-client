import { ROOM_CREATED, ROOM_DESTROYED, UPDATE_ALL_ROOMS } from '../actions';

export default function(state=[], action) {
  const newRooms = state.slice()
  switch (action.type) {
    case ROOM_CREATED:
      newRooms.push(action.roomName)
      return newRooms

    case ROOM_DESTROYED:
      newRooms.splice(newRooms.indexOf(action.roomName), 1)
      return newRooms

    case UPDATE_ALL_ROOMS:
      return action.rooms

    default:
      return state;
  }
}
