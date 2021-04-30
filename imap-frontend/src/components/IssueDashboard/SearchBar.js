import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import "./SearchBar.css";
import getTopIssues, { getSearchedIssue } from "../../logics/SearchIssues";
import IndividualIssue from "../../pages/IndividualIssue";
import * as FcIcons from "react-icons/fc";

const SearchBar = ({ page, issues, privateFilter }) => {
  const isIssue = page === "Issues";
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

  const [popupIssue, setPopup] = useState(false);
  const handlePopIssue = () => {
    popupIssue && setValue("");
    setPopup(!popupIssue);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    return inputValue.length === 0
      ? []
      : getTopIssues(inputValue, issues, privateFilter);
  };

  const getSuggestionValue = (suggestion) => suggestion._id;

  function onChange(event, { newValue }) {
    setValue(newValue);
  }

  const renderSuggestion = (suggestion) => (
    <h3>
      {suggestion.Title}
      <p style={{ color: "gray", fontSize: "10px", fontWeight: "normal" }}>
        {suggestion.createdAt.split("T")[0]}
      </p>
    </h3>
  );

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    setValue("#ID-" + suggestionValue);
    handlePopIssue();
  };

  const inputProps = {
    placeholder: "Search...",
    value: value,
    onChange: onChange,
    type: "search",
    icon: <FcIcons.FcSearch />,
  };

  const indIssue = getSearchedIssue(value, issues);
  const showIndIssue =
    value.startsWith("#ID-") &&
    popupIssue &&
    !(indIssue === undefined || indIssue.length == 0);
  return (
    <>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={inputProps}
      />
      {showIndIssue && (
        <IndividualIssue
          issue={indIssue[0]}
          popupIssue={popupIssue}
          handlePopIssue={handlePopIssue}
          isIssue={isIssue}
          isMobileView={false}
        />
      )}
    </>
  );
};

export default SearchBar;

// source: https://github.com/moroshko/react-autosuggest#input-props-prop
