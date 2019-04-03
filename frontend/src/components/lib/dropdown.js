import React from 'react';
import { Box, Link, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

// Dropdown that links each element to link provided in order

// text = { [string, string2]}
// links = { ['urlString1', urlString2]}
// title = "Some String"

export default class DropDown extends React.Component {
  constructor(props){
    super(props)
    this.state = {hidden: true}
    this.createLinks = this.createLinks.bind(this);
    this.closeDD = this.closeDD.bind(this);
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
    this.setState({ hidden: false })
  }

  closeDD(){
    this.setState({ hidden: true })
  }

  render() {
    this.createLinks();
    let visibility;
    let state;
    if (!this.state.hidden) { visibility = 'visible'; state = 'dd-opened' }

    return (
      <>
        <div className="dropdown" >
          <p className="dd-title" onMouseEnter={this.displayDD} >{this.props.title}</p>
          <Box>
            <ul onMouseLeave={this.closeDD} className={`dd-links dd-hidden ${state} ${visibility}`}>
              {this.comps}
            </ul>
          </Box>
        </div>
      </>
    )
  }
}
