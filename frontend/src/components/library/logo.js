import React from 'react'
import Radium from 'radium'; // module that allows for inline styles

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BASE } from "./styles"

// --- optional attributes ----
// type = day | night, string
// size = sm | md | lg, string
// weight = normal | bold, string
// --- ------------------- ----

class LogoComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  getStyles() {
    return {
      base: BASE,
      logo: {
        maxWidth: "fit-content",
        margin: "auto",
        padding: 5,
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const { type, title, size, weight } = this.props;
    return (
      <section className="logo-container" style={[styles.logo]}>
        <Link to="/">
          <p style={[
            styles.base,
            styles.base[type],
            styles.base.textWeight[weight],
            styles.base[size],]}>
            <FontAwesomeIcon icon="feather-alt" />
            {title}
          </p>
        </Link>
      </section>
    );
  }
}

LogoComponent.defaultProps = { type: "day", size:  "md", weight: '', };

export const Logo = Radium(LogoComponent);