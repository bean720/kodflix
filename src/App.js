import React, { Component } from 'react';
import evil from './img/evil.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-body">
        
          <div className="wrap-img">
            <img src={evil} className="App-evil" alt="evil" />
          </div>
          <div className="flex-grid">
            <div className="col">
              <h2 className="Text1">One</h2>
            </div>
            <div className="col">
              <h2 className="Text2">Two</h2>
            </div>
            <div className="col">
              <h2 className="Text3">Three</h2>
            </div>
          </div>  
          <div className="flex-grid">
            <div className="col">
              <h2 className="Text4">Four</h2>
            </div>
            <div className="col">
              <h2 className="Text5">Five</h2>
            </div>
            <div className="col">
              <h2 className="Text6">Six</h2>
            </div>
          </div> 

          
        </header>
      </div>
    );
  }
}

export default App;
