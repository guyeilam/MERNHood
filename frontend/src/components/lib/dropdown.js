import React from 'react';
import { Box, Link, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

// Dropdown that links each element to link provided in order

// text = { [string, string2]}
// links = { ['urlString1', urlString2]}

export default class DropDown extends React.Component {
  constructor(props){
    super(props)
    this.state = {hidden: true}
    this.createLinks = this.createLinks.bind(this);
    this.displayDD = this.displayDD.bind(this);
  }

  createLinks(){
    let comps = [] 

    for( let i=0; i< this.props.links.length; i++) {
      let curLink = this.props.links[i];
      let curText = this.props.text[i];
      comps.push(
        <div className="dd-ele" key={i}>
          <Link href={`${curLink}`}>
            <Box padding={this.props.padding}>
              <Text bold>{curText}</Text>
            </Box>
          </Link>
        </div>
      );
    }
    this.comps = comps;
  };

  displayDD(){
    this.setState(
      {hidden: !this.state.hidden}
    )
  }

  render() {
    this.createLinks();
    let hidden;
    if (this.state.hidden) { hidden = 'hidden' }

    return (
      <div className="dropdown">
        <p className="dd-title" onClick={this.displayDD}>DropDown</p>
        <Box>
          <ul className={`dd-links ${hidden}`}>
            {this.comps}
          </ul>
        </Box>
      </div>
    )
  }
}
