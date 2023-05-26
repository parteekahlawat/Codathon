import React from "react";
import RadialChart from "./radialchart";
import EmployeeCard from "./employcard";

function App1() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Hi, Admin</h1>
      <div style={sectionStyle}>
        <h3 style={subHeadingStyle}>Work Experience</h3>
        <RadialChart />
      </div>
      <div style={sectionStyle}>
        <h3 style={subHeadingStyle}>Employees</h3>
        <EmployeeCard />
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "20px",
  textAlign: "center"
};

const headingStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px"
};

const sectionStyle = {
  marginBottom: "40px"
};

const subHeadingStyle = {
  textAlign: "left",
  marginBottom: "10px",
  fontSize: "20px",
  fontWeight: "bold"
};

export default App1;
