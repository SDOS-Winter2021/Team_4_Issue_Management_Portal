import React, { useState } from 'react';
import Checkbox from 'react-checkbox-component';
import { SidebarLink, SidebarLabel, FilterLabel, FilterOptLabel } from './NavigationDesigns'
import PropTypes from 'prop-types'

/**
 * Create checkbox component for the given item. Helper function for SubMenu.
 */
function CheckboxItem({item}){
  /**
   * State to toggle the checkbox options.
   */
  const [checked, setCheckBox] = useState(item.isChecked);
  const checkboxHandler = (newVal) => {setCheckBox(newVal); item.isChecked = newVal;}
  return (
    <>
      <Checkbox isChecked={checked} onChange={checkboxHandler} color='gray'/>
      <SidebarLabel>{item.title}</SidebarLabel>
    </>
  )
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
        <SidebarLink to={filter.path} onClick={filter.subNav && _showFilter}>
          <div>
            <FilterLabel>{filter.title}</FilterLabel>
          </div>
          <div>
            {filter.subNav && _setfilter
              ? filter.iconOpened
              : filter.subNav
              ? filter.iconClosed
              : null}
          </div>
        </SidebarLink>

        {_setfilter &&
          filter.subNav.map((item, index) => {
            return (
              <FilterOptLabel> 
                <CheckboxItem item={item}/>
              </FilterOptLabel>
            );
          })}
      </>
  )
  
}

/**
 * Returns the individual components on the sidebar,
 * with their dropdown components, if required.
 */
function SubMenu({ item, page }){
  /**
   * State to toggle the dropdown options of submenu components.
   */
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  /**
   * Checks if the component being returned corresponds to the page
   * that is currently being displayed.
   */
  const isPage = (item.title === page);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.doublesubNav && showSubnav} isPage={isPage}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.doublesubNav && subnav
            ? item.iconOpened
            : item.doublesubNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
       
      {subnav &&
        item.doublesubNav.map((filter, index) => {          
        return <Filter filter={filter} key={index} />;
      })}
    </>
  );
};

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
}

export default SubMenu;
