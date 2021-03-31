import { useMediaPredicate } from "react-media-hook";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Navigation/Header";
import AllIssues from "../components/IssueDashboard/AllIssues";
import { filtersName } from "../components/Navigation/SidebarData";

function Issues({ profile }) {
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "Issues";
  const isIssue = true;

  const [issues, setIssues] = useState([]);
  useEffect(() => {
    axios
      .get("dashboard/GetAllIssue")
      .then((res) => {
        setIssues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const allIssuesProps = {
    notMobileView: notMobileView,
    profile: profile,
    isIssue: isIssue,
    page: page,
    issues: issues,
    filtersName: filtersName,
  };
  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: sidebar,
  };

  return (
    <>
      <Header
        profile={profile}
        {...sidebarToggles}
        isIssue={isIssue}
        page={page}
        filterNames={filtersName}
      />
      <AllIssues {...allIssuesProps} />
    </>
  );
}

export default Issues;
