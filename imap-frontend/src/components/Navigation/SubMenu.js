import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import {
  SidebarLink,
  SidebarNoLink,
  SidebarLabel,
  FilterLabel,
  FilterOptLabel,
} from "./NavigationDesigns";
import PropTypes from "prop-types";
import * as RiIcons from "react-icons/ri";
import { getFilterNames } from "./SidebarData";

/**
 * Create checkbox component for the given item. Helper function for SubMenu.
 */
function CheckboxItem({
  item,
  setFilterState,
  selectedFilter,
  filterTitle,
  applyFilter,
}) {
  /**
   * State to toggle the checkbox options.
   */
  const [checked, setCheckBox] = useState(
    selectedFilter[filterTitle].includes(item.title)
  );
  const checkboxHandler = () => {
    setCheckBox(!checked);
    applyFilter(filterTitle, item.title);
    setFilterState();
  };
  return (
    <>
      <input
        type="checkbox"
        name={item.title}
        onClick={checkboxHandler}
        checked={checked}
      />
      <SidebarLabel>{item.title}</SidebarLabel>
    </>
  );
}

/**
 * returns the Filter options in the dropdown menu of
 * `Filters`. Helper function for SubMenu.
 */
function Filter({ filter, setFilterState, selectedFilters, applyFilter }) {
  /**
   * State to toggle the dropdown options of Filter components.
   */
  const [_usefilter, _setSubnav] = useState(false);
  const _showFilter = () => _setSubnav(!_usefilter);
  return (
    <>
      <SidebarNoLink onClick={_showFilter}>
        <div>
          <FilterLabel>{filter.title}</FilterLabel>
        </div>
        <div>
          {filter.filterDetails && _usefilter ? (
            <RiIcons.RiArrowUpSFill />
          ) : filter.filterDetails ? (
            <RiIcons.RiArrowDownSFill />
          ) : null}
        </div>
      </SidebarNoLink>

      {_usefilter &&
        filter.filterDetails.map((item, index) => {
          return (
            <FilterOptLabel>
              <CheckboxItem
                item={item}
                setFilterState={setFilterState}
                selectedFilter={selectedFilters}
                filterTitle={filter.title}
                applyFilter={applyFilter}
              />
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
function SubMenu({ item, page, setFilterState, selectedFilters, applyFilter }) {
  /**
   * State to toggle the dropdown options of submenu components.
   */
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  /**
   * Checks if the component being returned corresponds to the page
   * that is currently being displayed.
   */
  const isFilter = item.title === "Filters";
  const isPage = item.title === page;
  const isProfile = page === "Profile";
  const isSupport = page === "Support";
  const isAdmin = page === "Admin";
  const isPosts =
    page.toLowerCase().includes("issue") ||
    page.toLowerCase().includes("announcement");

  const { allFiltersData, tryLocalLogin } = useContext(AuthContext);

  useEffect(async () => {
    tryLocalLogin();
  }, []);

  const filterNames = getFilterNames(allFiltersData ? allFiltersData : {});

  return (
    <>
      {
        <SidebarLink
          to={item.path}
          onClick={isFilter ? showSubnav : () => {}}
          isPage={isPage}
          style={{
            display:
              (isSupport || isProfile || isAdmin) && isFilter ? "none" : "flex",
          }}
        >
          <div style={{ display: "flex" }}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {isFilter && subnav
              ? item.iconOpened
              : filterNames
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
      }

      {subnav &&
        isFilter &&
        isPosts &&
        filterNames.map((filter, index) => {
          return (
            <Filter
              filter={filter}
              key={index}
              setFilterState={setFilterState}
              selectedFilters={selectedFilters}
              applyFilter={applyFilter}
            />
          );
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
};

export default SubMenu;
