import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../library/styled_button";

export default function WatchList(props) {
  //  react-hook reducer
  const [data, setData] = useState({ data: {} });

  const fetchQuote = () => {
    props
      .fetchQuote("MSFT", "compact", "json", "60min")
      .then(result => setData({ data: result }));
  };
  const fetchWeekly = () => {
    props
      .fetchWeekly("MSFT", "compact", "json", "60min")
      .then(result => setData({ data: result }));
  };
  const fetchMonthly = () => {
    props
      .fetchMonthly("MSFT", "compact", "json", "60min")
      .then(result => setData({ data: result }));
  };

  return (
    <div>
      {/* <p>{Object.values(data.data)}</p> */}
      <Button submit={fetchQuote}>Fetch MSFT Quote</Button>
      <br />
      <Button submit={fetchWeekly}>Fetch MSFT Weekly</Button>
      <br />
      <Button submit={fetchMonthly}>Fetch MSFT Monthly</Button>
      <br />
    </div>
  );
}
