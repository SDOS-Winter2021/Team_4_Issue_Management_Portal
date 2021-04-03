import {
  IssueContainer,
  IssueTitle,
  IssueAccessory,
} from "../components/IssueDashboard/IssueDesigns";
import { LikeComments, Labels } from "../components/IssueDashboard/Issue";
import { Profile } from "../components/Navigation/NavigationDesigns";
import {
  IssueStatusLabel,
  SubmitButton,
} from "../components/IssueDashboard/IssueDesigns";
import Modal from "react-modal";
import * as FaIcons from "react-icons/fa";
import React, { useState, useContext } from "react";
import { AuthContext } from '../context/auth-context';

Modal.setAppElement("#root");

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

function IssueTitleNDesc({ issue, isIssue, setResolved, resolved }) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <IssueContainer style={{ alignItems: "center", padding: "10px" }}>
          <h1
            style={{
              marginRight: "10px",
              margin: "5px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {issue.Title}
            {isIssue && (
              <IssueStatusLabel
                style={{ cursor: "pointer" }}
                color={resolved ? "green" : "red"}
                onClick={() => {
                  setResolved();
                }}
              >
                {resolved ? (
                  <FaIcons.FaCheckCircle />
                ) : (
                  <FaIcons.FaExclamationCircle />
                )}
                <p style={{ paddingLeft: "8px" }}>
                  {resolved ? "Resolved" : "Pending"}
                </p>
              </IssueStatusLabel>
            )}
          </h1>
          <Labels labels={issue.Filter} />
        </IssueContainer>
      </div>
      <IssueContainer style={{ borderBottom: "2px solid #ccc" }}>
        <p>{issue.Desc}</p>
      </IssueContainer>
    </>
  );
}

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

function IndividualIssue({
  issue,
  popupIssue,
  handlePopIssue,
  isIssue,
  isMobileView,
}) {
  const { userData } = useContext(AuthContext);
  const uid = userData.user.email;
  const likes_list = isIssue ? issue.Likes.studEmail : [];
  const has_liked = isIssue ? likes_list.indexOf(uid) > 0 : false;
  const [like, setLike] = useState(has_liked);
  const setLikeFunc = () => {
    setLike(!like);
    if (isIssue) !like ? likes_list.push(uid) : likes_list.pop(uid);
  };

  const [commentArea, setComment] = useState(false);
  const setCommFunc = () => setComment(!commentArea);
  const [userComment, _readComment] = useState("");
  const readComment = (e) => _readComment(e.target.value);

  const addComment = () => {
    if (userComment !== "") {
      console.log(userComment);
      issue.Comments.comment.push(userComment);
      issue.Comments.userEmail.push(uid);
      console.log(issue.Comments);
      setCommFunc();
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
          <IssueContainer
            style={{ backgroundColor: "#fff", padding: "10px 0px" }}
          >
            <input
              type="text"
              placeholder="Add a comment"
              style={{ width: "70%" }}
              onChange={readComment}
            />
            <SubmitButton onClick={addComment}>
              <FaIcons.FaPaperPlane />
            </SubmitButton>
          </IssueContainer>
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
