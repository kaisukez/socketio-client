export const INITIALIZE_BOARD_STATE = 'INITIALIZE_BOARD_STATE';
export const INITIALIZE_SOCKET = 'INITIALIZE_SOCKET';
export const CELL_CLICKED = 'CELL_CLICKED';

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
