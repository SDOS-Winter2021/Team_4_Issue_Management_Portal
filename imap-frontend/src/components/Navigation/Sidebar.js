import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import logo from "../../iiitd-logo.png";
import {
  SidebarToggleIcon,
  SidebarNav,
  SidebarWrap,
  LogoCompartment,
} from "./NavigationDesigns";
import PropTypes from "prop-types";

/**
 * returns the entire sidebar components.
 */
function Sidebar({ notMobileView, showSidebar, sidebar, page, filterNames }) {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={notMobileView || sidebar}>
          <SidebarWrap>
            <LogoCompartment>
              <SidebarToggleIcon to="#">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ width: "80px", height: "80px" }}
                  />
                </Link>
                {!notMobileView && (
                  <AiIcons.AiOutlineClose
                    onClick={showSidebar}
                    style={{ marginLeft: "100px" }}
                  />
                )}
              </SidebarToggleIcon>
            </LogoCompartment>
            <LogoCompartment />

            <div style={{ overflowY: "auto", height: "calc(100vh - 120px)" }}>
              {SidebarData.map((item, index) => {
                return (
                  <SubMenu
                    item={item}
                    key={index}
                    page={page}
                    filtersName={filterNames}
                  />
                );
              })}
            </div>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}

Sidebar.propTypes = {
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
};

export default Sidebar;
