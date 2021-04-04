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
    const _id = issue._id;
    if (!has_liked) {
      setLike(has_liked);
      if (isIssue)
        !like ? likes_list.push(userEmail) : likes_list.pop(userEmail);
      const type = "Like";
      await updateIssueDb({ userEmail, type, _id });
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

  return (
    <>
      <Modal isOpen={popupIssue} style={{ overlay: { zIndex: "1001" } }}>
        <Profile onClick={handlePopIssue}>
          <FaIcons.FaTimes />
        </Profile>
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
