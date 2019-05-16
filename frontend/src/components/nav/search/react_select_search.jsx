import React, { useState } from "react";
import styled from "styled-components";

import Autosuggest from 'react-autosuggest'
import AutosuggestHighlightMatch from "autosuggest-highlight/umd/match";
import AutosuggestHighlightParse from "autosuggest-highlight/umd/parse";
import { companies } from "./data/data";

import './search.css';

const data = [
  {
    title: 'Companies (Section 1)',
    companies: [
      { value: "elysiumhealth", label: "Elysium Health" },
      { value: "accessintelligence", label: "Access Intelligence" },
      { value: "etrade", label: "E*TRADE" },
      { value: "nep", label: "NEP" },
      { value: "spencerstuart", label: "Spencer Stuart" },
      { value: "logix", label: "Logix" },
      { value: "stantec", label: "Stantec" },
      { value: "paloaltonetworks", label: "Palo Alto Networks" },
      { value: "rxbar", label: "RXBAR" },
    ]
  },
  {
    title: 'Companies (Section 2)',
    companies: [
      { value: "ownerscom", label: "owners.com" },
      { value: "caesarsentertainment", label: "Caesars Entertainment" },
      { value: "teague", label: "TEAGUE" },
      { value: "entertainmentone", label: "Entertainment One" },
      { value: "opensystemshealthcare", label: "Open Systems Healthcare" },
      { value: "lendkey", label: "LendKey" },
      { value: "sick", label: "SICK" },
      { value: "tacobell", label: "Taco Bell" },
      { value: "inlineplastics", label: "Inline Plastics" },
      { value: "zoovu", label: "Zoovu" },
      { value: "gapinc", label: "Gap Inc." }
    ]
  },
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue + '.*', 'i');

  return data
    .map(section => {
      return {
        title: section.title,
        companies: section.companies.filter(company => regex.test(company.label))
      };
    })
    .filter(section => section.companies.length > 0);
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.label}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className={'suggestion-content ' + suggestion.value}>
      <span className="name">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
        }
      </span>
    </span>
  );
}

function renderSectionTitle(section) {
  return (
    <strong>{section.title}</strong>
  );
}

function getSectionSuggestions(section) {
  return section.companies;
}

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange
    };

    return (
      <div className="search-box-container">
        <div className="search-box-icon">
          <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1"><g id="search" transform="translate(-11.000000, -11.000000)"><path d="M23.0733726,24.4447312 C21.8075531,25.4199921 20.2215106,26 18.5,26 C14.3578644,26 11,22.6421356 11,18.5 C11,14.3578644 14.3578644,11 18.5,11 C22.6421356,11 26,14.3578644 26,18.5 C26,20.2215106 25.4199921,21.8075531 24.4447312,23.0733726 L28.1425948,26.7712362 L26.7712362,28.1425948 L23.0733726,24.4447312 Z M18.5,24 C21.5375661,24 24,21.5375661 24,18.5 C24,15.4624339 21.5375661,13 18.5,13 C15.4624339,13 13,15.4624339 13,18.5 C13,21.5375661 15.4624339,24 18.5,24 Z" id="Combined-Shape"></path></g></svg>
        </div>
        
        <Autosuggest 
          multiSection={true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          inputProps={inputProps} />
      </div>
    );
  }
}

export default Search;