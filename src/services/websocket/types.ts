export enum EventListenerNames {
  GET_ALL_OTHER_CURSOR = "getAllOtherCursors",
  CURSOR_MOVED = "cursorMoved",
  SEND_NEW_CURSOR_POSITION = "sendNewCursorPosition",
  COMMENT_ADDED = "commentAdded",
  SEND_NEW_COMMENT = "sendNewComment",
  SEND_ALL_OTHER_CURSORS = "sendAllOtherCursors",
  CURSOR_DISCONNECT = "cursorDisconnect",
  SEND_ALL_COMMENTS = "sendAllComments",
  ADD_NEW_COMMENT = "addNewComments",
}

export interface XY {
  x: string;
  y: string;
}

export interface CursorProps extends XY {}

export interface ApiCursorProps extends CursorProps {
  entityId: string;
}
