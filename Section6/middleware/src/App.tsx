import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { fruitsReducer } from './store/reducer/fruitsReducer';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer/rootReducer';

//The creation of an middleware
const customMiddleware: Middleware = store => next => action => {
  if (typeof action === 'function') {
    next(action(store));
  }else{
    next(action);
  }
}

const store = createStore(rootReducer, {users: ['Oliver', 'Alan'] , fruits: ['Apple', 'Bannana']}, applyMiddleware(customMiddleware) );

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
