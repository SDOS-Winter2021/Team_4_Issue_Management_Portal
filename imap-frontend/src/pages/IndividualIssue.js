import { IssueContainer } from "../components/IssueDashboard/IssueDesigns";
import CommentInput from "../components/IssuePopup/CommentInput";
import CommentBox from "../components/IssuePopup/CommentBox";
import IssueTitleNDesc from "../components/IssuePopup/IssueTitleNDesc";
import LikesNComments from "../components/IssuePopup/LikesNComments";
import { AddComment } from "../logics/AddComment";
import { SetLike } from "../logics/LikePost";
import Modal from "react-modal";
import PropTypes from "prop-types";
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

/**
 * Indiviual post popup. Opens up when a post is clicked.
 * Has details about post like title, description, likes,
 * comments. Has admin privileges like resolve and delete.
 * @component
 * @example
 * const issue = {Title: "New Issue",
 *                Desc:"Description",
 *                 Tags: {Public: false, Resolved: false},
 *                  Likes: {studEmail:["abc@gmail.com"]},
 *                  Comments: {userEmail:["abc@gmail.com"],
 *                              comments:["yes"]}}
 * const popupIssue = true;
 * const handlePopIssue = () => popupIssue = false;
 * isIssue: true;
 * isMobileView: false;
 * return (
 *   <IndividualIssue issue={issue} popupIssue={popupIssue}
 *          handlePopIssue={handlePopIssue} isIssue={isIssue}
 *           isMobileView={isMobileView}  />
 * )
 */
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
    AddComment(
      userComment,
      issue,
      userEmail,
      isIssue,
      updateIssueDb,
      updateAnnouncementDb
    );
    _readComment("");
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
            right: "20px",
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
          setLike={setLikeFunc}
          like={like}
        />
        <CommentInput
          readComment={readComment}
          userComment={userComment}
          addComment={addComment}
        />

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

IndividualIssue.propTypes = {
  /**
   * Issue object
   */
  issue: PropTypes.object.isRequired,

  /**
   * Boolean flag for the popup status.
   */
  popupIssue: PropTypes.bool.isRequired,

  /**
   * Function to control popup status.
   */
  handlePopIssue: PropTypes.func.isRequired,

  /**
   * Boolean, true for issue and false for announcement.
   */
  isIssue: PropTypes.bool.isRequired,

  /**
   * Boolean that state whether the current screen dimension
   * is a mobile phone resolution. It is set to `false` if it has
   * a smaller dimension than a given threshold.
   */
  isMobileView: PropTypes.bool,
};

export default IndividualIssue;
