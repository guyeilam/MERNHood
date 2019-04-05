import React from 'react'
import Radium from 'radium'; // module that allows for inline styles

import { Link } from "react-router-dom";
import { BASE, COLORS } from "./styles"

// --- optional attributes ----
// type = day | night, string
// shape = square | round, string
// color = someColor, string
// title = text | string
// size = sm | md | lg, string
// weight = normal | bold, string
// submit = function
// --- ------------------- ----

class ButtonComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  getStyles(color, size) {
    return {
      base: BASE,
      button: {
        color: "white",
        borderRadius: 100,
        backgroundColor: COLORS[color] || color,
        height: 48,
        paddingLeft: 20,
        paddingRight: 20,
      }
    };
  }


  handleClick(e, submit){
    if(submit){
      e.preventDefault();
      return submit;
    }
  }

  render() {
    const { type, shape, color, title, size, weight, submit } = this.props;
    const styles = this.getStyles(color);
    return (
      <section className="site-button">
        <button 
        style={[styles.base, styles.button]}
        onClick={ e => this.handleClick(e, submit)}>
          {title}
        </button>
      </section>
    )
  }
}

ButtonComponent.defaultProps = { 
  type: "day", shape: "round", color: "green", 
  title: "click me", size: "md", weight: '',
  submit: null, };

const Button = Radium(ButtonComponent);

export default Button;