import React from "react";
import RadialChart from "./RadialChart";
import EmployeeTable from "./EmployeeTable";

function App1() {
  return (
    <div>
      <h3 style={{ textAlign: "left" }}>Work Experience</h3>
      <RadialChart />
      <h3 style={{ textAlign: "left", paddingTop: "20px" }}>Employees</h3>
      <EmployeeTable />
    </div>
  );
}

export default App1;
