import { useMediaPredicate } from "react-media-hook";
import styled from "styled-components";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import Header from "../components/Navigation/Header";
import { IssueContainer } from "../components/IssueDashboard/IssueDesigns";
import {
  H1,
  Label,
  Input,
  SubmitButton,
} from "../components/IssueDashboard/CreateIssueDesign";

import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/components/dropdown.min.css";

const roles = [
  { key: 1, value: "admin", text: "Admin" },
  { key: 2, value: "student", text: "Student" },
];
const filters = [
  { key: 1, value: "Batch", text: "Batch" },
  { key: 2, value: "Department", text: "Department" },
  { key: 3, value: "Programs", text: "Programs" },
  { key: 4, value: "Administration", text: "Administration" },
];

const StyledDropdown = styled(Dropdown)`
  &.ui.selection.dropdown {
    margin-left: 20px;
    .menu.visible {
      display: block;
    }
  }
`;

const Admin = () => {
  const { updateRole } = useContext(AuthContext);
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "Admin";
  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: sidebar,
  };

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSubmitAdmin = () => {
    if (filter !== "" && filterType !== "") {
      console.log(filter, filterType);
    }
    if (email !== "" && role !== "") {
      updateRole({ email: email, newRole: role });
      console.log(email, role);
    }
  };

  return (
    <div>
      <Header
        {...sidebarToggles}
        page={page}
        setFilterState={() => {}}
        selectedFilters={{}}
        applyFilter={() => {}}
      />
      <IssueContainer
        notMobileView={notMobileView}
        style={{
          background: "inherit",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <H1>Admin Privileges</H1>
        <fieldset style={{ marginRight: "5%", border: "none" }}>
          <Label for="AddFilter">Add Filters</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              value={filter}
              onChange={(evt) => setFilter(evt.target.value)}
              type="text"
              placeholder="filter"
              id="title"
            />
            <StyledDropdown
              placeholder="Filter type"
              search
              selection
              options={filters}
              onChange={(event, { value }) => setFilterType(value)}
            />
          </div>

          <Label for="MakeAdmin">Change Roles</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              type="text"
              placeholder="email ID"
              id="title"
            />
            <StyledDropdown
              placeholder="Change role"
              search
              selection
              options={roles}
              onChange={(event, { value }) => setRole(value)}
            />
          </div>

          <SubmitButton
            onClick={handleSubmitAdmin}
            type="submit"
            style={{ cursor: "pointer" }}
          >
            Submit
          </SubmitButton>
        </fieldset>
      </IssueContainer>
    </div>
  );
};

export default Admin;
