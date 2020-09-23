import React, { Component } from "react";
import moment from "moment";
import style from "./style.less";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

class Indicator extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: [],
    };
  }
  componentDidMount() {
    const currMonth = moment().format("YYYY-MM");
    let url = `http://localhost:8000/series?from=${currMonth}&to=${currMonth}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataSet: data,
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div className={style.container}>
        <h3 className={style.title}>Values for the current month </h3>
        <BarChart
          width={300}
          height={300}
          data={this.state.dataSet}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

export default Indicator;
