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
    <Link replace to='/home'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/profile'>Profile</Link>
      <Routes>
        <Route element={<AboutPage/>} path='/about'></Route>
        <Route element={<HomePage/>} path='/home'></Route>
        <Route element={<ProfilePage/>} path='/profile'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
