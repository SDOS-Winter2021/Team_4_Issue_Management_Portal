import { IssueContainer } from "../components/IssueDashboard/IssueDesigns";
import CommentInput from "../components/IssuePopup/CommentInput";
import CommentBox from "../components/IssuePopup/CommentBox";
import IssueTitleNDesc from "../components/IssuePopup/IssueTitleNDesc";
import LikesNComments from "../components/IssuePopup/LikesNComments";
import { AddComment } from "../logics/AddComment";
import { SetLike } from "../logics/LikePost";
import Modal from "react-modal";
import * as FaIcons from "react-icons/fa";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

const customStyle = {
  content: {
    border: "none",
    maxWidth: "1000px",
    margin: "10px auto",
    padding: "10px 20px 0px",
    borderRadius: "8px",
  },
  overlay: { zIndex: "1001", backgroundColor: "rgba(52, 52, 52, 0.8)" },
};

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
  const isAdmin = userData.user.role !== "student";
  const likes_list = isIssue ? issue.Likes.studEmail : [];
  const has_liked = isIssue ? likes_list.indexOf(userEmail) >= 0 : false;

  const [commentArea, setComment] = useState(false);
  const setCommFunc = () => setComment(!commentArea);
  const [userComment, _readComment] = useState("");
  const readComment = (e) => _readComment(e.target.value);
  const [like, setLike] = useState(has_liked);

  const setLikeFunc = () => {
    setLike(!like);
    SetLike(
      isIssue,
      has_liked,
      like,
      issue,
      likes_list,
      userEmail,
      updateIssueDb
    );
  };

  const addComment = () => {
    setCommFunc();
    AddComment(
      userComment,
      issue,
      userEmail,
      isIssue,
      updateIssueDb,
      updateAnnouncementDb
    );
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
          isAdmin={isAdmin}
          handlePopIssue={handlePopIssue}
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
