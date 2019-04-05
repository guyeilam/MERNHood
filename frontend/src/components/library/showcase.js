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
          <Logo title={"merhnood"} size="lg" />
          {/* night theme */}
          <Logo title={"merhnood"} size="lg" type="night" />
        </li>
        {/* buttons */}
        <li>
          <h1>Buttons</h1>
          <Button />
        </li>
        {/* links */}
        <li>
          <h1>Links</h1>
          <Link />
          <Link to="/" title="Home" />
          <Link http="http://www.google.com" title="External Link" />
        </li>
        {/* status badges */}
      </ul>
    </div>
  )
}
