import React from "react";
import Button from "../library/styledButton";
import { Link } from "react-router-dom";
class MainPage extends React.Component {
  render() {
    const styles = {
      container: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%"
      },
      textContainer: {
        paddingTop: 230,
        marginLeft: 25,
        minWidth: 300
      },
      heading: {
        fontSize: 46,
        fontWeight: "bolder",
        width: 310
      },
      subtitle: {
        padding: 5,
        marginBottom: 26,
        letterSpacing: "0.1em"
      },
      image: {
        maxWidth: "100%",
        position: "relative",
        right: 100
      }
    };

    return (
      <>
        <div style={styles.container} className="home-page-container">
          <div style={styles.textContainer} className="hp-welcome-text">
            <p style={styles.heading}>
              Invest <br /> Commission-Free
            </p>
            <p style={styles.subtitle}>
              Invest in stocks, ETFs, options, and <br />
              cryptocurrencies, all commission-free, right from your phone or
              desktop.
            </p>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
          <img
            alt="example-app"
            style={styles.image}
            src="https://bit.ly/2CYwOUg"
          />
        </div>
      </>
    );
  }
}

export default MainPage;
