import { useEffect, useState } from "react";
import { cursorApi } from "../services/websocket/cursorApi";
import { XY } from "../services/websocket/types";
import { getAbolutePagePosition } from "./utils";

export const useGetMeCursor = () => {
  const [mousePosition, setMousePosition] = useState<XY>();

  const onMouseMove = (event: MouseEvent) => {
    const absolutePosition = getAbolutePagePosition(event);

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
