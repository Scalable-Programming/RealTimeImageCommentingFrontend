import { Socket } from "socket.io-client";
import { socket } from ".";
import { CommentProps } from "../../components/comment";
import { EventListenerNames } from "./types";

class CommentApi {
  #ws: Socket;

  constructor() {
    this.#ws = socket;
  }

  onGetOtherComments(onData: (comments: CommentProps[]) => void) {
    this.#ws.on(EventListenerNames.SEND_ALL_COMMENTS, (comments) => {
      onData(comments);
    });
  }

  onGetNewComment(onMove: (comments: CommentProps) => void) {
    this.#ws.on(EventListenerNames.SEND_NEW_COMMENT, (data) => {
      onMove(data);
    });
  }

  async emitNewComment({
    x,
    y,
    message,
  }: Pick<CommentProps, "x" | "y" | "message">) {
    this.#ws.emit(EventListenerNames.ADD_NEW_COMMENT, { x, y, message });
  }
}

const commentApi = new CommentApi();

export { commentApi };
