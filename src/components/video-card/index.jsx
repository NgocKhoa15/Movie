import React from 'react'
import "./index.scss"

function VideoCard({key, name}) {
  return (
    <div className='video-card'>
      <img
      className='video-card__image'
        src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`}
        alt=""
      />
      <p className='video-card__name'>{name}</p>
    </div>
  );
}

export default VideoCard