import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function styledSearchBar() {
  const StyledInput = styled.input`
    min-width: 400px;

    :focus::placeholder {
      color: transparent;
    }
  `;
  const StyledDiv = styled.div`
    flex-basis: auto;
    display: flex;
    flex-direction: row;
    background-color: white;
    border: 1px solid #d3d3d352;
    border-radius: 4px;
    min-height: 30px;
    min-width: fit-content;
    padding-left: 10px;

    :hover {
      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01),
        0 3px 24px rgba(48, 51, 51, 0.09);
    }
    ${StyledInput}:focus: & ~ {
      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01),
        0 3px 24px rgba(48, 51, 51, 0.09);
    }
  `;

  return (
    <>
      <StyledDiv>
        <FontAwesomeIcon
          style={{ position: "relative", top: 8, right: 4 }}
          icon="search"
        />
        {/* search bar */}
        <StyledInput placeholder="Search" />
      </StyledDiv>
    </>
  );
}
