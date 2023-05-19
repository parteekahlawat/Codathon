import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

function MoodGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Sample data for one week
    const data = {
      labels: [
        '2023-05-01', '2023-05-02', '2023-05-03', '2023-05-04', '2023-05-05', '2023-05-06', '2023-05-07'
      ],
      datasets: [
        {
          label: 'Mood',
          data: [5, 4, 6, 7, 8, 5, 6],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
            title: {
              display: true,
              text: 'Days of the Week',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Mood',
            },
            beginAtZero: true,
            max: 10,
          },
        },
      },
    });
  }, []);

  return (
    <div className="container">
      <h2>Mood Graph - One Week</h2>
      <div className="graph-container">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default MoodGraph;
