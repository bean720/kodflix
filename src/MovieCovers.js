import React from 'react';
import one from './img/one.jpg';
import punch from './img/punch.jpg';
import avatar from './img/avatar.jpg';
import naruto from './img/naruto.jpg';
import monkey from './img/monkey.jpg';
import death from './img/death.jpg';
import Gallery from './Gallery';
import './App.css';

const MovieCovers = (props) => {
 
  return (
   <div> 
    <div className="flex-grid">
      <Gallery title="One Piece" image={ one }/>
      <Gallery title="One Punch Man" image={ punch }/>
      <Gallery title="Avatar" image={ avatar }/>
    </div>
    <div className="flex-grid">
      <Gallery title="Naruto" image={ naruto }/>
      <Gallery title="Monkey" image={ monkey }/>
      <Gallery title="Death Note" image={ death }/>
    </div> 
   </div> 
  )
}

export default MovieCovers;