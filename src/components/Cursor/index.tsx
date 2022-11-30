import CursorIcon from "../../assets/cursor.svg";

export interface CursorProps {
    x: number;
    y: number;
}

export const Cursor = ({ x, y }: CursorProps) => {
    return (
        <div style={{ position: "absolute", top: y, left: x }}>
            <img src={CursorIcon} alt="Cursor" />
        </div>
    );
};
