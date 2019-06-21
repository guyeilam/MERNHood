import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import styled from "styled-components";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['a', 'b', 'c'],
        datasets: [
          {
            label: 'Some label',
            data: [
              1.1,
              2.9,
              8.7,
              40.1
            ]
          }
        ]
      }
    }
  }

  // componentWillReceiveProps() {
  //   let dataLabels = Object.keys(this.props.data);
  //   let dataValues = Object.values(this.props.data).map(date => {
  //     return date.close;
  //   });
  //   this.setState({
  //     chartData: {
  //       labels: dataLabels,
  //       datasets: [
  //         {
  //           label: 'Closing price',
  //           data: dataValues
  //         }
  //       ]
  //     }
  //   });
  // }

  render() {
    if (!this.props.data) {
      return null;
    }

    return(
      <div className="chart">
        <Line
          data={this.props.data}
        />
      </div>
    );
  }
}

export default Chart;