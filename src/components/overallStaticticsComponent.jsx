import React, { Component } from "react";

import "./styles/statistics.css";
import BarGraph from "./barGraphComponent";

class OverallStatistics extends Component {
  state = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    label: "Website Traffic",
    data: [100, 230, 210, 400, 50, 1020, 900],
  };

  render() {
    const { label, labels, data } = this.state;
    return (
      <div className="statContainer">
        <h2>Overall Statistics</h2>
        <BarGraph labels={labels} label={label} data={data} />
      </div>
    );
  }
}

export default OverallStatistics;
