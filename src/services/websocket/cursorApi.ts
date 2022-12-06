import { Socket } from "socket.io-client";
import { socket } from ".";
import { ApiCursorProps, XY, EventListenerNames } from "./types";

class CursorApi {
  #ws: Socket;

  constructor() {
    this.#ws = socket;
  }

  onGetOtherCursors(onData: (cursors: ApiCursorProps[]) => void) {
    this.#ws.on(EventListenerNames.SEND_ALL_OTHER_CURSORS, (otherCursors) => {
      onData(otherCursors);
    });
  }

  onGetCursorMoved(onMove: (cursor: ApiCursorProps) => void) {
    this.#ws.on(EventListenerNames.SEND_NEW_CURSOR_POSITION, (data) => {
      onMove(data);
    });
  }

  onCursorDisconnect(onRemoveCursor: (id: string) => void) {
    this.#ws.on(EventListenerNames.CURSOR_DISCONNECT, (data) => {
      onRemoveCursor(data);
    });
  }

  async emitCursorMove({ x, y }: XY) {
    this.#ws.emit(EventListenerNames.CURSOR_MOVED, { x, y });
  }
}

const cursorApi = new CursorApi();

export { cursorApi };
