import { useMediaPredicate } from "react-media-hook";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import Header from "../components/Navigation/Header";
import AllIssues from "../components/IssueDashboard/AllIssues";

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

  const [selectedFilters, _applyFilter] = useState({
    Batch: [],
    Department: [],
    Programs: [],
    Administration: [],
  });
  const applyFilter = (type, filter) => {
    const filList = selectedFilters[type];
    if (filList.includes(filter)) filList.splice(filList.indexOf(filter), 1);
    else filList.push(filter);
  };

  const allIssuesProps = {
    notMobileView: notMobileView,
    isIssue: isIssue,
    page: page,
    issues: allIssuesData,
    filtersName: selectedFilters,
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
        setFilterState={setFilterState}
        selectedFilters={selectedFilters}
        applyFilter={applyFilter}
      />
      <AllIssues {...allIssuesProps} />
    </>
  );
}

export default Issues;
