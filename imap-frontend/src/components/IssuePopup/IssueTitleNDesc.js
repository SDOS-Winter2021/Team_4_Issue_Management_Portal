import {
  IssueContainer,
  IssueStatusLabel,
} from "../IssueDashboard/IssueDesigns";
import * as FaIcons from "react-icons/fa";
import { Labels } from "../IssueDashboard/Issue";

function IssueTitleNDesc({ issue, isIssue, setResolved, resolved }) {
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
