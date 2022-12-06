import { useComments } from "../../hooks/useComments";
import { Comment } from "../comment";

export const Comments = () => {
  const { comments, saveComment } = useComments();

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.entityId} {...comment} onBlur={saveComment} />
      ))}
    </>
  );
};
