import React from "react";
import styled from "styled-components";

import Select from "react-select";
import { groupedOptions } from "./data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const StyledIcon = styled(FontAwesomeIcon)`
  position: relative;
  right: 4px;
  color: black;
  padding: 10px;
`;

const DropdownIndicator = () => {
  return <StyledIcon icon={faSearch} />;
};

const IndicatorSeparator = () => {
  return <span />;
};

const Search = styled(Select)`
  min-width: fill-available;
`;

export default () => (
  <Search
    placeholder="Search"
    options={groupedOptions}
    formatGroupLabel={formatGroupLabel}
    components={{ DropdownIndicator, IndicatorSeparator }}
    styles={{ control: controlStyles, option: optionStyles }}
  />
);
