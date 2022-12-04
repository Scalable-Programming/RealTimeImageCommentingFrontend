import { useEffect, useState } from "react";
import { cursorApi } from "../services/websocket";
import { CursorProps } from "../services/websocket/types";

export const useGetMeCursor = () => {
  const [mousePosition, setMousePosition] = useState<CursorProps>();

  const onMouseMove = (event: MouseEvent) => {
    const { pageX: x, pageY: y } = event;

    const absolutePosition = {
      x: `${(x / window.innerWidth) * 100}%`,
      y: `${(y / window.innerHeight) * 100}%`,
    };

    setMousePosition(absolutePosition);
    cursorApi.emitCursorMove(absolutePosition);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return mousePosition;
};
