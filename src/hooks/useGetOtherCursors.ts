import { useEffect, useMemo, useState } from "react";
import {} from "../components/Cursor";
import { cursorApi } from "../services/websocket";
import { ApiCursorProps } from "../services/websocket/types";

interface Props {
  [key: string]: ApiCursorProps;
}

export const useGetOtherCursors = () => {
  const [cursors, setCursors] = useState<Props>({});

  useEffect(() => {
    const cursorArrayToDict = (cursors: ApiCursorProps[]) =>
      cursors.reduce((prev, next) => ({ ...prev, [next.entityId]: next }), {});

    cursorApi.onGetOtherCursors((data) => {
      setCursors(cursorArrayToDict(data));
    });

    cursorApi.onGetCursorMoved((cursorData) =>
      setCursors((prev) => ({
        ...prev,
        [cursorData.entityId]: { ...prev[cursorData.entityId], ...cursorData },
      }))
    );

    cursorApi.onCursorDisconnect((cursorId: string) => {
      setCursors((prev) =>
        cursorArrayToDict(
          Object.values(prev).filter(({ entityId }) => entityId !== cursorId)
        )
      );
    });
  }, []);

  return useMemo(() => Object.values(cursors), [cursors]);
};
