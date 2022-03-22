import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { fruitsReducer } from './reducer/fruitsReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducer/rootReducer';

const store = createStore(rootReducer, {users: ['Oliver', 'Alan'] , fruits: ['Apple', 'Bannana'] });

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
