import React, { useEffect, useRef } from "react";
import "../components/Doughnut.css";
import Chart from "chart.js/auto";

const Doughnut: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chartInstance: Chart<"doughnut"> | null = null

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (!ctx) return;

      if(chartInstance){
        (chartInstance as Chart<"doughnut">).destroy()
      }


      chartInstance = new Chart(ctx, {
          type: 'doughnut',
          data: {
              labels: ['On Time Delivery', 'Delivery', 'Lost'],
              datasets: [{
                  label: 'Baggage Handling',
                  data: [80, 10, 5],
                  backgroundColor: [
                      '#3F5756', '#D9E3E2','#BE953C'
                  ]
              }]
          }

      })
    }

    return () => {
        if(chartInstance){
            chartInstance.destroy()
        }
    }
  });
  return <div>
      <canvas ref={chartRef}/>
  </div>;
};

export default Doughnut;
