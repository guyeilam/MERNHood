import styled from 'styled-components'
import React from 'react'
import { Link } from "react-router-dom";
import { COLORS } from "./styles";

export default function StyledLink({ children, to, className ,color }) {
  const activeClassName = 'nav-item-active'
  const NavItem = styled(Link).attrs({activeClassName})`
    color: black;
    :hover {
      color: ${COLORS["green"]};
    }

  &.${activeClassName} {
  }
`;
  return (
    <>
      <NavItem to={to}>
        {children}
      </NavItem>
    </>
  )
}
