import React from 'react';
// components
// import { Logo } from './logo';
import Logo from "./styledLogo";
// import Link from './link'
import Link from "./styledLink";
import Button from './button';
import Box from "./box";
import Text from "./styledText"

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
        <li className="buttons-container" style={{alignItems: "center"}}>
          <h1>Buttons</h1>
          <Box>
          {/* small buttons */}
            <br></br>
            <Button shape="round" size="sm" title="small"/>
            <br></br>
            <Button shape="square" size="sm" title="square"/>
          {/* default button */}
            <br></br>
            <Button />
          {/* disabled default button */}
            <br></br>
            <Button disabled title="disabled" />
          {/* custom color button */}
            <br></br>
            <Button color="#ffb6c1" title="pink button"/>
          {/* square button */}
            <br></br>
            <Button shape="square" title="square button"/>
          {/* large button */}
            <br></br>
            <Button shape="round" size="lg" title="large button"/>
          </Box>
        </li>
        {/* links */}
        <li className="links-container">
          <h1>Links</h1>
          {/* <Link to="/" title="Home"/> */}
          {/* <Link http="http://www.google.com" title="External Link" /> */}
        <Box width="50%">
            <Link to="/">
              Home
          </Link>
            <Link to="/components">
              Components
          </Link>
        </Box>
        </li>
        {/* status badges */}
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
  )
}
