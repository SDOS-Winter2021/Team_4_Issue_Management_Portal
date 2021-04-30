import { useMediaPredicate } from "react-media-hook";
import styled from "styled-components";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import Header from "../components/Navigation/Header";
import { IssueContainer } from "../components/IssueDashboard/IssueDesigns";
import NotifPopup from "../components//Notifications/NotifPopup";
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
    margin-left: 10px;
    .menu.visible {
      display: block;
    }
  }
`;

const Admin = () => {
  const { updateRole, addFilter } = useContext(AuthContext);
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "Admin";
  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: notMobileView || !sidebar,
  };

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("");

  const [updateWarn, _setUpdateWarn] = useState(false);
  const setUpdateWarn = () => _setUpdateWarn(!updateWarn);

  const handleSubmitAdmin = () => {
    if (filter !== "" && filterType !== "") {
      addFilter({ types: filter, name: filterType });
      console.log(filter, filterType);
    }
    if (email !== "" && role !== "") {
      updateRole({ email: email, newRole: role });

      console.log(email, role);
    }
    setFilter("");
    setEmail("");
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
          height: "800px",
        }}
      >
        <fieldset style={{ border: "none" }}>
          <H1>Admin Privileges</H1>
          <br />
          <Label for="AddFilter">Add Filters</Label>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: !notMobileView ? "column" : "row",
            }}
          >
            <Input
              value={filter}
              onChange={(evt) => setFilter(evt.target.value)}
              type="text"
              placeholder="filter"
              id="title"
              style={{ marginLeft: "10px", width: "300px" }}
            />
            <StyledDropdown
              placeholder="Filter type"
              search
              selection
              options={filters}
              onChange={(event, { value }) => setFilterType(value)}
            />
          </div>
          <br />
          <Label for="MakeAdmin">Change Roles</Label>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: !notMobileView ? "column" : "row",
            }}
          >
            <Input
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              type="text"
              placeholder="email ID"
              id="title"
              style={{ marginLeft: "10px", width: "300px" }}
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
            onClick={setUpdateWarn}
            type="submit"
            style={{ cursor: "pointer" }}
          >
            Submit
          </SubmitButton>
        </fieldset>
        {updateWarn && (
          <NotifPopup
            message={"Changes will be made."}
            onClickFunc={handleSubmitAdmin}
            popup={updateWarn}
            handlePop={setUpdateWarn}
          />
        )}
      </IssueContainer>
    </div>
  );
};

export default Admin;
