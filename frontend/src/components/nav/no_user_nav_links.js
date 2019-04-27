import React from "react";
import Button from "../library/styled_button";
import Link from "../library/styledLink";
import DropDown from "../library/styledDropDown";
import styled from "styled-components";

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
            <Link to="/">Home</Link>
            <Link to="/components">Components</Link>
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
