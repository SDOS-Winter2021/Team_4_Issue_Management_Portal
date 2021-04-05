import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import Modal from "react-modal";
import Tags from "./Tags";
import * as FaIcons from "react-icons/fa";
import {
  CreateButton,
  H1,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from "./CreateIssueDesign";

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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [batch, setBatch] = useState([]);
  const [department, setDepartment] = useState([]);
  const [administration, setAdministration] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const [branch, setBranch] = useState([]);

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
    batchSuggestions.push({ id: i, name: batchS[i] });
  }
  for (i = 0; i < departmentS.length; i++) {
    departmentSuggestions.push({ id: i, name: departmentS[i] });
  }
  for (i = 0; i < administrationS.length; i++) {
    administrationSuggestions.push({ id: i, name: administrationS[i] });
  }
  for (i = 0; i < programsS.length; i++) {
    programsSuggestions.push({ id: i, name: programsS[i] });
  }

  const handleSubmitIssue = async () => {
    const title_ = title;
    const description_ = description;
    const batch_ = [];
    batch.forEach((element) => batch_.push(element.name));
    const department_ = [];
    department.forEach((element) => department_.push(element.name));
    const administration_ = [];
    administration.forEach((element) => administration_.push(element.name));
    const programs_ = [];
    programs.forEach((element) => programs_.push(element.name));
    setIsPopup(false);
    if (page == "Issues") {
      await addIssueDb({
        studentEmailID: userData.user.email,
        title: title_,
        description: description_,
        batch: batch_,
        department: department_,
        administration: administration_,
        programs: programs_,
      });
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
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={() => setIsPopup(false)}
        >
          <FaIcons.FaTimes />
        </button>
        <H1> Create New {page} </H1>

        <fieldset style={{ marginRight: "5%", border: "none" }}>
          <Label for="Title">Title:</Label>
          <Input
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            type="text"
            id="title"
          />

          <Label for="Description">Description:</Label>
          <TextArea
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
            id="description"
          ></TextArea>

          <Label for="Batch">Batch:</Label>
          <Tags suggestions={batchSuggestions} update={setBatch}></Tags>
          <br></br>

          <Label for="Department">Department:</Label>
          <Tags
            suggestions={departmentSuggestions}
            update={setDepartment}
          ></Tags>
          <br></br>

          <Label for="Administration">Administration:</Label>
          <Tags
            suggestions={administrationSuggestions}
            update={setAdministration}
          ></Tags>
          <br></br>

          <Label for="Programs">Programs:</Label>
          <Tags suggestions={programsSuggestions} update={setPrograms}></Tags>
          <br></br>

          <SubmitButton
            onClick={handleSubmitIssue}
            type="submit"
            style={{ cursor: "pointer" }}
          >
            Submit
          </SubmitButton>
        </fieldset>
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

export default CreateIssue;
