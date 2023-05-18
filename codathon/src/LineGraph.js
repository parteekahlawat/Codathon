import React from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph() {
  const data = {
    labels: [
      'Happy',
      'Sad',
      'Disgusted',
      'Okay',
      'Surprised',
      'Angry',
      'Fearful',
    ],
    datasets: [
      {
        label: 'Data Set 1',
        data: [
          { x: 1, y: 'Surprised' },
          { x: 2, y:'Sad' },
          { x: 3, y: 'Happy' },
          { x: 4, y: 'Disgusted' },
          { x: 5, y: 'fearful' },
          { x: 6, y: 'angry' },
          { x: 7, y: 'Okay' },
        ],
        fill: false,
        borderColor: [
          'lightgrey',
          'blue',
          'green',
          'orange',
          'purple',
          'red',
          'yellow',
          'black',
        ],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        min: 1,
        max: 7,
      },
      y: {
        type: 'category',
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineGraph;
