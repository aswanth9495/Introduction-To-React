import React, { Component } from 'react';
import './App.css';
import CounterComponent from './CounterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterComponent />
      </div>
    );
  }
}

export default App;
