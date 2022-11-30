import { useGetOtherCursors } from "../../api";
import { Cursor } from "../Cursor";

export const OtherCursors = () => {
    const cursors = useGetOtherCursors();

    return (
        <>
            {cursors.map((coordinates) => (
                <Cursor {...coordinates} />
            ))}
        </>
    );
};
