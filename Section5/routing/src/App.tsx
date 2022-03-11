import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter ,Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';


function App() {
  return (
    <BrowserRouter basename='/test'>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route element={HomePage} path="/home"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
