import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button/index'

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Button type='primary'>Primary</Button>
      <Button>Default</Button>
    </div>
  );
}

export default App;
 