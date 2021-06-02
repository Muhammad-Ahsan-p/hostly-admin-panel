import React, { Component } from "react";

import "./styles/statistics.css";
import BarGraph from "./barGraphComponent";

class UserStatistics extends Component {
  state = {
    registers: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      label: "Average Registers",
      data: [1000, 5200, 520, 5400, 550, 4028, 9073],
    },
    logins: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      label: "Average Logins",
      data: [1000, 5200, 520, 4028, 9073, 5400, 550],
    },
  };

  render() {
    const { registers, logins } = this.state;
    return (
      <div className="statContainer">
        <h2>User Statistics</h2>
        <BarGraph
          labels={registers.labels}
          label={registers.label}
          data={registers.data}
        />
        <BarGraph
          labels={logins.labels}
          label={logins.label}
          data={logins.data}
        />
      </div>
    );
  }
}

export default UserStatistics;
