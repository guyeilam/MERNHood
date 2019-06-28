import React, { useState } from "react";
import Button from "../library/styled_button";
import Chart from "../chart/chart_container";

const WatchList = (props) => {
  const [data, setData] = useState({});
  const [chartData, setChartData] = useState({});

  const fetchQuote = () => {
    props
      .fetchQuote("MSFT", "compact", "json", "60min")
      .then(result => {
        let dataLabels = Object.keys(result.data);
        let dataValues = Object.values(result.data).map(date => {
            return date.close;
          });
        setChartData({
          labels: dataLabels,
          datasets: [
            {
              label: 'Closing price',
              data: dataValues
            }
          ]
        });
      });
  }

  const fetchWeekly = () => {
    props
      .fetchWeekly("MSFT", "compact", "json", "60min")
      .then(result => {
        let dataLabels = Object.keys(result.data);
        let dataValues = Object.values(result.data).map(date => {
            return date.close;
          });
        setChartData({
          labels: dataLabels,
          datasets: [
            {
              label: 'Closing price',
              data: dataValues
            }
          ]
        });
      });
  }

  const fetchMonthly = () => {
    props
      .fetchMonthly("MSFT", "compact", "json", "60min")
      .then(result => {
        let dataLabels = Object.keys(result.data);
        let dataValues = Object.values(result.data).map(date => {
            return date.close;
          });
        setChartData({
            labels: dataLabels,
            datasets: [
              {
                label: 'Closing price',
                data: dataValues
              }
            ]
        });
      });
  }

  return (
    <div>
      <Button submit={fetchQuote}>Fetch MSFT Quote</Button>
      <br />
      <Button submit={fetchWeekly}>Fetch MSFT Weekly</Button>
      <br />
      <Button submit={fetchMonthly}>Fetch MSFT Monthly</Button>
      <br />
      <Chart data={chartData}/>
    </div>
  );
}

export default WatchList;