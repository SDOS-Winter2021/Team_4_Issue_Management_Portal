import { useMediaPredicate } from "react-media-hook";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { SidebarToggleIcon } from "../components/Navigation/NavigationDesigns";
import * as FaIcons from "react-icons/fa";
import {
  IssueContainer,
  MyPostButtons,
} from "../components/IssueDashboard/IssueDesigns";
import Sidebar from "../components/Navigation/Sidebar";

const style = {
  height: "100vh",
  background: "#dcedf7",
};

const textStyle = { fontSize: "20px", margin: "0px 30px" };
const labelHolderStyle = {
  display: "flex",
  flexDirection: "row-reverse",
  height: "60px",
  width: "100%",
};

const welcomeMsg = {
  admin: "You are logged in as an Admin",
  student:
    "You are logged in as a Student. Please contact Admin BTech for admin privileges.",
};

const ProfilePage = () => {
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "Profile";

  const { userData, tryLocalLogin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalLogin();
  }, []);
  const username = userData.user ? userData.user.name.split(" ")[0] : "";
  const isAdmin = userData.user ? userData.user.role === "admin" : false;

  return (
    <div style={style}>
      <SidebarToggleIcon to="#">
        {<FaIcons.FaBars onClick={showSidebar} style={{ color: "#666" }} />}
      </SidebarToggleIcon>
      <Sidebar
        notMobileView={notMobileView}
        showSidebar={showSidebar}
        sidebar={notMobileView || !sidebar}
        page={page}
        setFilterState={() => {}}
        selectedFilters={{}}
        applyFilter={() => {}}
      />
      <IssueContainer
        notMobileView={notMobileView}
        style={{ background: "inherit", flexDirection: "column" }}
      >
        <div style={labelHolderStyle}>
          <MyPostButtons to="/myissues">
            <p>My Issues</p>
          </MyPostButtons>
          <MyPostButtons to="/myannouncements">
            <p>My Announcements</p>
          </MyPostButtons>
          {isAdmin && (
            <MyPostButtons to="/adminroles">
              <p>Admin</p>
            </MyPostButtons>
          )}
        </div>
        <div></div>
        <div style={{ marginTop: "50px" }}>
          <h1 style={textStyle}>Welcome Back, {username} </h1>
        </div>
        <p style={{ position: "absolute", bottom: "2px", marginLeft: "10px" }}>
          {userData.user ? welcomeMsg[userData.user.role] : ""}{" "}
        </p>
      </IssueContainer>
    </div>
  );
};

export default ProfilePage;
