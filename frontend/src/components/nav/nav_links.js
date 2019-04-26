import React from "react";
import Box from "../library/box";
import Button from "../library/styledButton";
import Link from "../library/styledLink";
import SearchBar from "../nav/search/react_select_search";

export default function NavLinks(props) {
  return (
    <div>
      <Box padding="10px">
        <ul className="logged-in-nav-container" style={{ display: "flex" }}>
          <li style={{ marginLeft: 10, minWidth: 350 }}>
            <SearchBar />
          </li>
          <li style={{ padding: 10, paddingLeft: 140 }}>
            <Link to={"/"}>
              <p id="loggedInLink1">Home</p>
            </Link>
          </li>
          <li style={{ padding: 10, paddingLeft: 10 }}>
            <Link to={"/"}>
              <p id="loggedInLink2">Notifications</p>
            </Link>
          </li>
          <li style={{ padding: 10, paddingLeft: 10 }}>
            <Link to={"/"}>
              <p id="loggedInLink3">Account</p>
            </Link>
          </li>
          <li style={{ position: "relative", left: "2vw" }}>
            <Button submit={props.logoutUser}>Logout</Button>
          </li>
        </ul>
      </Box>
    </div>
  );
}
