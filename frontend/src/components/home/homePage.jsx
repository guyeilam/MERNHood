import React from "react";
import Box from "../library/box";
import styled from "styled-components";

export default function HomePage() {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 60vw 40vw;
    grid-template-rows: 100px 100px 100px;
    grid-column-gap: 30px;
    grid-row-gap: 15px;
  `;

  const styles = {
    column1: {
      gridColumn: "1"
    },
    column2: {
      gridColumn: "2"
    }
  };

  return (
    <Grid>
      <section style={styles.column1} className="chart-container">
        <p>chart</p>
      </section>
      <section style={styles.column2} className="watching-container">
        <p>watching</p>
      </section>
      <section style={styles.column1} className="top-movers-container">
        <p>top movers</p>
      </section>
      <section style={styles.column1} className="news-container">
        <p>news</p>
      </section>
    </Grid>
  );
}
