export const INITIALIZE_SOCKET = 'INITIALIZE_SOCKET';

export function initializeSocket(socket) {
  return {
    type: INITIALIZE_SOCKET,
    socket
  }
}
