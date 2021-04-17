import { useMediaPredicate } from "react-media-hook";
import React, { useState } from "react";
import { filterNames } from "../components/Navigation/SidebarData";
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
  { key: 1, value: "student", text: "Student" },
];
const filters = [
  { key: 1, value: "batch", text: "Batch" },
  { key: 1, value: "department", text: "Department" },
];

const Admin = () => {
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
  const [filter, setFilter] = useState("");
  const handleSubmitAdmin = () => {
    const email_ = email;
    const filter_ = filter;
    console.log(email_, "maillll");
    console.log(filter_, "filter");
  };
  return (
    <div>
      <Header
        {...sidebarToggles}
        page={page}
        filterNames={filterNames}
        setFilterState={() => {}}
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
          <Label for="MakeAdmin">Change Roles</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              type="text"
              placeholder="email ID"
              id="title"
            />
            <Dropdown
              placeholder="Change to"
              search
              selection
              options={roles}
              style={{ marginLeft: "20px", height: "30px" }}
            />
          </div>

          <Label for="AddFilter">Add Filters</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              value={filter}
              onChange={(evt) => setFilter(evt.target.value)}
              type="text"
              placeholder="filter"
              id="title"
            />
            <Dropdown
              placeholder="Filter type"
              search
              selection
              options={filter}
              style={{ marginLeft: "20px", height: "30px" }}
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
