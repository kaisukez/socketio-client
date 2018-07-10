export const INITIALIZE_BOARD_STATE = 'INITIALIZE_BOARD_STATE';
export const INITIALIZE_SOCKET = 'INITIALIZE_SOCKET';
export const CELL_CLICKED = 'CELL_CLICKED';
export const GO_TO_LOBBY = 'GO_TO_LOBBY';
export const GO_TO_BOARD = 'GO_TO_BOARD';
export const ROOM_CREATED = 'ROOM_CREATED';

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
