import React, { Component } from "react";

import { Bar } from "react-chartjs-2";

class BarGraph extends Component {
  render() {
    const chartData = {
      labels: this.props.labels,
      datasets: [
        {
          label: this.props.label,
          data: this.props.data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    };

    return (
      <div className="chart">
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: "",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
    );
  }
}

export default BarGraph;
