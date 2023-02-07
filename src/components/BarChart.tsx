import React from "react";
import ReactECharts from "echarts-for-react";
import wineData from "../data/wineDataSet.json";

interface DataObj {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number | string;
  "Alcalinity of ash": number;
  Magnesium: number | string;
  "Total phenols": number | string;
  Flavanoids: number | string;
  "Nonflavanoid phenols": number | string;
  Proanthocyanins: number | string;
  "Color intensity": number | string;
  Hue: number;
  "OD280/OD315 of diluted wines": number | string;
  Unknown: number;
  [key: string]: any;
}
let data: DataObj[] = wineData;

let totalMalicAcidAlcohol1 = 0;
let totalMalicAcidAlcohol1Length = 0;
let totalMalicAcidAlcohol2 = 0;
let totalMalicAcidAlcohol2Length = 0;
let totalMalicAcidAlcohol3 = 0;
let totalMalicAcidAlcohol3Length = 0;

// iterating over the data to find Average Malic Acid for each Alcohol class
for (let index = 0; index < data.length; index++) {
  if (data[index].Alcohol === 1) {
    totalMalicAcidAlcohol1 = totalMalicAcidAlcohol1 + data[index]["Malic Acid"];
    totalMalicAcidAlcohol1Length++;

    // adding new property to same data objects
    data[index]["Average Malic Acid for Alcohol 1"] =
      totalMalicAcidAlcohol1 / totalMalicAcidAlcohol1Length;
  }
  if (data[index].Alcohol === 2) {
    totalMalicAcidAlcohol2 = totalMalicAcidAlcohol2 + data[index]["Malic Acid"];
    totalMalicAcidAlcohol2Length++;

    data[index]["Average Malic Acid for Alcohol 2"] =
      totalMalicAcidAlcohol2 / totalMalicAcidAlcohol2Length;
  }
  if (data[index].Alcohol === 3) {
    totalMalicAcidAlcohol3 = totalMalicAcidAlcohol3 + data[index]["Malic Acid"];
    totalMalicAcidAlcohol3Length++;

    data[index]["Average Malic Acid for Alcohol 3"] =
      totalMalicAcidAlcohol3 / totalMalicAcidAlcohol3Length;
  }
}

function BarChart() {
  const averageMalicAcidData = [
    totalMalicAcidAlcohol1 / totalMalicAcidAlcohol1Length,
    totalMalicAcidAlcohol2 / totalMalicAcidAlcohol2Length,
    totalMalicAcidAlcohol3 / totalMalicAcidAlcohol3Length,
  ];

  const barChartOptions = {
    xAxis: {
      data: [1, 2, 3],
      name: "Alcohol",
      nameLocation: "center",
      nameGap: 25,
    },
    yAxis: {
      name: "Avg Malic Acid",
      nameLocation: "center",
      nameGap: 25,
    },
    series: [
      {
        type: "bar",
        data: averageMalicAcidData,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Bar Chart</h1>
      <ReactECharts option={barChartOptions} />
    </div>
  );
}

export default BarChart;
