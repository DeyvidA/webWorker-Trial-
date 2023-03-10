import { SocketConstants, SocketActions } from './typedef';

export const socketActions: SocketActions = {
  connect: () => ({ type: SocketConstants.CONNECT }),
  send: payload => ({ type: SocketConstants.SEND, payload }),
  close: payload => ({ type: SocketConstants.CLOSE, payload }),
  error: error => ({ type: SocketConstants.ERROR, error })
};
