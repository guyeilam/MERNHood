import React from 'react'
import Radium from 'radium'; // module that allows for inline styles
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LogoComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  getStyles() {
    const status = {
      day: "#21ce99",
      night: "black",
      hover: "lightGray"
    };

    return {
      base: {
        position: "relative",
        width: "10%",
        height: 100,
        padding: "5px",
        borderRadius: "3px",
        color: "black",
        textAlign: "center",
        day: {
          ':hover':{
            color: 'black',
          },
          color: status.day,
        },
        night: {
          ':hover': {
            color: 'black',
          },
          color: status.day
        },
        sm:{
          fontSize: "smaller"
        },
        md:{
          fontSize: "medium"
        },
        lg:{
          fontSize: "larger"
        },
      },
    };
  }

  render() {
    const styles = this.getStyles();
    const { type, title, size } = this.props;
    return (
      <Link to="/">
        <text style={[styles.base, styles.base[type], styles.base[size]]}>
          <FontAwesomeIcon icon="feather-alt" />
          {title}
        </text>
      </Link>
    );
  }
}

LogoComponent.defaultProps = { type: "day", size:  "md" };

export const Logo = Radium(LogoComponent);