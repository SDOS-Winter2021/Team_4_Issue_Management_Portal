import {
  IssueContainer,
  IssueStatusLabel,
} from "../IssueDashboard/IssueDesigns";
import * as FaIcons from "react-icons/fa";
import { Labels } from "../IssueDashboard/Issue";
import NotifPopup from "../Notifications/NotifPopup";
import React, { useState, useContext } from "react";

function IssueTitleNDesc({
  issue,
  isIssue,
  setResolved,
  resolved,
  isAdmin,
  handlePopIssue,
}) {
  const [resolvedWarn, _setResolvedWarn] = useState(false);
  const setResolvedWarn = () => _setResolvedWarn(!resolvedWarn);
  const [deleteWarn, _setDeleteWarn] = useState(false);
  const setDeleteWarn = () => _setDeleteWarn(!deleteWarn);

  const deletePost = () => {
    console.log("deleteeeee");
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
                onClick={isAdmin ? () => setResolvedWarn() : () => {}}
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
            {isAdmin && (
              <div
                onClick={setDeleteWarn}
                style={{
                  padding: "0px 5px",
                  cursor: "pointer",
                }}
              >
                <FaIcons.FaTrashAlt style={{ color: "#8c513f" }} />
              </div>
            )}
          </h1>
          {resolvedWarn && (
            <NotifPopup
              message={"The status of Issue will be changed"}
              onClickFunc={setResolved}
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
            {issue.userEmail} | {issue.createdAt.split("T")[0]}
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
