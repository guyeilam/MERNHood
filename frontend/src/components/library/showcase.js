import React from 'react'
// components
import { Logo } from './logo'

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
      </ul>
    </div>
  )
}
