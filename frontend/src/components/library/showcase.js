import React from "react";
// components
// import { Logo } from './logo';
import Logo from "./styledLogo";
// import Link from './link'
import Link from "./styledLink";
import Button from "./button";
import Box from "./box";
import Text from "./styledText";
import DropDown from "./styledDropDown";

export default function Showcase() {
  return (
    <Box column>
      <h1>Component Library</h1>
      <ul className="components-container">
        {/* logos */}
        <li className="logos-container">
          <h1>Logos</h1>
          <Box>
            <Logo>mernhood</Logo>
          </Box>
          {/* <Logo title={"merhnood"} size="sm" /> */}
          {/* night theme */}
          {/* <Logo title={"merhnood"} size="lg" type="night" /> */}
        </li>
        {/* buttons */}
        <li className="buttons-container" style={{ alignItems: "center" }}>
          <h1>Buttons</h1>
          <Box>
            {/* small buttons */}
            <br />
            <Button shape="round" size="sm" title="small" />
            <br />
            <Button shape="square" size="sm" title="square" />
            {/* default button */}
            <br />
            <Button />
            {/* disabled default button */}
            <br />
            <Button disabled title="disabled" />
            {/* custom color button */}
            <br />
            <Button color="#ffb6c1" title="pink button" />
            {/* square button */}
            <br />
            <Button shape="square" title="square button" />
            {/* large button */}
            <br />
            <Button shape="round" size="lg" title="large button" />
          </Box>
        </li>
        {/* links */}
        <li className="links-container">
          <h1>Links</h1>
          {/* <Link to="/" title="Home"/> */}
          {/* <Link http="http://www.google.com" title="External Link" /> */}
          <Box width="50%">
            <Link to="/">Home</Link>
            <Link to="/components">Components</Link>
          </Box>
        </li>
        {/* dropdown menu */}
        <li>
          <h1>DropDown Component</h1>
          <Box>
            <DropDown title="Toggle Dropdown">
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
            </DropDown>
          </Box>
        </li>
        {/* status badges */}
        {/* search bar */}
        {/* styled text */}
        <li>
          <h1>Styled Text</h1>
          <Box width="50%">
            <Text color="lightBlue">Hello World</Text>
            <Text color="green">Hello World</Text>
            <Text weight="bold">Hello World</Text>
          </Box>
        </li>
      </ul>
    </Box>
  );
}
