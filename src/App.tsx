import React, {Suspense, lazy} from 'react';
import { start } from 'repl';
import Sidebar from './components/Sidebar';
import Flights from './components/Flights';
// import Histogram from './components/Histogram';
import Receipts from './components/Receipts';
// import Doughnut from './components/Doughnut';

import './App.css';
const LazyHistogram = lazy(() => import('./components/Histogram'))

const LazyDoughnut = lazy(() => import('./components/Doughnut'))
const LazySpline = lazy(() => import('./components/Spline'))


function App() {
  const routeData1 = {routeName: 'Route1', onTimePerfomance: [90, 85, 80, 75, 70, 65, 60]}
  const routeData2={routeName: 'Route2', onTimePerfomance:[85, 80,75,70,65,60,55]}
  return (
    <div className="App">
  <div className='left' >
    <Sidebar/>
  </div>
  <div className='right'>
    <div className='top'>
      <Flights/>
    </div>
    <div className='middle'>
      <div className='middle-left'>
        <Receipts/>
      </div>
      <div className='middle-right'>
      <Suspense fallback={<div>Loading...</div>}>
          <LazyHistogram/>
        </Suspense>
      </div>
    </div>
    <div className='bottom'>
      <div className='bottom-left'>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyDoughnut/>
        </Suspense>
        {/* <Doughnut/> */}
      </div>
      <div className='bottom-right'>
        <Suspense fallback={<div>Loading...</div>}>
          <LazySpline routeData1={routeData1} routeData2={routeData2}/>
        </Suspense>
        
      </div>
      
    </div>
  </div>
    </div>
  );
}

export default App;
