import React, { useState, useReducer } from "react";
import Loader from "../library/loaders/div_loader";
import Button from "../library/styled_button";
import styled from "styled-components";
import NavBar from "../nav/navbar_container";
import { alphaReducer } from "../../reducers/alpha_reducer";
import { fetchQuote } from "../../actions/alphavnatage_actions";

export default function HomePage() {
  // ///////////////////////////////
  //  This component really needs to be broken out into several
  //  The button state and the useReducer should not coincide as much as they do.
  //  This means breaking out in the near future specifically:
  //  1) whatever component uses the fetch API &
  //  2) Whatever buttons / components modify a slice of state that has
  //  nothing to do with the slice of state that uses reducers
  // ///////////////////////////////

  // react-hook state
  const [localState, setLoading] = useState({ loading: true, data: {} });
  //  react-hook reducer
  const [state, dispatch] = useReducer(alphaReducer, localState);

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
  if (localState.loading) {
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
        <section>
          <p>{String(Object.values(state.data))}</p>
        </section>
        {/* Placeholder button, turns loading animation on / off */}
        <Button submit={() => setLoading({ loading: !localState.loading })}>
          Toggle Loading
        </Button>
        {/* Placeholder button, turns loading animation on / off */}
        <Button
          submit={() =>
            fetchQuote("MSFT", "compact", "json", "60min", dispatch)
          }
        >
          Fetch MSFT Quote
        </Button>
      </Grid>
    </>
  );
}
