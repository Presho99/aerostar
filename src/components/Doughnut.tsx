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
                display: false,
                text: 'Baggage Handling',
                
                font: {
                  size: 19
                }
               
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
        <h3 className="dough-title">Baggage Handling</h3>
      <canvas ref={chartRef} style={{ width: "200px", height: "233px" }} ></canvas>
    </div>
  );
};

export default Doughnut;
