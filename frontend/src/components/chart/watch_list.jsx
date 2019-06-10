import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../library/styled_button";
import { fetchQuote } from "../../actions/alphavantage_actions";

import "./watchlist.css";

export default function WatchList(props) {
  const [data, setData] = useState({ data: {} });

  const handleSubmit = () => {
    props
      .fetchQuote("MSFT", "compact", "json", "60min")
      .then(result => setData({ data: result }));
  };

  return (
    <div className="watchlist-container">
      {/* <p>{Object.values(data.data)}</p> */}
      {/* <Button submit={handleSubmit}>Fetch MSFT Quote</Button> */}
      <div className="watchlist-content-header">
        Stocks
      </div>
      <div className="watchlist-content-header-menu">
        ...
      </div>
    </div>
  );
}
