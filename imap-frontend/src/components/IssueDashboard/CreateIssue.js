import React, { useEffect, useState } from "react";
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

const CreateIssue = ({page}) => {
  const [branch, setBranch] = useState([]);
  const [batch, setBatch] = useState([]);
  const [dept, setDept] = useState([]);
  const [programme, setProgramme] = useState([]);
  const [isPopup, setIsPopup] = useState(false);

  const branchSuggestions = [
    { id: 1, name: "CSE" },
    { id: 2, name: "CSAM" },
    { id: 3, name: "CSD" },
    { id: 4, name: "ECE" },
  ];
  const batchSuggestions = [
    { id: 1, name: "2018" },
    { id: 2, name: "2019" },
    { id: 3, name: "2020" },
    { id: 4, name: "2021" },
  ];
  const deptSuggestions = [
    { id: 1, name: "Academic" },
    { id: 2, name: "Financial" },
  ];
  const programmeSuggestions = [
    { id: 1, name: "B-Tech" },
    { id: 2, name: "M-Tech" },
    { id: 2, name: "PhD" },
  ];

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
        <H1> Create New  {page} </H1>

        <fieldset style={{ marginRight: "5%", border: "none" }}>
          <Label for="Title">Title:</Label>
          <Input type="text" id="title" />

          <Label for="Description">Description:</Label>
          <TextArea id="description"></TextArea>

          <Label for="Branch">Branch:</Label>
          <Tags suggestions={branchSuggestions} update={setBranch}></Tags>
          <br></br>

          <Label for="Batch">Batch:</Label>
          <Tags suggestions={batchSuggestions} update={setBatch}></Tags>
          <br></br>

          <Label for="Dept">Dept:</Label>
          <Tags suggestions={deptSuggestions} update={setDept}></Tags>
          <br></br>

          <Label for="Programme">Programme:</Label>
          <Tags suggestions={programmeSuggestions} update={setProgramme}></Tags>
          <br></br>

          <SubmitButton type="submit">Submit</SubmitButton>
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
