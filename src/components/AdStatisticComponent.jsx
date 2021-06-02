import React, { Component } from "react";
import BarGraph from "./barGraphComponent";

import "./styles/statistics.css";

class HostlyAdStatistics extends Component {
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
    label: "Average Ads",
    data: [1000, 5200, 520, 5400, 550, 4028, 9073],
  };

  render() {
    const { label, labels, data } = this.state;
    return (
      <div className="statContainer">
        <h2>Ad Statistics</h2>
        <BarGraph labels={labels} label={label} data={data} />
      </div>
    );
  }
}

export default HostlyAdStatistics;
