import { useGetMeCursor } from "../../hooks/useGetMeCursor";
import { Cursor } from "../Cursor";

export const MeCursor = () => {
    const meCursorData = useGetMeCursor();

    return <Cursor {...meCursorData} />;
};
