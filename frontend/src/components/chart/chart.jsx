import React, { useReducer } from "react";
// import styled from "styled-components";
import { alphaReducer } from "../../reducers/alpha_reducer";
import Button from "../library/styled_button";
import { fetchQuote } from "../../actions/alphavnatage_actions";

export default function Chart() {
  //  react-hook reducer
  const [state, dispatch] = useReducer(alphaReducer, { data: {} });

  return (
    <div>
      <p>{state.data}</p>
      <Button
        submit={() => fetchQuote("MSFT", "compact", "json", "60min", dispatch)}
      >
        Fetch MSFT Quote
      </Button>
    </div>
  );
}
