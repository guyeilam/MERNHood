import React from 'react'
// components
import { Logo } from './logo'
import Link from './link'
import Button from './button'

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
          {/* small button */}
          <br></br>
          <Button shape="round" size="sm"/>
          {/* default button */}
          <br></br>
          <Button />
          {/* disabled default button */}
          <br></br>
          <Button disabled />
          {/* custom color button */}
          <br></br>
          <Button color="#ffb6c1" />
          <br></br>
          {/* square button */}
          <Button shape="square"/>
          {/* large button */}
          <br></br>
          <Button shape="round" size="lg"/>
        </li>
        {/* links */}
        <li className="links-container">
          <h1>Links</h1>
          <Link to="/" title="Home"/>
          <Link http="http://www.google.com" title="External Link" />
        </li>
        {/* status badges */}
      </ul>
    </div>
  )
}
