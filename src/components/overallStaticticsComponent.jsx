import React, { Component } from "react";

import "./styles/statistics.css";
import BarGraph from "./barGraphComponent";
import statisticService from "../services/statisticService";

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
    data: [0, 0, 0, 0, 0, 0, 0],
  };

  async componentDidMount() {
    const { data } = this.state;
    const { data: login } = await statisticService.getLoginStatistics();
    const { data: register } = await statisticService.getRegisterStatistics();

    const { data: ads } = await statisticService.getAdStatistics();

    for (const key of Object.keys(ads)) {
      data[key] += ads[key];
    }

    for (const key of Object.keys(login)) {
      data[key] = login[key];
    }

    for (const key of Object.keys(register)) {
      data[key] = register[key];
    }

    this.setState({ data });
  }

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
