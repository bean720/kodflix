import React, { Component } from 'react';
import one from './img/one.jpg';
import wire from './img/wire.jpg';
import avatar from './img/avatar.jpg';
import game from './img/game.jpeg';
import monkey from './img/monkey.jpg';
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
              <div className="wrap-img">
                <img src={one} className="App-one" alt="one" />
              </div>
              <h2 className="Text">One piece</h2>
            </div>
            <div className="col">
              <div className="wrap-img">
                <img src={wire} className="App-wire" alt="wire" />
              </div>
              <h2 className="Text">The Wire</h2>
            </div>
            <div className="col">
              <div className="wrap-img">
                <img src={avatar} className="App-avatar" alt="avatar" />
              </div>
              <h2 className="Text">Avatar</h2>
            </div>
          </div>  
          <div className="flex-grid">
            <div className="col">
              <div className="wrap-img">
                <img src={game} className="App-game" alt="game" />
              </div>
              <h2 className="Text">Game of Thrones</h2>
            </div>
            <div className="col">
              <div className="wrap-img">
                <img src={monkey} className="App-monkey" alt="monkey" />
              </div>
              <h2 className="Text">Monkey</h2>
            </div>
            <div className="col">
              <div className="wrap-img">
                <img src={evil} className="App-evil" alt="evil" />
              </div>
              <h2 className="Text">See No Evil</h2>
            </div>
          </div> 

          
        </header>
      </div>
    );
  }
}

export default App;
