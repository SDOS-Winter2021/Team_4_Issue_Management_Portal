import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import theme from "./SearchBar.css";
import getTopIssues from "../../logics/SearchIssues";
import { IssueTitle } from "../IssueDashboard/IssueDesigns";
import { Labels } from "../IssueDashboard/Issue";
import IndividualIssue from "../../pages/IndividualIssue";

const SearchBar = ({ page, issues }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

  const [popupIssue, setPopup] = useState(false);
  const handlePopIssue = () => setPopup(!popupIssue);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();

    return inputValue.length === 0 ? [] : getTopIssues(inputValue, issues);
  };

  const getSuggestionValue = (suggestion) => suggestion.IssueTitle;

  function onChange(event, { newValue }) {
    setValue(newValue);
  }

  const renderSuggestion = (suggestion) => (
    <IssueTitle onClick={() => {}}>
      <h3>
        {suggestion.IssueTitle}
        <p style={{ color: "gray", fontSize: "10px", fontWeight: "normal" }}>
          {suggestion.createdAt.split("T")[0]}
        </p>
      </h3>
      <Labels labels={suggestion.Filter} />
    </IssueTitle>
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
    console.log(suggestion, popupIssue);
    handlePopIssue();
    console.log(popupIssue);
  };

  const inputProps = {
    placeholder: "Search",
    value: value,
    onChange: onChange,
    type: "search",
  };

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
    </>
  );
};

export default SearchBar;

// source: https://github.com/moroshko/react-autosuggest#input-props-prop
