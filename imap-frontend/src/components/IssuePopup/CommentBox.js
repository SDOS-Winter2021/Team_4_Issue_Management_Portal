import {
  IssueContainer,
  IssueAccessory,
  IssueTitle,
} from "../IssueDashboard/IssueDesigns";
import * as FaIcons from "react-icons/fa";

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

export default CommentBox;
