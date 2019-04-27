import styled from "styled-components";
import React from "react";
import { COLORS } from "./styles";

export default function StyledExternalLink({ children, href, color }) {
  const activeclassname = "nav-item-active";
  const NavLInk = styled.a.attrs({ activeclassname })`
    color: black;
    text-align: center;
    width: fill-available;

    :hover {
      color: ${color ? color : COLORS["green"]};
    }

    &.${activeclassname} {
    }
  `;
  return (
    <>
      <NavLInk href={href}>{children}</NavLInk>
    </>
  );
}
