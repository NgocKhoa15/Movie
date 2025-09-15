import React from 'react'
import "./index.scss"

function CastCard({image, name, subName}) {
  return (
    <div className="cast-card">
      <div className="cast-card__image">
        <img
          src={`https://image.tmdb.org/t/p/original${image}.jpg`}
          alt=""
        />
      </div>

      <div className="cast-card__info">
        <h4 className="cast-card__info--name">{name}</h4>
        <p className="cast-card__info--subName">{subName}</p>
      </div>
    </div>
  );
}

export default CastCard