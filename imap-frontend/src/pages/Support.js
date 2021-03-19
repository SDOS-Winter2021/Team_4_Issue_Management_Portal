import { useMediaPredicate } from "react-media-hook";
import React, { useState } from "react";
import Header from "../components/Navigation/Header";

function Support(props) {
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: sidebar,
  };
  const isIssue = props.page === "Issues";

  return (
    <>
      <Header {...props} {...sidebarToggles} isIssue={isIssue} />
    </>
  );
}

export default Support;
