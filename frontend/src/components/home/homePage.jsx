import React from "react";
import Box from "../library/box";
import Loader from "../library/loaders/div_loader";
import styled from "styled-components";

export default function HomePage() {
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

  return (
    <Grid>
      <section style={styles.column1} className="chart-container">
        <p>chart</p>
        <Loader />
      </section>
      <section style={styles.column2} className="watching-container">
        <p>watching</p>
        <Loader />
      </section>
      <section style={styles.column1} className="top-movers-container">
        <p>top movers</p>
        <Loader />
      </section>
      <section style={styles.column1} className="news-container">
        <p>news</p>
        <Loader />
      </section>
    </Grid>
  );
}
