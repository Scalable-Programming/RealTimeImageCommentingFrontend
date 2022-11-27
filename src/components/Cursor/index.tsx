import CursorIcon from "../../assets/cursor.svg";

interface Props {
    x: number;
    y: number;
}

export const Cursor = ({ x, y }: Props) => {
    return (
        <div style={{ position: "absolute", top: y, left: x }}>
            <img src={CursorIcon} alt="Cursor" />
        </div>
    );
};
