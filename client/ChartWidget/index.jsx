import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import moment from "moment";
import style from "./style.less";

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: [],
      chartDataThisYear: [],
      showCumulitive: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.countCumulitive = this.countCumulitive.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:8000/series";
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState((state) => {
          return { state, chartData: data };
        })
      )
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  countCumulitive() {
    let thisYear = moment().format("YYYY");
    let thisYearData = this.state.chartData.filter((item) =>
      item.date.includes(thisYear)
    );
    let cumulitive = thisYearData
      .map((obj) => obj.value)
      .reduce((acc, cur) => acc + cur);
    thisYearData.push({
      date: thisYear,
      value: cumulitive,
    });

    this.setState((state) => {
      return {
        state,
        chartDataThisYear: thisYearData,
      };
    });
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        prevState,
        showCumulitive: !prevState.showCumulitive,
      };
    });

    if (!this.state.chartDataThisYear.length) {
      this.countCumulitive();
    }
  }

  render() {
    return (
      <div className={style.container}>
        <button className={style.btn} onClick={this.handleToggle}>
          {this.state.showCumulitive ? 'Show values per month' : 'Show cumulitive'}
        </button>
        <h3 className={style.title}>
          {this.state.showCumulitive
            ? "Cumulative value for this year"
            : "Values per month 2019 - 2020"
            }
        </h3>
          <LineChart
          width={800}
          height={400}
          data={
            this.state.showCumulitive
              ? this.state.chartDataThisYear
              : this.state.chartData
          }
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="linear" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}

export default Chart;
