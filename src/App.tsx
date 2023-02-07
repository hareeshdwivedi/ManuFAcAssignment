import React from "react";
import BarChart from "./components/BarChart";
import BarChart100 from "./components/BarChart100";
import ScatterChart from "./components/ScatterChart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScatterChart />
      <BarChart />
      <BarChart100 />
    </div>
  );
}

export default App;
