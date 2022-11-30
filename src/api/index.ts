import { io } from "socket.io-client";
import { CursorProps } from "../components/Cursor";
import { useState } from "react";

interface Props {
    [key: string]: CursorProps;
}

export const useGetOtherCursors = () => {
    const [cursors, setCursors] = useState<Props>({});
    const ws = io(import.meta.env.VITE_WS_URL);

    ws.on("initialData", (initialCursors) => {
        setCursors(initialCursors);
    });

    return Object.values(cursors);
};
