import { IssueContainer, SubmitButton } from "../IssueDashboard/IssueDesigns";
import * as FaIcons from "react-icons/fa";
import PropTypes from "prop-types";

/**
 * Input box to take the comments from the user.
 * @component
 */
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

CommentInput.propTypes = {
  /**
   * function that reads the types comment
   */
  readComment: PropTypes.func.isRequired,

  /**
   * function to add comment to database
   */
  addComment: PropTypes.func.isRequired,

  /**
   * the comment text that is typed in
   */
  userComment: PropTypes.string.isRequired,
};

export default CommentInput;
