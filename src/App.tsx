import React from 'react';
import { start } from 'repl';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <div className="App">
  <div className='left' >
    <Sidebar/>
  </div>
  <div className='right'></div>
    </div>
  );
}

export default App;
