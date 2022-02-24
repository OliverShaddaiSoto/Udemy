import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button/index'
import CounterManagement from './components/CounterManagement';

interface AppState {
  change: boolean;
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      change: true
    }
  }

  clickButton = () => {
    this.setState({ change: !this.state.change })
  }

  render() {
    return (
      <>
        <h1>My App</h1>
        {this.state.change && <CounterManagement ownerName="Rysh" />}
        <button onClick={this.clickButton}>Change</button>
      </>
    )
  }
}

export default App;

 