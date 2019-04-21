import React from "react";
import styled from "styled-components";

export default function Button({
  children,
  color,
  square,
  large,
  bold,
  submit,
  disabled
}) {
  const StyledButton = styled.button`
    position: relative;
    color: ${color ? color : "white"};
    text-align: center;
    letter-spacing: 0.05em;
    font-size: large;
    font-weight: ${bold ? "bold" : "normal"};
    background-color: ${disabled ? "#a1e9d27a" : "rgb(33, 206, 153)"};
    height: ${large ? "68" : "48px"};
    padding-left: ${large ? "40px" : "20px"};
    padding-right: 20px;
    transition: box-shadow 300ms ease 0s;
    border: ${disabled ? "#21ce99" : "transparent"};
    border-radius: ${square ? "8px" : "100px"};

    :hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
    }
  `;

  const handleClick = (e, submit, disabled) => {
    if (submit) {
      e.preventDefault();
      return submit;
    } else if (disabled) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div>
      <StyledButton onClick={e => handleClick(e, submit, disabled)}>
        {children}
      </StyledButton>
    </div>
  );
}
