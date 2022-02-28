import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import NewsFeed from './components/NewsFeed';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>My App</h1>
      <Profile ownerName="Rysh" />
      <NewsFeed/ >
    </React.Fragment>
  );
}

export default App;
