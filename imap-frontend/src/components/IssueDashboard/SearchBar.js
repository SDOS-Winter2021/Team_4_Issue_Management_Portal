import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import theme from "./SearchBar.css";
import getTopIssues from "../../logics/SearchIssues"


const SearchBar = ({ page, issues }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();

    return inputValue.length === 0
      ? []
      :  getTopIssues(inputValue, issues) 
  };

  const getSuggestionValue = (suggestion) => suggestion.IssueTitle;

  function onChange(event, { newValue }) {
    setValue(newValue);
  }

  const renderSuggestion = (suggestion) => <p>{suggestion.IssueTitle}</p>;

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
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
        inputProps={inputProps}
      />
    </>
  );
};

export default SearchBar;

// source: https://github.com/moroshko/react-autosuggest#input-props-prop
