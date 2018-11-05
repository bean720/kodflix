import React from 'react';
import one from './img/one.jpg';
import wire from './img/wire.jpeg';
import avatar from './img/avatar.jpg';
import game from './img/game.jpg';
import monkey from './img/monkey.jpg';
import death from './img/death.jpg';
import MovieCover from './MovieCover';
import './App.css';

const MovieCovers = (props) => {
 
  return (
   <div> 
    <div className="flex-grid">
      <MovieCover title="One Piece" image={ one }/>
      <MovieCover title="The Wire" image={ wire }/>
      <MovieCover title="Avatar" image={ avatar }/>
    </div>
    <div className="flex-grid">
      <MovieCover title="GOT" image={ game }/>
      <MovieCover title="Monkey" image={ monkey }/>
      <MovieCover title="Death Note" image={ death }/>
    </div> 
   </div> 
  )
}

export default MovieCovers;