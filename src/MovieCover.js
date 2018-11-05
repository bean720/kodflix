import React from 'react';

const MovieCover = (props) => {
  return (
    <div className="col">
      <h2 className="Text"> { props.title }</h2>
      <img src={ props.image } className="App-image" alt={ props.title } />
    </div>
  )
}

export default MovieCover;