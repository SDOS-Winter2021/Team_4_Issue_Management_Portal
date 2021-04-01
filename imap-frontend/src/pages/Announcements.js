import { useMediaPredicate } from "react-media-hook";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth-context";
import Header from "../components/Navigation/Header";
import AllIssues from "../components/IssueDashboard/AllIssues";
import { filtersName } from "../components/Navigation/SidebarData";

function Announcements({ profile }) {
  const { tryLocalLogin, allAnnouncementsData } = useContext(AuthContext);
  useEffect(async () => {
    tryLocalLogin();
  }, []);
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "Announcements";
  const isIssue = false;

  const [filterState, _setFilterState] = useState(false);
  const setFilterState = () => _setFilterState(!filterState);

  const [announcements, setAnnouncements] = useState([]);

  const allAnouncementsProps = {
    notMobileView: notMobileView,
    profile: profile,
    isIssue: isIssue,
    page: page,
    issues: allAnnouncementsData,
    filtersName: filtersName,
  };
  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: sidebar,
  };

  console.log(announcements);
  return (
    <>
      <Header
        profile={profile}
        {...sidebarToggles}
        isIssue={isIssue}
        page={page}
        filterNames={filtersName}
        setFilterState={setFilterState}
      />
      <AllIssues {...allAnouncementsProps} />
    </>
  );
}

export default Announcements;
