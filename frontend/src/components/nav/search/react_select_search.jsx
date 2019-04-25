import React, { useState } from "react";
import styled from "styled-components";

// import Select from "react-select";
import AsyncSelect from "react-select/lib/Async";
import { companies } from "./data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default () => {
  // ///////////////////////////////
  // Component styles
  // ///////////////////////////////
  const lightGray = "#d3d3d345";

  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };

  const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center"
  };
  // styles for search box as a whole
  const controlStyles = (base, state) => ({
    ...base,
    boxShadow: state.isFocused
      ? "0 0 4px 1px rgba(0, 0, 0, 0.01),0 3px 24px rgba(48, 51, 51, 0.09)"
      : 0,
    borderColor: state.isFocused ? "transparent" : lightGray,
    "&:hover": {
      borderColor: state.isFocused ? "transparent" : lightGray,
      boxShadow:
        "0 0 4px 1px rgba(0, 0, 0, 0.01),0 3px 24px rgba(48, 51, 51, 0.09)"
    }
  });
  // styles for each option rendered
  const optionStyles = (base, { isDisabled, isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isDisabled
      ? null
      : isSelected
      ? "#36B37E"
      : isFocused
      ? "#E6FFF4"
      : base.backgroundColor
  });
  // how to render each individual group label
  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  const SearchIcon = styled(FontAwesomeIcon)`
    position: relative;
    right: 4px;
    color: black;
    padding: 10px;
  `;

  const DropdownIndicator = () => {
    return <SearchIcon icon={faSearch} />;
  };

  const IndicatorSeparator = () => {
    return <span />;
  };

  const SearchBar = styled(AsyncSelect)`
    min-width: fill-available;
  `;

  // ///////////////////////////////
  // Component filtering options
  // ///////////////////////////////

  // every time input changes, filter the search results
  const filterSearch = inputValue => {
    return companies.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  // fetch possible options every time the component gets loaded
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterSearch(inputValue));
    }, 1000);
  };

  // this gets called every time the input changes
  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, "");
    setInputValue(inputValue);
    return inputValue;
  };

  // react-hook state
  const [input, setInputValue] = useState("");

  return (
    <>
      <p>{input}</p>
      <SearchBar
        cacheOptions
        defaultOptions
        placeholder="Search"
        loadOptions={loadOptions}
        onInputChange={() => handleInputChange}
        formatGroupLabel={formatGroupLabel}
        components={{ DropdownIndicator, IndicatorSeparator }}
        styles={{ control: controlStyles, option: optionStyles }}
      />
    </>
  );
};
