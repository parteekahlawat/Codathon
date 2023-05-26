import React from "react";
import { Doughnut } from "react-chartjs-2";

function RadialChart() {
  const onRender = (chart) => {
    const ctx = chart.ctx;

    // Set font properties
    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Get the center coordinates of the cutout area
    const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
    const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

    // Write the information inside the cutout area
    ctx.fillText("No: of Employees: 60", centerX, centerY);
  };

  const data = {
    labels: ["Experienced", "Newly Hired"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#FF6374", "#36A2EB"]
      }
    ]
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: false // Disable the tooltip
      }
    }
  };

  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        margin: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Doughnut
        data={data}
        options={options}
        plugins={[{ afterDraw: onRender }]}
      />
    </div>
  );
}

export default RadialChart;
