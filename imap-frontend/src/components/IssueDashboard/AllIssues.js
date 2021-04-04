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
import ErrorNotif from "./ErrorNotif";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";

function AllIssues({ notMobileView, page, issues, filtersName }) {
  const isIssue = page === "Issues";
  const showIssues = FilterIssues(filtersName, issues);
  const { userData } = useContext(AuthContext);
  const isAdmin = userData.user.role !== "student";

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
                notMobileView={notMobileView}
              />
            );
          }
        })}
      </IssueContainer>
      {isIssue && !isAdmin && <CreateIssue page={page}></CreateIssue>}
      {!isIssue && isAdmin && <CreateIssue page={page}></CreateIssue>}
      {/* <ErrorNotif /> */}
    </>
  );
}

export default AllIssues;
