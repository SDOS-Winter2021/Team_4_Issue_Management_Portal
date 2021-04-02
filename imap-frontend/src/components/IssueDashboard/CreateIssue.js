import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import Modal from "react-modal";
import Tags from "./Tags";
import {
  CreateButton,
  H1,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from "./CreateIssueDesign";

const CreateIssue = ({ page }) => {
  const { addIssueDb, userData } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [batch, setBatch] = useState([]);
  const [department, setDepartment] = useState([]);
  const [administration, setAdministration] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const [branch, setBranch] = useState([]);
  const batchSuggestions = [
    { id: 1, name: "2018" },
    { id: 2, name: "2019" },
    { id: 3, name: "2020" },
    { id: 4, name: "2021" },
  ];
  const departmentSuggestions = [
    { id: 1, name: "CSE" },
    { id: 2, name: "CSAM" },
    { id: 3, name: "CSD" },
    { id: 4, name: "ECE" },
  ];
  const administrationSuggestions = [
    { id: 1, name: "Academic" },
    { id: 2, name: "Financial" },
  ];
  const programsSuggestions = [
    { id: 1, name: "B-Tech" },
    { id: 2, name: "M-Tech" },
    { id: 2, name: "PhD" },
  ];

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

    await addIssueDb({
      studentEmailID: userData.user.email,
      title: title_,
      description: description_,
      batch: batch_,
      department: department_,
      administration: administration_,
      programs: programs_,
    });
    setIsPopup(false);
  };

  const customStyle = {
    content: {
      border: "none",
      maxWidth: "50%",
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
          }}
          onClick={() => setIsPopup(false)}
        >
          X
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

          <SubmitButton onClick={handleSubmitIssue} type="submit">
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
