import { IssueContainer } from "../IssueDashboard/IssueDesigns";
import { LikeComments } from "../IssueDashboard/Issue";
import * as FaIcons from "react-icons/fa";

function LikesNComments({
  issue,
  isIssue,
  setComment,
  setLike,
  like,
  comment,
}) {
  return (
    <>
      <IssueContainer style={{ borderBottom: "2px solid #ccc" }}>
        {isIssue && (
          <div
            style={{ padding: "10px", cursor: "pointer", fontSize: "20px" }}
            onClick={setLike}
          >
            <LikeComments
              icon={
                <FaIcons.FaThumbsUp
                  style={like ? { color: "#323499" } : { color: "gray" }}
                />
              }
              number={issue.Likes.studEmail.length}
            />
          </div>
        )}
        <div
          style={{ padding: "10px", cursor: "pointer", fontSize: "20px" }}
          onClick={setComment}
        >
          <LikeComments
            icon={
              <FaIcons.FaComments
                style={comment ? { color: "#323499" } : { color: "gray" }}
              />
            }
            number={issue.Comments.userEmail.length}
          />
        </div>
      </IssueContainer>
    </>
  );
}

export default LikesNComments;
