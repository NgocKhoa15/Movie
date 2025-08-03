import React from 'react'
import "./index.scss"
function MovieCard({img, name, description}) {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/original${img}`} alt="" />
      <h3>{name}</h3>
      <p>{description.split("-").reverse().join("/")}</p>
    </div>
  );
}

export default MovieCard;