import React from 'react'
// components
import { Logo } from './logo'
import { DropDown } from './dropdown';

export default function Showcase() {
  return (
    <div>
      <h1>Hello World</h1>
      {/* logos */}
      <section className="logo-container">
        <Logo title={"merhnood"} size="lg"/>
      </section>
      {/* dropdowns */}
      <section>
        <DropDown title={"Hover over me"} links={[
          {url: "/", text: "home"},
          {url: "/", text: "home"},
          {url: "/", text: "home"},
          ]} />
      </section>
    </div>
  )
}
