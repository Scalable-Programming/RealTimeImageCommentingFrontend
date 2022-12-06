import { useRef, useState } from "react";
import { XY } from "../../services/websocket/types";
import useAutosizeTextArea from "./useAutosizeTextArea";

export interface CommentProps extends XY {
  entityId: string;
  message?: string;
  createdAt?: string;
  onBlur?: (props: CommentProps) => Promise<void>;
}

export const Comment = ({
  x,
  y,
  message = "",
  createdAt,
  onBlur = async () => {},
  entityId,
}: CommentProps) => {
  const [text, setText] = useState(message);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useAutosizeTextArea(textAreaRef.current, text);

  const onSubmit = () =>
    onBlur({
      x,
      y,
      message: text.trim(),
      entityId,
      createdAt: new Date().toISOString(),
    });
  const isSaved = !!createdAt;
  const showFullComment = isHovered || !isSaved;

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        maxWidth: 256,
        padding: 8,
        position: "absolute",
        top: y,
        fontSize: "13px",
        lineHeight: "24px",
        left: x,
        backgroundColor: "#2c2c2c",
        borderRadius: 8,
        boxShadow:
          "0px 3px 8px rgba(0, 0, 0, .35), 0px 1px 3px rgba(0, 0, 0, .5), inset 0px 1px 0px rgba(255, 255, 255, .08), inset 0px 0px 1px rgba(255, 255, 255, .3)",
        zIndex: showFullComment ? 2 : 1,
      }}
    >
      {showFullComment && (
        <textarea
          ref={textAreaRef}
          disabled={isSaved}
          value={text}
          autoFocus={!isSaved}
          onBlur={onSubmit}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
              textAreaRef.current?.blur();
            }
          }}
        />
      )}
    </div>
  );
};
