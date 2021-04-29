import styled from "styled-components";
import { Link } from "react-router-dom";

// CSS for NavBar

/**
 * Styling for the Navigation bar on the top.
 */
export const NavHead = styled.header`
  background: #f2eee9;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  top: 0;
`;

/**
 * Styling for the Profile Button on NavBar.
 */
export const Profile = styled.button`
  position: absolute;
  right: 0;
  margin: 20px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  background: #d1cac0;
  border-radius: 50%;
  cursor: pointer;
`;

/**
 * Styling for the dropdown profile menu.
 */
export const ProfileDropdown = styled.nav`
  background: #f2eee9;
  width: 150px;
  height: 80px;
  justify-content: center;
  position: absolute;
  top: 60px;
  visibility: ${({ showProfile }) => (showProfile ? "visible" : "hidden")};
  right: 5px;
  transition: 350ms;
  z-index: 10;
`;

/**
 * Styling for the components rendered in Profile Dropdown.
 */
export const DropdownLabel = styled(Link)`
  background: #d1cac0;
  height: 40px;
  width: 150px;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  display: flex;
  text-decoration: none;
  color: #000000;
  font-size: 14px;

  &:hover {
    background: #3fada8;
    color: #fff;
    cursor: pointer;
  }
`;

// Sidebar CSS

/**
 * Hamburger icon to toggle the sidebar on smaller display.
 */
export const SidebarToggleIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 1.5rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 0;
`;

/**
 * Sidebar container
 */
export const SidebarNav = styled.nav`
  background: #3fada8;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

/**
 * Wrapper for all the sidebar components.
 */
export const SidebarWrap = styled.div`
  width: 100%;
`;

// CSS for components within Sidebar

/**
 * Component on the sidebar that holds logo and sidebar toggle.
 */
export const LogoCompartment = styled.div`
  color: #ffffff;
  justify-content: space-between;
  padding: 20px;
  padding-left: 10px;
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-size: 18px;
`;

/**
 * Sidebar component that holds the link to other pages.
 */
export const SidebarLink = styled(Link)`
  display: flex;
  color: #ffffff;
  background: ${({ isPage }) => (isPage ? "#646466" : " #3fada8")};
  justify-content: space-between;
  align-items: left;
  padding: 20px;
  list-style: none;
  height: 25px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background: #646466;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const SidebarNoLink = styled.span`
  display: flex;
  color: #ffffff;
  background: ${({ isPage }) => (isPage ? "#646466" : " #3fada8")};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 25px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background: #646466;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

/**
 * Text Labels that appear on sidebar.
 */
export const SidebarLabel = styled.span`
  margin-left: 20px;
`;

/**
 * Text Labels that appear inside Filter Label.
 */
export const FilterLabel = styled.span`
  margin-left: 20px;
`;

/**
 * Text Labels for individual filter options.
 */
export const FilterOptLabel = styled.span`
  background: #328f8a;
  height: 40px;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 16px;

  &:hover {
    background: #646466;
    cursor: pointer;
  }
`;
