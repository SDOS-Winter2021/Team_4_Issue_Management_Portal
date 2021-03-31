import React from "react";
import {
  IssueContainer,
  TitleSearchContainer,
  TitleContainer,
  SearchContainer,
} from "./IssueDesigns";
import Issue from "./Issue";
import SearchBar from "./SearchBar";
import CreateIssue from "./CreateIssue";

function AllIssues({ notMobileView, profile, page, issues }) {
  const isIssue = page === "Issues";

  return (
    <>
      <IssueContainer notMobileView={notMobileView}>
        <TitleSearchContainer>
          <TitleContainer>{page}</TitleContainer>
          <SearchContainer>
            <SearchBar page={page} />
          </SearchContainer>
        </TitleSearchContainer>
        <hr
          style={{ width: "100%", marginTop: "10px", border: "3px solid #eee" }}
        ></hr>

        {issues.map((issue, index) => {
          return (
            <Issue
              issue={issue}
              key={index}
              isIssue={isIssue}
              profile={profile}
              notMobileView={notMobileView}
            />
          );
        })}
      </IssueContainer>
      <CreateIssue></CreateIssue>
    </>
  );
}

export default AllIssues;
