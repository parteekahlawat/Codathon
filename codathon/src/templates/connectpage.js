import React from "react";
import RadialChart from "./radialchart";
import EmployeeCard from "./employcard";

function App1() {
  return (
    <div>
      <h1>Hi, Admin</h1>
      <h3 style={{ textAlign: "left" }}>Work Experience</h3>
      <RadialChart />
      <h3 style={{ textAlign: "left", paddingTop: "20px" }}>Employees</h3>
      <EmployeeCard />
    </div>
  );
}

export default App1;
