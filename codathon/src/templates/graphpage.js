// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js';
// import 'chartjs-plugin-datalabels';

// function MoodGraphPage() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     // Sample data for demonstration
//     const data = {
//       labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
//       datasets: [
//         {
//           label: 'Mood',
//           data: [5, 4, 6, 7, 8, 5, 6],
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//         },
//       ],
//     };

//     new Chart(ctx, {
//       type: 'line',
//       data: data,
//       options: {
//         responsive: true,
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 beginAtZero: true,
//                 max: 10,
//               },
//             },
//           ],
//         },
//         plugins: {
//           datalabels: {
//             align: 'end',
//             anchor: 'end',
//             display: function (context) {
//               return context.dataset.data[context.dataIndex] > 7; // Display label if data is greater than 7
//             },
//             font: {
//               weight: 'bold',
//             },
//           },
//         },
//       },
//     });
//   }, []);

//   return (
//     <div className="container">
//       <h2>Mood Graph - One Month</h2>
//       <div className="graph-container">
//         <canvas ref={chartRef} />
//       </div>

//       <style jsx>{`
//         .container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           height: 100vh;
//           background-color: #f2f2f2;
//           padding: 20px;
//         }

//         h2 {
//           font-size: 28px;
//           margin-bottom: 20px;
//           color: #333;
//           text-align: center;
//         }

//         .graph-container {
//           width: 80%;
//           max-width: 600px;
//         }
//       `}</style>
//     </div>
//   );
// }

// export { MoodGraphPage };
