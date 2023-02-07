import React from "react";
import ReactECharts from "echarts-for-react";
import data from "../data/wineDataSet.json";

function ScatterChart() {
  const scatterChartOptions = {
    dataset: {
      source: data,
      dimensions: ["Color intensity", "Hue"], // dimensions for x-axis & y-axis respectively
    },
    xAxis: {
      type: "value",
      name: "Color Intensity",
      nameLocation: "center",
      nameGap: 25,
    },
    yAxis: {
      type: "value",
      name: "Hue",
      nameLocation: "center",
      nameGap: 25,
    },
    series: [
      {
        type: "scatter", // plotted chart type
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    animationDuration: 2000,
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Scatter Chart</h1>
      <ReactECharts option={scatterChartOptions} />
    </div>
  );
}

export default ScatterChart;
