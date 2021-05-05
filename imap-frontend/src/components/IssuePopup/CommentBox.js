import {
  IssueContainer,
  IssueAccessory,
  IssueTitle,
} from "../IssueDashboard/IssueDesigns";
import * as FaIcons from "react-icons/fa";
import PropTypes from "prop-types";

/**
 * Displays individual comments on Individual Post pop up.
 *
 * @component
 * @example
 * const commenter = "dibya18282@iiitd.ac.in"
 * const comment = "same issue"
 * return (<CommentBox commenter={commenter} comment={comment}>)
 */
function CommentBox({ commenter, comment }) {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <IssueAccessory
        style={{
          marginTop: "20px",
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          backgroundColor: "#aaa",
        }}
      >
        <FaIcons.FaUser />
      </IssueAccessory>
      <IssueContainer
        style={{ border: "0px solid gray", marginBottom: "15px" }}
      >
        <IssueTitle style={{ fontWeight: "bold" }}>{commenter}</IssueTitle>
        <IssueTitle style={{ paddingLeft: "15px" }}>{comment}</IssueTitle>
      </IssueContainer>
    </div>
  );
}

CommentBox.propTypes = {
  /**
   * Email ID of the person who commented
   */
  commenter: PropTypes.string.isRequired,

  /**
   * The comment text
   */
  comment: PropTypes.string.isRequired,
};

export default CommentBox;
