import React, { Component } from "react";
// import styled from "styled-components";
import Button from "../library/styled_button";

class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
    this.fetchQuote = this.fetchQuote.bind(this);
    this.fetchWeekly = this.fetchWeekly.bind(this);
    this.fetchMonthly = this.fetchMonthly.bind(this);
  }

  fetchQuote() {
    this.props
      .fetchQuote("MSFT", "compact", "json", "60min")
      .then(result => this.setState({ data: result }));
  }

  fetchWeekly() {
    this.props
      .fetchWeekly("MSFT", "compact", "json", "60min")
      .then(result => this.setState({ data: result }));
  }

  fetchMonthly() {
    this.props
      .fetchMonthly("MSFT", "compact", "json", "60min")
      .then(result => this.setState({ data: result }));
  }

  render() {
    debugger
    return (
      <div>
        <Button submit={this.fetchQuote}>Fetch MSFT Quote</Button>
        <br />
        <Button submit={this.fetchWeekly}>Fetch MSFT Weekly</Button>
        <br />
        <Button submit={this.fetchMonthly}>Fetch MSFT Monthly</Button>
        <br />
      </div>
    );
  }
}

export default WatchList;