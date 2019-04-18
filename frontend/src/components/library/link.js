import React from 'react'
import Radium from 'radium'; // module that allows for inline styles

import { Link } from "react-router-dom";
import { BASE, COLORS } from "./styles"

// --- optional attributes ---- string
// type   = day | night  
// color
// hoverColor
// title
// size   = sm | md | lg 
// weight = normal | bold
// http   = "www.some-external-url.com"
// to     = "/internal-url"
// image  = React component, e.g. FontAwesomeIcon component
// --- ------------------- ----

class LinkComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getStyles(color, hoverColor){
    return {
      base: BASE,
      link: {
        color: COLORS[color] || color,
        textAlign: "center",
        ":hover": {
          color: COLORS[hoverColor] || color,
        },
      },
    };
  }

  internalLink(styles, linkLocation, linkText) {
    return(
      <div>
        <Link to={linkLocation} style={[styles.base,]}>
          {linkText}
        </Link>
      </div>
    )
  }

  externalLink(styles, linkLocation, linkText) {
    return(
      <div>
        <a href={linkLocation} style={[styles.base]}>
          {linkText}
        </a>
      </div>
    )
  }

  getLinkText(styles, type, size, weight, title, image){
    return (
      <p style={[
        styles.base[type],
        styles.base[weight],
        styles.link,
        styles.base.textSize[size],
      ]}>
        {image}
        {title}
      </p>
    )
  }


  render() {
    const { type, color, hoverColor, title, size, weight, http, to, image } = this.props;
    const styles = this.getStyles(color, hoverColor);
    let linkLocation = to;
    let linkText = this.getLinkText(styles, type, size, weight, title, image);
    let linkComp = this.internalLink(styles, linkLocation, linkText);
    // render as external if http provided
    if (http !== null) { 
      linkLocation = http; 
      linkComp = this.externalLink(styles, linkLocation, linkText);
    }

    return (
      <section className="site-link">
        {linkComp}
      </section>
    )
  }
}

LinkComponent.defaultProps = { 
  type: "day", color: "", hoverColor:"", title: "Some Link", size: "md", weight: "normal", http: null, to:  "#", image: "",};

const LinkTo = Radium(LinkComponent);
export default LinkTo;
