import React from 'react';
import one from './img/one.jpg';
import punch from './img/punch.jpg';
import avatar from './img/avatar.jpg';
import naruto from './img/naruto.jpg';
import monkey from './img/monkey.jpg';
import death from './img/death.jpg';
import MovieCover from './MovieCover';
import './App.css';

const MovieCovers = (props) => {
 
  return (
   <div> 
    <div className="flex-grid">
      <MovieCover title="One Piece" image={ one }/>
      <MovieCover title="One Punch Man" image={ punch }/>
      <MovieCover title="Avatar" image={ avatar }/>
    </div>
    <div className="flex-grid">
      <MovieCover title="Naruto" image={ naruto }/>
      <MovieCover title="Monkey" image={ monkey }/>
      <MovieCover title="Death Note" image={ death }/>
    </div> 
   </div> 
  )
}

export default MovieCovers;