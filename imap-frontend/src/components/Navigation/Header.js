import * as FaIcons from "react-icons/fa";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth-context";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import {
  NavHead,
  Profile,
  ProfileDropdown,
  DropdownLabel,
  SidebarToggleIcon,
} from "./NavigationDesigns";

const Header = ({
  notMobileView,
  showSidebar,
  sidebar,
  page,
  filterNames,
  setFilterState,
}) => {
  /**
   * Toggles the visibility of the dropdown menu that contains
   * the profile information.
   * Is fired when the profile icon is clicked.
   */
  const { userData, tryLocalLogin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalLogin();
  }, []);
  const [_showProfile, setShowProfile] = useState(false);
  const showProfile = () => setShowProfile(!_showProfile);
  return (
    <>
      <NavHead>
        <SidebarToggleIcon to="#">
          {<FaIcons.FaBars onClick={showSidebar} style={{ color: "#666" }} />}
        </SidebarToggleIcon>
        <Profile onClick={showProfile}>
          <FaIcons.FaUser />
        </Profile>
      </NavHead>
      <Sidebar
        notMobileView={notMobileView}
        showSidebar={showSidebar}
        sidebar={sidebar}
        page={page}
        filterNames={filterNames}
        setFilterState={setFilterState}
      />

      <ProfileDropdown showProfile={_showProfile}>
        <DropdownLabel>{userData.user ? userData.user.name : ""}</DropdownLabel>
        <DropdownLabel to="/">Logout</DropdownLabel>
      </ProfileDropdown>
    </>
  );
};

Header.propTypes = {
  /**
   * Boolean that state whether the current screen dimension
   * is a mobile phone resolution. It is set to `false` if it has
   * a smaller dimension than a given threshold.
   */
  notMobileView: PropTypes.bool,

  /**
   * Function that changes the state of `sidebar` state.
   */
  showSidebar: PropTypes.func,

  /**
   * Boolean that is set to true if sidebar should displayed.
   */
  sidebar: PropTypes.bool,

  /**
   * Name of the page that is currently being rendered.
   */
  page: PropTypes.string,

  setFilterState: PropTypes.func,
};

export default Header;
