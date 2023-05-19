import React from "react";
import { Link } from "react-router-dom";
// import { Line } from "react-chartjs-2";
// import LineGraph from "./LineGraph";

function EmployeeCard({ employee, lineGraphUrl }) {
  const cardStyle = {
    width: "200px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  };

  const nameStyle = {
    margin: "5px 0",
    fontSize: "16px",
    fontWeight: "bold"
  };

  const designationStyle = {
    fontSize: "14px",
    color: "#666"
  };

  return (
    <Link to="/linegraph">
      <div style={cardStyle}>
        {/* <a href={lineGraphUrl}> */}

        <img
          src={employee.photo}
          alt={employee.name}
          style={{ width: "100%" }}
        />
        {/* </a> */}
        <h2 style={nameStyle}>{employee.name}</h2>
        <p style={designationStyle}>{employee.designation}</p>
        <p>Tenure: {employee.tenure}</p>
        <p>State of Mind: {employee.stateOfMind}</p>
      </div>
    </Link>
  );
}

function EmployeeTable() {
  const employees = [
    {
      name: "John Doe",
      designation: "Manager",
      tenure: "5 years",
      stateOfMind: "Happy",
      photo:
        "https://th.bing.com/th/id/OIP.MUmC68GZwocme21JbL8teAHaJ3?pid=ImgDet&w=901&h=1200&rs=1"
    },
    {
      name: "Jane Smith",
      designation: "Engineer",
      tenure: "2 years",
      stateOfMind: "Okay",
      photo:
        "https://th.bing.com/th/id/OIP.MUmC68GZwocme21JbL8teAHaJ3?pid=ImgDet&w=901&h=1200&rs=1"
    },
    {
      name: "Mike Johnson",
      designation: "Developer",
      tenure: "3 years",
      stateOfMind: "Sad",
      photo:
        "https://th.bing.com/th/id/OIP.MUmC68GZwocme21JbL8teAHaJ3?pid=ImgDet&w=901&h=1200&rs=1"
    },
    {
      name: "Mike Johnson",
      designation: "Developer",
      tenure: "3 years",
      stateOfMind: "Sad",
      photo:
        "https://th.bing.com/th/id/OIP.MUmC68GZwocme21JbL8teAHaJ3?pid=ImgDet&w=901&h=1200&rs=1"
    }

    // Add more employee objects as needed
  ];

  // const lineGraphUrl = "/line-graph"; // URL of the LineGraph page

  return (
    <div>
      {/* <LineGraph /> */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            employee={employee}
            // lineGraphUrl={lineGraphUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeTable;
