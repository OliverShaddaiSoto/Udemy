import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button/index'
import CounterManagement from './components/CounterManagement';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <CounterManagement ownerName='Oliver'/>
    </div>
  );
}

export default App;
 