import { IssueContainer, SubmitButton } from "../IssueDashboard/IssueDesigns";
import * as FaIcons from "react-icons/fa";

const CommentInput = ({ readComment, addComment }) => {
  return (
    <>
      <IssueContainer style={{ backgroundColor: "#fff", padding: "10px 0px" }}>
        <input
          type="text"
          placeholder="Add a comment"
          style={{
            width: "70%",
            height: "30px",
            borderRadius: "5px",
            paddingLeft: "1em",
            borderWidth: "1px",
            borderColor: "black",
            outline: "none",
          }}
          onChange={readComment}
        />
        <SubmitButton onClick={addComment}>
          <FaIcons.FaPaperPlane />
        </SubmitButton>
      </IssueContainer>
    </>
  );
};

export default CommentInput;
