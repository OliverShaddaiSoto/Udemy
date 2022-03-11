import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import { SpecialLink } from './components/SpecialLink/indes';


function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route element={<AboutPage/>} path='/about'></Route>
        <Route element={<HomePage/>} path='/'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
