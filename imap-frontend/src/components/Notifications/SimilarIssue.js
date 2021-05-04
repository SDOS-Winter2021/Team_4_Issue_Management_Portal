import Modal from "react-modal";
import * as FaIcons from "react-icons/fa";
import React, { useState, useContext, useEffect } from "react";
import { SubmitButton } from "../IssueDashboard/CreateIssueDesign";
import CategorizedIssues from "../IssueDashboard/CategorizedIssues";
import { AuthContext } from "../../context/auth-context";
import { GetTopSimilar } from "../../logics/SimilarIssues";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

const customStyle = {
  content: {
    border: "none",
    maxWidth: "800px",
    maxHeight: "700px",
    margin: "auto",
    padding: "10px 20px 0px",
    borderRadius: "8px",
    textAlign: "center",
  },
  overlay: { zIndex: "1001", backgroundColor: "rgba(52, 52, 52, 0.8)" },
};

function SimilarIssue({ title, description, onClickFunc, popup, handlePop }) {
  const proceedFunc = () => {
    onClickFunc();
    handlePop();
  };
  const { tryLocalLogin, allIssuesData } = useContext(AuthContext);
  useEffect(async () => {
    tryLocalLogin();
  }, []);

  const [consentSigned, toggleConsent] = useState(false);

  const similarIssues = GetTopSimilar(
    allIssuesData ? allIssuesData : [],
    title,
    description,
    3
  );
  const showIssues = new Array(similarIssues.length).fill(true);

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
            overflow: "auto",
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
          <h3>
            We might have found some Issues that are similar to the one you
            entered.
          </h3>
          <CategorizedIssues
            issues={similarIssues}
            showIssues={showIssues}
            isIssue={true}
            notMobileView={true}
            style={{ maxHeight: "40vh" }}
          />
          <p style={{ textAlign: "left" }}>
            Knowingly creating a duplicate issue is against the policy of this
            portal. Please visit the support page for more details.
          </p>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="checkbox"
              name={"consent"}
              onClick={() => {
                toggleConsent(!consentSigned);
              }}
              checked={consentSigned}
            />
            <p>
              I acknowledge that I have read, and do hereby consider my issue
              different from the above listed.
            </p>
          </div>
          <SubmitButton
            onClick={consentSigned ? proceedFunc : () => {}}
            type="submit"
            style={{
              cursor: consentSigned ? "pointer" : "not-allowed",
            }}
          >
            Proceed
          </SubmitButton>
        </div>
      </Modal>
    </>
  );
}

export default SimilarIssue;
