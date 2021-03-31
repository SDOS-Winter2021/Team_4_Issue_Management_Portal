import { useMediaPredicate } from "react-media-hook";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Navigation/Header";
import AllIssues from "../components/IssueDashboard/AllIssues";

function Announcements({ profile }) {
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "Announcements";
  const isIssue = false;

  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    axios
      .get("/announcement/GetAllAnnouncements")
      .then((res) => {
        console.log(res.data);
        setAnnouncements(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const allAnouncementsProps = {
    notMobileView: notMobileView,
    profile: profile,
    isIssue: isIssue,
    page: page,
    issues: announcements,
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
      />
      <AllIssues {...allAnouncementsProps} />
    </>
  );
}

export default Announcements;
