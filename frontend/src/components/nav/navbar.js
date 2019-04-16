import React from 'react';
import Radium from "radium"; // module that allows for inline styles

import { Link } from 'react-router-dom'
import Logo from '../library/styledLogo'
import { BASE } from '../library/styles'
import { DropDown } from '../library/dropdown';
import Button from '../library/button';
import { relative } from 'path';

// --- optional attributes ----
// type = day | night, string
// weight = normal | bold, string
// --- ------------------- ----

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
  getLinks(styles, type, weight) {
      if (this.props.loggedIn) {
        return (
            <div>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
          <div>
            <ul style={[styles.navLinksContainer, styles.base.textWeight[weight]]}>
              <li style={[styles.navLi]}>
                  <DropDown weight={"bold"} title={"More"} links={[
                    { url: "/components", text: "Components" },
                    { url: "/", text: "Home" },
                    { url: "/signup", text: "Signup" },
                  ]} />
              </li>
              <li style={{padding: 18, position: 'relative', left: '50vw'}}>
                <Link to={'/login'}>
                  <p key={"navlink1"} style={[styles.base[type]]}>Login</p>
                </Link>
              </li>
              <li style={{ padding: 5, position: 'relative', left: '50vw'}}>
                <Link to={'/signup'}>
                  <Button title="Sign Up" />
                </Link>
              </li>
            </ul>
          </div>
        );
      }
  }

  getStyles() {
    return {
      base: BASE,
      navBarContainer: {
        display: "flex",
        flexDirection: "row",
        margin: "auto",
        listStyle: "none",
      },
      navLi: {
        marginLeft: 10,
        padding: 18,
      },
      navLinksContainer: {
        display: "flex",
        flexDirection: "row",
        listStyle: "none",
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const { type, weight } = this.props;
      return (
        <ul className="nav-container" style={[styles.navBarContainer]}>
          <li>
            <Logo>mernhood</Logo>
          </li>
          <li>
            {this.getLinks(styles, type, weight)}
          </li>
        </ul>
      );
  }
}
NavBarComponent.defaultProps = { type: "day", weight: "bold", };
export const NavBar = Radium(NavBarComponent);
