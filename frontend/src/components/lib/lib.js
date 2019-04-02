import React from 'react';
import 'gestalt/dist/gestalt.css';
import './library.css';
import DropDown from './dropdown';
import { ColorButton } from './buttons'
import { LightGreenLink, ColorLink } from './links'
import { Logo } from './logo'

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        {/* Logos */}
        <section>
          <h1>Logos</h1>
          <p>small</p>
          <Logo size='sm' type='day' />
          <Logo size='sm' type='night'/>
          <p>medium</p>
          <Logo size='md' type='day' />
          <Logo size='md' type='night' />
          <p>large</p>
          <Logo size='lg' type='day' />
          <Logo size='lg' type='night' />
        </section>

        {/* Dropdowns */}
        <section>
          <h1>Dropdowns</h1>
          <DropDown
            text={['link1', 'link2', 'link3']}
            links={['#', '#', '#']} />
        </section>
        <br></br>
        {/* Buttons */}
        <section>
          <h1>Buttons</h1>
          {/* colors and hover */}
          <ColorButton text="light green button" padding={2} inline={true} color='green' />
          <ColorButton text="dark green button" padding={2} inline={true} color='green' hue='dark' />
          <ColorButton text="custom color button" padding={2} inline={true} color='red' />
          <ColorButton text="hover color button" padding={2} inline={true} color='gray' hover={true} />
          <ColorButton text="transparent button" padding={2} inline={true} color='transparent' hover={true} />
          {/* sizes */}
          <ColorButton text="small button" padding={2} inline={true} color='green' size='sm' />
          <ColorButton text="medium button" padding={2} inline={true} color='green' size='md' />
          <ColorButton text="large button" padding={2} inline={true} color='green' size='lg' />
        </section>

        {/* Links */}
        <section>
          <h1>Links</h1>
          <LightGreenLink text="lightGreen.com" padding={2} />
          <ColorLink text="customColor.com" padding={2} color='blue' />
        </section>
      </>
    )
  }
}
