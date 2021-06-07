import React, { Component } from "react";
import statisticService from "../services/statisticService";
import BarGraph from "./barGraphComponent";

import "./styles/statistics.css";

class HostlyAdStatistics extends Component {
  state = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    label: "Average Ads",
    data: [0, 0, 0, 0, 0, 0, 0],
  };

  async componentDidMount() {
    let { data } = this.state;
    const { data: ads } = await statisticService.getAdStatistics();

    for (const key of Object.keys(ads)) {
      data[key] = ads[key];
    }
    this.setState({ data });
  }

  render() {
    const { label, labels, data } = this.state;
    return (
      <div className="statContainer">
        <h2>{label}</h2>
        <BarGraph labels={labels} label={label} data={data} />
      </div>
    );
  }
}

export default HostlyAdStatistics;
