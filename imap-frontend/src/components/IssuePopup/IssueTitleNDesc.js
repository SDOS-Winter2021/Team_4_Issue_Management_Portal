import {
  IssueContainer,
  IssueStatusLabel,
} from "../IssueDashboard/IssueDesigns";
import * as FaIcons from "react-icons/fa";
import { Labels } from "../IssueDashboard/Issue";
import { AuthContext } from "../../context/auth-context";
import NotifPopup from "../Notifications/NotifPopup";
import React, { useState, useContext } from "react";

function IssueTitleNDesc({ issue, isIssue, isAdmin, handlePopIssue, page }) {
  const [resolved, _setResolved] = useState(
    isIssue ? issue.Tags.Resolved : false
  );

  const [resolvedWarn, _setResolvedWarn] = useState(false);
  const setResolvedWarn = () => {
    if (isAdmin && isIssue && !resolved) _setResolvedWarn(!resolvedWarn);
  };

  const [deleteWarn, _setDeleteWarn] = useState(false);
  const setDeleteWarn = () => _setDeleteWarn(!deleteWarn);
  const { deleteIssueDb, deleteAnnouncementDb, updateIssueDb } = useContext(
    AuthContext
  );

  const resolvePost = async () => {
    if (isAdmin) {
      await updateIssueDb({
        email: issue.userEmail,
        id: issue._id,
        type: "Status",
      });

      _setResolved(true);
    }
  };

  const deletePost = async () => {
    console.log("deleteeeee");

    if (isIssue) {
      await deleteIssueDb({
        id: issue._id,
      });
    } else {
      await deleteAnnouncementDb({
        id: issue._id,
      });
    }
    handlePopIssue();
    setDeleteWarn();
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <IssueContainer
          style={{ padding: "10px", display: "flex", flexDirection: "column" }}
        >
          <h1
            style={{
              marginRight: "20px",
              margin: "5px",
              display: "flex",
              flexWrap: "wrap",
              fontSize: "30px",
            }}
          >
            {issue.Title}
            {isIssue && (
              <IssueStatusLabel
                style={{
                  cursor: "pointer",
                  marginLeft: "25px",
                  width: "100px",
                  height: "26px",
                  borderRadius: "5px",
                }}
                color={resolved ? "green" : "red"}
                onClick={isAdmin ? () => setResolvedWarn() : () => {}}
              >
                {resolved ? (
                  <FaIcons.FaCheckCircle />
                ) : (
                  <FaIcons.FaExclamationCircle />
                )}
                <p style={{ paddingLeft: "8px", fontSize: "15px" }}>
                  {resolved ? "Resolved" : "Pending"}
                </p>
              </IssueStatusLabel>
            )}
            {isIssue && !issue.Tags.Public && (
              <FaIcons.FaLock
                style={{ color: "#aaa", width: "18px", paddingLeft: "10px" }}
              />
            )}
            {isAdmin && (
              <div
                onClick={setDeleteWarn}
                style={{
                  paddingLeft: "15px",
                  cursor: "pointer",
                }}
              >
                <FaIcons.FaTrashAlt
                  style={{ color: "#666", width: "18px", height: "22px" }}
                />
              </div>
            )}
          </h1>
          {resolvedWarn && (
            <NotifPopup
              message={"The status of Issue will be changed"}
              onClickFunc={resolvePost}
              popup={resolvedWarn}
              handlePop={setResolvedWarn}
            />
          )}
          {deleteWarn && (
            <NotifPopup
              message={"The post will be deleted. This cannot be undone."}
              onClickFunc={deletePost}
              popup={deleteWarn}
              handlePop={setDeleteWarn}
            />
          )}
          <p style={{ fontSize: "12px", color: "gray" }}>
            Created by: {issue.userEmail} | {issue.createdAt.split("T")[0]}
          </p>
          <Labels labels={issue.Filter} />
        </IssueContainer>
      </div>
      <IssueContainer style={{ borderBottom: "2px solid #ccc" }}>
        <p>{issue.Desc}</p>
      </IssueContainer>
    </>
  );
}

export default IssueTitleNDesc;
