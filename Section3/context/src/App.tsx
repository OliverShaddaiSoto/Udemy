import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { MyContext, MyContextProvider } from './context/MyContext';

function App() {
  return (
      <MyContextProvider>
        <HomePage />
      </MyContextProvider>
  );
}

export default App;
