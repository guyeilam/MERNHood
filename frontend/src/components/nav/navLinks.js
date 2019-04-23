import React from "react";
import Box from "../library/box";
import Link from "../library/styledLink";
import StyledSearchBar from "../library/styledSearchBar";

export default function NavLinks(props) {
  return (
    <div>
      <Box padding="18px">
        <ul className="logged-in-nav-container" style={{ display: "flex" }}>
          <li style={{ marginLeft: 10, minWidth: 350 }}>
            <StyledSearchBar />
          </li>
          <li style={{ padding: 2, paddingLeft: 10 }}>
            <Link to={"/"}>
              <p id="loggedInLink1">Home</p>
            </Link>
          </li>
          <li style={{ padding: 2, paddingLeft: 10 }}>
            <Link to={"/"}>
              <p id="loggedInLink2">Notifications</p>
            </Link>
          </li>
          <li style={{ padding: 2, paddingLeft: 10 }}>
            <Link to={"/"}>
              <p id="loggedInLink3">Account</p>
            </Link>
          </li>
          <li style={{ position: "relative", left: "50vw" }}>
            <button onClick={props.logoutUser}>Logout</button>
          </li>
        </ul>
      </Box>
    </div>
  );
}
