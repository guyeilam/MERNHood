import React, { useState } from "react";
import Loader from "../library/loaders/div_loader";
import Button from "../library/styled_button";
import styled from "styled-components";
import NavBar from "../nav/navbar_container";

export default function HomePage() {
  // react-hook state
  const [loading, setLoading] = useState(true);

  const Grid = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: 60vw;
    grid-template-rows: 100px 100px 100px;
    grid-column-gap: 30px;
    grid-row-gap: 15px;
  `;

  const styles = {
    column1: {
      gridColumn: "1",
      padding: 10
    },
    column2: {
      gridColumn: "2",
      padding: 10
    }
  };

  let LoadingContent;
  if (loading) {
    LoadingContent = Loader;
  } else {
    LoadingContent = () => {
      return null;
    };
  }

  return (
    <>
      <NavBar />
      <Grid>
        <section style={styles.column1} className="chart-container">
          <p>chart</p>
          <LoadingContent />
        </section>
        <section style={styles.column2} className="watching-container">
          <p>watching</p>
          <LoadingContent />
        </section>
        <section style={styles.column1} className="top-movers-container">
          <p>top movers</p>
          <LoadingContent />
        </section>
        <section style={styles.column1} className="news-container">
          <p>news</p>
          <LoadingContent />
        </section>
        {/* Placeholder button, turns loading animation on / off */}
        <Button submit={() => setLoading(!loading)}>Toggle Loading</Button>
      </Grid>
    </>
  );
}
