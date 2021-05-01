import { IssueContainer, SubmitButton } from "../IssueDashboard/IssueDesigns";
import * as FaIcons from "react-icons/fa";

const CommentInput = ({ readComment, addComment, userComment }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addComment();
  };
  return (
    <>
      <IssueContainer style={{ backgroundColor: "#fff", padding: "10px 0px" }}>
        <div
          style={{ display: "flex", position: "relative", maxWidth: "100vw" }}
        >
          <input
            type="text"
            value={userComment}
            placeholder="Add a comment"
            style={{
              height: "40px",
              borderRadius: "15px",
              paddingLeft: "1em",
              paddingRight: "4.6em",
              borderWidth: "1px",
              borderColor: "black",
              outline: "none",
            }}
            onChange={readComment}
            onKeyDown={handleKeyDown}
          />
          <SubmitButton
            onClick={addComment}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              background: "inherit",
            }}
          >
            <FaIcons.FaPaperPlane />
          </SubmitButton>
        </div>
      </IssueContainer>
    </>
  );
};

export default CommentInput;
