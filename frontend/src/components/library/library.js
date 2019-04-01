import React from 'react';
import { Button, Box, Link, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './library.css';
import { DropDown } from './dropdown';

export default class Library extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <>
      {/* Buttons */}
        <section>
          <h1>Buttons</h1>
          <div className="greenButton">
            <Box padding={2}>
              <Button text='greenButton' inline />
            </Box>
          </div>
          <div className="greenButtonDark">
            <Box padding={2}>
              <Button text='greenButtonDark' inline />
            </Box>
          </div>
          <div className="hoverButton">
            <Box padding={2}>
              <Button text='hoverButton' inline />
            </Box>
          </div>
        </section>

      {/* Links */}
        <section>
          <h1>Links</h1>
          <div className="greenLink">
            <Link href="#">
              <Box padding={2}>
                <Text bold>lightGreen.com</Text>
              </Box>
            </Link>
          </div>
          <Link href="#">
            <Box padding={2}>
              <Text color='green' bold>darkGreen.com</Text>
            </Box>
          </Link>
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