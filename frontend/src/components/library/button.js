import React from 'react'
import Radium from 'radium'; // module that allows for inline styles

import { Link } from "react-router-dom";
import { BASE, COLORS } from "./styles"
import { bindCallback } from 'rxjs';

// --- optional attributes ----
// type = day | night, string
// shape = square | round, string
// color = someColor, string
// title = text | string
// size = sm | md | lg, string
// weight = thin | normal | bold, string
// submit = function
// disabled = boolean
// --- ------------------- ----

class ButtonComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  getStyles(color) {
    return {
      base: BASE,
      button: {
        color: "white",
        backgroundColor: COLORS[color] || color,
        height: 48,
        paddingLeft: 20,
        paddingRight: 20,
        transition: "box-shadow 300ms",
        ":hover": {
          boxShadow: "0px 4px 8px rgba(0,0,0,0.16)",
        }
      },
      disabled: {
        true: {
          color: `${COLORS["lightGreen"]}`,
          cursor: "default",
          backgroundColor: `${COLORS["xLightGreen"]}`,
          border: `1px solid ${COLORS["green"]}`
        }
      },
      shape: {
        round: {
          borderRadius: 100,
        },
        square: {
          borderRadius: 8,
        },
      },
      size: {
        sm: {
          paddingLeft: 10,
          paddingRight: 10,
          height: 28,
        },
        md: {},
        lg: {
          paddingLeft: 40,
          paddingRight: 40,
          height: 68,
        }
      }
    };
  }


  handleClick(e, submit, disabled){
    if(submit){
      e.preventDefault();
      return submit;
    } else if (disabled) {
      e.preventDefault();
      return;
    }
  }

  render() {
    const { shape, color, title, size, weight, submit, disabled } = this.props;
    const styles = this.getStyles(color);
    return (
      <section className="site-button">
        <button 
        disabled={disabled}
        style={[
          styles.base,
          styles.base.textSize[size],
          styles.base.textWeight[weight],
          styles.button,
          styles.disabled[disabled],
          styles.shape[shape],
          styles.size[size]]}
        onClick={ e => this.handleClick(e, submit, disabled)}>
          {title}
        </button>
      </section>
    )
  }
}

ButtonComponent.defaultProps = { 
  type: "day", shape: "round", color: "green", 
  title: "click me", size: "md", weight: "normal",
  submit: null, disabled: false };

const Button = Radium(ButtonComponent);

export default Button;