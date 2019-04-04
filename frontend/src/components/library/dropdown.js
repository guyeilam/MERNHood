import React from "react";
import Radium from "radium"; // module that allows for inline styles
import { Link } from "react-router-dom";


class DropDownComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hidden: true};
    this.openDropDown = this.openDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
  }

  getStyles() {
    const status = {
      day: "#21ce99",
      night: "black",
      hover: "lightGray"
    };

    return {
      base: {
        maxWidth: "fit-content",
        padding: "5px",
        color: "black",
        textAlign: "center",
        fontFamily: "'Helvetica Neue', sans-serif",
        borderBottom: "4px solid white",
        day: {
          ":hover": {
            color: "black"
          },
          color: status.day
        },
        night: {
          ":hover": {
            color: "white"
          },
          color: status.day
        }
      },
      ul: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        maxWidth: 140,
        justifyContent: "space-around",
        listStyle: "none",
        marginLeft: 20,
        marginTop: -10,
        transition: "all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s",
        transitionDelay: "0s, 0s, 0.3s",
        hidden: {
          false: {
            backgroundColor: "#fff",
            position: "relative",
            boxShadow: "0px 0px 8px rgba(0,0,0,0.07)",
            borderRadius: 2,
            transform: "translateY(2em)"
          }
        }
      },
      title: {
        ":hover": {
          borderBottom: "4px solid #21ce99",
          cursor: "pointer"
        },
        minWidth: 80,
        marginLeft: 33,
      },
      text: {
        zIndex: 1,
        marginLeft: 20
      },
      dims: {
        sm: {
          fontSize: "smaller"
        },
        md: {
          fontSize: "medium"
        },
        lg: {
          fontSize: "larger"
        }
      },
      hidden: {
        true: {
          visibility: "hidden",
          display: "none"
        },
        false: {
          visibility: "visible",
          display: "inline"
        }
      }
    };
  }

  makeLinks(type, links, size, styles) {
    const components = []
    links.forEach((link, id) => {
      components.push(
        <li key={(id+1)*.01}
          style={[
            styles.text, styles.base,
            styles.base[type],
            styles.dims[size],
            styles.hidden]}>
          <Link to={link.url}>
            <text
              key={id}
              style={[
                styles.text, styles.base,
                styles.base[type],
                styles.dims[size],
                styles.hidden[this.state.hidden]]}>
            {link.text}
            </text>
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
    const styles = this.getStyles();
    const { title, type, links, size } = this.props;
    const linkComponents = this.makeLinks(type, links, size, styles);

    return (
      <section>
        <p onMouseEnter={this.openDropDown}
           onMouseDown={this.closeDropDown}
           style={[styles.base, styles.title]}>
          {title}
        </p>
        <ul onMouseLeave={this.closeDropDown} 
            style={[styles.ul, styles.ul.hidden[this.state.hidden]]}>
          {linkComponents}
        </ul>
      </section>
    );
  }
}

DropDownComponent.defaultProps = { type: "day", size: "md", links: [{url: ''}], };

export const DropDown = Radium(DropDownComponent);