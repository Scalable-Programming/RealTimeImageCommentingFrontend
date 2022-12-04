import CursorIcon from "../../assets/cursor.svg";
import { CursorProps } from "../../services/websocket/types";



export const Cursor = ({ x, y }: CursorProps) => {
    return (
        <div style={{ position: "absolute", top: y, left: x }}>
            <img src={CursorIcon} alt="Cursor" />
        </div>
    );
};
