import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "./styles";

export default function StyledLink({ children, to, className, color }) {
  const activeclassname = "nav-item-active";
  const NavItem = styled(Link).attrs({ activeclassname })`
    color: black;
    :hover {
      color: ${color ? color : COLORS["green"]};
    }

    &.${activeclassname} {
    }
  `;
  return (
    <>
      <NavItem to={to}>{children}</NavItem>
    </>
  );
}
