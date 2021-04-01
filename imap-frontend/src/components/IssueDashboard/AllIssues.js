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
import FilterIssues from "../../logics/FilterIssues";

function AllIssues({ notMobileView, profile, page, issues, filtersName }) {
  const isIssue = page === "Issues";
  const showIssues = FilterIssues(filtersName, issues);
  console.log(showIssues);
  return (
    <>
      <IssueContainer notMobileView={notMobileView}>
        <TitleSearchContainer>
          <TitleContainer>{page}</TitleContainer>
          <SearchContainer>
            <SearchBar page={page} issues={issues} />
          </SearchContainer>
        </TitleSearchContainer>
        <hr
          style={{ width: "100%", marginTop: "10px", border: "3px solid #eee" }}
        ></hr>

        {issues.map((issue, index) => {
          if (showIssues[index]) {
            return (
              <Issue
                issue={issue}
                key={index}
                isIssue={isIssue}
                profile={profile}
                notMobileView={notMobileView}
              />
            );
          }
        })}
      </IssueContainer>
      <CreateIssue page={page}></CreateIssue>
    </>
  );
}

export default AllIssues;
