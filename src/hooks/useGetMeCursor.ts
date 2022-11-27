import { useEffect, useState } from "react";

export const useGetMeCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const onMouseMove = (event: MouseEvent) => {
        const { pageX: x, pageY: y } = event;
        setMousePosition({ x, y });
    };

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return mousePosition;
};
