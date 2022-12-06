import CursorIcon from "../../assets/cursor.svg";
import { XY } from "../../services/websocket/types";

export const Cursor = ({ x, y }: XY) => {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        zIndex: 3,
        pointerEvents: "none",
      }}
    >
      <img src={CursorIcon} alt="Cursor" />
    </div>
  );
};
