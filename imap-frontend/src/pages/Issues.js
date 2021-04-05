import { useMediaPredicate } from "react-media-hook";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth-context";
import Header from "../components/Navigation/Header";
import AllIssues from "../components/IssueDashboard/AllIssues";
import { filterNames } from "../components/Navigation/SidebarData";

function Issues() {
  const { tryLocalLogin, allIssuesData } = useContext(AuthContext);
  useEffect(async () => {
    tryLocalLogin();
  }, []);
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "Issues";
  const isIssue = true;

  const [filterState, _setFilterState] = useState(false);
  const setFilterState = () => _setFilterState(!filterState);

  const allIssuesProps = {
    notMobileView: notMobileView,
    isIssue: isIssue,
    page: page,
    issues: allIssuesData,
    filtersName: filterNames,
  };
  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: sidebar,
  };

  return (
    <>
      <Header
        {...sidebarToggles}
        page={page}
        filterNames={filterNames}
        setFilterState={setFilterState}
      />
      <AllIssues {...allIssuesProps} />
    </>
  );
}

export default Issues;
