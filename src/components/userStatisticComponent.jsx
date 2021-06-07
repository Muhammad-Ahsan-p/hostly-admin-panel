import React, { Component } from "react";

import "./styles/statistics.css";
import BarGraph from "./barGraphComponent";
import statisticService from "../services/statisticService";

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
      data: [0, 0, 0, 0, 0, 0, 0],
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
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  };

  async componentDidMount() {
    const { registers, logins } = this.state;
    const { data: login } = await statisticService.getLoginStatistics();
    const { data: register } = await statisticService.getRegisterStatistics();

    for (const key of Object.keys(login)) {
      logins.data[key] = login[key];
    }

    for (const key of Object.keys(register)) {
      registers.data[key] = register[key];
    }

    this.setState({ registers, logins });
  }

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
