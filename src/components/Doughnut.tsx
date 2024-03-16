import React, { useEffect, useRef } from "react";
import "../components/Doughnut.css";
import Chart from "chart.js/auto";

const Doughnut: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chartInstance: Chart<"doughnut"> | null = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (!ctx) return;

      if (chartInstance) {
        (chartInstance as Chart<"doughnut">).destroy();
      }

      chartInstance = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["On Time Delivery", "Late Delivery", "Lost"],
          datasets: [
            {
              label: "Baggage Handling",
              data: [80, 10, 5],
              backgroundColor: ["#3F5756", "#42AC9E", "#BE953C"],
            },
          ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Baggage Handling',
               
              }
            },
        }
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  });
  return (
    <div className="pie">
        {/* <h2>Baggage Handling</h2> */}
      <canvas ref={chartRef} style={{ width: "200px", height: "250px" }} />
    </div>
  );
};

export default Doughnut;
