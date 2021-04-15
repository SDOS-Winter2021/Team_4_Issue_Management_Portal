import Modal from "react-modal";
import * as FaIcons from "react-icons/fa";
import React, { useState, useContext } from "react";
import { SubmitButton } from "../IssueDashboard/CreateIssueDesign";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

const customStyle = {
  content: {
    border: "none",
    maxWidth: "300px",
    maxHeight: "300px",
    margin: "10px auto",
    padding: "10px 20px 0px",
    borderRadius: "8px",
  },
  overlay: { zIndex: "1001", backgroundColor: "rgba(52, 52, 52, 0.8)" },
};

function NotifPopup({ message, onClickFunc, popup, handlePop }) {
  const proceedFunc = () => {
    onClickFunc();
    handlePop();
  };
  return (
    <>
      <Modal isOpen={popup} style={customStyle}>
        <button
          onClick={handlePop}
          style={{
            position: "absolute",
            border: "none",
            top: "20px",
            right: "10px",
            cursor: "pointer",
            padding: "3px",
          }}
        >
          <FaIcons.FaTimes />
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px 5px",
          }}
        >
          <h3>{message}</h3>
          <h4>Are you sure you want to proceed?</h4>
          <SubmitButton
            onClick={proceedFunc}
            type="submit"
            style={{ cursor: "pointer" }}
          >
            Proceed
          </SubmitButton>
        </div>
      </Modal>
    </>
  );
}

export default NotifPopup;
