import React from 'react';
import { start } from 'repl';
import Sidebar from './components/Sidebar';
import Flights from './components/Flights';

import './App.css';

function App() {
  return (
    <div className="App">
  <div className='left' >
    <Sidebar/>
  </div>
  <div className='right'>
    <div className='top'>
      <Flights/>
    </div>
    <div className='middle'></div>
    <div className='bottom'></div>
  </div>
    </div>
  );
}

export default App;
