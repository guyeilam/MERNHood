import React from "react";
import Radium from "radium"; // module that allows for inline styles
import { Link } from "react-router-dom";
import { BASE } from "./styles"

// --- optional attributes ----
// title = text, string
// type = day | night, string
// links = [url, url2], strings
// size = sm | md | lg, string
// weight = normal | bold, string
// --- ------------------- ----

class DropDownComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hidden: true};
    this.openDropDown = this.openDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
  }

  getDropDownStyles = () => {
    return {
      base: BASE,
      dropDown: {
        paddingBottom: "5px",
        borderBottom: "4px solid transparent",
      },
      dropDownContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        maxWidth: "140px",
      },
      dropDownTitle: {
        ":hover": {
          borderBottom: "4px solid #21ce99",
          cursor: "pointer"
        },
        maxWidth: "fit-content",
        minWidth: 80,
      },
      dropDownUl: {
        position: "absolute",
        top: 45,
        display: "flex",
        flexDirection: "column",
        minWidth: 140,
        justifyContent: "space-around",
        listStyle: "none",
        marginTop: -10,
        transition: "all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s",
        hidden: {
          false: {
            backgroundColor: "white",
            boxShadow: "0px 0px 8px rgba(0,0,0,0.07)",
            borderRadius: 2,
            transform: "translateY(1em)"
          }
        }
      },
      dropDownText: {
        maxWidth: "none",
        width: "100%",
        height: "100%",
        zIndex: 1,
        textAlign: "center",
        justifyContent: "center",
      },
    };
  }

  makeLinks(type, links, size, styles) {
    const components = []
    links.forEach((link, id) => {
      components.push(
        <li key={(id+1)*.01}
          style={[
            styles.base,
            styles.base[type],
            styles.base.textSize[size],
            styles.base.textWeight['normal'],
            styles.dropDown,
            styles.dropDownText,
            styles.base.hidden]}>
          <Link to={link.url} style={[styles.dropDownText]}>
            <p key={id}
              style={[
                styles.base,
                styles.base[type],
                styles.base.textSize[size],
                styles.dropDownText,
                styles.dropDown,
                styles.base.hidden[this.state.hidden]]}>
              {link.text}
            </p>
          </Link>
        </li>
      )
    })
    return components;
  }

  openDropDown(){
    this.setState({ hidden: false })
  }

  closeDropDown(){
    this.setState({ hidden: true })
  }

  render() {
    const { title, type, links, size, weight } = this.props;
    const styles = this.getDropDownStyles();
    const linkComponents = this.makeLinks(type, links, size, styles);

    return (
      <section className="dd-container" style={[styles.dropDownContainer]}>
        <p onMouseEnter={this.openDropDown} onMouseDown={this.closeDropDown}
          style={[
            styles.base,
            styles.base[type],
            styles.base.textWeight[weight],
            styles.dropDown,
            styles.dropDownTitle]}>
          {title}
        </p>
        <ul onMouseLeave={this.closeDropDown} 
            style={[
              styles.dropDownUl,
              styles.dropDownUl.hidden[this.state.hidden]]}>
          {linkComponents}
        </ul>
      </section>
    );
  }
}

DropDownComponent.defaultProps = { type: "day", size: "md", links: [{url: ''}], weight: '', };

export const DropDown = Radium(DropDownComponent);