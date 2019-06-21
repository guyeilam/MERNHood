import React, { Component } from "react";
import Button from "../library/styled_button";
import Chart from "../chart/chart_container";

class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      chartData: {}
    };

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
      .then(result => {
        let dataLabels = Object.keys(result.data);
        let dataValues = Object.values(result.data).map(date => {
            return date.close;
          });
        this.setState({
          chartData: {
            labels: dataLabels,
            datasets: [
              {
                label: 'Closing price',
                data: dataValues
              }
            ]
          }
        });
      });
  }

  render() {
    return (
      <div>
        <Button submit={this.fetchQuote}>Fetch MSFT Quote</Button>
        <br />
        <Button submit={this.fetchWeekly}>Fetch MSFT Weekly</Button>
        <br />
        <Button submit={this.fetchMonthly}>Fetch MSFT Monthly</Button>
        <br />
        <Chart data={this.state.chartData}/>
      </div>
    );
  }
}

export default WatchList;