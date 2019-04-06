import React from 'react'
// components
import { Logo } from './logo'
import Link from './link'
import Button from './button'
import Box from "./box"

export default function Showcase() {
  return (
    <div>
      <h1>Component Library</h1>
      <ul className="components-container">
        {/* logos */}
        <li className="logos-container">
          <h1>Logos</h1>
          <Logo title={"merhnood"} size="sm" />
          {/* night theme */}
          <Logo title={"merhnood"} size="lg" type="night" />
        </li>
        {/* buttons */}
        <li className="buttons-container" style={{alignItems: "center"}}>
          <h1>Buttons</h1>
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
        </li>
        {/* links */}
        <li className="links-container">
          <h1>Links</h1>
          <Link to="/" title="Home"/>
          <Link http="http://www.google.com" title="External Link" />
        </li>
        {/* container */}
        <li>
          <Box/>>
        </li>
        {/* status badges */}
      </ul>
    </div>
  )
}
