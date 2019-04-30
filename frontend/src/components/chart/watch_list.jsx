import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../library/styled_button";
import { fetchQuote } from "../../actions/alphavnatage_actions";

export default function WatchList(props) {
  //  react-hook reducer
  const [data, setData] = useState({ data: {} });

  const handleSumit = () => {
    props
      .fetchQuote("MSFT", "compact", "json", "60min")
      .then(result => setData({ data: result }));
  };

  return (
    <div>
      {/* <p>{Object.values(data.data)}</p> */}
      <Button submit={handleSumit}>Fetch MSFT Quote</Button>
    </div>
  );
}
