import React from "react";
import Button from "../library/styled_button";
import Link from "../library/styled_link";
import DropDown from "../library/styled_dropdown";
import styled from "styled-components";
import StyledExternalLink from "../library/styled_external_link";

const NavLinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin: auto;
  list-style: none;
`;
const ListItem = styled.li`
  margin-top: 12px;
`;

export default function userNavLinks() {
  return (
    <div>
      <NavLinksContainer>
        <ListItem style={{ marginTop: 12 }}>
          <DropDown title="More">
            <StyledExternalLink href="https://github.com/guyeilam/MERNHood">
              About
            </StyledExternalLink>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </DropDown>
        </ListItem>
        <ListItem style={{ padding: 18, position: "relative", left: "50vw" }}>
          <Link to={"/login"}>
            <p key={"navlink1"}>Login</p>
          </Link>
        </ListItem>
        <ListItem style={{ padding: 5, position: "relative", left: "50vw" }}>
          <Link to={"/signup"}>
            <Button>
              <p>Sign Up</p>
            </Button>
          </Link>
        </ListItem>
      </NavLinksContainer>
    </div>
  );
}
