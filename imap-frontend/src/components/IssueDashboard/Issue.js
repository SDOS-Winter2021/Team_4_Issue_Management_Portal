import React, { useState } from "react";
import {
  IssueBox,
  IssueTitle,
  IssueAccessory,
  Label,
  LabelBox,
  filter_colors,
} from "./IssueDesigns";
import * as FaIcons from "react-icons/fa";
import IndividualIssue from "../../pages/IndividualIssue";

export function LikeComments({ icon, number }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {icon}
      <p style={{ fontSize: "12px", paddingLeft: "9px" }}>{number}</p>
    </div>
  );
}

function IssueAccessories({ comments, likes, date, isIssue }) {
  return (
    <>
      <IssueAccessory likeComments={true}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          {isIssue && (
            <LikeComments
              icon={<FaIcons.FaThumbsUp style={{ color: "gray" }} />}
              number={likes}
            />
          )}
          <LikeComments
            icon={<FaIcons.FaComments style={{ color: "gray" }} />}
            number={comments}
          />
        </div>
        <p style={{ fontSize: "8px", color: "gray" }}>{date}</p>
      </IssueAccessory>
    </>
  );
}

export function Labels({ labels }) {
  return (
    <LabelBox>
      {Object.keys(labels).map((key, index) => {
        return (
          <>
            {labels[key].map((tag) => {
              return <Label color={filter_colors[key]}>{tag}</Label>;
            })}
          </>
        );
      })}
    </LabelBox>
  );
}

const Issue = ({ issue, isIssue, profile }) => {
  const [popupIssue, setPopup] = useState(false);
  const handlePopIssue = () => setPopup(!popupIssue);
  return (
    <>
      <IssueBox>
        {isIssue && (
          <IssueAccessory style={{ flexDirection: "row" }}>
            {issue.Tags.Resolved ? (
              <FaIcons.FaCheckSquare style={{ color: "#6fad80" }} />
            ) : (
              <FaIcons.FaSpinner style={{ color: "#ab6a6a" }} />
            )}
          </IssueAccessory>
        )}
        <IssueTitle onClick={handlePopIssue}>
          <h3>{issue.IssueTitle}</h3>
          <Labels labels={issue.Filter} />
        </IssueTitle>
        <IssueAccessories
          comments={issue.Comments.userEmail.length}
          likes={isIssue ? issue.Likes.studEmail.length : 0}
          date={issue.createdAt.split("T")[0]}
          isIssue={isIssue}
        />
      </IssueBox>

      {popupIssue && (
        <IndividualIssue
          issue={issue}
          popupIssue={popupIssue}
          handlePopIssue={handlePopIssue}
          isIssue={isIssue}
        />
      )}
    </>
  );
};

export default Issue;
