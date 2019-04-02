import React from 'react';
import 'gestalt/dist/gestalt.css';
import './library.css';
import { DropDown } from './dropdown';
import { GreenButton, DarkGreenButton, HoverButton } from './buttons'
import {LightGreenLink, ColorLink} from './links'

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        {/* Buttons */}
        <section>
          <h1>Buttons</h1>
          <GreenButton text="green button" padding={2} inline={true} />
          <DarkGreenButton text="dark green button" padding={2} inline={true} />
          <HoverButton text="hover button" padding={2} inline={true}/>
        </section>

        {/* Links */}
        <section>
          <h1>Links</h1>
          <LightGreenLink text="lightGreen.com" padding={2} />
          <ColorLink text="customColor.com" padding={2} color='red' />
        </section>

        {/* Dropdowns */}
        <section>
          <h1>Dropdowns</h1>
          <DropDown
            text={['link1', 'link2', 'link3']}
            links={['#', '#', '#']} />
        </section>
      </>
    )
  }
}
