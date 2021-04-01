import * as FaIcons from "react-icons/fa";
import React, { useState } from "react";
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
  profile,
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
  const [_showProfile, setShowProfile] = useState(false);
  const showProfile = () => setShowProfile(!_showProfile);
  console.log(setFilterState, "000");

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
        <DropdownLabel>{profile.name}</DropdownLabel>
        <DropdownLabel to="/">Logout</DropdownLabel>
      </ProfileDropdown>
    </>
  );
};

Header.propTypes = {
  /**
   * Object containing the details about the person who
   * is logged in.
   */
  profile: PropTypes.object,

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
