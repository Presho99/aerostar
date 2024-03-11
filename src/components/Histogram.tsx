import React, {useEffect, useRef} from 'react'
import Chart from 'chart.js/auto'
import '../components/Histogram.css'

const Histogram: React.FC = () => {
  const chartRef = useRef<Chart>()
  useEffect(() => {
    const data = {
      labels: ['Flight 1', 'Flight 2', 'Flight 3', 'Flight 4', 'Flight 5'],
      datasets: [
        {
          label: 'Economy',
          data: [150, 120, 180, 200, 160],
          backgroundColor: '#eee'
        },
        {
          label: 'Business',
          data: [50, 20, 60, 40, 60],
          backgroundColor: 'blue'
        },
        {
          label: 'First',
          data: [10, 9, 12, 12, 16],
          backgroundColor: 'red'
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