import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import Autosuggest from 'react-autosuggest';
import theme from './theme.css'

const issues = [
    {
      name: 'Fee portal not working',
    },
    {
      name: 'Fee portal not working',
    },
    {
      name: 'Fee portal not working',
    },
    {
      name: 'Fee portal not working',
    },
    {
      name: 'Issues with fee portal',
    },
  ];

const SearchBar = ({page}) => {
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState('');

    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : issues.filter(issue =>
          issue.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
      
      const getSuggestionValue = suggestion => suggestion.name;
    
      function onChange(event, { newValue }){
        setValue(newValue);
      };
      
    
      const renderSuggestion = suggestion => (
        <p>{suggestion.name}</p>
      );
    
      const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
      };
    
      const onSuggestionsClearRequested = () => {
            setSuggestions([]);
      };
    
    
    const inputProps = {
        placeholder: 'Search' ,
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