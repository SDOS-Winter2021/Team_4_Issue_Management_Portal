import React, { useState } from "react";
import Checkbox from "react-checkbox-component";
import {
  SidebarLink,
  SidebarNoLink,
  SidebarLabel,
  FilterLabel,
  FilterOptLabel,
} from "./NavigationDesigns";
import PropTypes from "prop-types";
import * as RiIcons from "react-icons/ri";

/**
 * Create checkbox component for the given item. Helper function for SubMenu.
 */
function CheckboxItem({ item }) {
  /**
   * State to toggle the checkbox options.
   */
  const [checked, setCheckBox] = useState(item.isChecked);
  const checkboxHandler = (newVal) => {
    setCheckBox(newVal);
    item.isChecked = newVal;
  };
  return (
    <>
      <Checkbox isChecked={checked} onChange={checkboxHandler} color="gray" />
      <SidebarLabel>{item.title}</SidebarLabel>
    </>
  );
}

/**
 * returns the Filter options in the dropdown menu of
 * `Filters`. Helper function for SubMenu.
 */
function Filter({ filter }) {
  /**
   * State to toggle the dropdown options of Filter components.
   */
  const [_setfilter, _setSubnav] = useState(false);
  const _showFilter = () => _setSubnav(!_setfilter);
  return (
    <>
      <SidebarNoLink onClick={_showFilter}>
        <div>
          <FilterLabel>{filter.title}</FilterLabel>
        </div>
        <div>
          {filter.filterDetails && _setfilter ? (
            <RiIcons.RiArrowUpSFill />
          ) : filter.filterDetails ? (
            <RiIcons.RiArrowDownSFill />
          ) : null}
        </div>
      </SidebarNoLink>

      {_setfilter &&
        filter.filterDetails.map((item, index) => {
          return (
            <FilterOptLabel>
              <CheckboxItem item={item} />
            </FilterOptLabel>
          );
        })}
    </>
  );
}

/**
 * Returns the individual components on the sidebar,
 * with their dropdown components, if required.
 */
function SubMenu({ item, page, filtersName }) {
  /**
   * State to toggle the dropdown options of submenu components.
   */
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  /**
   * Checks if the component being returned corresponds to the page
   * that is currently being displayed.
   */
  const isPage = item.title === page;
  const isFilter = item.title === "Filters";

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={isFilter ? showSubnav : () => {}}
        isPage={isPage}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {isFilter && subnav
            ? item.iconOpened
            : filtersName
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>

      {subnav &&
        isFilter &&
        filtersName.map((filter, index) => {
          return <Filter filter={filter} key={index} />;
        })}
    </>
  );
}

SubMenu.propTypes = {
  /**
   * Object containing the information for the components
   * to be displayed in the sidebar. Taken from SidebarData.js
   */
  item: PropTypes.object,

  /**
   * Name of the page that is currently being rendered.
   */
  page: PropTypes.string,

  /**
   * Object containing the information for the filters
   * to be displayed in the sidebar.
   */
  filtersName: PropTypes.array,
};

export default SubMenu;
