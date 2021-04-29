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
import { ArrayAND } from "../../logics/PostCategorization";
import PrivateFilter from "../../logics/PrivatePostFilter";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth-context";
import * as FcIcons from "react-icons/fc"

function AllIssues({ notMobileView, page, issues, filtersName }) {
  const { userData, tryLocalLogin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalLogin();
  }, []);

  const isAdmin = userData.user ? userData.user.role !== "student" : false;
  const email = userData.user ? userData.user.email : "";
  const isIssue = page === "Issues";

  var showIssues = FilterIssues(filtersName, issues);
  var privateFilter = null;
  if (isIssue) {
    privateFilter = PrivateFilter(issues, email, isAdmin);
    showIssues = ArrayAND(showIssues, privateFilter);
  }
  return (
    <>
      <IssueContainer notMobileView={notMobileView}>
        <TitleSearchContainer>
          <TitleContainer>{page}</TitleContainer>
          <SearchContainer>
            <SearchBar
              page={page}
              issues={issues}
              privateFilter={privateFilter}
            />
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
