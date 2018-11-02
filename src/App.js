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
              <img src={one} className="App-image" alt="one" />
              <h2 className="Text">One piece</h2>
            </div>
            <div className="col">
              <img src={wire} className="App-image" alt="wire" />
              <h2 className="Text">The Wire</h2>
            </div>
            <div className="col">
              <img src={avatar} className="App-image" alt="avatar" />
              <h2 className="Text">Avatar</h2>
            </div>
          </div>  
          <div className="flex-grid">
            <div className="col">
              <img src={game} className="App-image" alt="game" />
              <h2 className="Text">Game of Thrones</h2>
            </div>
            <div className="col">
              <img src={monkey} className="App-image" alt="monkey" />
              <h2 className="Text">Monkey</h2>
            </div>
            <div className="col">
              <img src={death} className="App-image" alt="death" />
              <h2 className="Text">Death Note</h2>
            </div>
          </div> 

          
        </header>
      </div>
    );
  }
}

export default App;
