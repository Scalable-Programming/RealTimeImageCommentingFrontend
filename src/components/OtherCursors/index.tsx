import { useGetOtherCursors } from "../../hooks/useGetOtherCursors";
import { Cursor } from "../Cursor";

export const OtherCursors = () => {
    const cursors = useGetOtherCursors();

    return (
        <>
            {cursors.map((cursorData) => (
                <Cursor key={cursorData.entityId} {...cursorData } />
            ))}
        </>
    );
};
