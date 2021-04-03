import { useMediaPredicate } from "react-media-hook";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth-context";
import Header from "../components/Navigation/Header";
import AllIssues from "../components/IssueDashboard/AllIssues";
import { filtersName } from "../components/Navigation/SidebarData";

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
  const [issues, setIssues] = useState([]);

  const allIssuesProps = {
    notMobileView: notMobileView,
    isIssue: isIssue,
    page: page,
    issues: allIssuesData,
    filtersName: filtersName,
  };
  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: sidebar,
  };
  console.log(setFilterState, "000111");

  return (
    <>
      <Header
        {...sidebarToggles}
        isIssue={isIssue}
        page={page}
        filterNames={filtersName}
        setFilterState={setFilterState}
      />
      <AllIssues {...allIssuesProps} />
    </>
  );
}

export default Issues;
