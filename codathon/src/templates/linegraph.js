import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function LineGraph() {
  const data = {
    labels: [
      "Happy",
      "Sad",
      "Disgusted",
      "Okay",
      "Surprised",
      "Angry",
      "Fearful"
    ],
    datasets: [
      {
        label: "Data Set 1",
        data: [
          { x: 1, y: "Surprised", info: "5" },
          { x: 2, y: "Okay", info: "4" },
          { x: 3, y: "Fearful", info: "9" },
          { x: 4, y: "Happy", info: "2" },
          { x: 5, y: "Angry", info: "6" },
          { x: 6, y: "Disgusted", info: "1" },
          { x: 7, y: "Sad", info: "8" }
        ],
        fill: false,
        borderColor: [
          "lightgrey",
          "blue",
          "green",
          "orange",
          "purple",
          "red",
          "yellow",
          "black"
        ]
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        min: 1,
        max: 7
      },
      y: {
        type: "category"
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: () => "", // Hide the default title
          label: (context) => {
            const label = context.chart.data.labels[context.dataIndex];
            const value = context.parsed.y;
            const info =
              context.chart.data.datasets[context.datasetIndex].data[
                context.dataIndex
              ].info;
            return `Level - ${info}`;
          }
        }
      }
    }
  };

  const employee = {
    name: "John Doe",
    designation: "Manager",
    imageSrc:
      "https://th.bing.com/th/id/OIP.MUmC68GZwocme21JbL8teAHaJ3?pid=ImgDet&w=901&h=1200&rs=1"
  };
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>{employee.name}</h2>
        <img
          src={employee.imageSrc}
          alt={employee.name}
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <p>{employee.designation}</p>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineGraph;