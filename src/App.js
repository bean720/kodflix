import React, { Component } from 'react';
import MovieCovers from './MovieCovers';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/details" exact render={
              () => {
                return ( <h1>Hello, this will be the details page for each Movie & TV show :)</h1>);
              }
            }/>
          {/* <Route path="/details" exact component={Gallery}/> */}
          <MovieCovers/>
        </div>
      </Router>
        );
      }
    }
    
export default App;
