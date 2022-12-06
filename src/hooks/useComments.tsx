import { useEffect, useState } from "react";
import { CommentProps } from "../components/comment";
import { commentApi } from "../services/websocket/commentApi";
import { getAbolutePagePosition } from "./utils";
import { v4 as uuidV4 } from "uuid";

export const useComments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [comments, setComments] = useState<CommentProps[]>([]);

  const onMouseClick = (event: MouseEvent) => {
    const absolutePosition = getAbolutePagePosition(event);
    setComments((prev) => [
      ...prev,
      {
        ...absolutePosition,
        entityId: uuidV4(),
      },
    ]);
    setIsAddingComment(true);
  };

  useEffect(() => {
    if (!isAddingComment) {
      document.addEventListener("click", onMouseClick);
    }

    return () => {
      document.removeEventListener("click", onMouseClick);
    };
  }, [isAddingComment]);

  useEffect(() => {
    commentApi.onGetOtherComments((comments) => setComments(comments));
    commentApi.onGetNewComment((comment) =>
      setComments((prev) => [...prev, comment])
    );
  }, []);

  return {
    comments,
    saveComment: async ({ x, y, message, entityId: id }: CommentProps) => {
      if (!!message) {
        setComments((prev) =>
          prev.map((previousComment) =>
            previousComment.entityId === id
              ? { ...previousComment, createdAt: new Date().toISOString() }
              : previousComment
          )
        );

        await commentApi.emitNewComment({
          x,
          y,
          message,
        });
      } else {
        setComments((prev) => prev.filter(({ entityId }) => entityId !== id));
      }

      setIsAddingComment(false);
    },
  };
};
