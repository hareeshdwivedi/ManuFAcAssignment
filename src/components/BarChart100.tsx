import React from "react";
import ReactECharts from "echarts-for-react";
import wineData100 from "../data/wineData100.json";

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

interface StoreMap {
  [key: number]: { sum: number; count: number };
}
let data: DataObj[] = wineData100;

let map: StoreMap = {};

// iterating over the data to find Average Malic Acid for each Alcohol class
for (let index = 0; index < data.length; index++) {
  let alcoholClass = data[index].Alcohol;
  let malicAcid = data[index]["Malic Acid"];

  if (!map[alcoholClass]) {
    map[alcoholClass] = {
      sum: malicAcid,
      count: 1,
    };
  } else {
    map[alcoholClass].sum += malicAcid;
    map[alcoholClass].count++;
  }
}

const dataWithAverage = data.map((item) => {
  return {
    ...item,
    AverageMA: map[item.Alcohol].sum / map[item.Alcohol].count,
  };
});

function BarChart() {
  const barChartOptions = {
    legend: {},
    dataset: {
      dimensions: ["Alcohol", "AverageMA"],
      source: dataWithAverage,
    },
    xAxis: {
      type: "category",
      name: "Alcohol Classes",
      nameLocation: "center",
      nameGap: 25,
    },
    yAxis: {
      type: "value",
      name: "Average Malic Acid",
      nameLocation: "center",
      nameGap: 25,
    },
    series: [
      {
        type: "bar",
      },
    ],
    tooltip: {
      trigger: "cross",
    },
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Bar Chart - 100 samples</h1>
      <ReactECharts option={barChartOptions} />
    </div>
  );
}

export default BarChart;
