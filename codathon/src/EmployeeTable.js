import React from "react";

function EmployeeTable() {
  const employees = [
    {
      name: "John Doe",
      designation: "Manager",
      tenure: "5 years",
      stateOfMind: "Happy"
    },
    {
      name: "Jane Smith",
      designation: "Engineer",
      tenure: "2 years",
      stateOfMind: "Okay"
    },
    {
      name: "Mike Johnson",
      designation: "Developer",
      tenure: "3 years",
      stateOfMind: "Sad"
    }
    // Add more employee objects as needed
  ];

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f2f2f2"
            }}
          >
            Name
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f2f2f2"
            }}
          >
            Designation
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f2f2f2"
            }}
          >
            Tenure
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f2f2f2"
            }}
          >
            State of Mind
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {employee.name}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {employee.designation}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {employee.tenure}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {employee.stateOfMind}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
