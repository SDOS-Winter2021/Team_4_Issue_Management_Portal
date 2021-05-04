import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import Modal from "react-modal";
import * as FaIcons from "react-icons/fa";
import SimilarIssue from "../Notifications/SimilarIssue";
import {
  CreateButton,
  H1,
  Label,
  Input,
  TextArea,
  SubmitButton,
  LabelR,
} from "./CreateIssueDesign";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/components/dropdown.min.css";

const StyledDropdown = styled(Dropdown)`
  &.ui.selection.dropdown {
    .menu.visible {
      display: block;
    }
  }
`;

/**
 * Pop up form to create a new post
 * @component
 */
const CreateIssue = ({ page }) => {
  const {
    addIssueDb,
    userData,
    addAnnouncementDb,
    allFiltersData,
    tryLocalLogin,
  } = useContext(AuthContext);

  useEffect(async () => {
    tryLocalLogin();
  }, []);

  const isIssue = page === "Issues";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [batch, setBatch] = useState([]);
  const [department, setDepartment] = useState([]);
  const [administration, setAdministration] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [isPublic, setIsPublic] = useState(true);

  const [isPopup, setIsPopup] = useState(false);
  const [warningPopup, _setWarningPopup] = useState(false);
  const setWarningPopup = () => {
    if (title === "") {
      alert("Title is mandatory");
      return;
    } else if (description === "") {
      alert("Description is mandatory");
      return;
    }
    _setWarningPopup(!warningPopup);
  };

  var batchSuggestions = [];
  var departmentSuggestions = [];
  const administrationSuggestions = [];
  const programsSuggestions = [];

  var batchS = allFiltersData.Batch ? allFiltersData.Batch : [];
  var departmentS = allFiltersData.Department ? allFiltersData.Department : [];
  var administrationS = allFiltersData.Administration
    ? allFiltersData.Administration
    : [];
  var programsS = allFiltersData.Programs ? allFiltersData.Programs : [];
  var i;
  for (i = 0; i < batchS.length; i++) {
    batchSuggestions.push({ id: i, text: batchS[i], value: batchS[i] });
  }
  for (i = 0; i < departmentS.length; i++) {
    departmentSuggestions.push({
      id: i,
      text: departmentS[i],
      value: departmentS[i],
    });
  }
  for (i = 0; i < administrationS.length; i++) {
    administrationSuggestions.push({
      id: i,
      text: administrationS[i],
      value: administrationS[i],
    });
  }
  for (i = 0; i < programsS.length; i++) {
    programsSuggestions.push({
      id: i,
      text: programsS[i],
      value: programsS[i],
    });
  }

  const clearData = () => {
    setTitle("");
    setDescription("");
    setBatch([]);
    setDepartment([]);
    setAdministration([]);
    setPrograms([]);
    setIsPublic(true);
  };

  const handleSubmitIssue = async () => {
    if (!isIssue) {
      if (title === "") {
        alert("Title is mandatory");
        return;
      } else if (description === "") {
        alert("Description is mandatory");
        return;
      }
    }
    const title_ = title.trim();
    const description_ = description.trim();
    const batch_ = [];
    batch.forEach((element) => {
      batch_.push(element);
    });
    const department_ = [];
    department.forEach((element) => {
      department_.push(element);
    });
    const administration_ = [];
    administration.forEach((element) => administration_.push(element));
    const programs_ = [];
    programs.forEach((element) => programs_.push(element));
    const isPublic_ = isPublic;

    setIsPopup(false);
    if (page == "Issues") {
      await addIssueDb({
        studentEmailID: userData.user.email,
        title: title_,
        isPublic: isPublic_,
        description: description_,
        batch: batch_,
        department: department_,
        administration: administration_,
        programs: programs_,
      });
      clearData();
    } else {
      await addAnnouncementDb({
        studentEmailID: userData.user.email,
        title: title_,
        description: description_,
        batch: batch_,
        department: department_,
        administration: administration_,
        programs: programs_,
      });
      clearData();
    }
  };

  const customStyle = {
    content: {
      border: "none",
      maxWidth: "800px",
      margin: "10px auto",
      padding: "10px 20px 0px",
      background: "#f4f7f8",
      borderRadius: "8px",
    },
    overlay: { zIndex: "1000" },
  };

  let popup = null;
  if (isPopup) {
    popup = (
      <Modal style={customStyle} isOpen={isPopup} ariaHideApp={false}>
        <button
          style={{
            background: "#f4f7f8",
            position: "absolute",
            border: "none",
            top: "20px",
            right: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsPopup(false);
            clearData();
          }}
        >
          <FaIcons.FaTimes />
        </button>
        <H1> Create New {page} </H1>

        <fieldset style={{ marginRight: "5%", border: "none" }}>
          <LabelR for="Title">Title: </LabelR>
          <Input
            value={title}
            maxLength="128"
            onChange={(evt) => setTitle(evt.target.value)}
            type="text"
            id="title"
          />
          <LabelR for="Description">Description:</LabelR>
          <TextArea
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
            id="description"
          ></TextArea>

          {{ page }.page === "Issues" && (
            <>
              <br></br>
              <br></br>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="radio"
                      value="public"
                      name="isPublic"
                      onChange={() => setIsPublic(true)}
                    />{" "}
                    <Label
                      style={{ display: "inline-block", paddingRight: "10px" }}
                    >
                      {" "}
                      Public Issue
                    </Label>
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="private"
                      name="isPublic"
                      onChange={() => setIsPublic(false)}
                    />{" "}
                    <Label style={{ display: "inline-block" }}>
                      {" "}
                      Private Issue{" "}
                    </Label>
                  </td>
                </tr>
              </tbody>
              <br></br>
            </>
          )}

          <Label for="Batch">Batch:</Label>
          <StyledDropdown
            placeholder="Choose Batch"
            search
            selection
            multiple
            options={batchSuggestions}
            onChange={(event, { value }) => setBatch(value)}
          />
          <br></br>
          <br></br>
          <Label for="Department">Department:</Label>
          <StyledDropdown
            placeholder="Choose Department"
            search
            selection
            multiple
            options={departmentSuggestions}
            onChange={(event, { value }) => setDepartment(value)}
          />
          <br></br>
          <br></br>
          <Label for="Administration">Administration:</Label>
          <StyledDropdown
            placeholder="Choose Administration"
            search
            selection
            multiple
            options={administrationSuggestions}
            onChange={(event, { value }) => setAdministration(value)}
          />
          <br></br>
          <br></br>
          <Label for="Programs">Programs:</Label>
          <StyledDropdown
            placeholder="Choose Program"
            search
            selection
            multiple
            options={programsSuggestions}
            onChange={(event, { value }) => setPrograms(value)}
          />
          <br></br>
          <br></br>
          <SubmitButton
            onClick={isIssue ? setWarningPopup : handleSubmitIssue}
            type="submit"
            style={{ cursor: "pointer" }}
          >
            Submit
          </SubmitButton>
          <Label style={{ marginTop: "10px" }}>
            {page === "Issues" && (
              <i>Note: Private Issues are only visible to Admins.</i>
            )}
          </Label>
        </fieldset>
        {warningPopup && (
          <SimilarIssue
            title={title}
            description={description}
            onClickFunc={handleSubmitIssue}
            popup={warningPopup}
            handlePop={setWarningPopup}
          />
        )}
      </Modal>
    );
  }
  return (
    <div>
      <CreateButton
        onClick={() => {
          setIsPopup(true);
        }}
      >
        +
      </CreateButton>
      {popup}
    </div>
  );
};

CreateIssue.propTypes = {
  /**
   * name of the page {issue, announcement}
   */
  page: PropTypes.string.isRequired,
};

export default CreateIssue;
