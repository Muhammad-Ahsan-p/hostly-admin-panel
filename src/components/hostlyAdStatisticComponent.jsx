import React, { Component } from "react";

import "./styles/statistics.css";
import BarGraph from "./barGraphComponent";

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
      <div>
        Hostly Ad Statistics
        <BarGraph labels={labels} label={label} data={data} />
      </div>
    );
  }
}

export default HostlyAdStatistics;
