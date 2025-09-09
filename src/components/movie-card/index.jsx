import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom';

function MovieCard({id, img, name, description}) {
  return (
    <Link to={`/movie-detail/${id}`} className="movie-card">
      <img
        src={
          img
            ? `https://image.tmdb.org/t/p/original${img}`
            : "https://movie-eta-sage.vercel.app/assets/no-poster-af8294eb.png"
        }
        alt=""
      />
      <h3>{name}</h3>
      <p>{description}</p>
    </Link>
    // .split("-").reverse().join("/")
  );
}

export default MovieCard;