import { IssueContainer } from "../components/IssueDashboard/IssueDesigns";
import CommentInput from "../components/IssuePopup/CommentInput";
import CommentBox from "../components/IssuePopup/CommentBox";
import IssueTitleNDesc from "../components/IssuePopup/IssueTitleNDesc";
import LikesNComments from "../components/IssuePopup/LikesNComments";
import { Profile } from "../components/Navigation/NavigationDesigns";
import Modal from "react-modal";
import * as FaIcons from "react-icons/fa";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

function IndividualIssue({
  issue,
  popupIssue,
  handlePopIssue,
  isIssue,
  isMobileView,
}) {
  const { userData, updateIssueDb, updateAnnouncementDb } = useContext(
    AuthContext
  );
  const userEmail = userData.user.email;
  const likes_list = isIssue ? issue.Likes.studEmail : [];
  const has_liked = isIssue ? likes_list.indexOf(userEmail) >= 0 : false;
  console.log(has_liked, userEmail, likes_list);
  const [like, setLike] = useState(has_liked);
  const setLikeFunc = async () => {
    if (!isIssue) return;
    if (has_liked) return;
    const _id = issue._id;
    setLike(!like);
    if (!like) {
      likes_list.push(userEmail);
      const type = "Like";
      await updateIssueDb({ userEmail, type, _id });
    } else {
      likes_list.pop(userEmail);
      const type = "Unlike";
      // await updateIssueDb({ userEmail, type, _id });
    }
  };

  const [commentArea, setComment] = useState(false);
  const setCommFunc = () => setComment(!commentArea);
  const [userComment, _readComment] = useState("");
  const readComment = (e) => _readComment(e.target.value);

  const addComment = async () => {
    if (userComment !== "") {
      console.log(userComment);
      issue.Comments.comment.push(userComment);
      issue.Comments.userEmail.push(userEmail);
      console.log(issue.Comments);
      setCommFunc();
      const type = "Comment";
      const _id = issue._id;
      if (isIssue) {
        await updateIssueDb({ userEmail, type, _id, userComment });
      } else {
        await updateAnnouncementDb({ userEmail, type, _id, userComment });
      }
    }
  };

  const [resolved, _setResolved] = useState(
    isIssue ? issue.Tags.Resolved : false
  );
  const setResolved = () => {
    _setResolved(!resolved);
  };
  const customStyle = {
    content: {
      border: "none",
      maxWidth: "1000px",
      margin: "10px auto",
      padding: "10px 20px 0px",
      borderRadius: "8px",
    },
    overlay: { zIndex: "1001" },
  };

  return (
    <>
      <Modal isOpen={popupIssue} style={customStyle}>
        <button
          onClick={handlePopIssue}
          style={{
            position: "absolute",
            border: "none",
            top: "20px",
            right: "10px",
            cursor: "pointer",
            padding: "3px",
          }}
        >
          <FaIcons.FaTimes />
        </button>
        <IssueTitleNDesc
          issue={issue}
          isIssue={isIssue}
          resolved={resolved}
          setResolved={setResolved}
        />
        <LikesNComments
          issue={issue}
          isIssue={isIssue}
          setComment={setCommFunc}
          setLike={setLikeFunc}
          like={like}
          comment={commentArea}
        />
        {commentArea && (
          <CommentInput readComment={readComment} addComment={addComment} />
        )}
        <IssueContainer>
          {issue.Comments.userEmail.map((commenter, index) => {
            const comment = issue.Comments.comment[index];
            return <CommentBox commenter={commenter} comment={comment} />;
          })}
        </IssueContainer>
      </Modal>
    </>
  );
}

export default IndividualIssue;
