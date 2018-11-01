import React, { Component } from 'react';
import evil from './evil.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-body">
          <img src={evil} className="App-evil" alt="evil" />
        </header>
      </div>
    );
  }
}

export default App;
