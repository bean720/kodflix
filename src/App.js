import React, { Component } from 'react';
import one from './img/one.jpg';
import wire from './img/wire.jpeg';
import avatar from './img/avatar.jpg';
import game from './img/game.jpg';
import monkey from './img/monkey.jpg';
import death from './img/death.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-body">
          <div className="flex-grid">
            <div className="col">
              <h2 className="Text">One piece</h2>
              <img src={one} className="App-image" alt="one" />
            </div>
            <div className="col">
              <h2 className="Text">The Wire</h2>
              <img src={wire} className="App-image" alt="wire" />
            </div>
            <div className="col">
              <h2 className="Text">Avatar</h2>
              <img src={avatar} className="App-image" alt="avatar" />
            </div>
          </div>  
          <div className="flex-grid">
            <div className="col">
              <h2 className="Text">GOT</h2>
              <img src={game} className="App-image" alt="game" />
            </div>
            <div className="col">
              <h2 className="Text">Monkey</h2>
              <img src={monkey} className="App-image" alt="monkey" />
            </div>
            <div className="col">
              <h2 className="Text">Death Note</h2>
              <img src={death} className="App-image" alt="death" />
            </div>
          </div> 
        </header>
      </div>
    );
  }
}

export default App;
