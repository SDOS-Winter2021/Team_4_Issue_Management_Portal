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

  const [resolvedWarn, setResolvedWarn] = useState(false);
  const [deleteWarn, setDeleteWarn] = useState(false);
  const [privateWarn, setPrivateWarn] = useState(false);

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

  const makePostPublic = async() => {
    await updateIssueDb({id: issue._id, type: "Visibility"});
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
                onClick={
                  isAdmin && !resolved
                    ? () => setResolvedWarn(!resolvedWarn)
                    : () => {}
                }
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

            {/* remove private public option */}
            {/* 
            {isIssue && !issue.Tags.Public && (
              <div
                onClick={
                  isAdmin ? () => setPrivateWarn(!privateWarn) : () => {}
                }
                style={{
                  paddingLeft: "15px",
                  cursor: "pointer",
                }}
              >
                <FaIcons.FaLock
                  style={{ color: "#aaa", width: "18px", paddingLeft: "10px" }}
                />
              </div>
            )}
             */}
             
            {isAdmin && (
              <div
                onClick={() => setDeleteWarn(!deleteWarn)}
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
              handlePop={() => setDeleteWarn(!deleteWarn)}
            />
          )}
          {privateWarn && (
            <NotifPopup
              message={
                "The post will be changed from private to public. This cannot be undone."
              }
              onClickFunc={makePostPublic}
              popup={privateWarn}
              handlePop={() => {
                setPrivateWarn(!privateWarn);
              }}
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
