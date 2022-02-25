import React from 'react';
import './App.css';
import UsersManagement from './Components/UsersManagement'

class App extends React.Component {
  render (){
    return(
    <div className='App'>
      <h1>User Management</h1>
      <UsersManagement ></UsersManagement>
      
    </div>
    )
  }
}

export default App;
