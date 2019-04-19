import React from 'react';
import styled from 'styled-components'
import Logo from '../library/styledLogo'
import NoUserLinks from './noUserNavLinks';
import NavLinks from '../nav/navLinks';

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
          <NavLinks logoutUser={this.logoutUser} />
        )
      } else {
        return (
          <NoUserLinks />
        )
      }
  }

  render() {

    const NavContainer = styled.ul`
      display: flex;
      flex-direction: row;
      margin: auto;
      list-style: none;
    `

      return (
        <NavContainer className="nav-container">
          <li>
            <Logo>mernhood</Logo>
          </li>
          <li>
            {this.getLinks()}
          </li>
        </NavContainer>
      );
  }
}

export const NavBar = NavBarComponent;