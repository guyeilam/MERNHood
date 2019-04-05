import React from 'react'
import Radium from 'radium'; // module that allows for inline styles

import  Link  from "./link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BASE } from "./styles"

// --- optional attributes ----
// type = day | night, string
// title
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
        display: "flex",
        flexDirection: "row",
        justContent: "center",
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const { type, title, size, weight } = this.props;
    return (
      <section className="logo-container" style={[styles.logo]}>
        <Link to="/" 
        title={title} 
        image={<FontAwesomeIcon 
        style={{paddingRight: 5}} 
        icon="feather-alt" />} 
        style={[
          styles.logo,
          styles.base[type],
          styles.base[weight],
          styles.base[size]]} />
      </section>
    );
  }
}

LogoComponent.defaultProps = { type: "day", size:  "md", weight: '', };

export const Logo = Radium(LogoComponent);