import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { fruitsReducer } from './reducer/fruitsReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(fruitsReducer, ['apple', 'avocado'])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<HomePage/>} path ='/'/>
            <Route element={<AboutPage/>} path='/about'/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
