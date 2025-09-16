import React from 'react'
import "./index.scss";
import { MdPauseCircleOutline } from "react-icons/md";

function VideoCard({img, name, url}) {
  return (
    <a href={url} target='_blank'>
      <div className="video-card">
        <div className="video-card__thumbnail">
          <img className="video-card__thumbnail--image" src={img} alt="" />
          <span className="video-card__thumbnail--icon">
            <MdPauseCircleOutline />
          </span>
        </div>
        <p className="video-card__name">{name}</p>
      </div>
    </a>
  );
}

export default VideoCard