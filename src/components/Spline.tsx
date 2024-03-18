import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import '../components/Spline.css'

type RouteData = {
  routeName: string;
  onTimePerfomance: number[];
};

type SplineProps = {
  routeData1: RouteData;
  routeData2: RouteData;
};

const Spline: React.FC<SplineProps> = ({
  routeData1,
  routeData2,
}: SplineProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
      let chartInstance: Chart<"line"> | null = null
    if (!chartRef.current || !routeData1 || !routeData2) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    if(chartInstance){
        (chartInstance as Chart<'line'>).destroy()
    }

    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];

    const addNoise = (data: number[]) => {
        return data.map((value) => value + Math.random() * 60 -5)
    }

    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: routeData1.routeName,
            data: addNoise(routeData1.onTimePerfomance),
            borderColor: "#425A58",
            tension: 0.8,
            fill: false,
          },
          {
            label: routeData2.routeName,
            data: addNoise(routeData2.onTimePerfomance),
            borderColor: "#C09534",
            tension: 0.8,
            fill: false,
          },
        ],
      },
      options: {
          responsive: true,
          plugins: {
              title: {
                  display: false,
                  text: 'Route Performance'
              },
              legend: {
                  display: true,
                  position: 'top'
              }
          }
      }
    });
    return () => {
        if(chartInstance){
            chartInstance.destroy()
        }
    }
  }, [routeData1, routeData2]);

  return <div className="spline">
     <h3 className='hist-title'>Route Perfomance</h3>
      <canvas ref={chartRef} width="310" height="100"/>
  </div>;
};

export default Spline;
