export const INITIALIZE_BOARD_STATE = 'INITIALIZE_BOARD_STATE';
export const INITIALIZE_SOCKET = 'INITIALIZE_SOCKET';
export const CELL_CLICKED = 'CELL_CLICKED';
export const GO_TO_LOBBY = 'GO_TO_LOBBY';
export const GO_TO_BOARD = 'GO_TO_BOARD';
export const ROOM_CREATED = 'ROOM_CREATED';
export const ROOM_DESTROYED = 'ROOM_DESTROYED';
export const UPDATE_ALL_ROOMS = 'UPDATE_ALL_ROOMS';

export function initializeBoardState(boardState) {
  return {
    type: INITIALIZE_BOARD_STATE,
    boardState
  }
}

export function initializeSocket(socket) {
  return {
    type: INITIALIZE_SOCKET,
    socket
  }
}

export function cellClicked(position) {
  return {
    type: CELL_CLICKED,
    position
  }
}

export function goToLobby() {
  return {
    type: GO_TO_LOBBY
  }
}

export function goToBoard() {
  return {
    type: GO_TO_BOARD
  }
}

export function roomCreated(roomName) {
  return {
    type: ROOM_CREATED,
    roomName
  }
}

export function roomDestroyed(roomName) {
  return {
    type: ROOM_DESTROYED,
    roomName
  }
}

export function updateAllRooms(rooms) {
  return {
    type: UPDATE_ALL_ROOMS,
    rooms
  }
}
