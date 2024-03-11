import React, {useEffect, useRef} from 'react'
import Chart from 'chart.js/auto'
import '../components/Histogram.css'

const Histogram: React.FC = () => {
  const chartRef = useRef<Chart>()
  useEffect(() => {
    const data = {
      labels: ['F1', 'F2', 'F3', 'F4', 'F5'],
      datasets: [
        {
          label: 'Economy',
          data: [110, 80, 150, 130, 113],
          backgroundColor: '#3F5756'
        },
        {
          label: 'Business',
          data: [60, 40, 60, 50, 50],
          backgroundColor: '#D9E3E2'
          
        },
        {
          label: 'First',
          data: [30, 19, 12, 22, 20],
          backgroundColor: '#BE953C'
         
        },
      ]
    }

    const options= {
      plugins: {
        title: {
          display: true,
          text: 'Seat Availability by Cabin Class',
        },
      },
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: 'Flights'
          },
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'No. of Available Seats',
          },
        },
      },
    }

    const ctx = document.getElementById('stackedBarChart') as HTMLCanvasElement
    if (ctx) {
      if(chartRef.current){
        chartRef.current.destroy()
      }
     chartRef.current = new Chart (ctx, {
        type: 'bar',
        data: data,
        options: options,
      })
    }
  }, [])
  return (
    <div className='histogram'>
      <canvas id="stackedBarChart" width="300" height="230" ></canvas>
    </div>
  )
}

export default Histogram